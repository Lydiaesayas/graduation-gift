import { useState, useRef } from 'react';
import { X, Play, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const lovedOnes = [
  {
    id: 'elsa',
    name: 'Elsa',
    role: 'Best Friend',
    wish: "Tinbite, my dear friend! Watching you graduate fills my heart with so much pride...",
    songUrl: 'https://www.youtube.com/embed/CTw8P2GcMKE',
    color: 'from-pink-400 to-rose-500'
  },
  {
    id: 'tsge',
    name: 'Tsge',
    role: 'Best Friend',
    wish: "Congratulations Tinbite! You worked so hard...",
    songUrl: 'https://www.youtube.com/embed/cPQleLqeWsk',
    color: 'from-purple-400 to-violet-500'
  },
  {
    id: 'kal',
    name: 'Kal',
    role: 'Best Friend',
    wish: "Tinbite Esayas! From late night study sessions...",
    songUrl: 'https://www.youtube.com/embed/_ATJll7Tj9w',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    id: 'lydia',
    name: 'Lydia',
    role: 'Your Loving Sister',
    wish: "My beautiful sister Tinbite, I can't even put into words how proud I am of you today...",
    songUrl: 'https://www.youtube.com/embed/DlqU0p8PDy8',
    color: 'from-amber-400 to-orange-500'
  }
];

export default function MessagesMelodies() {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const playerRef = useRef(null);

  const openMessage = (person) => {
    setSelectedPerson(person);
  };

  const closeModal = () => {
    setSelectedPerson(null);
  };

  return (
    <div id="messages" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-amber-950 mb-4">Messages & Melodies ❤️</h2>
          <p className="text-xl text-emerald-700">Click on each loved one to read their wish and enjoy a special song</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {lovedOnes.map((person) => (
            <motion.div
              key={person.id}
              whileHover={{ scale: 1.05, y: -8 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => openMessage(person)}
              className={`cursor-pointer rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br ${person.color} p-1 hover:shadow-2xl transition-all`}
            >
              <div className="bg-white rounded-[22px] p-8 h-full flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-amber-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                  <Heart size={48} className="text-rose-500" />
                </div>
                <h3 className="text-3xl font-semibold text-amber-950 mb-1">{person.name}</h3>
                <p className="text-emerald-600 font-medium mb-8">{person.role}</p>
                <button className="mt-auto bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-full flex items-center gap-3 transition-all">
                  <Play size={22} /> Open Wish & Song
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal with YouTube */}
      <AnimatePresence>
        {selectedPerson && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 20 }}
              className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl"
            >
              <div className="p-10 relative">
                <button onClick={closeModal} className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 z-10">
                  <X size={36} />
                </button>

                <div className="text-center mb-8">
                  <h3 className="text-4xl font-bold text-amber-950">{selectedPerson.name}</h3>
                  <p className="text-emerald-600 text-xl mt-1">{selectedPerson.role}</p>
                </div>

                <div className="prose prose-lg text-gray-700 mb-10 leading-relaxed">
                  {selectedPerson.wish}
                </div>

                <div className="aspect-video rounded-2xl overflow-hidden shadow-inner bg-black">
                  <iframe
                    ref={playerRef}
                    width="100%"
                    height="100%"
                    src={`${selectedPerson.songUrl}?autoplay=1&modestbranding=1`}
                    title={`${selectedPerson.name}'s song`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}