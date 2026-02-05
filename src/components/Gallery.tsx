import React from 'react'
import { motion } from 'framer-motion'

const galleryImages = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Modern minimalist lobby",
        size: "large", // spans 2 rows
        title: "The Arrival",
        desc: "First impressions of serenity and space."
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Luxury bedroom detail",
        size: "normal",
        title: "Sanctuary",
        desc: "Unmatched comfort in every detail."
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Gourmet dining experience",
        size: "normal",
        title: "Culinary Arts",
        desc: "Flavors that tell a story."
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Poolside relaxation",
        size: "wide", // spans 2 columns
        title: "Oasis",
        desc: "Water, light, and pure relaxation."
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Spa wellness center",
        size: "normal",
        title: "Rejuvenation",
        desc: "Ancient therapies, modern touch."
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Architectural detail",
        size: "tall", // spans 2 rows
        title: "Structure",
        desc: "Design that shapes experience."
    }
]

const Gallery = () => {
    return (
        <section className="py-32 bg-light overflow-hidden">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="block text-xs font-bold tracking-[0.3em] uppercase text-gray-400 mb-4">Visual Journal</span>
                        <h2 className="text-5xl md:text-7xl font-serif text-dark leading-none">
                            The <br /> <span className="italic font-light text-gray-400">Atmosphere</span>
                        </h2>
                    </motion.div>

                    <motion.p
                        className="hidden md:block text-gray-500 max-w-sm text-right text-sm leading-relaxed mt-8 md:mt-0"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        A curated collection of moments where architecture meets emotion.
                        Every corner designed to inspire peace and wonder.
                    </motion.p>
                </div>

                {/* Masonry Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[300px]">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            className={`group relative overflow-hidden rounded-sm hover:z-10 transition-all duration-500
                                ${image.size === 'wide' ? 'md:col-span-2' : ''}
                                ${image.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                                ${image.size === 'tall' ? 'row-span-2' : ''}
                            `}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <span className="text-white text-xs font-bold tracking-[0.2em] uppercase translate-y-2 group-hover:translate-y-0 transition-transform duration-300 mb-2">
                                    {image.title}
                                </span>
                                <p className="text-gray-200 text-sm font-light tracking-wide translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {image.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Gallery
