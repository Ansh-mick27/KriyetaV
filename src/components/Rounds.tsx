import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Calendar, Users, Trophy } from "lucide-react";

export function Rounds() {
  const timeline = [
    {
      round: "Round 1: PPT Round",
      dates: "March 20, 2026 - April 08, 2026",
      format: "Online (Unstop)",
      details: "Submit a presentation covering the idea overview, problem statement, solution, innovation, and feasibility (Max 10 slides).",
      icon: <Calendar className="w-6 h-6 text-[#00e5ff]" />,
      color: "from-[#00e5ff]/20 to-transparent border-[#00e5ff]/30",
    },
    {
      round: "Shortlist Declaration",
      dates: "April 12, 2026",
      format: "Online",
      details: "Teams selected for the next round will be declared based on PPT submissions.",
      icon: <Users className="w-6 h-6 text-purple-400" />,
      color: "from-purple-500/20 to-transparent border-purple-500/30",
    },
    {
      round: "Round 2: 36-Hour Hackathon",
      dates: "April 17, 2026 - April 19, 2026",
      format: "Offline @ Acropolis Institute, Indore",
      details: "An in-person idea presentation and 36-hour coding hackathon.",
      icon: <Trophy className="w-6 h-6 text-indigo-400" />,
      color: "from-indigo-500/20 to-transparent border-indigo-500/30",
    }
  ];

  return (
    <BackgroundBeamsWithCollision className="py-24" id="rounds">
      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">Timeline</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            Keep track of all important dates and stages of Kriyeta 5.0
          </p>
        </div>

        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {timeline.map((item, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-2xl bg-gradient-to-br ${item.color} border bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group flex flex-col md:flex-row gap-6 items-start md:items-center`}
            >
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-slate-900">{item.round}</h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                    {item.format}
                  </span>
                </div>
                <p className="text-indigo-600 font-bold text-sm tracking-wide uppercase mb-3">
                  {item.dates}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
