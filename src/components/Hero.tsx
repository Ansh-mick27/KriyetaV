import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export function Hero() {
  return (
    <BackgroundBeamsWithCollision className="min-h-screen pt-20">
      <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 text-center">
        <h2 className="text-sm font-bold tracking-widest text-[#00e5ff] uppercase mb-4 tracking-[0.2em]">
          17th - 18th April 2026 • Indore (M.P.)
        </h2>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 font-sans tracking-tighter mb-6 relative">
          KRIYETA <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-500 to-[#00e5ff]">5.0</span>
          
          <div className="absolute -inset-1 blur-3xl opacity-20 bg-gradient-to-r from-purple-500 via-indigo-500 to-[#00e5ff] -z-10"></div>
        </h1>

        <p className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-600 font-medium mb-8 leading-relaxed">
          Pioneering Safe Cyberspace – Bridging Technology and Light for Security
        </p>

        <div className="flex flex-wrap gap-4 justify-center items-center mb-16">
          <span className="px-6 py-2 rounded-full bg-slate-900/5 border border-slate-900/10 text-slate-700 font-medium backdrop-blur-sm">
            Discover
          </span>
          <span className="px-6 py-2 rounded-full bg-slate-900/5 border border-slate-900/10 text-slate-700 font-medium backdrop-blur-sm">
            Innovate
          </span>
          <span className="px-6 py-2 rounded-full bg-slate-900/5 border border-slate-900/10 text-slate-700 font-medium backdrop-blur-sm">
            Transform
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-[0_0_40px_rgba(79,70,229,0.4)] hover:shadow-[0_0_60px_rgba(79,70,229,0.6)] transition-all duration-300 transform hover:-translate-y-1">
            Register Now
          </button>
          <button className="px-8 py-4 bg-slate-900/5 hover:bg-slate-900/10 border border-slate-900/10 text-slate-800 font-bold rounded-xl backdrop-blur-sm transition-all duration-300">
            View Tracks
          </button>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
