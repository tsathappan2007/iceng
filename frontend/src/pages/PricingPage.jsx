import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

const PricingPage = () => {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  const registrationTiers = [
    {
      id: 'indian_author',
      label: 'Indian Academic Author / Scholar',
      sub: 'Faculty, PhD Scholars & Masters Students from Indian Academic Institutions',
      fee: '₹7,500',
      currency: 'INR',
      badge: 'POPULAR',
      features: [
        'IEEE Xplore & Scopus Proceeding Publication',
        'In-Person / Virtual Oral Presentation Slot',
        'Official Author Certificate & Conference Kit',
        '3-Day Lunch, Tea & Refreshments Pass'
      ]
    },
    {
      id: 'ieee_indian',
      label: 'IEEE Member (Indian Author)',
      sub: 'Active IEEE Student & Professional Members (Valid IEEE Membership ID Required)',
      fee: '₹6,000',
      currency: 'INR',
      badge: 'IEEE DISCOUNT',
      features: [
        'IEEE Member 20% Discounted Rate',
        'IEEE Xplore Proceeding Publication & Indexing',
        'Certificate of Presentation & Delegate Package',
        'Access to all Keynote & Technical Tracks'
      ]
    },
    {
      id: 'indian_industry',
      label: 'Indian Corporate / Industry Delegate',
      sub: 'Engineers, Corporate R&D Scientists & Industry Delegates from India',
      fee: '₹10,000',
      currency: 'INR',
      badge: 'INDUSTRY',
      features: [
        'Corporate Author & Proceeding Indexing',
        'Industry Networking Showcase Slot',
        'Full Conference Kit & Exhibitor Access',
        'Certificate of Presentation & Participation'
      ]
    },
    {
      id: 'foreign_author',
      label: 'Foreign / International Author',
      sub: 'International Faculty, Researchers & Scholars from Overseas Institutions',
      fee: '$250',
      currency: 'USD',
      badge: 'INTERNATIONAL',
      features: [
        'International Delegate Proceeding Indexing',
        'Virtual / In-Person Presentation Pass',
        'Guided Campus Tour & Cultural Event',
        'Digital Certificate & Conference Package'
      ]
    },
    {
      id: 'ieee_foreign',
      label: 'IEEE Member (Foreign Author)',
      sub: 'International IEEE Student & Professional Members Overseas',
      fee: '$200',
      currency: 'USD',
      badge: 'IEEE DISCOUNT',
      features: [
        'IEEE International Member Discount Rate',
        'IEEE Xplore Proceeding Inclusion',
        'Digital Presentation Certificate',
        'Full Technical Track & Keynote Pass'
      ]
    }
  ];

  const handleSelectTierAndSubmit = (tierId) => {
    try {
      const saved = localStorage.getItem('icaingcit_submission_draft');
      const draft = saved ? JSON.parse(saved) : {};
      draft.selectedTierId = tierId;
      localStorage.setItem('icaingcit_submission_draft', JSON.stringify(draft));
    } catch (err) {
      console.warn('Could not save selected tier:', err);
    }

    if (isSignedIn) {
      navigate('/submit');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen pt-32 sm:pt-36 pb-20 px-4 sm:px-6 bg-slate-50/70 relative z-10">

      {/* Background Ambient Blur Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto space-y-12">

        {/* Hero Title Container */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/90 border border-blue-300 text-blue-900 font-mono text-[10px] font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            IEEE ICAINGCIT 2027 REGISTRATION RATES
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">
            CONFERENCE PRICING &amp; TIERS
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium leading-relaxed">
            Choose your delegate registration rate category below. All author registrations include full IEEE proceedings publication, presentation slot, and conference delegate package.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {registrationTiers.map((tier) => (
            <div
              key={tier.id}
              className="rounded-[32px] bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-7 sm:p-8 flex flex-col justify-between group"
            >
              <div>
                {/* Top Badge Row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-mono font-black uppercase tracking-widest px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800">
                    DELEGATE TIER
                  </span>

                  <span className="px-3 py-1 rounded-full font-mono text-[10px] font-black uppercase bg-amber-400 text-slate-950 shadow-xs">
                    {tier.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-2 mb-6">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                    {tier.label}
                  </h3>
                  <p className="text-xs font-medium text-slate-600 leading-relaxed">
                    {tier.sub}
                  </p>
                </div>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-slate-100">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black text-blue-700 tracking-tight">
                      {tier.fee}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-500 uppercase">
                      ({tier.currency})
                    </span>
                  </div>
                </div>

                {/* Feature List */}
                <div className="space-y-3 text-xs font-medium text-slate-700">
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fee Inclusions & Policy Information Card */}
        <div className="p-8 sm:p-10 rounded-[36px] bg-gradient-to-r from-blue-50/90 via-slate-50 to-indigo-50/90 border border-blue-200/90 shadow-md space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-blue-200/80 pb-4">
            <div>
              <span className="text-[10px] font-mono font-bold text-blue-700 uppercase tracking-widest">
                IMPORTANT INFORMATION
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase mt-0.5">
                REGISTRATION INCLUSIONS &amp; POLICIES
              </h3>
            </div>

            <Link
              to={isSignedIn ? "/submit" : "/login"}
              className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-bold uppercase transition-all shadow-md shrink-0"
            >
              GO TO SUBMISSION PORTAL →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-medium text-slate-700">
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-base">
                📄
              </div>
              <h4 className="font-extrabold text-slate-900 uppercase">IEEE Proceeding Indexing</h4>
              <p className="text-slate-600 leading-relaxed">
                Accepted and presented papers will be submitted for inclusion into IEEE Xplore digital library and indexed in Scopus.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-base">
                🎓
              </div>
              <h4 className="font-extrabold text-slate-900 uppercase">IEEE Member Discount</h4>
              <p className="text-slate-600 leading-relaxed">
                Valid active IEEE Student/Professional membership number must be provided during checkout to avail member discount.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-base">
                💳
              </div>
              <h4 className="font-extrabold text-slate-900 uppercase">Supported Payment Modes</h4>
              <p className="text-slate-600 leading-relaxed">
                Payments accepted via UPI / UTR Reference, Credit Cards, Debit Cards, and Net Banking across major Indian banks.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PricingPage;
