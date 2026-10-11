import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Research from './components/Research';
import Experience from './components/Experience';
import Education from './components/Education';
import Honours from './components/Honours';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App: React.FC = () => (
  <div className="min-h-screen bg-paper text-ink">
    <Header />
    <main>
      <Intro />
      <Research />
      <Experience />
      <Education />
      <Honours />
      <Skills />
    </main>
    <Contact />
  </div>
);

export default App;
