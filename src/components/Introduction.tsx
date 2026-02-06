
import { motion } from 'framer-motion'
import resImage from '../assets/images/res1.jpg'

const Introduction = () => {
    return (
        <section className="py-24 md:py-32 bg-[#F3EEE8] relative overflow-hidden">
            {/* Background Watermark/Decoration */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-dark">
                    <path d="M0 50 C 20 0 50 0 100 50 C 50 100 20 100 0 50 Z" />
                </svg>
            </div>

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center">

                    {/* Text Column */}
                    <motion.div
                        className="w-full lg:w-5/12 pr-0 lg:pr-20 mb-16 lg:mb-0 relative z-10"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-serif text-dark leading-[0.9] mb-8">
                            Amikus <br />
                            <span className="italic font-light">Sanctuary</span>
                        </h2>
                        Welcome to Amikus Hotel, located in the middle of Musanze city. A boutique sanctuary blending bohemian charm with serene garden courtyards and breathtaking views. A place where time stands still.
                        <a href="#about" className="inline-block text-dark text-xs font-bold uppercase tracking-[0.2em] border-b border-dark pb-1 hover:text-primary hover:border-primary transition-colors">
                            Learn More
                        </a>
                    </motion.div>

                    {/* Image Column */}
                    <div className="w-full lg:w-7/12 relative">

                        {/* Main Image */}
                        <motion.div
                            className="w-full h-[500px] md:h-[600px] overflow-hidden"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <img
                                src={resImage}
                                alt="Modern architecture with warm lighting"
                                className="w-full h-full object-cover transition-all duration-[1.5s] hover:scale-105"
                            />
                        </motion.div>

                        {/* Overlapping Floating Image */}
                        <motion.div
                            className="absolute -bottom-16 -left-12 md:-left-24 w-48 md:w-72 h-48 md:h-72 hidden md:block"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Foggy scenic view"
                                className="w-full h-full object-cover shadow-2xl"
                            />
                        </motion.div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Introduction
