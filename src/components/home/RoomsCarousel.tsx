"use client";

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BedDouble, Users } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import styles from './RoomsCarousel.module.css';

const rooms = [
    {
        id: 1,
        name: "Volcano View Suite",
        desc: "Panoramic views of the Virunga mountains with private terrace.",
        price: "$299",
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2574"
    },
    {
        id: 2,
        name: "Royal Garden Villa",
        desc: "Immersed in lush gardens, perfect for ultimate privacy.",
        price: "$450",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2370"
    },
    {
        id: 3,
        name: "Presidential Lodge",
        desc: "The pinnacle of luxury with private pool and butler service.",
        price: "$890",
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2670"
    },
    {
        id: 4,
        name: "Family Heritage",
        desc: "Spacious inter-connected rooms for the whole family.",
        price: "$350",
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2670"
    }
];

export default function RoomsCarousel() {
    const scrollRef = useRef(null);

    return (
        <section className={styles.section}>
            <div className="container">
                <SectionHeader
                    title="Our Rooms & Suites"
                    subtitle="Retreat into a world of comfort with designs inspired by Rwandan heritage."
                />

                <div className={styles.carouselContainer} ref={scrollRef}>
                    <motion.div
                        className={styles.carousel}
                        drag="x"
                        dragConstraints={scrollRef}
                    >
                        {rooms.map((room) => (
                            <motion.div
                                key={room.id}
                                className={styles.card}
                                whileHover={{ y: -10, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className={styles.imageWrapper}>
                                    <img src={room.image} alt={room.name} className={styles.image} />
                                    <div className={styles.priceTag}>
                                        <span className={styles.price}>{room.price}</span>/night
                                    </div>
                                </div>

                                <div className={styles.content}>
                                    <h3 className={styles.roomName}>{room.name}</h3>
                                    <p className={styles.desc}>{room.desc}</p>

                                    <div className={styles.meta}>
                                        <span><Users size={16} /> 2-4 Guests</span>
                                        <span><BedDouble size={16} /> King Bed</span>
                                    </div>

                                    <button className={styles.bookBtn}>
                                        View Details <ArrowRight size={16} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
