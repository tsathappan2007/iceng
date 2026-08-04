import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Counter from '../components/Counter';

const HomePage = () => {
  return (
    <div className="space-y-16">
      {/* Landing Hero Section */}
      <Hero />

      {/* Quick Overview & Key Stats Teaser */}
      <section className="py-16 px-4 max-w-6xl mx-auto text-center relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-yellow-400 to-cyan-400" />
          
          <span className="text-xs font-extrabold tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20 shadow-[0_0_15px_rgba(0,245,212,0.15)]">
            BIENNIAL INTERNATIONAL FLAGSHIP
          </span>

          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mt-6 mb-4">
            Welcome to <span className="text-yellow-400 glow-subtle">ICAINGCIT 2027</span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed mb-8">
            The International Conference on Next-Gen Computing &amp; Information Technology brings together top academic pioneers, researchers, and industry visionaries from across 30+ countries to shape the future of AI, Cloud, Cybersecurity, and IoT.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
              <div className="text-3xl font-black text-white font-mono">
                <Counter end={30} suffix="+" duration={2000} />
              </div>
              <div className="text-[10px] font-bold text-gray-400 uppercase mt-1">Countries</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
              <div className="text-3xl font-black text-cyan-400 font-mono">
                <Counter end={100} suffix="%" duration={2000} />
              </div>
              <div className="text-[10px] font-bold text-gray-400 uppercase mt-1">Peer Reviewed</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
              <div className="text-3xl font-black text-yellow-400 font-mono">
                <Counter end={150} suffix="+" duration={2000} />
              </div>
              <div className="text-[10px] font-bold text-gray-400 uppercase mt-1">Papers</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
              <div className="text-3xl font-black text-purple-400 font-mono">
                <Counter end={6000} suffix="+" duration={2000} />
              </div>
              <div className="text-[10px] font-bold text-gray-400 uppercase mt-1">Students</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/about"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-extrabold text-xs uppercase tracking-wider transition-all"
            >
              LEARN MORE ABOUT EVENT
            </Link>
            <Link
              to="/submit"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 via-yellow-400 to-cyan-400 text-obsidian-950 font-black text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all"
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
