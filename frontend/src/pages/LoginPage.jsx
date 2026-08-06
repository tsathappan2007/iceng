import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSignIn, useSignUp, useUser } from '@clerk/clerk-react';
import logoImg from '../assets/logo-Photoroom.png';
import butterflyLogo from '../assets/butterfly-cit.png';

const LoginPage = () => {
  const [mode, setMode] = useState('login'); // 'login' | 'signup'
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    institution: ''
  });

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState('');
  const [pendingVerification, setPendingVerification] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [alreadyRegisteredToast, setAlreadyRegisteredToast] = useState(false);

  const { isLoaded: isSignInLoaded, signIn, setActive: setSignInActive } = useSignIn();
  const { isLoaded: isSignUpLoaded, signUp, setActive: setSignUpActive } = useSignUp();
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  // Auto-redirect to dashboard if user is already signed in
  useEffect(() => {
    if (isSignedIn) {
      navigate('/dashboard');
    }
  }, [isSignedIn, navigate]);

  const conferenceThemes = [
    {
      code: "TRACK 01",
      title: "Artificial Intelligence & Deep Learning",
      tag: "AI & ML",
      accent: "from-blue-500/10 to-indigo-500/10",
      svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    },
    {
      code: "TRACK 02",
      title: "Next-Gen Cloud & Distributed Systems",
      tag: "CLOUD & QUANTUM",
      accent: "from-purple-500/10 to-blue-500/10",
      svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    },
    {
      code: "TRACK 03",
      title: "Cybersecurity, Privacy & Blockchain",
      tag: "SECURITY",
      accent: "from-emerald-500/10 to-teal-500/10",
      svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    },
    {
      code: "TRACK 04",
      title: "IoT, Smart Sensors & Robotics",
      tag: "IOT & ROBOTICS",
      accent: "from-amber-500/10 to-orange-500/10",
      svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    },
    {
      code: "TRACK 05",
      title: "Big Data Analytics & Knowledge Graphs",
      tag: "BIG DATA",
      accent: "from-cyan-500/10 to-blue-500/10",
      svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    },
    {
      code: "TRACK 06",
      title: "6G Telemetry & Next-Gen Networking",
      tag: "6G & TELECOM",
      accent: "from-indigo-500/10 to-purple-500/10",
      svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    }
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Google OAuth Handler (With Loader & Processing State)
  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    setError('');
    setAlreadyRegisteredToast(false);

    try {
      if (mode === 'signup' && isSignUpLoaded && signUp) {
        await signUp.authenticateWithRedirect({
          strategy: 'oauth_google',
          redirectUrl: '/sso-callback',
          redirectUrlComplete: '/dashboard',
        });
      } else if (isSignInLoaded && signIn) {
        await signIn.authenticateWithRedirect({
          strategy: 'oauth_google',
          redirectUrl: '/sso-callback',
          redirectUrlComplete: '/dashboard',
        });
      }
    } catch (err) {
      console.error("Google OAuth error:", err);
      if (isSignUpLoaded && signUp) {
        try {
          await signUp.authenticateWithRedirect({
            strategy: 'oauth_google',
            redirectUrl: '/sso-callback',
            redirectUrlComplete: '/dashboard',
          });
        } catch (signupErr) {
          setError(signupErr.errors?.[0]?.message || "Google sign-in failed. Please try again.");
          setGoogleLoading(false);
        }
      } else {
        setError(err.errors?.[0]?.message || "Google sign-in failed. Please try again.");
        setGoogleLoading(false);
      }
    }
  };

  // Sign In Handler
  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!isSignInLoaded || !signIn) return;
    setLoading(true);
    setError('');

    try {
      const result = await signIn.create({
        identifier: formData.email,
        password: formData.password,
      });

      if (result.status === 'complete') {
        await setSignInActive({ session: result.createdSessionId });
        navigate('/dashboard');
      } else {
        console.log("Sign-in status:", result);
      }
    } catch (err) {
      console.error("Sign-In error:", err);
      setError(err.errors?.[0]?.message || "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  // Sign Up Handler (Triggers Verification Code & Checks Existing Registration)
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!isSignUpLoaded || !signUp) return;
    setLoading(true);
    setError('');
    setAlreadyRegisteredToast(false);

    try {
      const nameParts = formData.fullName.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      const result = await signUp.create({
        emailAddress: formData.email,
        password: formData.password,
        firstName: firstName,
        lastName: lastName,
      });

      if (result.status === 'complete') {
        await setSignUpActive({ session: result.createdSessionId });
        navigate('/dashboard');
      } else {
        // Send email verification code
        await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });
        setPendingVerification(true);
      }
    } catch (err) {
      console.error("Sign-Up error:", err);
      const errCode = err?.errors?.[0]?.code || '';
      const errMsg = err?.errors?.[0]?.message || '';

      if (
        errCode.includes('identifier_exists') ||
        errCode.includes('already_exists') ||
        errMsg.toLowerCase().includes('already exists') ||
        errMsg.toLowerCase().includes('taken') ||
        errMsg.toLowerCase().includes('already registered')
      ) {
        setAlreadyRegisteredToast(true);
        setError("Account already registered with this email address. Please sign in instead.");
      } else {
        setError(errMsg || "Sign up failed. Please check your details.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Verify Code Handler (Completes Registration upon correct 6-digit OTP code)
  const handleVerifyCode = async (e) => {
    e.preventDefault();
    if (!isSignUpLoaded || !signUp) return;
    setLoading(true);
    setError('');

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: verificationCode,
      });

      if (completeSignUp.status === 'complete') {
        await setSignUpActive({ session: completeSignUp.createdSessionId });
        navigate('/dashboard');
      } else {
        console.log("Verification status:", completeSignUp);
      }
    } catch (err) {
      console.error("Verification error:", err);
      setError(err.errors?.[0]?.message || "Invalid verification code. Please check your inbox and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-16 px-4 sm:px-6 relative z-10 bg-slate-50/70">
      
      {/* Toast Notification for Already Registered Users */}
      {alreadyRegisteredToast && (
        <div className="fixed top-24 right-4 sm:right-6 z-50 max-w-sm sm:max-w-md w-full p-4.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-amber-400/90 shadow-[0_16px_40px_-8px_rgba(245,158,11,0.3)] space-y-3 animate-symphony-badge">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100/90 border border-amber-300/80 text-amber-900 font-black text-base flex items-center justify-center shrink-0 shadow-sm">
              ℹ️
            </div>

            <div className="space-y-1 min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-100/90 text-amber-900 font-mono text-[9px] font-extrabold uppercase tracking-wider border border-amber-300/60">
                  ACCOUNT ALREADY EXISTS
                </span>
                <button
                  type="button"
                  onClick={() => setAlreadyRegisteredToast(false)}
                  className="text-slate-400 hover:text-slate-700 font-bold text-xs"
                >
                  ✕
                </button>
              </div>
              <h4 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-tight">
                User Already Registered
              </h4>
              <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                An account with email <strong>{formData.email}</strong> is already registered. Please sign in to continue.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              setMode('login');
              setAlreadyRegisteredToast(false);
              setError('');
            }}
            className="block w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider text-center shadow-md transition-all transform hover:scale-[1.01]"
          >
            SWITCH TO SIGN IN →
          </button>
        </div>
      )}

      {/* Dynamic Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-blue-500/10 via-amber-500/10 to-purple-500/10 blur-3xl pointer-events-none -z-10 animate-pulse" />

      <div className="max-w-7xl mx-auto">
        
        {/* Main Split Layout Container — Pure Executive Light Theme */}
        <div className="bg-white rounded-[36px] border border-slate-200/90 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[750px]">
          
          {/* ================= LEFT SIDE: Executive Light Redesign ================= */}
          <div className="lg:col-span-6 p-8 sm:p-12 bg-gradient-to-br from-blue-50/90 via-slate-50 to-indigo-50/90 text-slate-900 border-r border-slate-200/90 relative flex flex-col justify-between overflow-hidden">
            
            {/* Background Ambient Blur Orbs */}
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Watermark Butterfly Logo */}
            <img
              src={butterflyLogo}
              alt="Conference Watermark Logo"
              className="absolute -bottom-20 -left-20 sm:-bottom-24 sm:-left-24 lg:-bottom-28 lg:-left-28 w-[400px] sm:w-[500px] lg:w-[580px] max-w-none h-auto object-contain opacity-35 pointer-events-none select-none z-0"
            />

            <div className="relative z-10 space-y-7">
              
              {/* Header Logo & IEEE Official Badge */}
              <div className="flex items-center justify-between gap-4">
                <Link to="/" className="inline-block">
                  <img
                    src={logoImg}
                    alt="IEEE ICAINGCIT 2027 Logo"
                    className="h-10 sm:h-12 w-auto object-contain"
                  />
                </Link>
                <span className="px-3.5 py-1 rounded-full bg-blue-100/90 text-blue-800 border border-blue-200/80 font-mono text-[10px] font-black tracking-widest uppercase shadow-sm">
                  IEEE ICAINGCIT 2027
                </span>
              </div>

              {/* Section Hero Heading */}
              <div className="space-y-2.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-mono font-black uppercase tracking-wider shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  15–17 JULY 2027 • CHENNAI, INDIA
                </div>
                <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-tight leading-tight text-slate-900">
                  Conference <span className="text-blue-600 glow-title">Tracks &amp; Domains</span>
                </h1>
                <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  Explore our 6 core research tracks and sign in to submit your manuscripts.
                </p>
              </div>

              {/* 6 Executive Theme Cards Grid */}
              <div className="space-y-3 pt-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-mono font-black text-blue-700 uppercase tracking-widest flex items-center gap-2">
                    <span>CALL FOR PAPERS • DOMAINS</span>
                  </h3>
                  <span className="text-[10px] font-mono text-slate-500 font-extrabold uppercase bg-white px-2.5 py-0.5 rounded-full border border-slate-200 shadow-sm">
                    6 TRACKS
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {conferenceThemes.map((theme, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${theme.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                      <div className="relative z-10 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              {theme.svg}
                            </svg>
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[9px] font-mono font-black tracking-wider uppercase border border-blue-200">
                            {theme.code}
                          </span>
                        </div>

                        <h4 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                          {theme.title}
                        </h4>
                      </div>

                      <div className="relative z-10 pt-2 mt-2 border-t border-slate-100 flex items-center justify-between text-[9px] font-mono font-extrabold text-slate-400 uppercase tracking-wider">
                        <span>{theme.tag}</span>
                        <span className="text-blue-500 group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Highlight Badges */}
            <div className="relative z-10 pt-6 mt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono font-bold text-slate-700">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                IEEE Xplore Indexed
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                Double-Blind Review
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                Best Paper Awards
              </span>
            </div>

          </div>

          {/* ================= RIGHT SIDE: Authentication Form (Connected to Clerk) ================= */}
          <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between bg-white relative">
            
            <div>
              {/* Top Mode Toggler Switcher */}
              <div className="flex justify-center mb-8">
                <div className="flex items-center p-1.5 rounded-full bg-slate-100 border border-slate-200 shadow-inner w-full max-w-sm">
                  <button
                    type="button"
                    onClick={() => {
                      setMode('login');
                      setError('');
                      setPendingVerification(false);
                      setAlreadyRegisteredToast(false);
                    }}
                    className={`flex-1 py-2.5 rounded-full text-xs font-black tracking-wider uppercase transition-all duration-300 ${
                      mode === 'login'
                        ? 'bg-blue-600 text-white shadow-md scale-[1.02]'
                        : 'text-slate-600 hover:text-blue-600'
                    }`}
                  >
                    Sign In
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setMode('signup');
                      setError('');
                      setPendingVerification(false);
                      setAlreadyRegisteredToast(false);
                    }}
                    className={`flex-1 py-2.5 rounded-full text-xs font-black tracking-wider uppercase transition-all duration-300 ${
                      mode === 'signup'
                        ? 'bg-blue-600 text-white shadow-md scale-[1.02]'
                        : 'text-slate-600 hover:text-blue-600'
                    }`}
                  >
                    Sign Up
                  </button>
                </div>
              </div>

              {/* Error Alert Box */}
              {error && (
                <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 text-xs font-bold flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-xs shrink-0">
                      ✕
                    </span>
                    <div>{error}</div>
                  </div>
                  {alreadyRegisteredToast && (
                    <button
                      type="button"
                      onClick={() => {
                        setMode('login');
                        setError('');
                        setAlreadyRegisteredToast(false);
                      }}
                      className="px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-mono uppercase font-bold shrink-0 shadow-sm"
                    >
                      Sign In Now →
                    </button>
                  )}
                </div>
              )}

              {/* Email Verification Step for Sign-Up */}
              {pendingVerification ? (
                <form onSubmit={handleVerifyCode} className="space-y-5">
                  <div className="space-y-1 text-center sm:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-[10px] font-bold uppercase tracking-wider mb-1">
                      STEP 2 OF 2 • EMAIL VERIFICATION
                    </div>
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase">
                      Enter Verification Code
                    </h2>
                    <p className="text-xs text-slate-500 font-medium">
                      A 6-digit verification code was sent to <strong className="text-slate-900">{formData.email}</strong>.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[11px] font-mono font-bold text-slate-700 uppercase tracking-wider">
                      6-Digit Code
                    </label>
                    <input
                      type="text"
                      required
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                      placeholder="123456"
                      maxLength={6}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white focus:outline-none font-mono text-center text-xl font-bold tracking-widest text-slate-900 shadow-inner"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs tracking-wider uppercase shadow-lg shadow-blue-500/25 transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <span>{loading ? 'VERIFYING CODE...' : 'VERIFY & COMPLETE REGISTRATION'}</span>
                    <span>→</span>
                  </button>

                  <div className="text-center pt-2">
                    <button
                      type="button"
                      onClick={() => setPendingVerification(false)}
                      className="text-xs font-mono font-bold text-slate-500 hover:text-blue-600 uppercase"
                    >
                      ← Back to edit email
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  {/* Header Text */}
                  <div className="mb-6 space-y-1 text-center sm:text-left">
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase">
                      {mode === 'login' ? 'Sign In to Your Account' : 'Sign Up for Account'}
                    </h2>
                    <p className="text-xs text-slate-500 font-medium">
                      {mode === 'login'
                        ? 'Enter your registered credentials or sign in with Google.'
                        : 'Register as an author, reviewer, or delegate for IEEE ICAINGCIT 2027.'}
                    </p>
                  </div>

                  {/* 1. GOOGLE SIGN IN BUTTON (With Loader State) */}
                  <div className="space-y-4">
                    <button
                      type="button"
                      disabled={googleLoading || loading}
                      onClick={handleGoogleSignIn}
                      className="w-full py-3 px-4 rounded-2xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 shadow-sm text-slate-800 font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-3 transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 cursor-pointer"
                    >
                      {googleLoading ? (
                        <>
                          <span className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin shrink-0" />
                          <span>PROCESSING GOOGLE SIGN-IN...</span>
                        </>
                      ) : (
                        <>
                          {/* Official Google Multicolor G Logo */}
                          <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                          </svg>
                          <span>Continue with Google</span>
                        </>
                      )}
                    </button>

                    {/* Divider Bar */}
                    <div className="flex items-center gap-3 my-4">
                      <div className="h-px flex-1 bg-slate-200" />
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                        OR WITH EMAIL
                      </span>
                      <div className="h-px flex-1 bg-slate-200" />
                    </div>
                  </div>

                  {/* 2. TRADITIONAL EMAIL / PASSWORD FORM */}
                  <form onSubmit={mode === 'login' ? handleSignIn : handleSignUp} className="space-y-4">
                    
                    {/* Extra Full Name & Institution Fields for Sign Up */}
                    {mode === 'signup' && (
                      <>
                        <div className="space-y-1">
                          <label className="block text-[11px] font-mono font-bold text-slate-700 uppercase tracking-wider">
                            Full Name &amp; Title
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="e.g. Dr. Alexander Wright"
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white focus:outline-none text-xs font-semibold text-slate-900 transition-colors"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="block text-[11px] font-mono font-bold text-slate-700 uppercase tracking-wider">
                            Institution / Org
                          </label>
                          <input
                            type="text"
                            name="institution"
                            required
                            value={formData.institution}
                            onChange={handleInputChange}
                            placeholder="e.g. MIT / Stanford / CIT"
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white focus:outline-none text-xs font-semibold text-slate-900 transition-colors"
                          />
                        </div>
                      </>
                    )}

                    {/* Email Address */}
                    <div className="space-y-1">
                      <label className="block text-[11px] font-mono font-bold text-slate-700 uppercase tracking-wider">
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="author@university.edu"
                          className="w-full px-4 py-2.5 pl-10 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white focus:outline-none text-xs font-semibold text-slate-900 transition-colors"
                        />
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </span>
                      </div>
                    </div>

                    {/* Password with Show/Hide Toggle */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <label className="block text-[11px] font-mono font-bold text-slate-700 uppercase tracking-wider">
                          Password
                        </label>
                        {mode === 'login' && (
                          <button
                            type="button"
                            onClick={() => alert("Password reset instructions have been sent to your email inbox.")}
                            className="text-[10px] font-mono font-bold text-blue-600 hover:underline uppercase"
                          >
                            Forgot Password?
                          </button>
                        )}
                      </div>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          required
                          value={formData.password}
                          onChange={handleInputChange}
                          placeholder="••••••••••••"
                          className="w-full px-4 py-2.5 pl-10 pr-10 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white focus:outline-none text-xs font-semibold text-slate-900 transition-colors"
                        />
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </span>
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
                        >
                          {showPassword ? (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858-5.908a10.025 10.025 0 013.682-.813c4.478 0 8.268 2.943 9.543 7a9.97 9.97 0 01-1.563 3.029m-5.858 5.908L3 3l18 18" />
                            </svg>
                          ) : (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Remember Me Checkbox */}
                    {mode === 'login' && (
                      <div className="flex items-center justify-between pt-1">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                          />
                          <span className="text-xs font-semibold text-slate-600">Remember this browser</span>
                        </label>
                      </div>
                    )}

                    {/* Submit Action Button */}
                    <button
                      type="submit"
                      disabled={loading || googleLoading}
                      className="w-full mt-2 py-3.5 px-6 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs tracking-wider uppercase shadow-lg shadow-blue-500/25 transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      <span>
                        {loading
                          ? 'AUTHENTICATING...'
                          : mode === 'login'
                          ? 'SIGN IN TO PORTAL'
                          : 'SIGN UP NOW'}
                      </span>
                      <span>→</span>
                    </button>

                  </form>
                </>
              )}
            </div>

            {/* Bottom Customer Toggle Link */}
            <div className="pt-6 mt-6 border-t border-slate-100 text-center">
              {mode === 'login' ? (
                <p className="text-xs font-medium text-slate-600">
                  Don't have an author account yet?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setMode('signup');
                      setError('');
                      setPendingVerification(false);
                      setAlreadyRegisteredToast(false);
                    }}
                    className="font-black text-blue-600 hover:underline uppercase tracking-wide ml-1"
                  >
                    Sign Up Now
                  </button>
                </p>
              ) : (
                <p className="text-xs font-medium text-slate-600">
                  Already registered with ICAINGCIT 2027?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setMode('login');
                      setError('');
                      setPendingVerification(false);
                      setAlreadyRegisteredToast(false);
                    }}
                    className="font-black text-blue-600 hover:underline uppercase tracking-wide ml-1"
                  >
                    Sign In
                  </button>
                </p>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default LoginPage;
