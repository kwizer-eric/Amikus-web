import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const rooms = [
    {
        id: 1,
        name: 'Presidential Suite',
        description: 'The pinnacle of luxury. Panoramic ocean views, private infinity pool, and dedicated butler service.',
        price: 'From $1,200',
        image: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        number: '01'
    },
    {
        id: 2,
        name: 'Ocean Sanctuary',
        description: 'Suspended over the turquoise lagoon. Direct ocean access and unbroken horizons.',
        price: 'From $850',
        image: 'https://images.unsplash.com/photo-1602002418816-5c0aeef82610?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        number: '02'
    },
    {
        id: 3,
        name: 'Forest Retreat',
        description: 'Hidden amidst lush tropical foliage. Absolute privacy and connection with nature.',
        price: 'From $600',
        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        number: '03'
    },
    {
        id: 4,
        name: 'The Residence',
        description: 'A sprawling family estate with private beach access and dual pavilions for living and sleeping.',
        price: 'From $2,500',
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        number: '04'
    }
]

const AccommodationPage = () => {
    // Horizontal scroll container reference
    const containerRef = useRef<HTMLDivElement>(null)

    // Optional: Map vertical scroll to horizontal scroll (desktop quality of life)
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleWheel = (evt: WheelEvent) => {
            if (evt.deltaY === 0) return;
            // If scrolling vertically, scroll horizontally instead
            container.scrollLeft += evt.deltaY;
            evt.preventDefault();
        };

        container.addEventListener('wheel', handleWheel, { passive: false });
        return () => container.removeEventListener('wheel', handleWheel);
    }, []);

    return (
        <div className="bg-dark h-screen w-screen overflow-hidden flex flex-col pt-0">
            {/* No Header Text, full immersion */}

            {/* Horizontal Scroll Container */}
            <div
                ref={containerRef}
                className="flex-1 flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth no-scrollbar items-center"
            >
                {rooms.map((room) => (
                    <div
                        key={room.id}
                        className="min-w-[100vw] md:min-w-[85vw] h-full relative snap-center flex-shrink-0 border-r border-white/5 last:border-0 group"
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src={room.image}
                                alt={room.name}
                                className="w-full h-full object-cover grayscale transition-all duration-[1.5s] ease-out group-hover:grayscale-0 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-700"></div>
                        </div>

                        {/* Large Background Number */}
                        <div className="absolute top-20 right-10 md:right-20 z-0 pointer-events-none select-none">
                            <span className="text-[12rem] md:text-[20rem] font-serif font-bold text-white/5 leading-none transition-transform duration-1000 group-hover:translate-x-12">
                                {room.number}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 w-full p-8 md:p-24 z-10 flex flex-col md:flex-row justify-between items-end">
                            <div className="max-w-2xl transform transition-transform duration-700 group-hover:-translate-y-4">
                                <span className="block text-primary text-xs font-bold uppercase tracking-[0.3em] mb-6">
                                    Collection {room.number}
                                </span>
                                <h2 className="text-5xl md:text-8xl font-serif text-white mb-8 leading-none">
                                    {room.name}
                                </h2>
                                <p className="text-gray-300 text-lg font-light leading-relaxed max-w-md mb-8 md:mb-0">
                                    {room.description}
                                </p>
                            </div>

                            <div className="flex flex-col items-end">
                                <span className="text-white/50 text-xs uppercase tracking-widest mb-2">Starting Rate</span>
                                <span className="text-3xl font-serif text-white italic mb-8">{room.price}</span>
                                <button className="px-10 py-4 bg-white text-dark text-xs font-bold uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-colors duration-300">
                                    Book Now
                                </button>
                            </div>
                        </div>

                    </div>
                ))}

                {/* Final Spacer / CTA (Optional) */}
                <div className="min-w-[20vw] h-full bg-dark flex items-center justify-center snap-center">
                    <p className="text-white/20 text-xs font-bold uppercase tracking-widest rotate-90 whitespace-nowrap">End of Collection</p>
                </div>
            </div>
        </div>
    )
}

export default AccommodationPage
