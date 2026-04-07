import { useEffect } from 'react';
import confetti from 'canvas-confetti';

import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import MessagesMelodies from './components/MessagesMelodies';
import VisionBoard from './components/VisionBoard';

function App() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 200,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  useEffect(() => {
    // Optional: smooth scroll for navigation
  }, []);

  return (
    <div className="font-sans overflow-x-hidden">
      {/* Floating Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-amber-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-amber-950">Tinbite's Vision</h1>
          <div className="hidden md:flex gap-8 text-sm font-medium text-amber-800">
            <a href="#hero" className="hover:text-amber-600 transition-colors">Home</a>
            <a href="#timeline" className="hover:text-amber-600 transition-colors">Journey</a>
            <a href="#gallery" className="hover:text-amber-600 transition-colors">Memories</a>
            <a href="#messages" className="hover:text-amber-600 transition-colors">Messages</a>
            <a href="#vision" className="hover:text-amber-600 transition-colors">Future</a>
          </div>
        </div>
      </nav>

      <Hero />
      <Timeline />
      <Gallery />
      <MessagesMelodies />
      <VisionBoard />

      {/* Final Celebration Section */}
      <div className="py-24 bg-amber-950 text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-3xl mb-6">With endless love and pride ❤️</p>
          <p className="text-xl text-amber-300 mb-10">
            From your sister Lydia and your best friends Elsa, Tsge & Kal
          </p>
          <button 
            onClick={triggerConfetti}
            className="bg-white hover:bg-amber-100 text-amber-950 px-12 py-5 rounded-full text-lg font-semibold transition-all active:scale-95"
          >
            One More Celebration! 🎉
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;