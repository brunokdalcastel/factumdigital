import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import ContactGuide from './components/ContactGuide';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-primary text-text-primary selection:bg-secondary selection:text-primary-dark">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <ContactGuide />
      </main>
      <Footer />
    </div>
  );
}

export default App;
