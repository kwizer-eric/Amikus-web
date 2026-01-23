"use client";

import { motion } from 'framer-motion';
import { Bed, Coffee, Wifi, ArrowRight } from 'lucide-react';
import styles from './FeaturedRooms.module.css';

const services = [
    {
        id: 1,
        name: 'Room Services',
        text: 'Experience world-class dining and care in the privacy of your own suite, available 24/7.',
        image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2671&auto=format&fit=crop',
        icon: <Bed size={28} />
    },
    {
        id: 2,
        name: 'Tea & Breakfast',
        text: 'Start your morning with freshly brewed Rwandan coffee and locally sourced tropical fruits.',
        image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=2670&auto=format&fit=crop',
        icon: <Coffee size={28} />
    },
    {
        id: 3,
        name: 'Fiber Internet',
        text: 'Stay connected with high-speed fiber optic internet, available throughout the hotel property.',
        image: 'https://images.unsplash.com/photo-1563991624443-15793081014e?q=80&w=2670&auto=format&fit=crop',
        icon: <Wifi size={28} />
    },
];

export default function FeaturedRooms() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <span className="section-tag">Our Services</span>
                    <h2 className={styles.heading}>Best Convenience Services</h2>
                    <p className={styles.description}>
                        We go above and beyond to ensure your comfort and satisfaction during your stay at Amikus.
                    </p>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                        >
                            <div className={styles.cardTop}>
                                <div className={styles.iconWrapper}>
                                    {service.icon}
                                </div>
                                <div className={styles.arrowBtn}>
                                    <ArrowRight size={18} />
                                </div>
                            </div>

                            <div className={styles.imageWrapper}>
                                <img src={service.image} alt={service.name} className={styles.image} />
                            </div>

                            <div className={styles.cardContent}>
                                <h3 className={styles.roomTitle}>{service.name}</h3>
                                <p className={styles.roomText}>{service.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
