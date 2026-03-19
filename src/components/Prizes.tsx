import { Trophy, Medal, Award } from "lucide-react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export function Prizes() {
  const prizes = [
    {
      title: "Runner Up",
      amount: "₹50,000",
      icon: <Medal className="w-12 h-12 text-slate-300" />,
      color: "from-slate-400 to-slate-200",
      scale: "scale-95"
    },
    {
      title: "Winner",
      amount: "₹75,000",
      icon: <Trophy className="w-16 h-16 text-yellow-400" />,
      color: "from-yellow-500 to-amber-300",
      scale: "scale-105 z-10"
    },
    {
      title: "Second Runner Up",
      amount: "₹25,000",
      icon: <Award className="w-12 h-12 text-amber-700" />,
      color: "from-amber-600 to-amber-500",
      scale: "scale-90"
    }
  ];

  return (
    <BackgroundBeamsWithCollision className="py-24" id="prizes">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Prize <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">Pool</span>
          </h2>
          <p className="text-xl text-yellow-500/80 font-semibold tracking-widest uppercase">
            ₹1,50,000 Total Prizes!
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-end gap-6 md:gap-0 mt-12 px-4">
          {prizes.map((prize, idx) => (
            <div 
              key={idx}
              className={`flex-1 flex flex-col items-center justify-end bg-white/80 backdrop-blur-sm min-h-[300px] rounded-3xl border border-slate-200 shadow-md p-8 w-full md:w-1/3 transition-all duration-500 hover:-translate-y-4 hover:shadow-lg ${prize.scale}`}
            >
              <div className={`mb-6 p-4 rounded-full bg-gradient-to-br ${prize.color} bg-opacity-10 animate-pulse`}>
                {prize.icon}
              </div>
              <h3 className="text-xl text-slate-600 font-medium mb-2">{prize.title}</h3>
              <p className={`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${prize.color}`}>
                {prize.amount}
              </p>
            </div>
          ))}
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
