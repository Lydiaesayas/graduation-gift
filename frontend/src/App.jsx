import { useCallback } from 'react';
import confetti from 'canvas-confetti';

import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import MessagesMelodies from './components/MessagesMelodies';
import VisionBoard from './components/VisionBoard';

function App() {
  const triggerConfetti = useCallback(() => {
    // First burst
    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.6 }
    });

    // Second burst after a short delay
    setTimeout(() => {
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.7 }
      });
    }, 250);
  }, []);

  return (
    <div className="font-sans overflow-x-hidden">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-amber-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-amber-950">Tinbite's Vision</h1>
          <div className="hidden md:flex gap-8 text-sm font-medium text-amber-800">
            <a href="#hero" className="hover:text-amber-700 transition-colors">Home</a>
            <a href="#timeline" className="hover:text-amber-700 transition-colors">Journey</a>
            <a href="#gallery" className="hover:text-amber-700 transition-colors">Memories</a>
            <a href="#messages" className="hover:text-amber-700 transition-colors">Messages</a>
            <a href="#vision" className="hover:text-amber-700 transition-colors">Future</a>
          </div>
        </div>
      </nav>

      <Hero />
      <Timeline />
      <Gallery />
      <MessagesMelodies />
      <VisionBoard />

      {/* Final Love Message */}
      <div className="py-24 bg-amber-950 text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-3xl mb-6">With endless love and pride ❤️</p>
          <p className="text-xl text-amber-300 mb-10">
            From your sister Lydia and your best friends Elsa, Tsge & Kal
          </p>
          <button 
            onClick={triggerConfetti}
            className="bg-white hover:bg-amber-100 text-amber-950 px-12 py-5 rounded-full text-lg font-semibold transition-all active:scale-95 shadow-lg"
          >
            One More Celebration! 🎉
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;