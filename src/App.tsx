import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Research from './components/Research';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Honours from './components/Honours';
import Skills from './components/Skills';
import Contact from './components/Contact';

const ProjectPage = lazy(() => import('./components/ProjectPage'));

// '#projects/<slug>' opens that project's page, so a copied link or a refresh lands back on it
const parseHash = (): string | null => {
  const [section, slug] = window.location.hash.replace(/^#\/?/, '').split('/');
  return section === 'projects' && slug ? decodeURIComponent(slug) : null;
};

const App: React.FC = () => {
  const [projectSlug, setProjectSlug] = useState<string | null>(parseHash);
  // Section to scroll to once the home page has rendered (when leaving a project page)
  const pendingSection = useRef<string | null>(null);

  const openProject = (slug: string) => {
    setProjectSlug(slug);
    window.history.pushState(null, '', `#projects/${encodeURIComponent(slug)}`);
    window.scrollTo(0, 0);
  };

  const goHome = () => {
    if (projectSlug) {
      setProjectSlug(null);
      window.history.pushState(null, '', window.location.pathname + window.location.search);
    }
    window.scrollTo({ top: 0, behavior: projectSlug ? 'auto' : 'smooth' });
  };

  const goToSection = (id: string) => {
    if (!projectSlug) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    pendingSection.current = id;
    setProjectSlug(null);
    window.history.pushState(null, '', window.location.pathname + window.location.search);
  };

  useEffect(() => {
    if (projectSlug || !pendingSection.current) return;
    document.getElementById(pendingSection.current)?.scrollIntoView();
    pendingSection.current = null;
  }, [projectSlug]);

  // Browser Back/Forward moves between the home page and project pages
  useEffect(() => {
    const onPop = () => {
      setProjectSlug(parseHash());
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header onHome={goHome} onSection={goToSection} />
      {projectSlug ? (
        <Suspense fallback={<div className="min-h-[60vh]" />}>
          <ProjectPage slug={projectSlug} onBack={() => goToSection('projects')} onSelectProject={openProject} />
        </Suspense>
      ) : (
        <>
          <main>
            <Intro />
            <Research />
            <Projects onOpenProject={openProject} />
            <Experience />
            <Honours />
            <Skills />
          </main>
          <Contact />
        </>
      )}
    </div>
  );
};

export default App;
