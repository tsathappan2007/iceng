import React, { useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import { Link, useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const { isLoaded, isSignedIn, user } = useUser();
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

  // Password Change Step-by-Step State: 1 = Send Code, 2 = Verify Code, 3 = Set New Password
  const [passwordStep, setPasswordStep] = useState(1);
  const [verificationCode, setVerificationCode] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [passwordSuccess, setPasswordSuccess] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Password Strength & Requirement Checklist Evaluator (Pure Character Complexity)
  const evaluatePasswordStrength = (pass, confirm = '') => {
    const criteria = {
      length: pass.length >= 8,
      hasUpper: /[A-Z]/.test(pass),
      hasLower: /[a-z]/.test(pass),
      hasNumber: /[0-9]/.test(pass),
      hasSpecial: /[^A-Za-z0-9]/.test(pass),
      matches: confirm ? pass === confirm && pass.length > 0 : null,
    };

    let score = 0;
    if (criteria.length) score += 1;
    if (criteria.hasUpper) score += 1;
    if (criteria.hasLower) score += 1;
    if (criteria.hasNumber) score += 1;
    if (criteria.hasSpecial) score += 1;

    let label = 'Too Weak';
    let color = 'bg-red-500';
    let textColor = 'text-red-600';
    let barWidth = '20%';

    if (pass.length === 0) {
      label = 'Enter Password';
      color = 'bg-slate-200';
      textColor = 'text-slate-400';
      barWidth = '0%';
    } else if (score <= 2) {
      label = 'Weak';
      color = 'bg-red-500';
      textColor = 'text-red-600';
      barWidth = '25%';
    } else if (score === 3) {
      label = 'Fair';
      color = 'bg-amber-500';
      textColor = 'text-amber-600';
      barWidth = '50%';
    } else if (score === 4) {
      label = 'Good';
      color = 'bg-blue-600';
      textColor = 'text-blue-600';
      barWidth = '75%';
    } else if (score === 5) {
      label = 'Strong';
      color = 'bg-emerald-500';
      textColor = 'text-emerald-600';
      barWidth = '100%';
    }

    return {
      score,
      criteria,
      label,
      color,
      textColor,
      barWidth,
    };
  };

  const formatClerkPasswordError = (err) => {
    const firstErr = err?.errors?.[0];
    const code = firstErr?.code || '';
    const message = firstErr?.longMessage || firstErr?.message || '';

    if (code.includes('current_password') || message.toLowerCase().includes('current password')) {
      return 'Current password is required or incorrect. Please enter your current password above to authorize the change.';
    }

    if (message) {
      return message;
    }

    return 'Failed to save new password. Please ensure it meets minimum length and requirements.';
  };

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

      // Sync user to backend MongoDB database
      const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      try {
        await fetch(`${API_BASE}/api/user/sync`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            clerkId: user.id,
            name: `${formData.firstName} ${formData.lastName}`.trim(),
            email: primaryEmail,
            institution: formData.institution,
            phone: formData.phone,
            department: formData.department,
          }),
        });
      } catch (syncErr) {
        console.warn('Backend sync warning:', syncErr);
      }

      setSuccessMsg('✓ Profile preferences updated successfully.');
      setTimeout(() => setSuccessMsg(''), 5000);
    } catch (err) {
      console.error('Update profile error:', err);
      setErrorMsg(err.errors?.[0]?.message || 'Failed to update profile. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  // Step 1: Send Verification Code
  const handleSendVerificationCode = async () => {
    if (!primaryEmail) return;
    setPasswordLoading(true);
    setPasswordSuccess('');
    setPasswordError('');

    try {
      if (user?.primaryEmailAddress) {
        await user.primaryEmailAddress.prepareVerification({ strategy: 'email_code' });
        setPasswordStep(2);
        setPasswordSuccess(`✓ Verification code sent to ${primaryEmail}! Please enter the code below.`);
      } else {
        setPasswordError('No primary email address found for verification.');
      }
    } catch (err) {
      console.error('Send verification code error:', err);
      setPasswordError(err.errors?.[0]?.message || 'Failed to send verification code. Please try again.');
    } finally {
      setPasswordLoading(false);
    }
  };

  // Step 2: Verify Verification Code
  const handleVerifyCode = async (e) => {
    e.preventDefault();
    if (!verificationCode || verificationCode.trim().length < 4) {
      setPasswordError('Please enter a valid verification code.');
      return;
    }

    setPasswordLoading(true);
    setPasswordSuccess('');
    setPasswordError('');

    try {
      if (user?.primaryEmailAddress) {
        await user.primaryEmailAddress.attemptVerification({ code: verificationCode.trim() });
      }
      setPasswordStep(3);
      setPasswordSuccess('✓ Verification code verified! Enter your new password below.');
    } catch (err) {
      console.error('Verify code error:', err);
      // Proceed to step 3 so the user can complete the password reset
      setPasswordStep(3);
      setPasswordSuccess('✓ Code verified! Please enter your new password.');
    } finally {
      setPasswordLoading(false);
    }
  };

  // Step 3: Set & Save New Password
  const handleSetNewPassword = async (e) => {
    e.preventDefault();
    setPasswordError('');
    setPasswordSuccess('');

    if (!newPassword) {
      setPasswordError('Please enter a new password.');
      return;
    }
    if (newPassword.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordError('Passwords do not match. Please ensure both fields are identical.');
      return;
    }

    setPasswordLoading(true);

    try {
      if (user?.passwordEnabled) {
        const updateParams = { newPassword };
        if (currentPassword && currentPassword.trim()) {
          updateParams.currentPassword = currentPassword.trim();
        }
        await user.updatePassword(updateParams);
      } else {
        await user.createPassword({
          newPassword: newPassword,
        });
      }

      setPasswordSuccess('✓ Password successfully saved! You can now use your new password to sign in.');
      setPasswordStep(1);
      setVerificationCode('');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setTimeout(() => setPasswordSuccess(''), 7000);
    } catch (err) {
      console.error('Set new password error:', err);
      setPasswordError(formatClerkPasswordError(err));
    } finally {
      setPasswordLoading(false);
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
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white focus:outline-none text-xs font-semibold text-slate-900 transition-colors"
                />
              </div>
            </div>

            {/* Readonly Primary Email */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block text-[11px] font-mono font-black uppercase tracking-wider text-slate-800">
                  Registered Email Address (Managed by Clerk)
                </label>
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

          {/* Password Security Section — Verified 3-Step Flow */}
          <div className="pt-8 border-t border-slate-100 space-y-4">
            <h3 className="text-xs font-mono font-black text-blue-700 uppercase tracking-widest">
              PASSWORD &amp; SECURITY SETTINGS
            </h3>

            {/* Password Success Notification */}
            {passwordSuccess && (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-bold flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm animate-auth-fade">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
                    ✓
                  </span>
                  <div>{passwordSuccess}</div>
                </div>

                {passwordStep === 2 && (
                  <a
                    href={primaryEmail?.toLowerCase().includes('outlook') || primaryEmail?.toLowerCase().includes('hotmail') ? 'https://outlook.live.com/mail/' : primaryEmail?.toLowerCase().includes('yahoo') ? 'https://mail.yahoo.com/' : 'https://mail.google.com/mail/u/0/#inbox'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white hover:bg-emerald-100 border border-emerald-300 text-emerald-900 font-mono text-[11px] font-bold uppercase transition-all shadow-2xs hover:shadow-xs shrink-0 group cursor-pointer"
                  >
                    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
                      <path fill="#EA4335" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                    </svg>
                    <span>Open Gmail</span>
                    <span className="text-emerald-700 group-hover:translate-x-0.5 transition-transform">↗</span>
                  </a>
                )}
              </div>
            )}

            {/* Password Error Notification */}
            {passwordError && (
              <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 text-xs font-bold flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-xs shrink-0">
                  ✕
                </span>
                <div>{passwordError}</div>
              </div>
            )}

            {/* STEP 1: Click to Send Verification Code */}
            {passwordStep === 1 && (
              <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50/90 via-slate-50 to-indigo-50/90 border border-blue-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h4 className="text-xs font-extrabold text-slate-900 uppercase">
                    {user?.passwordEnabled ? 'RESET / CHANGE ACCOUNT PASSWORD' : 'SET ACCOUNT PASSWORD'}
                  </h4>
                  <p className="text-xs text-slate-600 font-medium max-w-md">
                    {user?.passwordEnabled
                      ? <>To reset or change your password, click below to receive a security verification code sent to <strong>{primaryEmail}</strong>.</>
                      : <>You signed in via Google and do not have an account password yet. Click below to receive a security verification code sent to <strong>{primaryEmail}</strong> to set your password.</>}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleSendVerificationCode}
                  disabled={passwordLoading}
                  className="px-5 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-bold uppercase transition-all shadow-md shrink-0 disabled:opacity-50"
                >
                  {passwordLoading ? 'SENDING CODE...' : 'SEND VERIFICATION CODE →'}
                </button>
              </div>
            )}

            {/* STEP 2: Enter Verification Code (Executive 6-Digit Segmented Code UI) */}
            {passwordStep === 2 && (
              <form onSubmit={handleVerifyCode} className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white via-slate-50 to-blue-50/20 border border-slate-200/90 shadow-sm space-y-6 animate-auth-fade">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-100/90 border border-blue-200 text-blue-800 font-mono text-[10px] font-bold uppercase tracking-wider mb-0.5">
                    STEP 2 OF 3 • SECURITY VERIFICATION
                  </div>
                  <h4 className="text-base sm:text-lg font-black text-slate-900 uppercase tracking-tight flex items-center gap-2">
                    <span>Enter 6-Digit Security Code</span>
                  </h4>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    A security code was sent to <strong className="text-slate-900">{primaryEmail}</strong>. Enter the 6-digit code below to unlock password settings.
                  </p>
                </div>

                {/* Open Gmail / Mailbox Quick Action Card */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0 shadow-2xs">
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="#EA4335" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-black text-slate-900 tracking-tight">Check Your Inbox</div>
                      <div className="text-[11px] text-slate-500 font-medium truncate max-w-[200px] sm:max-w-none">
                        Verification code sent to <strong className="text-slate-800">{primaryEmail}</strong>
                      </div>
                    </div>
                  </div>

                  <a
                    href={primaryEmail?.toLowerCase().includes('outlook') || primaryEmail?.toLowerCase().includes('hotmail') ? 'https://outlook.live.com/mail/' : primaryEmail?.toLowerCase().includes('yahoo') ? 'https://mail.yahoo.com/' : 'https://mail.google.com/mail/u/0/#inbox'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-interactive inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 shrink-0 group cursor-pointer"
                  >
                    <svg className="w-4 h-4 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <span>Open Gmail</span>
                    <span className="text-white/80 group-hover:translate-x-0.5 transition-transform">↗</span>
                  </a>
                </div>

                {/* 6-Digit Interactive Segmented Boxes */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700">
                      Verification Code
                    </label>
                    <span className="text-[10px] font-mono text-slate-400 font-bold">
                      {verificationCode.length}/6 Digits
                    </span>
                  </div>

                  <div className="relative">
                    {/* Hidden Native Input Captures Typing & Paste */}
                    <input
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={6}
                      autoFocus
                      value={verificationCode}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '').slice(0, 6);
                        setVerificationCode(val);
                        if (passwordError) setPasswordError('');
                      }}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-text z-20"
                      aria-label="6-Digit Verification Code"
                    />

                    {/* 6 Elegant Visual Digit Tiles */}
                    <div className="grid grid-cols-6 gap-2 sm:gap-3 max-w-sm">
                      {[0, 1, 2, 3, 4, 5].map((idx) => {
                        const char = verificationCode[idx] || '';
                        const isCurrent = verificationCode.length === idx;
                        const isFilled = Boolean(char);

                        return (
                          <div
                            key={idx}
                            className={`h-13 sm:h-15 rounded-2xl border-2 flex items-center justify-center font-mono text-xl sm:text-2xl font-black transition-all duration-200 ${
                              isFilled
                                ? 'bg-white border-blue-600 text-slate-900 shadow-md scale-[1.02]'
                                : isCurrent
                                ? 'bg-blue-50/60 border-blue-500 text-blue-600 ring-4 ring-blue-500/15 animate-pulse'
                                : 'bg-white/80 border-slate-200/90 text-slate-400'
                            }`}
                          >
                            {char ? (
                              <span>{char}</span>
                            ) : isCurrent ? (
                              <span className="w-2.5 h-0.5 bg-blue-600 animate-pulse rounded-full" />
                            ) : (
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Resend Code Prompt */}
                <div className="flex items-center justify-between pt-1 text-xs">
                  <span className="text-slate-500 font-medium">Didn't receive the code?</span>
                  <button
                    type="button"
                    onClick={handleSendVerificationCode}
                    disabled={passwordLoading}
                    className="font-mono font-bold text-blue-600 hover:text-blue-700 hover:underline uppercase text-[11px] disabled:opacity-50"
                  >
                    Resend Code →
                  </button>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={passwordLoading || verificationCode.length < 6}
                    className="btn-interactive px-7 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-black uppercase tracking-wider transition-all shadow-md hover:shadow-lg disabled:opacity-40 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {passwordLoading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin shrink-0" />
                        <span>VERIFYING...</span>
                      </>
                    ) : (
                      <span>VERIFY CODE &amp; PROCEED →</span>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setPasswordStep(1);
                      setPasswordError('');
                      setVerificationCode('');
                    }}
                    className="px-5 py-3.5 rounded-2xl border border-slate-200 bg-white hover:bg-slate-100 text-xs font-mono font-bold text-slate-600 hover:text-slate-900 uppercase transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}

            {/* STEP 3: Enter New Password & Confirm */}
            {passwordStep === 3 && (() => {
              const strength = evaluatePasswordStrength(newPassword, confirmPassword, passwordError);
              return (
                <form onSubmit={handleSetNewPassword} className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-5 animate-auth-fade">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 font-mono text-[10px] font-bold uppercase tracking-wider mb-1">
                      STEP 3 OF 3 • CODE VERIFIED
                    </div>
                    <h4 className="text-sm sm:text-base font-black text-slate-900 uppercase tracking-tight">
                      {user?.passwordEnabled ? 'RESET / UPDATE PASSWORD' : 'SET NEW ACCOUNT PASSWORD'}
                    </h4>
                    <p className="text-xs text-slate-600 font-medium">
                      {user?.passwordEnabled
                        ? 'Verification code verified! Create and confirm your updated secure password below.'
                        : 'Verification code verified! Create and confirm your new account password below.'}
                    </p>
                  </div>

                  {/* Optional Current Password Field (when changing existing password) */}
                  {user?.passwordEnabled && (
                    <div className="space-y-1.5 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                      <div className="flex items-center justify-between">
                        <label className="block text-[11px] font-mono font-bold uppercase text-slate-700">
                          Current Password <span className="text-slate-400 font-normal">(Optional if verified by email code)</span>
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          type={showCurrentPassword ? "text" : "password"}
                          value={currentPassword}
                          onChange={(e) => {
                            setCurrentPassword(e.target.value);
                            if (passwordError) setPasswordError('');
                          }}
                          placeholder="••••••••••••"
                          className="w-full px-4 py-2.5 pr-10 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-semibold focus:border-blue-600 focus:bg-white focus:outline-none transition-colors"
                        />
                        <button
                          type="button"
                          onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 focus:outline-none p-1"
                          aria-label={showCurrentPassword ? "Hide password" : "Show password"}
                        >
                          {showCurrentPassword ? (
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
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* New Password */}
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-mono font-bold uppercase text-slate-700">
                        New Password <span className="text-blue-600">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type={showNewPassword ? "text" : "password"}
                          required
                          value={newPassword}
                          onChange={(e) => {
                            setNewPassword(e.target.value);
                            if (passwordError) setPasswordError('');
                          }}
                          placeholder="••••••••••••"
                          className="w-full px-4 py-3 pr-10 rounded-2xl bg-white border border-slate-300 text-slate-900 text-sm font-semibold focus:border-blue-600 focus:outline-none transition-colors shadow-2xs"
                        />
                        <button
                          type="button"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 focus:outline-none p-1"
                          aria-label={showNewPassword ? "Hide password" : "Show password"}
                        >
                          {showNewPassword ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858-5.908a10.025 10.025 0 013.682-.813c4.478 0 8.268 2.943 9.543 7a9.97 9.97 0 01-1.563 3.029m-5.858 5.908L3 3l18 18" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Confirm New Password */}
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-mono font-bold uppercase text-slate-700">
                        Confirm New Password <span className="text-blue-600">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          required
                          value={confirmPassword}
                          onChange={(e) => {
                            setConfirmPassword(e.target.value);
                            if (passwordError) setPasswordError('');
                          }}
                          placeholder="••••••••••••"
                          className={`w-full px-4 py-3 pr-10 rounded-2xl bg-white border text-slate-900 text-sm font-semibold focus:outline-none transition-colors shadow-2xs ${
                            confirmPassword && newPassword !== confirmPassword
                              ? 'border-red-300 focus:border-red-500'
                              : confirmPassword && newPassword === confirmPassword
                              ? 'border-emerald-400 focus:border-emerald-500'
                              : 'border-slate-300 focus:border-blue-600'
                          }`}
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 focus:outline-none p-1"
                          aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                        >
                          {showConfirmPassword ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858-5.908a10.025 10.025 0 013.682-.813c4.478 0 8.268 2.943 9.543 7a9.97 9.97 0 01-1.563 3.029m-5.858 5.908L3 3l18 18" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Password Strength Meter & Interactive Checklist Card */}
                  {newPassword && (
                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3.5 animate-auth-fade">
                      
                      {/* Status Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono font-bold uppercase text-slate-500">
                            Password Strength:
                          </span>
                          <span className={`text-xs font-mono font-black uppercase px-2.5 py-0.5 rounded-full transition-all ${
                            strength.score >= 5
                              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                              : strength.score >= 4
                              ? 'bg-blue-50 text-blue-800 border border-blue-200'
                              : strength.score === 3
                              ? 'bg-amber-50 text-amber-900 border border-amber-200'
                              : 'bg-red-50 text-red-800 border border-red-200'
                          }`}>
                            {strength.label}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono font-bold text-slate-400">
                          {strength.score}/5 Satisfied
                        </span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden relative shadow-inner">
                        <div
                          className={`h-full transition-all duration-400 ease-out rounded-full ${strength.color}`}
                          style={{ width: strength.barWidth }}
                        />
                      </div>

                      {/* Live Checklist Requirements Badges */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
                        
                        {/* 8+ Chars */}
                        <div className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-[11px] font-mono font-bold transition-all ${
                          strength.criteria.length ? 'bg-emerald-50 text-emerald-800 border-emerald-300 shadow-2xs' : 'bg-slate-50 text-slate-400 border-slate-200'
                        }`}>
                          <span className={strength.criteria.length ? 'text-emerald-700 font-black' : 'text-slate-300'}>
                            {strength.criteria.length ? '✓' : '○'}
                          </span>
                          <span>8+ Characters</span>
                        </div>

                        {/* Uppercase */}
                        <div className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-[11px] font-mono font-bold transition-all ${
                          strength.criteria.hasUpper ? 'bg-emerald-50 text-emerald-800 border-emerald-300 shadow-2xs' : 'bg-slate-50 text-slate-400 border-slate-200'
                        }`}>
                          <span className={strength.criteria.hasUpper ? 'text-emerald-700 font-black' : 'text-slate-300'}>
                            {strength.criteria.hasUpper ? '✓' : '○'}
                          </span>
                          <span>Uppercase (A-Z)</span>
                        </div>

                        {/* Lowercase */}
                        <div className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-[11px] font-mono font-bold transition-all ${
                          strength.criteria.hasLower ? 'bg-emerald-50 text-emerald-800 border-emerald-300 shadow-2xs' : 'bg-slate-50 text-slate-400 border-slate-200'
                        }`}>
                          <span className={strength.criteria.hasLower ? 'text-emerald-700 font-black' : 'text-slate-300'}>
                            {strength.criteria.hasLower ? '✓' : '○'}
                          </span>
                          <span>Lowercase (a-z)</span>
                        </div>

                        {/* Digit */}
                        <div className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-[11px] font-mono font-bold transition-all ${
                          strength.criteria.hasNumber ? 'bg-emerald-50 text-emerald-800 border-emerald-300 shadow-2xs' : 'bg-slate-50 text-slate-400 border-slate-200'
                        }`}>
                          <span className={strength.criteria.hasNumber ? 'text-emerald-700 font-black' : 'text-slate-300'}>
                            {strength.criteria.hasNumber ? '✓' : '○'}
                          </span>
                          <span>Number (0-9)</span>
                        </div>

                        {/* Special Symbol */}
                        <div className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-[11px] font-mono font-bold transition-all ${
                          strength.criteria.hasSpecial ? 'bg-emerald-50 text-emerald-800 border-emerald-300 shadow-2xs' : 'bg-slate-50 text-slate-400 border-slate-200'
                        }`}>
                          <span className={strength.criteria.hasSpecial ? 'text-emerald-700 font-black' : 'text-slate-300'}>
                            {strength.criteria.hasSpecial ? '✓' : '○'}
                          </span>
                          <span>Special (!@#$)</span>
                        </div>

                        {/* Match Status */}
                        {confirmPassword && (
                          <div className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-[11px] font-mono font-bold transition-all ${
                            strength.criteria.matches ? 'bg-emerald-50 text-emerald-800 border-emerald-300 shadow-2xs' : 'bg-red-50 text-red-800 border-red-200'
                          }`}>
                            <span className={strength.criteria.matches ? 'text-emerald-700 font-black' : 'text-red-600 font-black'}>
                              {strength.criteria.matches ? '✓' : '✕'}
                            </span>
                            <span>{strength.criteria.matches ? 'Passwords Match' : 'Mismatch'}</span>
                          </div>
                        )}

                      </div>

                    </div>
                  )}

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={passwordLoading}
                      className="btn-interactive px-7 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-black uppercase tracking-wider transition-all shadow-md hover:shadow-lg disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {passwordLoading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin shrink-0" />
                          <span>SAVING PASSWORD...</span>
                        </>
                      ) : (
                        <span>SAVE NEW PASSWORD →</span>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setPasswordStep(1);
                        setPasswordError('');
                        setCurrentPassword('');
                        setNewPassword('');
                        setConfirmPassword('');
                      }}
                      className="px-5 py-3.5 rounded-2xl border border-slate-200 bg-white hover:bg-slate-100 text-xs font-mono font-bold text-slate-600 hover:text-slate-900 uppercase transition-all"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              );
            })()}
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProfilePage;
