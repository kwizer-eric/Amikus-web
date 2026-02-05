import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
    {
        id: 1,
        quote: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
        author: "Ragnar Lothbrok",
        title: "Creative Director",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80"
    },
    {
        id: 2,
        quote: "The attention to detail at Amikus is simply unparalleled. From the moment you step in, you are transported to a world of luxury and calm.",
        author: "Sarah Jenkins",
        title: "Travel Blogger",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
    },
    {
        id: 3,
        quote: "An unforgettable experience. The staff went above and beyond to ensure our stay was perfect. The dining was exquisite.",
        author: "Michael Chen",
        title: "Architect",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
    }
]

const Testimonials = () => {
    const [current, setCurrent] = useState(0)

    const next = () => setCurrent((current + 1) % testimonials.length)
    const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

    return (
        <section className="py-20 bg-light flex flex-col items-center justify-center overflow-hidden">
            <div className="container mx-auto px-6 max-w-4xl relative">

                {/* Decorative big quote */}
                <div className="absolute top-0 left-0 text-[10rem] font-serif leading-none text-gray-200 -z-10 opacity-50 select-none">“</div>

                <div className="relative min-h-[300px] flex flex-col justify-center items-center text-center">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col items-center"
                        >
                            <p className="text-2xl md:text-3xl font-serif text-dark mb-8 leading-tight max-w-3xl">
                                {testimonials[current].quote}
                            </p>

                            <div className="flex flex-col items-center">
                                <div className="w-10 h-10 rounded-full overflow-hidden mb-3 grayscale opacity-80">
                                    <img
                                        src={testimonials[current].image}
                                        alt={testimonials[current].author}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h4 className="font-bold text-dark text-[10px] uppercase tracking-[0.2em] mb-1">{testimonials[current].author}</h4>
                                <p className="text-[9px] text-gray-400 font-medium uppercase tracking-[0.1em]">{testimonials[current].title}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Micro Navigation */}
                <div className="flex justify-center gap-6 mt-10 items-center">
                    <button onClick={prev} className="text-[10px] font-bold uppercase tracking-widest text-gray-300 hover:text-dark transition-colors">Prev</button>
                    <div className="flex gap-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`w-1 h-1 rounded-full transition-all duration-300 ${current === index ? 'bg-dark scale-150' : 'bg-gray-300'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                    <button onClick={next} className="text-[10px] font-bold uppercase tracking-widest text-gray-300 hover:text-dark transition-colors">Next</button>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
