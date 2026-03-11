import { 
  ShieldCheck, 
  HeartHandshake, 
  Wallet, 
  Activity, 
  Accessibility, 
  GraduationCap, 
  Cpu, 
  Leaf, 
  Sparkles 
} from "lucide-react";

export function Tracks() {
  const tracks = [
    {
      title: "Pioneering Safe Cyberspace",
      desc: "Bridging technology and light for advanced security solutions.",
      icon: <ShieldCheck className="w-6 h-6 text-[#00e5ff]" />,
      color: "from-[#00e5ff]/20 to-transparent border-[#00e5ff]/30"
    },
    {
      title: "AI for Social Good",
      desc: "Leveraging artificial intelligence to solve community and social issues.",
      icon: <HeartHandshake className="w-6 h-6 text-pink-400" />,
      color: "from-pink-500/20 to-transparent border-pink-500/30"
    },
    {
      title: "FinTech for Women",
      desc: "Innovations in financial technology catering to female users.",
      icon: <Wallet className="w-6 h-6 text-emerald-400" />,
      color: "from-emerald-500/20 to-transparent border-emerald-500/30"
    },
    {
      title: "Healthcare & Wellness",
      desc: "Technological solutions for health and psychological well-being.",
      icon: <Activity className="w-6 h-6 text-rose-400" />,
      color: "from-rose-500/20 to-transparent border-rose-500/30"
    },
    {
      title: "Accessibility & Inclusivity",
      desc: "Ensuring technology is safe and reachable for everyone.",
      icon: <Accessibility className="w-6 h-6 text-amber-400" />,
      color: "from-amber-500/20 to-transparent border-amber-500/30"
    },
    {
      title: "Education & Skilling",
      desc: "Bridging the gap in modern education and technical skills.",
      icon: <GraduationCap className="w-6 h-6 text-blue-400" />,
      color: "from-blue-500/20 to-transparent border-blue-500/30"
    },
    {
      title: "IoT based AI",
      desc: "Integrating Internet of Things with Artificial Intelligence.",
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      color: "from-purple-500/20 to-transparent border-purple-500/30"
    },
    {
      title: "Sustainable Technologies",
      desc: "Eco-friendly and green sustainable tech solutions.",
      icon: <Leaf className="w-6 h-6 text-lime-400" />,
      color: "from-lime-500/20 to-transparent border-lime-500/30"
    },
    {
      title: "AI & Emerging Tech",
      desc: "Exploring the frontiers of machine learning and modern tech.",
      icon: <Sparkles className="w-6 h-6 text-indigo-400" />,
      color: "from-indigo-500/20 to-transparent border-indigo-500/30"
    }
  ];

  return (
    <section className="py-24 bg-slate-950 relative" id="tracks">
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Themes & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-blue-500">Tracks</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-400">
            Build solutions across 9 diverse tracks, tackling the world's most pressing challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-2xl bg-gradient-to-br ${track.color} border bg-slate-900/40 backdrop-blur-sm hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors"></div>
              
              <div className="w-12 h-12 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center mb-6 shadow-lg">
                {track.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{track.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {track.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
