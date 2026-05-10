import { useEffect, useState, useRef } from "react";
import { useSearchParams, Link } from "react-router-dom";
import LogoFlame from "../assets/images/logo/logoFlame.png";



const API_URL = "https://webapi.lumely.io";
const MAX_POLLS = 5;
const POLL_INTERVAL_MS = 3000;



type PageStatus = "loading" | "success" | "failed" | "timeout";

interface PaymentStatusResponse {
  status: "active" | "success" | "pending" | "failed" | "expired" | string;
  subscription?: {
    status: string;
    endDate?: string;
  };
  hasActiveSubscription?: boolean;
}



function Spinner() {
  return (
    <svg
      className="animate-spin w-8 h-8 text-blue-600"
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



export default function SubscribeCallbackPage() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<PageStatus>("loading");
  const [pollCount, setPollCount] = useState(0);
  const [errorDetail, setErrorDetail] = useState<string>("");
  const pollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mountedRef = useRef(true);


  const reference =
    searchParams.get("reference") || searchParams.get("trxref") || "";

  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
      if (pollTimerRef.current) clearTimeout(pollTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!reference) {
      setStatus("failed");
      setErrorDetail(
        "No payment reference found in the URL. Please contact support."
      );
      return;
    }

    verifyWithPolling(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reference]);

  async function verifyWithPolling(attempt: number) {
    if (!mountedRef.current) return;

    try {
      const res = await fetch(`${API_URL}/subscription/status/${reference}`);

      if (!res.ok) {
        if (attempt < MAX_POLLS - 1) {
          scheduleNextPoll(attempt);
          return;
        }
        setStatus("failed");
        setErrorDetail("Payment verification returned an error. Please contact support.");
        return;
      }

      const data: PaymentStatusResponse = await res.json();
      if (!mountedRef.current) return;

      const paymentStatus =
        data?.subscription?.status || data?.status || "pending";
      const normalised = paymentStatus.toLowerCase();

      if (normalised === "active" || normalised === "success") {
        setStatus("success");
        setPollCount(attempt + 1);
        return;
      }

      if (normalised === "failed" || normalised === "expired") {
        setStatus("failed");
        setErrorDetail(
          "Payment was declined or failed. No funds have been taken. Please try again."
        );
        return;
      }

      
      if (attempt < MAX_POLLS - 1) {
        setPollCount(attempt + 1);
        scheduleNextPoll(attempt);
      } else {
        setStatus("timeout");
      }
    } catch {
      if (!mountedRef.current) return;
      if (attempt < MAX_POLLS - 1) {
        scheduleNextPoll(attempt);
      } else {
        setStatus("timeout");
      }
    }
  }

  function scheduleNextPoll(attempt: number) {
    pollTimerRef.current = setTimeout(() => {
      verifyWithPolling(attempt + 1);
    }, POLL_INTERVAL_MS);
  }

  function handleRetry() {
    setStatus("loading");
    setPollCount(0);
    setErrorDetail("");
    verifyWithPolling(0);
  }



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
      </nav>

      <main className="flex-1 flex items-center justify-center px-4 pb-16">
        <div className="w-full max-w-md">
          
          {status === "loading" && (
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10 text-center">
              <div className="flex justify-center mb-6">
                <Spinner />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Verifying your payment…
              </h2>
              <p className="text-gray-500 text-sm">
                This usually takes a few seconds. Please don't close this page.
              </p>
              {pollCount > 0 && (
                <p className="text-xs text-gray-400 mt-4">
                  Check {pollCount} of {MAX_POLLS}…
                </p>
              )}
              {reference && (
                <div className="mt-6 bg-gray-50 rounded-xl px-4 py-2 inline-block">
                  <p className="text-xs text-gray-400 font-mono break-all">
                    Ref: {reference}
                  </p>
                </div>
              )}
            </div>
          )}

          
          {status === "success" && (
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🎉</span>
              </div>
              <h2 className="text-2xl font-black text-gray-900 mb-3">
                You're now Pro!
              </h2>
              <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                Your subscription is active. Open the Lumely app to access all
                premium features — unlimited habits, analytics, and more.
              </p>

              
              <a
                href={`lumely://subscribe-callback?reference=${encodeURIComponent(
                  reference
                )}`}
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition mb-3"
              >
                Open Lumely App →
              </a>

              <p className="text-xs text-gray-400">
                Button not working?{" "}
                <a
                  href="https://lumely.io"
                  className="text-blue-500 hover:underline"
                >
                  Download the app
                </a>{" "}
                and sign in — your Pro status will sync automatically.
              </p>

              {reference && (
                <div className="mt-6 bg-gray-50 rounded-xl px-4 py-2">
                  <p className="text-xs text-gray-400 font-mono break-all">
                    Reference: {reference}
                  </p>
                </div>
              )}
            </div>
          )}

          
          {status === "failed" && (
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10 text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">❌</span>
              </div>
              <h2 className="text-2xl font-black text-gray-900 mb-3">
                Payment Failed
              </h2>
              <p className="text-gray-600 text-sm mb-2 leading-relaxed">
                {errorDetail ||
                  "We couldn't confirm your payment. If you were charged, please contact us immediately."}
              </p>

              {reference && (
                <div className="mt-4 mb-6 bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3">
                  <p className="text-xs text-yellow-700 mb-1 font-medium">
                    Keep this reference for support:
                  </p>
                  <p className="text-xs text-yellow-800 font-mono break-all">
                    {reference}
                  </p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleRetry}
                  className="py-3 px-4 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition"
                >
                  Try Again
                </button>
                <Link
                  to="/subscribe"
                  className="py-3 px-4 rounded-xl bg-gray-100 text-gray-700 font-semibold text-sm hover:bg-gray-200 transition text-center"
                >
                  New Payment
                </Link>
              </div>

              <a
                href={`mailto:support@lumely.io?subject=${encodeURIComponent(
                  `Payment Issue${reference ? ` - Ref: ${reference}` : ""}`
                )}&body=${encodeURIComponent(
                  `Hi Lumely Support,\n\nI had an issue with my payment.\nReference: ${reference}\n\nPlease help.`
                )}`}
                className="block mt-4 text-sm text-red-600 hover:underline"
              >
                Contact Support
              </a>
            </div>
          )}

          
          {status === "timeout" && (
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10 text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">⏱️</span>
              </div>
              <h2 className="text-2xl font-black text-gray-900 mb-3">
                Taking Longer Than Expected
              </h2>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                We couldn't confirm your payment within the expected time.
                Your payment may still be processing. Open the Lumely app in a
                few minutes — your Pro access will activate automatically once
                confirmed.
              </p>

              {reference && (
                <div className="mb-6 bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3">
                  <p className="text-xs text-yellow-700 mb-1 font-medium">
                    Your payment reference:
                  </p>
                  <p className="text-xs text-yellow-800 font-mono break-all">
                    {reference}
                  </p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleRetry}
                  className="py-3 px-4 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition"
                >
                  Check Again
                </button>
                <a
                  href={`lumely://subscribe-callback?reference=${encodeURIComponent(
                    reference
                  )}`}
                  className="py-3 px-4 rounded-xl bg-gray-900 text-white font-semibold text-sm hover:bg-gray-800 transition text-center"
                >
                  Open App
                </a>
              </div>

              <a
                href={`mailto:support@lumely.io?subject=${encodeURIComponent(
                  `Payment Pending - Ref: ${reference}`
                )}&body=${encodeURIComponent(
                  `Hi,\n\nMy payment is pending.\nReference: ${reference}\n\nPlease assist.`
                )}`}
                className="block mt-4 text-sm text-gray-500 hover:underline"
              >
                Contact Support
              </a>
            </div>
          )}
        </div>
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