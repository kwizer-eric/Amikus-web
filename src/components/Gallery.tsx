import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Expanded data with multiple images per category
const galleryCategories = [
    {
        id: 'arrival',
        name: 'The Arrival',
        description: 'First impressions of serenity and space.',
        images: [
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
        ]
    },
    {
        id: 'sanctuary',
        name: 'Sanctuary',
        description: 'Unmatched comfort in every detail.',
        images: [
            'https://images.unsplash.com/photo-1629140727571-9b5c6f7c6b8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1590490360182-c583ca327659?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1616594039964-40891a909d72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1590490359683-65813d237f84?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
        ]
    },
    {
        id: 'culinary',
        name: 'Culinary Arts',
        description: 'Flavors that tell a story.',
        images: [
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
        ]
    },
    {
        id: 'wellness',
        name: 'Wellness',
        description: 'Water, light, and pure relaxation.',
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
        ]
    }
]

const Gallery = () => {
    // 'all' represents viewing all images
    const [activeCategory, setActiveCategory] = useState('all')

    // derived state for filtered images
    const displayedImages = useMemo(() => {
        if (activeCategory === 'all') {
            // Flat map all images when 'all' is selected
            return galleryCategories.flatMap(cat => cat.images)
        }
        const category = galleryCategories.find(cat => cat.id === activeCategory)
        return category ? category.images : []
    }, [activeCategory])

    return (
        <section className="bg-[#F3EEE8] min-h-screen relative pt-20 pb-32">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

                    {/* Left Column: Sticky Content & Navigation */}
                    <div className="w-full lg:w-4/12 sticky top-32 z-20 h-fit">
                        <div className="mb-8">
                            <h2 className="text-4xl md:text-5xl font-serif text-dark mb-4 leading-none tracking-tight">
                                Our <br /><span className="italic">gallery</span>
                            </h2>
                            <p className="text-gray-600 text-sm leading-relaxed max-w-xs font-light">
                                A visual journey through the elegance, charm, and timeless beauty of our spaces.
                            </p>
                        </div>

                        <div className="space-y-3 flex flex-col items-start">
                            <button
                                onClick={() => setActiveCategory('all')}
                                className={`text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 relative group py-1
                                    ${activeCategory === 'all' ? 'text-dark pl-4' : 'text-gray-400 hover:text-gray-600 pl-0'}
                                `}
                            >
                                <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-dark transition-all duration-300 ${activeCategory === 'all' ? 'opacity-100' : 'opacity-0'}`}></span>
                                All
                            </button>
                            {galleryCategories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 relative group py-1
                                        ${activeCategory === category.id ? 'text-dark pl-4' : 'text-gray-400 hover:text-gray-600 pl-0'}
                                    `}
                                >
                                    <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-dark transition-all duration-300 ${activeCategory === category.id ? 'opacity-100' : 'opacity-0'}`}></span>
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Single Column Image List */}
                    <div className="w-full lg:w-8/12">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory} // Helper key for animation re-trigger
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col gap-16" // Single column with huge gap
                            >
                                {displayedImages.map((imgSrc, index) => (
                                    <motion.div
                                        key={imgSrc}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true, margin: "-10% 0px" }}
                                        transition={{ duration: 0.7, ease: "easeOut" }}
                                        className="w-full"
                                    >
                                        <div className="overflow-hidden relative group">
                                            <img
                                                src={imgSrc}
                                                alt={`Gallery item ${index}`}
                                                className="w-full h-auto object-contain transition-transform duration-1000 ease-out"
                                            // Removed maxHeight to allow full natural height
                                            />
                                            {/* Simple Overlay */}
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none"></div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Gallery
