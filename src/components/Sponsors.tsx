export function Sponsors() {
  return (
    <section className="py-24 bg-slate-900 relative" id="sponsors">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-[#00e5ff]">Partners</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-400">
            Proudly supported by the finest technological and institutional bodies to bring Kriyeta 5.0 to life.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center space-y-16">
          
          <div className="w-full text-center">
            <h3 className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-8 font-semibold">Hosted By</h3>
            <div className="flex justify-center items-center">
              <div className="bg-white/5 border border-white/10 px-8 py-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors w-full max-w-md text-center">
                <p className="text-2xl font-bold text-white tracking-tight">Acropolis Institute of Technology and Research</p>
                <p className="text-slate-400 mt-2">Indore, M.P.</p>
              </div>
            </div>
          </div>

          <div className="w-full text-center">
            <h3 className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-8 font-semibold">Technical Partners</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {['IEEE Madhya Pradesh Section', 'IEEE Student Branch (SBA04301S)', 'IEEE SIGHT'].map((partner, idx) => (
                <div key={idx} className="bg-slate-950 border border-slate-800 px-8 py-6 rounded-2xl w-full sm:w-auto hover:-translate-y-1 transition-transform">
                  <p className="text-lg font-bold text-slate-200">{partner}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full text-center">
            <h3 className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-8 font-semibold">Supporting Cells</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {['Acropolis Institute of Management (AIM)', 'Entrepreneurship Development Cell (EDC)'].map((cell, idx) => (
                <div key={idx} className="bg-slate-950 border border-slate-800 px-8 py-4 rounded-full hover:border-[#00e5ff]/50 transition-colors">
                  <p className="text-slate-300 font-medium">{cell}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
