import React from 'react';
import { useUser } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';
import PaperSubmission from '../components/PaperSubmission';

const SubmitPage = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return (
      <div className="min-h-[65vh] pt-36 pb-20 flex items-center justify-center bg-slate-50">
        <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border border-slate-200 shadow-md">
          <span className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
          <span className="text-xs font-mono font-bold text-slate-700">Checking Author Access...</span>
        </div>
      </div>
    );
  }

  // Route protection: If user has not signed in, redirect /submit to /login
  if (!isSignedIn) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="pt-28 pb-16">
      <PaperSubmission />
    </div>
  );
};

export default SubmitPage;
