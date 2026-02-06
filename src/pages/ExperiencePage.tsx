import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { experiences } from '../data/experiences'
import type { Experience } from '../data/experiences'

const ExperiencePage = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All')
    const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null)

    const categories = ['All', 'Festival', 'Dining', 'Wellness', 'Event', 'Social']

    const filteredExperiences = useMemo(() => {
        if (selectedCategory === 'All') return experiences;
        return experiences.filter(exp => exp.category === selectedCategory);
    }, [selectedCategory])

    return (
        <div className="bg-light min-h-screen pt-24 pb-32">
            {/* Header */}
            <div className="container mx-auto px-6 mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
                        What's On
                    </span>
                    <h1 className="text-5xl md:text-8xl font-serif text-dark mb-8">
                        Vibrant <span className="italic font-light text-gray-400">Life</span>
                    </h1>
                    <p className="text-gray-500 max-w-2xl mx-auto font-light text-lg">
                        From cultural festivals to intimate culinary gatherings. <br />
                        Discover the pulse of the island.
                    </p>
                </motion.div>
            </div>

            {/* Filter Bar */}
            <div className="container mx-auto px-6 mb-16 flex flex-wrap justify-center gap-6 md:gap-12">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 relative py-2
                            ${selectedCategory === cat ? 'text-dark' : 'text-gray-300 hover:text-gray-500'}
                        `}
                    >
                        {cat}
                        {selectedCategory === cat && (
                            <motion.span
                                layoutId="underline"
                                className="absolute left-0 bottom-0 w-full h-[1px] bg-dark"
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Bento Grid */}
            <div className="container mx-auto px-6">
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px] md:auto-rows-[350px]"
                >
                    <AnimatePresence>
                        {filteredExperiences.map((exp) => (
                            <motion.div
                                layout
                                key={exp.id}
                                layoutId={`card-${exp.id}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                onClick={() => setSelectedExperience(exp)}
                                className={`relative group overflow-hidden rounded-sm cursor-pointer
                                    ${exp.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                                    ${exp.size === 'medium' ? 'md:col-span-2 md:row-span-1' : ''}
                                    ${exp.size === 'small' ? 'md:col-span-1 md:row-span-1' : ''}
                                `}
                            >
                                {/* Background Image */}
                                <motion.img
                                    layoutId={`image-${exp.id}`}
                                    src={exp.image}
                                    alt={exp.title}
                                    className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90"></div>

                                {/* Content */}
                                <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end items-start transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 bg-white/20 px-3 py-1 backdrop-blur-sm rounded-full">
                                            {exp.category}
                                        </span>
                                        {exp.date && (
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                                                {exp.date}
                                            </span>
                                        )}
                                    </div>
                                    <motion.h3
                                        layoutId={`title-${exp.id}`}
                                        className={`font-serif text-white mb-3 leading-tight
                                        ${exp.size === 'large' ? 'text-4xl md:text-5xl' : 'text-2xl'}
                                    `}>
                                        {exp.title}
                                    </motion.h3>
                                    <p className={`text-gray-300 font-light text-sm line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100
                                         ${exp.size === 'small' ? 'hidden' : 'block'}
                                    `}>
                                        {exp.description}
                                    </p>

                                    <button className="text-white text-xs font-bold uppercase tracking-widest border-b border-white/30 pb-1 group-hover:border-white transition-colors duration-300 opacity-0 group-hover:opacity-100 delay-200">
                                        Explore Event
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Detail Modal */}
            <AnimatePresence>
                {selectedExperience && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedExperience(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                        />

                        {/* Modal Content */}
                        <motion.div
                            layoutId={`card-${selectedExperience.id}`}
                            className="w-full max-w-4xl bg-white rounded-sm overflow-hidden relative z-10 shadow-2xl max-h-[90vh] overflow-y-auto"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedExperience(null)}
                                className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-dark transition-colors"
                            >
                                ✕
                            </button>

                            <div className="flex flex-col md:flex-row h-full">
                                {/* Image Side */}
                                <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                                    <motion.img
                                        layoutId={`image-${selectedExperience.id}`}
                                        src={selectedExperience.image}
                                        alt={selectedExperience.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-6 left-6">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/90 bg-black/30 px-3 py-1 backdrop-blur-sm rounded-full">
                                            {selectedExperience.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
                                    <div className="mb-auto">
                                        <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-wider text-gray-400 mb-6">
                                            {selectedExperience.date && (
                                                <span className="text-primary">{selectedExperience.date}</span>
                                            )}
                                            {selectedExperience.time && (
                                                <span>{selectedExperience.time}</span>
                                            )}
                                            {selectedExperience.location && (
                                                <span>📍 {selectedExperience.location}</span>
                                            )}
                                        </div>

                                        <motion.h2
                                            layoutId={`title-${selectedExperience.id}`}
                                            className="text-3xl md:text-4xl font-serif text-dark mb-6 leading-tight"
                                        >
                                            {selectedExperience.title}
                                        </motion.h2>

                                        <p className="text-gray-600 font-light leading-relaxed mb-8">
                                            {selectedExperience.fullDescription}
                                        </p>

                                        <h4 className="text-xs font-bold uppercase tracking-widest text-dark mb-4 border-b border-gray-100 pb-2">Highlights</h4>
                                        <ul className="grid grid-cols-1 gap-2 mb-8">
                                            {selectedExperience.features.map((feature, i) => (
                                                <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <button className="w-full py-4 bg-dark text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-primary transition-colors">
                                        Book This Experience
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default ExperiencePage
