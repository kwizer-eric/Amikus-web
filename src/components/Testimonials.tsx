import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
    {
        id: 1,
        quote: "The attention to detail at Amikus is simply unparalleled. From the moment you step in, you are transported to a world of luxury and calm.",
        author: "Sarah Jenkins",
        title: "Travel Blogger",
        location: "London, UK",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        quote: "An unforgettable experience. The staff went above and beyond to ensure our stay was perfect. The dining was exquisite and the views breathtaking.",
        author: "Michael Chen",
        title: "Architect",
        location: "Singapore",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        quote: "A true sanctuary in the city. The design philosophy perfectly balances modern aesthetics with natural elements. I've never slept better.",
        author: "Elena Rodriguez",
        title: "Interior Designer",
        location: "Madrid, Spain",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
    }
]

const Testimonials = () => {
    const [current, setCurrent] = useState(0)
    const [direction, setDirection] = useState(0)

    const next = () => {
        setDirection(1)
        setCurrent((current + 1) % testimonials.length)
    }

    const prev = () => {
        setDirection(-1)
        setCurrent((current - 1 + testimonials.length) % testimonials.length)
    }

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -50 : 50,
            opacity: 0,
        }),
    }

    return (
        <section className="bg-dark text-[#F3EEE8] py-24 lg:py-32 relative overflow-hidden">
            {/* Background Texture/Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%">
                    <filter id="noise">
                        <feTurbulence type="fractalNoise" baseFrequency="0.6" stitchTiles="stitch" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noise)" />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left Column: Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 mb-12"
                        >
                            <span className="h-[1px] w-12 bg-primary/50"></span>
                            <span className="text-xs uppercase tracking-[0.3em] text-primary/80 font-medium">Guest Stories</span>
                        </motion.div>

                        <div className="relative min-h-[300px] md:min-h-[250px]">
                            <AnimatePresence mode="wait" custom={direction}>
                                <motion.div
                                    key={current}
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                >
                                    <Quote className="w-12 h-12 text-primary/20 mb-8" />

                                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] mb-10 text-white/90">
                                        "{testimonials[current].quote}"
                                    </h3>

                                    <div className="flex flex-col gap-1">
                                        <h4 className="text-lg font-serif">{testimonials[current].author}</h4>
                                        <p className="text-sm text-white/50 uppercase tracking-widest text-[10px]">
                                            {testimonials[current].title} — {testimonials[current].location}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center gap-4 mt-12">
                            <button
                                onClick={prev}
                                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all duration-300 group"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                            </button>
                            <button
                                onClick={next}
                                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all duration-300 group"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="relative order-first lg:order-last">
                        <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden relative">
                            {/* Decorative Frame */}
                            <div className="absolute inset-4 border border-white/10 z-20 pointer-events-none"></div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={current}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.7 }}
                                    className="absolute inset-0 bg-dark"
                                >
                                    <img
                                        src={testimonials[current].image}
                                        alt={testimonials[current].author}
                                        className="w-full h-full object-cover opacity-80"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent"></div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Testimonials
