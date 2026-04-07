import { motion } from 'framer-motion';

const timelineData = [
  { year: "2010", title: "Started High School", description: "You joined Tana Hike with big dreams.", icon: "📚" },
  { year: "2015", title: "University Journey", description: "Began your degree with determination.", icon: "🎓" },
  { year: "2018", title: "Graduation Day!", description: "Today we celebrate your success!", icon: "🌟" },
];

export default function Timeline() {
  return (
    <div id="timeline" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-amber-950 mb-16">Your Beautiful Journey</h2>
        
        <div className="space-y-16">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-8 items-start"
            >
              <div className="w-28 text-right shrink-0">
                <div className="text-4xl font-bold text-emerald-600">{item.year}</div>
              </div>
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center text-4xl shrink-0 mt-1">
                {item.icon}
              </div>
              <div className="pt-2">
                <h3 className="text-2xl font-semibold text-amber-950">{item.title}</h3>
                <p className="text-gray-600 mt-3 text-lg">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}