import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoFlame from "../assets/images/logo/logoFlame.png";


interface NormalisedUser {
  _id: string;
  name: string;
  email: string;
}

interface SubscriptionStatus {
  hasActiveSubscription: boolean;
  subscription: {
    status: string;
    endDate?: string;
    platform?: string;
  } | null;
}

interface PaystackInitResponse {
  amount: number;
  paymentType: string;
  paystackResponse: {
    access_code: string;
    authorization_url: string;
    reference: string;
  };
}



const API_URL = "https://webapi.lumely.io";



function normaliseLoginResponse(data: Record<string, any>): {
  token: string;
  user: NormalisedUser;
} | null {
  const token: string =
    data.accessToken ||
    data.access_token ||
    data.token ||
    data.jwt ||
    data.data?.accessToken ||
    data.data?.token ||
    "";

  if (!token) return null;

  const raw = data.user ?? data.data?.user ?? data;
  const user: NormalisedUser = {
    _id: raw._id || raw.id || "",
    name:
      raw.name ||
      raw.fullName ||
      raw.full_name ||
      raw.username ||
      raw.email ||
      "",
    email: raw.email || "",
  };

  return { token, user };
}



function LoadingSpinner({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sz =
    size === "sm" ? "w-5 h-5" : size === "lg" ? "w-10 h-10" : "w-7 h-7";
  return (
    <svg
      className={`animate-spin text-blue-600 ${sz}`}
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v8H4z"
      />
    </svg>
  );
}

function ButtonSpinner() {
  return (
    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v8H4z"
      />
    </svg>
  );
}



function LoginStep({
  onSuccess,
}: {
  onSuccess: (token: string, user: NormalisedUser) => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setError(null);
      setLoading(true);

      try {
        const res = await fetch(`${API_URL}/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email.trim(), password }),
        });

        const data = await res.json();

        if (!res.ok) {
          const msg =
            data?.message ||
            data?.error ||
            "Invalid email or password. Please try again.";
          setError(Array.isArray(msg) ? msg[0] : msg);
          return;
        }

        const normalised = normaliseLoginResponse(data);
        if (!normalised) {
          console.error("Unexpected login response shape:", data);
          setError(
            "Login failed: unexpected response from server. Please try again.",
          );
          return;
        }

        onSuccess(normalised.token, normalised.user);
      } catch {
        setError("Network error. Please check your connection and try again.");
      } finally {
        setLoading(false);
      }
    },
    [email, password, onSuccess],
  );

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 mb-4">
          <img
            src={LogoFlame}
            alt="Lumely"
            className="w-10 h-10 object-contain"
          />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Sign in to Lumely</h1>
        <p className="text-gray-500 mt-2 text-sm">
          Use your app credentials to access the upgrade page
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
        {error && (
          <div className="mb-5 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-2">
            <span className="mt-0.5 shrink-0">⚠️</span>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm"
              disabled={loading}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm"
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            disabled={loading || !email || !password}
            className="w-full py-3.5 px-6 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <ButtonSpinner />
                Signing in…
              </>
            ) : (
              "Continue to Plans"
            )}
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-6">
          Don't have an account?{" "}
          <a
            href="https://lumely.io"
            className="text-blue-600 hover:underline font-medium"
          >
            Download the app
          </a>
        </p>
      </div>
    </div>
  );
}


function PlanStep({ token, user }: { token: string; user: NormalisedUser }) {
  const [subStatus, setSubStatus] = useState<SubscriptionStatus | null>(null);
  const [subLoading, setSubLoading] = useState(true);
  const [subError, setSubError] = useState<string | null>(null);
  const [paying, setPaying] = useState(false);
  const [payError, setPayError] = useState<string | null>(null);


  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`${API_URL}/subscription`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error("Failed to fetch subscription status.");
        const data: SubscriptionStatus = await res.json();
        if (!cancelled) setSubStatus(data);
      } catch (err: any) {
        if (!cancelled)
          setSubError(err.message || "Could not load subscription status.");
      } finally {
        if (!cancelled) setSubLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [token]);

  const handleUpgrade = useCallback(async () => {
    setPayError(null);
    setPaying(true);

    try {

      const res = await fetch(`${API_URL}/subscription`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          transactionType: "payment",
          autoRenew: true,
        }),
      });

      const data: PaystackInitResponse = await res.json();

      if (!res.ok) {
        const msg = (data as any)?.message || "Failed to initialise payment.";
        setPayError(Array.isArray(msg) ? msg[0] : msg);
        return;
      }

      const authUrl = data?.paystackResponse?.authorization_url;
      if (!authUrl) {
        setPayError("Payment URL not returned. Please try again.");
        return;
      }
      window.location.href = authUrl;
    } catch {
      setPayError("Network error. Please check your connection.");
    } finally {
      setPaying(false);
    }
  }, [token]);

  const firstName = (user?.name || "there").split(" ")[0];

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Welcome banner */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 text-green-700 text-sm font-medium mb-4">
          <span>✅</span> Signed in as{" "}
          <span className="font-semibold">{user?.email}</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">
          Welcome back, {firstName}!
        </h2>
        <p className="text-gray-500 mt-1 text-sm">
          Upgrade to Pro and unlock everything in Lumely
        </p>
      </div>

      {/* Loading */}
      {subLoading && (
        <div className="flex justify-center mb-6">
          <LoadingSpinner size="sm" />
        </div>
      )}

      
      {subError && (
        <div className="mb-6 px-4 py-3 rounded-xl bg-yellow-50 border border-yellow-200 text-yellow-800 text-sm">
          ⚠️ {subError}
        </div>
      )}

      
      {!subLoading && subStatus?.hasActiveSubscription && (
        <div className="mb-6 bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
          <div className="text-4xl mb-2">🎉</div>
          <h3 className="text-lg font-bold text-green-800 mb-1">
            You're already on Pro!
          </h3>
          <p className="text-green-700 text-sm mb-4">
            Your subscription is active. Open the app to enjoy all premium
            features.
          </p>
          {/* <a
            href="lumely://subscribe-callback"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-green-700 transition"
          >
            Open Lumely App →
          </a> */}
        </div>
      )}

      
      {!subStatus?.hasActiveSubscription && (
        <>
          {payError && (
            <div className="mb-5 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-2">
              <span className="shrink-0">⚠️</span>
              <span>{payError}</span>
            </div>
          )}

          {/* Plan card */}
          <div className="bg-white rounded-3xl border-2 border-blue-600 shadow-lg shadow-blue-100 p-7 mb-5">
           
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                  Best Value
                </span>
                <h3 className="text-xl font-black text-gray-900">Lumely Pro</h3>
                <p className="text-sm text-gray-500 mt-0.5">
                  Full access · Cancel anytime
                </p>
              </div>
              <div className="text-right shrink-0 ml-4">
                <p className="text-3xl font-black text-gray-900">₦10,000</p>
                <p className="text-sm text-gray-400">per year</p>
              </div>
            </div>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7">
              {[
                "Unlimited habits & todos",
                "Detailed analytics & stats",
                "AI-assisted habit creation",
                "Community challenges",
                "Priority support",
                "Sync across all devices",
              ].map((feat) => (
                <div
                  key={feat}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <span className="text-blue-600 font-bold shrink-0">✓</span>
                  {feat}
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={handleUpgrade}
              disabled={paying || subLoading}
              className="w-full py-4 px-6 rounded-2xl bg-blue-600 text-white font-bold text-base hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-blue-200"
            >
              {paying ? (
                <>
                  <ButtonSpinner />
                  Redirecting to Paystack…
                </>
              ) : (
                "Upgrade with Paystack →"
              )}
            </button>

            
            <div className="mt-6 pt-5 border-t border-gray-100">
              <p className="text-xs text-center text-gray-400 mb-3 font-medium">
                All payment methods accepted
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  { emoji: "💳", label: "Card", sub: "Visa · Mastercard" },
                  { emoji: "🏦", label: "Transfer", sub: "Bank Transfer" },
                  { emoji: "📱", label: "USSD", sub: "*737# & more" },
                  { emoji: "💰", label: "Mobile", sub: "OPay · PalmPay" },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="flex flex-col items-center bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 min-w-[70px]"
                  >
                    <span className="text-lg leading-none mb-0.5">
                      {m.emoji}
                    </span>
                    <span className="text-xs font-semibold text-gray-700">
                      {m.label}
                    </span>
                    <span className="text-[9px] text-gray-400 text-center leading-tight">
                      {m.sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          
          <div className="bg-blue-50 border border-blue-100 rounded-2xl px-5 py-4 mb-6 flex items-start gap-3">
            <span className="text-blue-500 text-lg shrink-0 mt-0.5">ℹ️</span>
            <div>
              <p className="text-sm font-semibold text-blue-800 mb-1">
                NGN & international cards accepted
              </p>
              <p className="text-xs text-blue-700 leading-relaxed">
                Paystack charges in Nigerian Naira (₦10,000). If your card is in
                USD, GBP, or EUR, your bank converts at its exchange rate — no
                extra fees from Lumely. The Paystack checkout page will show the
                equivalent amount in your card's currency if applicable.
              </p>
            </div>
          </div>

          <p className="text-center text-xs text-gray-400">
            🔒 Payments processed securely by{" "}
            <a
              href="https://paystack.com"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              Paystack
            </a>
            . Your card details are never stored by Lumely.
          </p>
        </>
      )}
    </div>
  );
}

export default function SubscribePage() {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<NormalisedUser | null>(null);

  const handleLoginSuccess = useCallback((t: string, u: NormalisedUser) => {
    setToken(t);
    setUser(u);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex flex-col">
      {/* Nav */}
      <nav className="w-full px-6 py-4 flex items-center justify-between max-w-5xl mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={LogoFlame}
            alt="Lumely"
            className="w-8 h-8 object-contain"
          />
          <span className="font-bold text-gray-900 text-lg">Lumely</span>
        </Link>
        <Link
          to="/"
          className="text-sm text-gray-500 hover:text-gray-900 transition"
        >
          ← Back to site
        </Link>
      </nav>

      {/* Step indicator */}
      <div className="flex justify-center mb-8 px-6">
        <div className="flex items-center gap-2">
          <div
            className={`flex items-center gap-1.5 ${
              !token ? "text-blue-600" : "text-gray-400"
            }`}
          >
            <span
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                token ? "bg-green-100 text-green-600" : "bg-blue-600 text-white"
              }`}
            >
              {token ? "✓" : "1"}
            </span>
            <span className="text-sm font-medium hidden sm:block">Sign In</span>
          </div>
          <div className="w-8 h-px bg-gray-200" />
          <div
            className={`flex items-center gap-1.5 ${
              token ? "text-blue-600" : "text-gray-400"
            }`}
          >
            <span
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                token ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"
              }`}
            >
              2
            </span>
            <span className="text-sm font-medium hidden sm:block">
              Choose Plan
            </span>
          </div>
          <div className="w-8 h-px bg-gray-200" />
          <div className="flex items-center gap-1.5 text-gray-400">
            <span className="w-6 h-6 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-xs font-bold">
              3
            </span>
            <span className="text-sm font-medium hidden sm:block">Pay</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 flex items-start justify-center px-4 pb-16">
        {!token || !user ? (
          <LoginStep onSuccess={handleLoginSuccess} />
        ) : (
          <PlanStep token={token} user={user} />
        )}
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-xs text-gray-400 border-t border-gray-100">
        © {new Date().getFullYear()} Lumely &nbsp;·&nbsp;
        <Link to="/privacy" className="hover:text-gray-600 transition">
          Privacy
        </Link>
        &nbsp;·&nbsp;
        <Link to="/terms" className="hover:text-gray-600 transition">
          Terms
        </Link>
      </footer>
    </div>
  );
}
