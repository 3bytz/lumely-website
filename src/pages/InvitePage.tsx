import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import LogoFlame from '../assets/images/logo/logoFlame.png';

const API_URL = 'https://webapi.lumely.io';

interface InvitationData {
  invitationCode: string;
  communityId: string;
  communityName: string;
  communityDescription?: string;
  inviterName: string;
  inviterAvatar?: string;
  customMessage?: string;
  expiresAt: string;
}

type PageStatus = 'loading' | 'valid' | 'invalid' | 'expired';

function Spinner() {
  return (
    <svg className="animate-spin w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
    </svg>
  );
}

export default function InvitePage() {
  const { code } = useParams<{ code: string }>();
  const [status, setStatus] = useState<PageStatus>('loading');
  const [invitation, setInvitation] = useState<InvitationData | null>(null);
  const [deepLinkAttempted, setDeepLinkAttempted] = useState(false);

  const appDeepLink = code ? `lumely://invite/${code}` : 'lumely://';
  const appSignupLink = code ? `lumely://invite/${code}` : 'lumely://';

  useEffect(() => {
    if (!code) {
      setStatus('invalid');
      return;
    }

    const validate = async () => {
      try {
        const res = await fetch(`${API_URL}/invitation/validate/${code}`);
        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          if (res.status === 400 && body?.message?.toLowerCase().includes('expired')) {
            setStatus('expired');
          } else {
            setStatus('invalid');
          }
          return;
        }
        const json = await res.json();
        setInvitation(json.data);
        setStatus('valid');
      } catch {
        setStatus('invalid');
      }
    };

    validate();
  }, [code]);

  useEffect(() => {
    if (status === 'valid' && !deepLinkAttempted) {
      setDeepLinkAttempted(true);
      window.location.href = appDeepLink;
    }
  }, [status, deepLinkAttempted, appDeepLink]);

  const handleOpenApp = () => {
    window.location.href = appDeepLink;
  };

  const handleSignUp = () => {
    window.location.href = appSignupLink;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex flex-col">
      <nav className="w-full px-6 py-4 flex items-center justify-between max-w-5xl mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <img src={LogoFlame} alt="Lumely" className="w-8 h-8 object-contain" />
          <span className="font-bold text-gray-900 text-lg">Lumely</span>
        </Link>
      </nav>

      <main className="flex-1 flex items-center justify-center px-4 pb-16">
        <div className="w-full max-w-md">

          {status === 'loading' && (
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10 text-center">
              <div className="flex justify-center mb-6"><Spinner /></div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Loading your invitation…</h2>
              <p className="text-gray-500 text-sm">Please wait a moment.</p>
            </div>
          )}

          {status === 'valid' && invitation && (
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-center">
                <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🎉</span>
                </div>
                <h2 className="text-2xl font-black text-white mb-1">You're Invited!</h2>
                <p className="text-white/80 text-sm">
                  {invitation.inviterName} has invited you to join a community on Lumely
                </p>
              </div>

              <div className="p-8">
                <div className="mb-6">
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Community</p>
                  <p className="text-2xl font-black text-gray-900">{invitation.communityName}</p>
                  {invitation.communityDescription && (
                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">{invitation.communityDescription}</p>
                  )}
                </div>

                {invitation.customMessage && (
                  <div className="bg-indigo-50 border-l-4 border-indigo-400 rounded-xl p-4 mb-6">
                    <p className="text-sm text-indigo-700 italic">"{invitation.customMessage}"</p>
                    <p className="text-xs text-indigo-500 mt-1">— {invitation.inviterName}</p>
                  </div>
                )}

                <div className="mb-6 text-xs text-gray-400 text-center">
                  Invitation expires: {new Date(invitation.expiresAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>

                <button
                  onClick={handleOpenApp}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-base mb-3 hover:opacity-90 transition"
                >
                  Open in Lumely App →
                </button>

                <button
                  onClick={handleSignUp}
                  className="w-full py-4 rounded-2xl bg-gray-900 text-white font-bold text-base mb-4 hover:bg-gray-800 transition"
                >
                  New to Lumely? Sign Up & Join
                </button>

                <p className="text-center text-xs text-gray-400">
                  Don't have the app?{' '}
                  <a
                    href="https://lumely.io"
                    className="text-indigo-500 hover:underline"
                  >
                    Download Lumely
                  </a>{' '}
                  and your invitation will be waiting.
                </p>
              </div>
            </div>
          )}

          {status === 'expired' && (
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10 text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">⏰</span>
              </div>
              <h2 className="text-2xl font-black text-gray-900 mb-3">Invitation Expired</h2>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                This invitation link is no longer valid. Community invitations expire after 7 days.
                Please ask the community leader to send you a new invitation.
              </p>
              <Link to="/" className="inline-block py-3 px-8 rounded-xl bg-gray-900 text-white font-semibold text-sm hover:bg-gray-800 transition">
                Go to Lumely
              </Link>
            </div>
          )}

          {status === 'invalid' && (
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10 text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">❌</span>
              </div>
              <h2 className="text-2xl font-black text-gray-900 mb-3">Invalid Invitation</h2>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                This invitation link is invalid or has already been used.
                Please ask the community leader for a new invitation.
              </p>
              <Link to="/" className="inline-block py-3 px-8 rounded-xl bg-gray-900 text-white font-semibold text-sm hover:bg-gray-800 transition">
                Go to Lumely
              </Link>
            </div>
          )}

        </div>
      </main>

      <footer className="text-center py-6 text-xs text-gray-400 border-t border-gray-100">
        © {new Date().getFullYear()} Lumely &nbsp;·&nbsp;
        <Link to="/privacy" className="hover:text-gray-600 transition">Privacy</Link>
        &nbsp;·&nbsp;
        <Link to="/terms" className="hover:text-gray-600 transition">Terms</Link>
      </footer>
    </div>
  );
}