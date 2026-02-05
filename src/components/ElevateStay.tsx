import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const ElevateStay = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])

    return (
        <section ref={containerRef} className="relative py-16 bg-light overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">

                    {/* Visual Side */}
                    <div className="w-full lg:w-1/2 relative h-[400px]">
                        <motion.div
                            className="absolute inset-0 overflow-hidden"
                            style={{ y }}
                        >
                            <div className="relative h-full w-full grayscale-[20%] hover:grayscale-0 transition-all duration-700 ease-out">
                                <video
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    poster="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                >
                                    <source src="https://assets.mixkit.co/videos/preview/mixkit-curtains-of-a-hotel-room-moving-with-the-wind-42444-large.mp4" type="video/mp4" />
                                </video>
                                <div className="absolute inset-0 bg-black/10"></div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Content Topography */}
                    <div className="w-full lg:w-1/2 relative z-10">
                        <motion.span
                            className="block text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 mb-4"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            The Experience
                        </motion.span>
                        <motion.h2
                            className="text-4xl md:text-5xl font-serif text-dark mb-6 leading-[0.95]"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Elevate <br />
                            <span className="italic font-light">Your Stay</span>
                        </motion.h2>

                        <motion.p
                            className="text-base text-gray-600 mb-8 max-w-sm font-light leading-relaxed"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Immerse yourself in the ambiance of Amikus. A sanctuary where every detail is curated for silence, beauty, and absolute comfort.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-6 items-start sm:items-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <button className="group relative text-dark text-xs tracking-[0.2em] uppercase font-bold py-2 overflow-hidden">
                                <span className="relative z-10">Start Tour</span>
                                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-dark transform scale-x-100 group-hover:scale-x-50 transition-transform duration-300 origin-left"></span>
                            </button>

                            <button className="group relative text-gray-400 text-xs tracking-[0.2em] uppercase font-medium py-2 hover:text-dark transition-colors">
                                <span className="relative z-10">Read More</span>
                                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-dark group-hover:w-full transition-all duration-300"></span>
                            </button>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ElevateStay
