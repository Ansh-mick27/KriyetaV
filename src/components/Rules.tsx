import { AlertTriangle, Clock, Users, Zap } from "lucide-react";

export function Rules() {
  const rules = [
    {
      title: "Women-Led Teams",
      desc: "Every participating team MUST be mandatorily led by a female team leader to encourage women in tech leadership.",
      icon: <Users className="w-6 h-6 text-pink-400" />
    },
    {
      title: "36-Hour Hackathon",
      desc: "This is an intense, continuous 36-hour live coding event. Participants must build their entire product within this timeframe.",
      icon: <Clock className="w-6 h-6 text-[#00e5ff]" />
    },
    {
      title: "Eligibility",
      desc: "Open to students from engineering, technology, agriculture, pharmacy, and applied science backgrounds across the nation.",
      icon: <Zap className="w-6 h-6 text-yellow-400" />
    },
    {
      title: "Nationwide Participation",
      desc: "Participants can join from anywhere across India. Accommodations and reporting details will be shared upon selection.",
      icon: <AlertTriangle className="w-6 h-6 text-emerald-400" />
    }
  ];

  return (
    <section className="py-24 bg-white" id="rules">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Rules & <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Eligibility</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              KRIYETA 5.0 is designed to be an inclusive, competitive, and highly rewarding environment. To ensure fairness and adhere to our mission of empowering women in tech, please note the following core guidelines.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-pink-500/10 border border-pink-500/30 text-pink-300">
              <AlertTriangle className="w-5 h-5" />
              <span className="text-sm font-medium">Failure to comply with the team composition rules will result in disqualification.</span>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {rules.map((rule, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 border border-slate-200 shadow-sm">
                    {rule.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{rule.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{rule.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
