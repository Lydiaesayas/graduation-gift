// Remove motion import if you're not using any motion.* in this file
export default function Gallery() {
  const photos = [
    { id: 1, src: "/src/assets/photo_15.jpg", caption: "Childhood memories" },
    { id: 2, src: "/src/assets/photo_university-07.jpg", caption: "With friends at university" },
    { id: 3, src: "/src/assets/grad.jpg", caption: "Proud graduation moment" },
    { id: 4, src: "/src/assets/photo_21.jpg", caption: "Family time" },
  ];

  return (
    <div id="gallery" className="py-20 bg-gradient-to-br from-amber-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-amber-950 mb-4">Beautiful Memories</h2>
        <p className="text-center text-xl text-emerald-700 mb-16">Moments we will cherish forever</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-3xl shadow-2xl"
            >
              <img 
                src={photo.src} 
                alt={photo.caption}
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => e.target.src = 'https://via.placeholder.com/600x400?text=Memory'}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <p className="text-white text-xl font-medium">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}