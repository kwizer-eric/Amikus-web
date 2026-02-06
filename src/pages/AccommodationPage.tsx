import { motion } from 'framer-motion'
import { rooms } from '../data/accommodation'

const AccommodationPage = () => {
    return (
        <div className="bg-[#F3EEE8] min-h-screen pt-20 pb-32 overflow-hidden">
            {/* Header Section */}
            <div className="container mx-auto px-6 mb-24 md:mb-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left max-w-4xl"
                >
                    <span className="block text-xs font-bold uppercase tracking-[0.2em] text-dark/60 mb-6">
                        Accommodations
                    </span>
                    <h1 className="text-5xl md:text-8xl font-serif text-dark leading-[0.9] mb-8">
                        Sanctuaries of <br />
                        <span className="italic font-light text-dark/70">Rest & Reflection</span>
                    </h1>
                    <p className="text-lg md:text-xl font-light text-dark/60 max-w-2xl leading-relaxed">
                        Designed with an emphasis on space, light, and natural materials.
                        Each room is a private haven, harmonizing modern luxury with existing landscapes.
                    </p>
                </motion.div>
            </div>

            {/* Rooms List */}
            <div className="container mx-auto px-6 flex flex-col gap-32 md:gap-40">
                {rooms.map((room, index) => (
                    <RoomCard key={room.id} room={room} index={index} />
                ))}
            </div>

            {/* Bottom CTA */}
            <div className="container mx-auto px-6 mt-32 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="inline-block"
                >
                    <h3 className="text-3xl font-serif text-dark mb-8">Not sure which to choose?</h3>
                    <button className="px-12 py-5 bg-dark text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-transparent hover:text-dark border border-dark transition-all duration-300">
                        Compare All Rooms
                    </button>
                </motion.div>
            </div>
        </div>
    )
}

const RoomCard = ({ room, index }: { room: any, index: number }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
        >
            {/* Image Section */}
            <div className="w-full lg:w-3/5 relative group overflow-hidden">
                <div className="relative overflow-hidden aspect-[4/3] lg:aspect-[16/10]">
                    <img
                        src={room.image}
                        alt={room.name}
                        className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                    />
                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10"></div>
                </div>

                {/* Floating Number */}
                <div className={`absolute -bottom-10 ${isEven ? '-left-10' : '-right-10'} opacity-10 font-serif text-[10rem] leading-none pointer-events-none select-none hidden lg:block`}>
                    {room.number}
                </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-2/5 flex flex-col items-start text-left">
                <span className="text-dark/40 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                    Collection {room.number}
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-dark mb-6 leading-tight">
                    {room.name}
                </h2>
                <p className="text-dark/60 text-base md:text-lg font-light leading-relaxed mb-8">
                    {room.description}
                </p>

                {/* Features List (Optional) */}
                {room.features && (
                    <div className="flex flex-wrap gap-4 mb-10">
                        {room.features.map((feature: string, idx: number) => (
                            <span key={idx} className="text-xs uppercase tracking-wider text-dark/80 border border-dark/10 px-3 py-1 bg-white/50 backdrop-blur-sm">
                                {feature}
                            </span>
                        ))}
                    </div>
                )}

                <div className="flex items-center gap-8 w-full">
                    <span className="text-2xl font-serif italic text-dark/80">
                        {room.price}
                    </span>
                    <button className="flex-1 lg:flex-none text-center px-8 py-4 bg-dark text-white text-xs font-bold uppercase tracking-[0.15em] hover:bg-primary transition-colors duration-300">
                        Book Now
                    </button>
                </div>
            </div>
        </motion.div>
    )
}

export default AccommodationPage
