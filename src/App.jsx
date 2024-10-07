import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Technologies from './components/Technologies.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative h-full w-full">
      <div className="fixed top-0 left-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="relative z-10 h-full w-full overflow-y-auto lg: overflow-hidden">
        <Navbar />
        <Hero />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
