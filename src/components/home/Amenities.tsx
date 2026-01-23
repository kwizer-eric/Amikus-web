"use client";

import { motion } from 'framer-motion';
import { Utensils, Waves, Dumbbell, Sparkles, ConciergeBell, Wifi } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';
import styles from './Amenities.module.css';

const amenities = [
    { icon: <Waves size={32} />, title: "Infinity Pool" },
    { icon: <Sparkles size={32} />, title: "Wellness Spa" },
    { icon: <Utensils size={32} />, title: "Fine Dining" },
    { icon: <Dumbbell size={32} />, title: "24/7 Gym" },
    { icon: <ConciergeBell size={32} />, title: "Private Concierge" },
    { icon: <Wifi size={32} />, title: "High-Speed Fiber" },
];

export default function Amenities() {
    return (
        <section className={styles.section}>
            <div className="container">
                <SectionHeader
                    title="Luxury Amenities"
                    subtitle="Designed for your absolute comfort and rejuvenation."
                />

                <div className={styles.grid}>
                    {amenities.map((item, index) => (
                        <GlassCard
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={styles.cardContent}
                        >
                            <div className={styles.iconWrapper}>
                                {item.icon}
                            </div>
                            <h3 className={styles.title}>{item.title}</h3>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
