import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface SectionProps {
    title: string;
    description: string;
    images: string[];
    reverse?: boolean;
}

const HorizontalSection = ({ title, description, images, reverse = false }: SectionProps) => {
    const targetRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: targetRef })

    // Maps the vertical scroll of the 300vh container to a horizontal translation
    // We have 3 images total (300% width). We start at 0% and end at -66.66% to show the last image.
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"])

    return (
        <div ref={targetRef} className="h-[300vh] relative">
            <div className="sticky top-0 h-screen flex overflow-hidden">

                {/* Text Content - Static Panel */}
                <div className={`w-1/2 h-full flex flex-col justify-center bg-white z-10 px-8 md:px-20 ${reverse ? 'order-2' : 'order-1 border-r border-gray-100'}`}>
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-6xl font-serif text-dark mb-8 leading-tight">{title}</h2>
                        <p className="text-gray-500 mb-10 leading-loose font-light text-lg md:text-xl">
                            {description}
                        </p>
                        <button className="group flex items-center gap-4 text-xs font-bold tracking-widest uppercase text-primary hover:text-dark transition-colors">
                            Explore More
                            <span className="w-12 h-[1px] bg-current group-hover:w-20 transition-all duration-300"></span>
                        </button>
                    </div>
                </div>

                {/* Image Horizontal Scroller */}
                <div className={`w-1/2 h-full ${reverse ? 'order-1 border-r border-gray-100' : 'order-2'} overflow-hidden relative`}>
                    <motion.div style={{ x }} className="flex h-full w-[300%]">
                        {images.map((src, index) => (
                            <div key={index} className="w-1/3 h-full relative border-r border-white/10 last:border-none">
                                <img
                                    src={src}
                                    alt={`${title} highlight ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                                {/* Subtle Overlay to ensure luxury feel */}
                                <div className="absolute inset-0 bg-black/10"></div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Scroll Indicator Hint */}
                    <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs font-medium uppercase tracking-wider">
                        Scroll Down to View →
                    </div>
                </div>

            </div>
        </div>
    )
}

const Features = () => {
    // Images for Restaurant
    const restaurantImages = [
        "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80", // Interior
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80", // Food
        "https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"  // Drinks
    ]

    // Images for Events
    const eventImages = [
        "https://images.unsplash.com/photo-1505373877841-8d43f703fb8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80", // Setup
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80", // Wedding
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"  // Celebration
    ]

    return (
        <section className="bg-white">
            <HorizontalSection
                title="Restaurant & Bar"
                description="Indulge in a culinary journey at our award-winning restaurant. Our chefs craft exquisite dishes using locally sourced ingredients, paired with an extensive selection of fine wines and signature cocktails in a sophisticated atmosphere."
                images={restaurantImages}
            />
            <HorizontalSection
                title="Meetings & Events"
                description="Host your next corporate event or private celebration in our versatile venues. Equipped with state-of-the-art technology and supported by our dedicated events team, we ensure every detail is executed to perfection."
                images={eventImages}
                reverse={true}
            />
        </section>
    )
}

export default Features
