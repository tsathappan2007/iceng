import React from 'react';

const AboutDepartment = () => {
  return (
    <section id="about-dept" className="py-20 px-4 relative z-10 bg-slate-50/50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Department Text & Highlight Cards */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div>
              {/* Eyebrow Tag */}
              <div className="inline-block mb-3">
                <span className="text-xs font-extrabold tracking-widest text-blue-600 uppercase bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200/80 shadow-sm">
                  ORGANIZING DEPARTMENT
                </span>
              </div>

              {/* Stacked 2-Tone Title */}
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-[0.95] mb-6 select-none">
                <span className="text-slate-950 block">DEPARTMENT OF</span>
                <span className="text-blue-600 block">INFORMATION</span>
                <span className="text-blue-600 block">TECHNOLOGY</span>
              </h2>

              {/* Paragraphs with Larger, Highly Readable Typography */}
              <div className="space-y-4 max-w-2xl">
                <p className="text-base sm:text-lg font-extrabold text-slate-900 leading-relaxed">
                  The Department of Information Technology at Chennai Institute of Technology focuses on computation, algorithm analysis, programming languages, software engineering, and interdisciplinary computing research.
                </p>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  Rooted in foundational engineering, mathematics, and linguistics, the department cultivates a multidimensional computing paradigm. Its research scope connects deeply with artificial intelligence, computer vision, network security, cloud computing, IoT, and natural language processing.
                </p>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  Driven by a dedicated team of research-focused faculty and well-equipped innovation laboratories, the department constantly strives to advance academic standards and foster impactful solutions for real-world industrial and scientific challenges.
                </p>
              </div>
            </div>

            {/* Bottom 3 Highlight Cards with Larger Text */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50/90 via-slate-50 to-indigo-50/90 border border-blue-200/80 shadow-sm space-y-1.5">
                <div className="text-sm font-extrabold text-slate-900">Computation &amp; Software</div>
                <div className="text-xs text-slate-600 leading-relaxed">
                  Advanced algorithm design, software engineering paradigms, and complex problem-solving.
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50/90 via-slate-50 to-indigo-50/90 border border-blue-200/80 shadow-sm space-y-1.5">
                <div className="text-sm font-extrabold text-slate-900">Interdisciplinary Research</div>
                <div className="text-xs text-slate-600 leading-relaxed">
                  Fusing computing with AI, bioinformatics, cloud architectures, and network security.
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50/90 via-slate-50 to-indigo-50/90 border border-blue-200/80 shadow-sm space-y-1.5">
                <div className="text-sm font-extrabold text-slate-900">Innovation &amp; Excellence</div>
                <div className="text-xs text-slate-600 leading-relaxed">
                  Fostering cutting-edge research labs, student innovation, and national laurels.
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-Impact Image Card */}
          <div className="lg:col-span-5 flex">
            <div className="relative w-full rounded-3xl overflow-hidden border border-slate-200 shadow-xl min-h-[420px] lg:min-h-[500px] flex">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                alt="Department of IT Research & Innovation Labs"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex items-end p-6 sm:p-8">
                <div className="text-white">
                  <div className="text-xs font-mono font-extrabold text-amber-400 uppercase tracking-widest mb-1">
                    RESEARCH &amp; INNOVATION LABS
                  </div>
                  <div className="text-lg sm:text-xl font-extrabold leading-snug">
                    Department of IT, CIT Chennai
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutDepartment;
