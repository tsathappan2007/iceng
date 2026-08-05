import React from 'react';

const Counter = () => {
  const stats = [
    { label: 'SCOPUS PAPERS', value: '300+' },
    { label: 'KEYNOTE SPEAKERS', value: '12+' },
    { label: 'GLOBAL COUNTRIES', value: '25+' },
    { label: 'CIT IT ALUMNI', value: '2,500+' }
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-200 relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm">
              <div className="text-3xl sm:text-4xl font-black text-blue-600 font-mono tracking-tight">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs font-bold tracking-widest text-slate-600 mt-2 uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
