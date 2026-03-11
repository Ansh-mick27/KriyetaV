import { Mail, Phone, MapPin, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl font-black text-white mb-6">
              KRIYETA <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-[#00e5ff]">5.0</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Pioneering Safe Cyberspace. A 36-hour women-led national hackathon aiming to bridge technology, light, and security.
            </p>
          </div>

          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-[#00e5ff] shrink-0 mt-1" />
                <span>Acropolis Institute of Technology and Research, Indore (M.P.)</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-[#00e5ff] shrink-0" />
                <span>+91 93404 01866 (Dr. Namrata Tapaswi)</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-[#00e5ff] shrink-0" />
                <a href="mailto:kriyeta@acropolis.in" className="hover:text-white transition-colors">kriyeta@acropolis.in</a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-[#00e5ff] shrink-0" />
                <a href="mailto:hodaiml@acropolis.in" className="hover:text-white transition-colors">hodaiml@acropolis.in</a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-slate-400 hover:text-[#00e5ff] transition-colors">About</a></li>
              <li><a href="#tracks" className="text-slate-400 hover:text-[#00e5ff] transition-colors">Tracks</a></li>
              <li><a href="#rules" className="text-slate-400 hover:text-[#00e5ff] transition-colors">Rules & Eligibility</a></li>
              <li><a href="#sponsors" className="text-slate-400 hover:text-[#00e5ff] transition-colors">Partners</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Kriyeta 5.0. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <span>Hosted with</span>
            <Globe className="w-4 h-4 text-[#00e5ff]" />
            <span>by Acropolis Institute</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
