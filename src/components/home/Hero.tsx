"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import BookingWidget from './BookingWidget';
import styles from './Hero.module.css';

const heroImages = [
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2670",
    "https://images.unsplash.com/photo-1571896349842-6e53ce41e86a?q=80&w=2671",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670"
];

export default function Hero() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 6000); // Slower, more cinematic switch
        return () => clearInterval(timer);
    }, []);

    return (
        <section className={styles.heroWrapper}>
            <div className={styles.hero}>
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentImage}
                        className={styles.bgImage}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 0.6, scale: 1 }} // Reduced opacity for atmosphere
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2.5, ease: "easeInOut" }}
                        style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
                    />
                </AnimatePresence>

                {/* Deep Gradient Overlay */}
                <div className={styles.gradientOverlay} />

                <div className={styles.content}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <p className={styles.supertitle}>Rwanda • Musanze</p>
                        <h1 className={styles.headline}>
                            <span className={styles.serif}>Experience</span> <br />
                            <span className={styles.sans}>The Ethereal</span>
                        </h1>
                        <p className={styles.subtitle}>
                            Where ancient nature meets modern silence.
                        </p>

                        <div className={styles.actions}>
                            <Button variant="primary" size="lg" href="/book" style={{
                                background: 'var(--c-gold)',
                                color: 'var(--c-midnight)',
                                fontWeight: 800
                            }}>
                                Begin Journey
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>

            <BookingWidget />
        </section>
    );
}
