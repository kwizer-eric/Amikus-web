import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const galleryCategories = [
    {
        id: 'arrival',
        name: 'The Arrival',
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        description: 'First impressions of serenity and space.'
    },
    {
        id: 'sanctuary',
        name: 'Sanctuary',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        description: 'Unmatched comfort in every detail.'
    },
    {
        id: 'culinary',
        name: 'Culinary Arts',
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        description: 'Flavors that tell a story.'
    },
    {
        id: 'wellness',
        name: 'Wellness',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        description: 'Water, light, and pure relaxation.'
    }
]

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState(galleryCategories[0])

    return (
        <section className="bg-[#F3EEE8] min-h-screen flex items-center py-20 lg:py-0 overflow-hidden relative">

            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
                <svg viewBox="0 0 200 200" className="w-full h-full fill-current text-dark transform scale-150 translate-x-1/2 -translate-y-1/4">
                    <path d="M45,-76C58,-69,68,-55,75,-41C82,-27,86,-12,85,2C83,17,77,32,68,45C58,59,46,71,32,77C18,83,3,84,-12,83C-26,81,-40,77,-52,69C-65,60,-75,47,-81,32C-87,17,-88,0,-83,-15C-78,-30,-67,-42,-55,-51C-43,-60,-29,-65,-15,-67C-2,-70,12,-69,27,-66Z" transform="translate(100 100)" />
                </svg>
            </div>

            <div className="container mx-auto px-6 h-full">
                <div className="flex flex-col lg:flex-row h-full items-stretch">

                    {/* Left Column: Content & Navigation */}
                    <div className="w-full lg:w-5/12 flex flex-col justify-center lg:pr-20 z-10 relative mb-12 lg:mb-0">
                        <div className="mb-16">
                            <span className="text-3xl mb-4 block">✷</span>
                            <h2 className="text-6xl md:text-7xl font-serif text-dark mb-6 leading-none">
                                Our <span className="italic">gallery</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed max-w-md font-light">
                                A visual journey through the elegance, charm, and timeless beauty of our spaces and experiences.
                            </p>
                        </div>

                        <div className="space-y-6 flex flex-col items-start">
                            {galleryCategories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category)}
                                    className={`text-sm tracking-[0.2em] uppercase font-bold transition-all duration-300 relative group
                                        ${activeCategory.id === category.id ? 'text-dark' : 'text-gray-400 hover:text-gray-600'}
                                    `}
                                >
                                    {category.name}
                                    <span className={`absolute -bottom-2 left-0 h-[1px] bg-dark transition-all duration-300
                                        ${activeCategory.id === category.id ? 'w-full' : 'w-0 group-hover:w-1/2'}
                                    `}></span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Image Display */}
                    <div className="w-full lg:w-7/12 relative h-[500px] lg:h-auto min-h-[60vh] lg:min-h-[80vh]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="absolute inset-0 w-full h-full rounded-none lg:rounded-l-sm overflow-hidden"
                            >
                                <img
                                    src={activeCategory.image}
                                    alt={activeCategory.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/10"></div>

                                {/* Label Overlay */}
                                <div className="absolute bottom-0 right-0 bg-white/90 backdrop-blur-sm p-6 lg:p-10 min-w-[200px]">
                                    <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-2">Viewing</p>
                                    <p className="font-serif text-2xl italic text-dark">{activeCategory.name}</p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Gallery
