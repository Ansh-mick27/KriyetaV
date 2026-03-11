import { Target, Lightbulb, Users } from "lucide-react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export function About() {
  const cards = [
    {
      title: "Our Mission",
      icon: <Target className="w-8 h-8 text-[#00e5ff]" />,
      description: "To foster innovation, collaboration, and technological breakthroughs by empowering girls and young women to pursue excellence in STEM. Solving real-world challenges through technology and leadership."
    },
    {
      title: "Our Vision",
      icon: <Lightbulb className="w-8 h-8 text-purple-500" />,
      description: "To create a nationwide platform where women innovators can lead technological change, with a specific focus on pioneering safe cyberspace and creating deep social impact."
    },
    {
      title: "The Format",
      icon: <Users className="w-8 h-8 text-indigo-500" />,
      description: "A grueling but exhilarating 36-hour live hackathon where the brightest female-led teams from across the nation converge to design, build, and deploy groundbreaking solutions."
    }
  ];

  return (
    <BackgroundBeamsWithCollision className="py-24" id="about">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-[#00e5ff]">Kriyeta 5.0</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-600">
            An exclusive, nationwide women-led hackathon aimed at encouraging female leadership in technology and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm border border-slate-200 p-8 rounded-2xl hover:bg-white hover:border-slate-300 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-white border border-slate-200 shadow-sm flex items-center justify-center rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">{card.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
