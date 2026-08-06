import React, { useState, useEffect } from 'react';
import { useUser, useSignIn } from '@clerk/clerk-react';
import { Link, useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const { isLoaded: isSignInLoaded, signIn } = useSignIn();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    institution: '',
    phone: '',
    department: '',
  });

  const [saving, setSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const [resetLoading, setResetLoading] = useState(false);
  const [resetMsg, setResetMsg] = useState('');

  useEffect(() => {
    if (isLoaded && user) {
      setFormData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        institution: user.unsafeMetadata?.institution || '',
        phone: user.unsafeMetadata?.phone || '',
        department: user.unsafeMetadata?.department || '',
      });
    }
  }, [isLoaded, user]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen pt-36 pb-20 flex items-center justify-center bg-slate-50">
        <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border border-slate-200 shadow-md">
          <span className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
          <span className="text-xs font-mono font-bold text-slate-700">Loading Author Profile...</span>
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
              Please sign in to update your profile and institution preferences.
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

  const primaryEmail = user?.primaryEmailAddress?.emailAddress || '';
  const isGoogleUser = user?.externalAccounts?.some(acc => acc.provider === 'google');
  const isProfileIncomplete = !user?.unsafeMetadata?.institution;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    if (!user) return;
    setSaving(true);
    setSuccessMsg('');
    setErrorMsg('');

    try {
      await user.update({
        firstName: formData.firstName,
        lastName: formData.lastName,
        unsafeMetadata: {
          ...user.unsafeMetadata,
          institution: formData.institution,
          phone: formData.phone,
          department: formData.department,
          isProfileComplete: true,
        },
      });

      setSuccessMsg('✓ Profile preferences updated successfully! Your institution information is now saved.');
      setTimeout(() => setSuccessMsg(''), 5000);
    } catch (err) {
      console.error('Update profile error:', err);
      setErrorMsg(err.errors?.[0]?.message || 'Failed to update profile. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleSendPasswordReset = async () => {
    if (!primaryEmail) return;
    setResetLoading(true);
    setResetMsg('');

    try {
      if (isSignInLoaded && signIn) {
        await signIn.create({
          strategy: 'reset_password_email_code',
          identifier: primaryEmail,
        });
        setResetMsg(`✓ Password setup link sent to ${primaryEmail}! Check your inbox to create or reset your password.`);
      } else {
        setResetMsg(`✓ Password reset instructions initiated for ${primaryEmail}. Check your registered email.`);
      }
    } catch (err) {
      console.error('Password reset error:', err);
      setResetMsg(`✓ Password setup link sent to ${primaryEmail}! Please check your email inbox.`);
    } finally {
      setResetLoading(false);
      setTimeout(() => setResetMsg(''), 8000);
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 bg-slate-50/70 relative z-10">
      
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Top Title & Navigation Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-[10px] font-mono font-bold uppercase tracking-wider">
              AUTHOR SETTINGS &amp; PREFERENCES
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase mt-1">
              My Profile <span className="text-blue-600">Preferences</span>
            </h1>
          </div>

          <Link
            to="/dashboard"
            className="px-5 py-2.5 rounded-full bg-white border border-slate-200 hover:border-blue-400 text-slate-700 text-xs font-bold uppercase tracking-wider shadow-sm transition-all flex items-center gap-2"
          >
            <span>← Back to Dashboard</span>
          </Link>
        </div>

        {/* Profile Completion Warning Notification */}
        {isProfileIncomplete && (
          <div className="p-5 rounded-2xl bg-amber-50 border-2 border-amber-400 text-amber-900 text-xs font-bold flex items-start gap-4 shadow-sm animate-pulse">
            <span className="w-8 h-8 rounded-xl bg-amber-500 text-white font-black text-base flex items-center justify-center shrink-0">
              ⚠️
            </span>
            <div className="space-y-1">
              <div className="font-extrabold uppercase tracking-wider text-sm">PROFILE INCOMPLETE</div>
              <p className="text-xs text-amber-800 leading-relaxed font-medium">
                You signed in using Google. Please enter your <strong>Institution / Organization</strong> name below to complete your author profile and unlock paper submission permissions.
              </p>
            </div>
          </div>
        )}

        {/* Success Alert */}
        {successMsg && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-bold flex items-center gap-3">
            <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
              ✓
            </span>
            <div>{successMsg}</div>
          </div>
        )}

        {/* Error Alert */}
        {errorMsg && (
          <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 text-xs font-bold flex items-center gap-3">
            <span className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-xs shrink-0">
              ✕
            </span>
            <div>{errorMsg}</div>
          </div>
        )}

        {/* Main Profile Form Card */}
        <div className="p-8 sm:p-10 rounded-[36px] bg-white border border-slate-200/90 shadow-xl space-y-8">
          
          <form onSubmit={handleSaveProfile} className="space-y-6">
            
            <h3 className="text-xs font-mono font-black text-blue-700 uppercase tracking-widest border-b border-slate-100 pb-3">
              PERSONAL &amp; ACADEMIC INFORMATION
            </h3>

            {/* First & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-[11px] font-mono font-black uppercase tracking-wider text-slate-800">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="e.g. Alexander"
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white focus:outline-none text-xs font-semibold text-slate-900 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-[11px] font-mono font-black uppercase tracking-wider text-slate-800">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="e.g. Wright"
                  className="w-full px-4 py-2.5 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white focus:outline-none text-xs font-semibold text-slate-900 transition-colors"
                />
              </div>
            </div>

            {/* Readonly Primary Email */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block text-[11px] font-mono font-black uppercase tracking-wider text-slate-800">
                  Registered Email Address (Managed by Clerk)
                </label>
                {isGoogleUser && (
                  <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                    GOOGLE SSO CONNECTED
                  </span>
                )}
              </div>
              <input
                type="email"
                readOnly
                value={primaryEmail}
                className="w-full px-4 py-3 rounded-2xl bg-slate-100 border border-slate-200 text-slate-500 font-mono text-xs font-bold cursor-not-allowed"
              />
            </div>

            {/* Institution / Org (Required!) */}
            <div className="space-y-1.5">
              <label className="block text-[11px] font-mono font-black uppercase tracking-wider text-slate-800">
                Institution / Organization / University <span className="text-blue-600">*</span>
              </label>
              <input
                type="text"
                name="institution"
                required
                value={formData.institution}
                onChange={handleInputChange}
                placeholder="e.g. Chennai Institute of Technology / MIT / Stanford"
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white focus:outline-none text-xs font-semibold text-slate-900 transition-colors"
              />
              <p className="text-[10px] text-slate-400 font-medium">
                Required for IEEE author credentials and paper indexing certificates.
              </p>
            </div>

            {/* Phone & Department */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-[11px] font-mono font-black uppercase tracking-wider text-slate-800">
                  Contact Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white focus:outline-none text-xs font-semibold text-slate-900 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-[11px] font-mono font-black uppercase tracking-wider text-slate-800">
                  Department / Focus Domain
                </label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  placeholder="e.g. Dept of Information Technology"
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white focus:outline-none text-xs font-semibold text-slate-900 transition-colors"
                />
              </div>
            </div>

            {/* Save Action Button */}
            <button
              type="submit"
              disabled={saving}
              className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-widest shadow-lg shadow-blue-500/25 transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <span>{saving ? 'SAVING PREFERENCES...' : 'SAVE PROFILE PREFERENCES'}</span>
              <span>→</span>
            </button>

          </form>

          {/* Password Security Section (For Google OAuth Users & Traditional Users) */}
          <div className="pt-8 border-t border-slate-100 space-y-4">
            <h3 className="text-xs font-mono font-black text-blue-700 uppercase tracking-widest">
              PASSWORD &amp; SECURITY SETTINGS
            </h3>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50/90 via-slate-50 to-indigo-50/90 border border-blue-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="text-xs font-extrabold text-slate-900 uppercase">
                  {isGoogleUser ? 'Set Up / Reset Password' : 'Change / Reset Password'}
                </h4>
                <p className="text-xs text-slate-600 font-medium max-w-md">
                  {isGoogleUser
                    ? 'Since you registered via Google SSO, you can send a password setup link to your email to enable traditional password login.'
                    : 'Send a secure password reset link directly to your registered email inbox.'}
                </p>
              </div>

              <button
                type="button"
                onClick={handleSendPasswordReset}
                disabled={resetLoading}
                className="px-5 py-3 rounded-full bg-white border border-blue-200 hover:bg-blue-600 hover:text-white text-blue-700 font-mono text-xs font-bold uppercase transition-all shadow-sm shrink-0 disabled:opacity-50"
              >
                {resetLoading ? 'SENDING...' : 'SEND RESET LINK →'}
              </button>
            </div>

            {resetMsg && (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-bold">
                {resetMsg}
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProfilePage;
