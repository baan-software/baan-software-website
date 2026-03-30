import React from 'react';
import { Header, Hero, About, Values, Projects, Contact } from '@/components';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Values />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 border-t border-gray-200">
        <div className="container text-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Baan Software. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App; 