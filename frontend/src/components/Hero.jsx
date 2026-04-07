import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-emerald-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:30px_30px] opacity-10"></div>
      
      <div className="text-center z-10 px-6 max-w-4xl">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-7xl md:text-[5.5rem] font-bold text-amber-950 tracking-wider mb-6">
            Tinbite Esayas
          </h1>
          <p className="text-4xl md:text-5xl text-emerald-700 font-light mb-10">
            Congratulations on your Graduation! 🎓
          </p>
          
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('messages').scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-amber-600 to-emerald-700 text-white text-2xl px-14 py-6 rounded-full flex items-center gap-4 shadow-xl hover:shadow-2xl transition-all mx-auto"
          >
            <Sparkles size={34} />
            Celebrate With Us
          </motion.button>

          <p className="mt-12 text-amber-800 text-lg max-w-md mx-auto">
            A heartfelt gift from your loving sister Lydia and your best friends
          </p>
        </motion.div>
      </div>
    </div>
  );
}