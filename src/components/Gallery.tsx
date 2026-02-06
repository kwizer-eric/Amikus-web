import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Import all local images
import hero from '../assets/images/hero.jpg'
import hero2 from '../assets/images/hero2.jpg'
import coffee from '../assets/images/coffee.jpg'
import res1 from '../assets/images/res1.jpg'
import res3 from '../assets/images/res3.jpg'
import res4 from '../assets/images/res4.jpg'
import res5 from '../assets/images/res5.jpg'
import res6 from '../assets/images/res6.jpg'
import res7 from '../assets/images/res7.jpg'
import res8 from '../assets/images/res8.jpg'
import res9 from '../assets/images/res9.jpg'
import res10 from '../assets/images/res10.jpg'

// Expanded data with local images
const galleryCategories = [
    {
        id: 'arrival',
        name: 'The Arrival',
        description: 'First impressions of serenity and space.',
        images: [hero, hero2, res9]
    },
    {
        id: 'sanctuary',
        name: 'Sanctuary',
        description: 'Unmatched comfort in every detail.',
        images: [res5, res6, res7]
    },
    {
        id: 'culinary',
        name: 'Culinary Arts',
        description: 'Flavors that tell a story.',
        images: [coffee, res1, res3, res4]
    },
    {
        id: 'wellness',
        name: 'Wellness',
        description: 'Water, light, and pure relaxation.',
        images: [res8, res10]
    }
]

const Gallery = () => {
    // 'all' represents viewing all images
    const [activeCategory, setActiveCategory] = useState('all')

    // derived state for filtered images
    const displayedImages = useMemo(() => {
        if (activeCategory === 'all') {
            // Flat map all images when 'all' is selected
            // We can shuffle them here if "mix up" implies random order, 
            // but fixed order is better for hydration consistency.
            // Let's interleave them to create a "mixed" feel if they are sorted by category.
            const all = galleryCategories.flatMap(cat => cat.images)
            // Simple deterministic shuffle-like mix (just for visual variety if needed, but linear is fine too)
            return all
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

                    {/* Right Column: Masonry Image List */}
                    <div className="w-full lg:w-8/12">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory} // Helper key for animation re-trigger
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.5 }}
                                className="columns-1 md:columns-2 gap-8 space-y-8" // Masonry layout using CSS columns
                            >
                                {displayedImages.map((imgSrc, index) => (
                                    <motion.div
                                        key={`${imgSrc}-${index}`} // distinct key if image repeats (though they don't here)
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true, margin: "-10% 0px" }}
                                        transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
                                        className="break-inside-avoid w-full mb-8"
                                    >
                                        <div className="overflow-hidden relative group rounded-sm">
                                            <img
                                                src={imgSrc}
                                                alt={`Gallery item ${index}`}
                                                className="w-full h-auto object-cover transition-transform duration-1000 ease-out hover:scale-105"
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
