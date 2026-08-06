import React, { useEffect } from 'react';
import { useUser, useClerk } from '@clerk/clerk-react';
import { Link, useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && isSignedIn && user) {
      const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      fetch(`${API_BASE}/api/user/sync`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clerkId: user.id,
          name: user.fullName || `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'IEEE Author',
          email: user.primaryEmailAddress?.emailAddress || '',
          institution: user.unsafeMetadata?.institution || '',
          phone: user.unsafeMetadata?.phone || '',
          department: user.unsafeMetadata?.department || '',
        }),
      }).catch(err => console.warn('User DB auto-sync error:', err));
    }
  }, [isLoaded, isSignedIn, user]);

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen pt-36 pb-20 flex items-center justify-center bg-slate-50">
        <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border border-slate-200 shadow-md">
          <span className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
          <span className="text-xs font-mono font-bold text-slate-700">Loading Author Dashboard...</span>
        </div>
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div className="min-h-screen pt-36 pb-20 px-4 sm:px-6 bg-slate-50 flex items-center justify-center">
        <div className="max-w-md w-full p-8 rounded-[32px] bg-white border border-slate-200 shadow-xl text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mx-auto text-2xl">
            🔒
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-black text-slate-900 uppercase">ACCESS RESTRICTED</h2>
            <p className="text-xs text-slate-600 font-medium">
              You must be signed in to view the IEEE ICAINGCIT 2027 Author &amp; Delegate Dashboard.
            </p>
          </div>
          <Link
            to="/login"
            className="block w-full py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all"
          >
            SIGN IN TO PORTAL →
          </Link>
        </div>
      </div>
    );
  }

  const primaryEmail = user?.primaryEmailAddress?.emailAddress || 'N/A';
  const fullName = user?.fullName || `${user?.firstName || ''} ${user?.lastName || ''}`.trim() || 'IEEE Author';
  const avatarUrl = user?.imageUrl;
  const createdAt = user?.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '2027';

  const institution = user?.unsafeMetadata?.institution || '';
  const isProfileIncomplete = !institution;

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 bg-slate-50/70 relative z-10">

      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Top Header Card */}
        <div className="p-8 sm:p-10 rounded-[36px] bg-gradient-to-r from-blue-50/90 via-slate-50 to-indigo-50/90 border border-blue-200/80 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden">
          
          <div className="flex items-center gap-5 z-10">
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt={fullName}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-2 border-blue-600 object-cover shadow-md shrink-0"
              />
            ) : (
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-blue-600 text-white font-black text-2xl flex items-center justify-center shrink-0 shadow-md">
                {fullName.charAt(0)}
              </div>
            )}

            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-100 border border-blue-200 text-blue-800 font-mono text-[10px] font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                VERIFIED AUTHOR PORTAL
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Welcome, {fullName}!
              </h1>
              <p className="text-xs font-mono text-slate-600">
                {primaryEmail} {institution ? `• ${institution}` : ''}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 z-10 w-full sm:w-auto">
            <Link
              to="/profile"
              className="px-5 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-bold uppercase transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>MY PROFILE &amp; PREFERENCES</span>
            </Link>

            <button
              onClick={handleSignOut}
              className="px-5 py-3 rounded-full bg-white border border-slate-200 hover:border-red-400 hover:bg-red-50 text-slate-700 hover:text-red-600 font-mono text-xs font-bold uppercase transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <span>SIGN OUT</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* User Account Info Card */}
          <div className="lg:col-span-4 p-6 sm:p-7 rounded-[28px] bg-white border border-slate-200/90 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-mono font-black text-blue-700 uppercase tracking-widest">
                ACCOUNT DETAILS
              </h3>
              <Link to="/profile" className="text-[10px] font-mono font-bold text-blue-600 hover:underline">
                EDIT →
              </Link>
            </div>

            <div className="space-y-4 text-xs font-semibold text-slate-700">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Full Name</span>
                <span className="text-slate-900 font-bold text-sm">{fullName}</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Primary Email</span>
                <span className="text-slate-900 font-mono font-bold text-xs truncate block">{primaryEmail}</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Institution / Org</span>
                <span className={`text-xs font-bold block ${institution ? 'text-slate-900' : 'text-amber-600 font-mono'}`}>
                  {institution || '⚠️ Not Specified (Required)'}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Account Created</span>
                <span className="text-slate-900 font-mono font-bold text-xs">{createdAt}</span>
              </div>
            </div>
          </div>

          {/* Quick Actions & Submissions Status */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Quick Actions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <Link
                to="/submit"
                className="p-6 rounded-[28px] bg-gradient-to-r from-blue-50/90 via-slate-50 to-indigo-50/90 border border-blue-200/80 shadow-sm hover:shadow-md hover:border-blue-400 transition-all group space-y-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-blue-200 text-blue-600 flex items-center justify-center text-xl shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                  📄
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-900 group-hover:text-blue-600 transition-colors uppercase">
                    Submit Manuscript
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Upload paper draft, PDF file, and author guidelines.
                  </p>
                </div>
              </Link>

              <Link
                to="/profile"
                className="p-6 rounded-[28px] bg-gradient-to-r from-blue-50/90 via-slate-50 to-indigo-50/90 border border-blue-200/80 shadow-sm hover:shadow-md hover:border-blue-400 transition-all group space-y-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-blue-200 text-blue-600 flex items-center justify-center text-xl shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                  ⚙️
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-900 group-hover:text-blue-600 transition-colors uppercase">
                    Profile &amp; Password
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Update institution, phone, or send password reset link.
                  </p>
                </div>
              </Link>

              <Link
                to="/registration"
                className="p-6 rounded-[28px] bg-gradient-to-r from-blue-50/90 via-slate-50 to-indigo-50/90 border border-blue-200/80 shadow-sm hover:shadow-md hover:border-blue-400 transition-all group space-y-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-blue-200 text-blue-600 flex items-center justify-center text-xl shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                  💳
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-900 group-hover:text-blue-600 transition-colors uppercase">
                    Registration &amp; Payment
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    View author registration tiers &amp; fee status.
                  </p>
                </div>
              </Link>

              <Link
                to="/contact"
                className="p-6 rounded-[28px] bg-gradient-to-r from-blue-50/90 via-slate-50 to-indigo-50/90 border border-blue-200/80 shadow-sm hover:shadow-md hover:border-blue-400 transition-all group space-y-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-blue-200 text-blue-600 flex items-center justify-center text-xl shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                  ✉️
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-900 group-hover:text-blue-600 transition-colors uppercase">
                    Help &amp; Support Desk
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Reach out to the IEEE ICAINGCIT 2027 organizing team.
                  </p>
                </div>
              </Link>

            </div>

            {/* Submission Status Box */}
            <div className="p-7 rounded-[28px] bg-white border border-slate-200/90 shadow-sm space-y-4">
              <h3 className="text-xs font-mono font-black text-blue-700 uppercase tracking-widest">
                YOUR SUBMISSION STATUS
              </h3>
              
              <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-200/80 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg">
                    📝
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900 uppercase">Ready for Submission</h5>
                    <p className="text-[11px] text-slate-500 font-medium">IEEE 2-Column Format • Max 6 Pages</p>
                  </div>
                </div>

                <Link
                  to="/submit"
                  className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-mono text-[11px] font-bold uppercase transition-all shadow-sm shrink-0"
                >
                  Submit Paper →
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default DashboardPage;
