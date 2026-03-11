export function Sponsors() {
  return (
    <section className="py-24 bg-slate-50 relative" id="sponsors">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-[#00e5ff]">Partners</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            Proudly supported by the finest technological and institutional bodies to bring Kriyeta 5.0 to life.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center space-y-16">
          
          <div className="w-full text-center">
            <h3 className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-8 font-semibold">Hosted By</h3>
            <div className="flex justify-center items-center">
              <div className="bg-white border border-slate-200 px-8 py-6 rounded-2xl shadow-sm hover:shadow-md hover:border-slate-300 transition-all w-full max-w-md text-center">
                <p className="text-2xl font-bold text-slate-900 tracking-tight">Acropolis Institute of Technology and Research</p>
                <p className="text-slate-600 mt-2">Indore, M.P.</p>
              </div>
            </div>
          </div>

          <div className="w-full text-center">
            <h3 className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-8 font-semibold">Technical Partners</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {['IEEE Madhya Pradesh Section', 'IEEE Student Branch (SBA04301S)', 'IEEE SIGHT'].map((partner, idx) => (
                <div key={idx} className="bg-white border border-slate-200 px-8 py-6 rounded-2xl w-full sm:w-auto shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
                  <p className="text-lg font-bold text-slate-800">{partner}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full text-center">
            <h3 className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-8 font-semibold">Supporting Cells</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {['Acropolis Institute of Management (AIM)', 'Entrepreneurship Development Cell (EDC)'].map((cell, idx) => (
                <div key={idx} className="bg-white border border-slate-200 px-8 py-4 rounded-full shadow-sm hover:border-[#00e5ff]/50 transition-colors">
                  <p className="text-slate-700 font-medium">{cell}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
