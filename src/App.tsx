import React from 'react';
import { Header, Hero, About, Values, Projects, Contact } from '@/components';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Values />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App; 