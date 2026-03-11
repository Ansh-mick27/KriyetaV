import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { useState, useEffect } from "react";

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState(() => {
    const diff = targetDate.getTime() - Date.now();
    return {
      days: Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))),
      hours: Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24)),
      minutes: Math.max(0, Math.floor((diff / (1000 * 60)) % 60)),
      seconds: Math.max(0, Math.floor((diff / 1000) % 60)),
    };
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = targetDate.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}

export function Hero() {
  const eventDate = new Date("2026-04-17T09:00:00+05:30");
  const { days, hours, minutes, seconds } = useCountdown(eventDate);

  const countdownItems = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  return (
    <BackgroundBeamsWithCollision className="min-h-screen pt-20 pb-16">
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

        <div className="flex flex-wrap gap-4 justify-center items-center mb-12">
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

        <div className="flex flex-col sm:flex-row gap-6 mb-16">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-[0_0_40px_rgba(79,70,229,0.4)] hover:shadow-[0_0_60px_rgba(79,70,229,0.6)] transition-all duration-300 transform hover:-translate-y-1">
            Register Now
          </button>
          <button className="px-8 py-4 bg-slate-900/5 hover:bg-slate-900/10 border border-slate-900/10 text-slate-800 font-bold rounded-xl backdrop-blur-sm transition-all duration-300">
            View Tracks
          </button>
        </div>

        {/* Countdown Timer */}
        <div className="w-full max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500 font-semibold mb-6">
            Event Starts In
          </p>
          <div className="flex justify-center gap-4 md:gap-8">
            {countdownItems.map((item) => (
              <div key={item.label} className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-md flex items-center justify-center mb-2 relative overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-[#00e5ff]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-600">
                    {String(item.value).padStart(2, "0")}
                  </span>
                </div>
                <span className="text-xs md:text-sm font-medium text-slate-500 tracking-wider uppercase">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
