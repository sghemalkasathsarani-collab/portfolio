import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Research from './components/Research';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Honours from './components/Honours';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App: React.FC = () => (
  <div className="min-h-screen bg-paper text-ink">
    <Header />
    <main>
      <Intro />
      <Research />
      <Projects />
      <Experience />
      <Honours />
      <Skills />
    </main>
    <Contact />
  </div>
);

export default App;
