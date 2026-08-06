import React from 'react';
import { useUser } from '@clerk/clerk-react';
import { Link, useLocation } from 'react-router-dom';

const ProfileCompletionToast = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const location = useLocation();

  if (!isLoaded || !isSignedIn || !user) return null;

  // Don't show toast if user has completed their profile (institution provided)
  const isProfileIncomplete = !user?.unsafeMetadata?.institution;
  if (!isProfileIncomplete) return null;

  // Hide toast on /profile page while user is actively filling the form
  if (location.pathname === '/profile') return null;

  return (
    <div className="fixed top-24 right-4 sm:right-6 z-50 max-w-sm w-full p-4 rounded-2xl bg-white/90 backdrop-blur-xl border border-amber-400/90 shadow-[0_16px_40px_-8px_rgba(245,158,11,0.3),0_4px_16px_rgba(37,99,235,0.08)] space-y-3 animate-symphony-badge transition-all duration-300">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-amber-100/90 border border-amber-300/80 text-amber-900 font-black text-base flex items-center justify-center shrink-0 shadow-sm">
          ⚠️
        </div>

        <div className="space-y-1 min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-100/90 text-amber-900 font-mono text-[9px] font-extrabold uppercase tracking-wider border border-amber-300/60">
              ACTION REQUIRED
            </span>
          </div>
          <h4 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-tight">
            Complete Your Profile
          </h4>
          <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
            Specify your <strong>Institution / Org</strong> details to unlock full author permissions.
          </p>
        </div>
      </div>

      <Link
        to="/profile"
        className="block w-full py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider text-center shadow-md transition-all transform hover:scale-[1.01]"
      >
        COMPLETE PROFILE NOW →
      </Link>
    </div>
  );
};

export default ProfileCompletionToast;
