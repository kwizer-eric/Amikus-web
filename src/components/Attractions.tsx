

const attractions = [
    {
        id: 1,
        title: 'Virunga National Park',
        distance: '10.5 km',
        image: 'https://images.unsplash.com/photo-1547995166-5b583f707f15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'A UNESCO World Heritage site known for its mountain gorillas and active volcanoes.'
    },
    {
        id: 2,
        title: 'Dian Fossey',
        distance: '15.2 km',
        image: 'https://images.unsplash.com/photo-1579562738914-7d53b51b3ce9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Visit the research center dedicated to the conservation of mountain gorillas.'
    },
    {
        id: 3,
        title: 'Mount Muhabura Hiking',
        distance: '5.0 km',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'A challenging hike offering panoramic views of the Virunga volcanoes.'
    }
]

const Attractions = () => {
    return (
        <section className="py-20 bg-light">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-serif text-dark mb-12 text-center md:text-left">Nearby Attraction</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {attractions.map((item) => (
                        <div key={item.id} className="bg-white group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute bottom-0 left-0 bg-primary px-4 py-1 text-white text-xs font-bold">
                                    {item.distance}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-serif text-dark mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                                <p className="text-gray-500 text-sm mb-6 show-line-clamp-3">{item.description}</p>
                                <button className="bg-primary/10 text-primary px-6 py-2 text-xs font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-colors">
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Attractions
