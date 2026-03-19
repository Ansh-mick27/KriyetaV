import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Tracks } from "./components/Tracks"
import { Prizes } from "./components/Prizes"
import { Rules } from "./components/Rules"
import { Sponsors } from "./components/Sponsors"
import { Footer } from "./components/Footer"
import { Rounds } from "./components/Rounds"

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#00e5ff]/30">
      <Hero />
      <About />
      <Rounds />
      <Tracks />
      <Prizes />
      <Rules />
      <Sponsors />
      <Footer />
    </div>
  )
}

export default App
