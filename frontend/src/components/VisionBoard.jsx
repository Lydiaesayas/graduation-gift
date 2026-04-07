import { motion } from 'framer-motion';
import { Target, Star, Globe, BookOpen } from 'lucide-react';

const visions = [
  { icon: <Target size={48} />, title: "Career Success", text: "May you achieve your dream career and shine brightly." },
  { icon: <Globe size={48} />, title: "Travel & Adventure", text: "Exploring the world and new cultures." },
  { icon: <BookOpen size={48} />, title: "Lifelong Learning", text: "Keep growing wiser and stronger every day." },
  { icon: <Star size={48} />, title: "Happiness & Love", text: "Surrounded by joy, peace, and loving people." },
];

export default function VisionBoard() {
  return (
    <div id="vision" className="py-20 bg-emerald-900 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-6">Tinbite's Bright Future</h2>
        <p className="text-xl text-emerald-200 mb-16 max-w-2xl mx-auto">The wonderful things waiting for you</p>

        <div className="grid md:grid-cols-2 gap-8">
          {visions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur rounded-3xl p-10 hover:bg-white/20 transition-all"
            >
              <div className="text-amber-300 mb-6 flex justify-center">{item.icon}</div>
              <h3 className="text-3xl font-semibold mb-4">{item.title}</h3>
              <p className="text-emerald-100 text-lg">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}