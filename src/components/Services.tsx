import React, { useState } from 'react'
import { motion } from 'framer-motion'

const servicesData = [
    {
        id: 'bedroom',
        title: 'Luxury Bedrooms',
        image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80'
    },
    {
        id: 'meeting',
        title: 'Meeting Hall',
        image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d464?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
    },
    {
        id: 'restaurant',
        title: 'Restaurant & Bar',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
    },
    {
        id: 'coffee',
        title: 'Coffee Shop',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
    },
    {
        id: 'kitchen',
        title: 'Modern Kitchen',
        image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
    },
    {
        id: 'parking',
        title: 'Car Parking',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
    }
]

const Services = () => {
    const [activeService, setActiveService] = useState(servicesData[0])

    return (
        <section className="bg-[#F3EEE8] min-h-screen relative py-20">
            {/* Header */}
            <div className="container mx-auto px-6 mb-20 text-center">
                <h2 className="text-5xl md:text-8xl font-serif text-dark leading-tight">
                    Where Every Day is <br />
                    <span className="italic font-light">Designed for You</span>
                </h2>
            </div>

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20">

                    {/* Left Column: Fixed Image (Sticky) */}
                    <div className="w-full lg:w-1/2 h-[50vh] lg:h-[80vh] sticky top-20 rounded-2xl overflow-hidden shadow-2xl">
                        <div className="relative w-full h-full">
                            {servicesData.map((service) => (
                                <img
                                    key={service.id}
                                    src={service.image}
                                    alt={service.title}
                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${activeService.id === service.id ? 'opacity-100' : 'opacity-0'}`}
                                />
                            ))}
                            <div className="absolute inset-0 bg-black/10"></div>

                            {/* Logo Overlay */}
                            <div className="absolute top-8 left-8 text-white font-serif text-xl z-10 flex items-center gap-2">
                                <span className="text-2xl">✷</span>
                                <span>Amikus</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Scrollable List (Reel) */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center py-20">
                        <div className="space-y-0">
                            {servicesData.map((service) => (
                                <motion.div
                                    key={service.id}
                                    className="flex flex-col justify-center min-h-[25vh] border-b border-gray-300 last:border-0"
                                    onViewportEnter={() => setActiveService(service)}
                                    viewport={{ margin: "-45% 0px -45% 0px" }}
                                >
                                    <motion.h3
                                        className={`text-4xl md:text-6xl font-serif transition-all duration-500 cursor-pointer py-10 ${activeService.id === service.id ? 'text-dark opacity-100 pl-4' : 'text-gray-300 opacity-60'}`}
                                        onClick={() => setActiveService(service)}
                                    >
                                        {service.title}
                                    </motion.h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Services
