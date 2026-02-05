import React from 'react'
import { motion } from 'framer-motion'

const venues = [
    {
        id: 1,
        name: 'The Glasshouse',
        subtitle: 'All Day Dining',
        description: 'Bathed in natural light, The Glasshouse offers a farm-to-table experience emphasizing organic, local ingredients. Breakfast, lunch, and dinner served in an airy, botanical setting.',
        image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        chef: 'Chef Marco Rossi',
        dish: 'Signature: Wild Mushroom Risotto'
    },
    {
        id: 2,
        name: 'Obsidian',
        subtitle: 'Cocktail Bar & Lounge',
        description: 'As the sun sets, retreat to Obsidian. A moody, sensory space dedicated to the art of mixology. Rare spirits, artisanal ice, and a curated vinyl soundtrack.',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16549766b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        chef: 'Mixologist Sarah Jen',
        dish: 'Signature: Smoked Maple Old Fashioned'
    },
    {
        id: 3,
        name: 'Umi',
        subtitle: 'Omakase by the Sea',
        description: 'An intimate 8-seat counter perched over the ocean. Witness the mastery of traditional sushi preparation using only the freshest catch of the day.',
        image: 'https://images.unsplash.com/photo-1579027989536-b7b1f875659b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        chef: 'Master Kenji',
        dish: 'Signature: Bluefin Otoro with Truffle'
    }
]

const DiningPage = () => {
    return (
        <div className="bg-dark min-h-screen text-white pt-20">
            {/* Removed Top Header Text as requested */}

            <div className="flex flex-col gap-0">
                {venues.map((venue, index) => (
                    <div key={venue.id} className="min-h-screen flex items-center relative overflow-hidden group border-b border-white/10 last:border-0 sticky top-0 bg-dark">

                        {/* Background Image (Dimmed) */}
                        <div className="absolute inset-0 z-0 opacity-40 transition-opacity duration-700 group-hover:opacity-60">
                            <img
                                src={venue.image}
                                alt={venue.name}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform scale-105 group-hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent"></div>
                        </div>

                        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                            {/* Text Content */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="max-w-xl"
                            >
                                <span className="text-primary font-serif italic text-3xl mb-4 block">{venue.subtitle}</span>
                                <h2 className="text-7xl md:text-9xl font-serif text-white mb-8 leading-none tracking-tight">{venue.name}</h2>
                                <p className="text-gray-300 text-lg font-light leading-relaxed mb-12 border-l-2 border-primary pl-6">
                                    {venue.description}
                                </p>

                                <div className="flex items-center gap-8">
                                    <button className="px-8 py-3 border border-white/30 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-dark transition-all duration-300">
                                        Explorar
                                    </button>
                                    <div className="text-right">
                                        <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Curated By</p>
                                        <p className="font-serif text-lg">{venue.chef}</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Dish Card (Desktop Only) */}
                            <div className="hidden lg:flex justify-end pr-12">
                                <motion.div
                                    className="bg-white/10 backdrop-blur-md p-8 border border-white/10 max-w-sm"
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4">The Selection</p>
                                    <h3 className="font-serif text-2xl italic mb-2">{venue.dish}</h3>
                                </motion.div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            <div className="py-12 text-center border-t border-white/10">
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-600">Amikus Dining Collection</p>
            </div>
        </div>
    )
}

export default DiningPage
