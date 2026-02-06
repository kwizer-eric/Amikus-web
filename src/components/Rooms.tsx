import { motion } from 'framer-motion'

const rooms = [
    {
        id: 1,
        name: 'Standard Guest Room',
        description: 'A cozy retreat featuring modern amenities and efficient design for the solo traveler or couple.',
        image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80',
        capacity: '2 Adults',
        size: '30m²',
        price: 250
    },
    {
        id: 2,
        name: 'Deluxe King Room',
        description: 'Spacious elegance with panoramic city views, a king-sized bed, and a dedicated workspace.',
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
        capacity: '2 Adults',
        size: '45m²',
        price: 350
    },
    {
        id: 3,
        name: 'Premier Executive Suite',
        description: 'Separate living area, premium bedding, and exclusive access to the executive lounge.',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
        capacity: '3 Adults',
        size: '65m²',
        price: 500
    },
    {
        id: 4,
        name: 'Royal Penthouse',
        description: 'The ultimate luxury experience with a private terrace, dining room, and butler service.',
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80',
        capacity: '4 Adults',
        size: '90m²',
        price: 800
    },
    {
        id: 5,
        name: 'Presidential Residence',
        description: 'Unmatched opulence featuring three bedrooms, a private wellness room, and grand piano.',
        image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
        capacity: '6 Adults',
        size: '150m²',
        price: 1500
    }
]

const Rooms = () => {


    // Drag logic constraints can be calculated here if needed, 
    // but for simplicity we'll use a snap-to-center logic or simple overflow for this demo.
    // To make it truly "wonderful", let's use a spotlight layout.

    return (
        <section className="min-h-screen flex flex-col justify-center bg-light overflow-hidden relative py-12">
            <div className="container mx-auto px-6 mb-8 relative z-10 w-full">
                <h2 className="text-xs font-bold tracking-[0.2em] text-primary mb-2 uppercase">Accommodation</h2>
                <div className="flex flex-col md:flex-row justify-between items-end">
                    <h3 className="text-3xl md:text-5xl font-serif text-dark max-w-2xl">
                        Sanctuaries of <span className="italic text-gray-400">Peace & Privacy</span>
                    </h3>
                    <div className="hidden md:flex gap-4 mt-8 md:mt-0">
                        <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-dark hover:text-white transition-colors text-lg">←</button>
                        <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-dark hover:text-white transition-colors text-lg">→</button>
                    </div>
                </div>
            </div>

            {/* Cinematic Slider */}
            <motion.div
                className="flex gap-6 px-6 md:pl-20 overflow-x-auto pb-10 pt-4 hide-scrollbar snap-x snap-mandatory"
                whileTap={{ cursor: "grabbing" }}
            >
                {rooms.map((room) => (
                    <motion.div
                        key={room.id}
                        className="relative min-w-[80vw] md:min-w-[500px] h-[400px] md:h-[450px] snap-center rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img
                                src={room.image}
                                alt={room.name}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="flex justify-between items-end mb-3">
                                <div>
                                    <h4 className="text-2xl md:text-3xl font-serif text-white mb-1">{room.name}</h4>
                                    <div className="flex gap-4 text-gray-300 text-xs font-medium tracking-wide">
                                        <span className="flex items-center gap-1">👤 {room.capacity}</span>
                                        <span className="flex items-center gap-1">📐 {room.size}</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">Starting from</p>
                                    <p className="text-2xl font-serif text-primary">${room.price}</p>
                                </div>
                            </div>

                            <div className="h-[1px] w-full bg-white/20 mb-4 group-hover:bg-primary/50 transition-colors"></div>

                            <p className="text-gray-300 mb-6 text-sm max-w-md line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                                {room.description}
                            </p>

                            <button className="bg-white text-dark px-6 py-2.5 rounded-full font-bold uppercase tracking-wider text-[10px] hover:bg-primary hover:text-white transition-colors">
                                View Room Details
                            </button>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default Rooms
