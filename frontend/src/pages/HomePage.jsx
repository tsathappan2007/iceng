import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import Hero from '../components/Hero';

const HomePage = () => {
  const { isSignedIn } = useUser();

  const stats = [
    { label: 'GLOBAL COUNTRIES', value: '30+', color: 'text-blue-600' },
    { label: 'PEER REVIEWED', value: '100%', color: 'text-amber-500' },
    { label: 'ACCEPTED PAPERS', value: '150+', color: 'text-blue-600' },
    { label: 'DELEGATES & ALUMNI', value: '2,500+', color: 'text-amber-500' }
  ];

  return (
    <div className="space-y-16 bg-[#f8fafc]">
      {/* Landing Hero Section */}
      <Hero />

      {/* Quick Overview & Key Stats Teaser */}
      <section className="py-16 px-4 max-w-6xl mx-auto text-center relative z-10">
        <div className="p-8 sm:p-12 rounded-[36px] bg-white border border-slate-200/90 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
          
          {/* Top Royal Blue Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[3.5px] bg-blue-600" />
          
          <span className="text-xs font-extrabold tracking-widest text-blue-800 uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 shadow-sm">
            BIENNIAL INTERNATIONAL FLAGSHIP
          </span>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight mt-6 mb-4">
            Welcome to <span className="text-blue-600 glow-title">ICAINGCIT 2027</span>
          </h2>

          <p className="text-slate-700 text-sm sm:text-base font-medium max-w-3xl mx-auto leading-relaxed mb-8">
            The International Conference on Next-Gen Computing &amp; Information Technology brings together top academic pioneers, researchers, and industry visionaries from across 30+ countries to shape the future of AI, Cloud, Cybersecurity, and IoT.
          </p>

          {/* Key Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/80 via-slate-50 to-indigo-50/80 border border-slate-200/90 text-center shadow-md hover:shadow-lg hover:border-blue-400 transition-all duration-300">
                <div className={`text-3xl font-black font-mono ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-[10px] font-extrabold text-slate-600 uppercase mt-1 tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/about"
              className="px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-900 font-extrabold text-xs uppercase tracking-wider transition-all shadow-sm"
            >
              LEARN MORE ABOUT EVENT
            </Link>
            <Link
              to={isSignedIn ? "/submit" : "/login"}
              className="px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all"
            >
              SUBMIT MANUSCRIPT
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
