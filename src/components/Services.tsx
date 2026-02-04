import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const servicesData = [
    {
        id: 'stay',
        title: 'Luxury Accommodation',
        description: 'Experience the ultimate comfort in our bedrooms nestled in the heart of Musanze City. Your home away from home.',
        items: ['Master Bedrooms', 'En-suite Bathrooms', 'Scenic Views'],
        image: 'https://images.unsplash.com/photo-1590490360182-c583ca327659?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', // Bedroom
        icon: '🛏️'
    },
    {
        id: 'dining',
        title: 'Restaurant & Coffee',
        description: 'Savor the best food in our restaurant or relax at our coffee shop. From breakfast buffets to evening cocktails.',
        items: ['Fine Dining Restaurant', 'Coffee Shop', 'Bar & Lounge'],
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', // Restaurant/Coffee
        icon: '☕'
    },
    {
        id: 'business',
        title: 'Meetings & Events',
        description: 'Host exceptional events in our fully equipped Meeting Hall. Perfect for conferences and corporate gatherings.',
        items: ['Conference Hall', 'Fast Wi-Fi', 'Catering Services'],
        image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d464?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', // Meeting Hall
        icon: '�'
    },
    {
        id: 'facilities',
        title: 'Premium Facilities',
        description: 'Enjoy hassle-free parking and exceptional service designed to make your stay memorable.',
        items: ['Secure Car Parking', '24/7 Service', 'Modern Kitchen'],
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', // Parking/Entrance
        icon: '🚗'
    }
]

const Services = () => {
    const [activeService, setActiveService] = useState(servicesData[0])

    return (
        <section className="py-24 bg-dark text-white overflow-hidden">
            <div className="container mx-auto px-6 h-full">

                <div className="flex flex-col md:flex-row gap-16 items-start">

                    {/* Left Column: Navigation List */}
                    <div className="w-full md:w-1/2 z-10">
                        <h2 className="text-sm font-bold tracking-[0.2em] text-primary mb-12 uppercase">
                            Curated Experiences
                        </h2>

                        <div className="space-y-8">
                            {servicesData.map((service) => (
                                <div
                                    key={service.id}
                                    onMouseEnter={() => setActiveService(service)}
                                    onClick={() => setActiveService(service)} // Mobile support
                                    className={`cursor-pointer group transition-all duration-300 ${activeService.id === service.id ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-3xl md:text-4xl font-serif">{service.title}</h3>
                                        <motion.span
                                            animate={{ rotate: activeService.id === service.id ? 90 : 0 }}
                                            className="text-2xl hidden md:block"
                                        >
                                            →
                                        </motion.span>
                                    </div>

                                    {/* Expanded Content for Active Item (Desktop) or always slightly visible */}
                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeService.id === service.id ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                        <p className="text-gray-400 mb-4 font-light text-lg">
                                            {service.description}
                                        </p>
                                        <ul className="flex flex-wrap gap-4">
                                            {service.items.map((item, idx) => (
                                                <li key={idx} className="text-sm border border-white/20 rounded-full px-4 py-1 text-gray-300">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Dynamic Image Display */}
                    <div className="w-full md:w-1/2 relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={activeService.id}
                                src={activeService.image}
                                alt={activeService.title}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </AnimatePresence>

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                        <div className="absolute bottom-8 left-8">
                            <span className="text-6xl mb-2 block">{activeService.icon}</span>
                            <p className="text-xs font-bold tracking-widest uppercase text-white/80">Explore {activeService.title}</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Services
