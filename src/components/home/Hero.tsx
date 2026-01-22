"use client";

import { motion } from 'framer-motion';
import Button from '../ui/Button';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                {/* Placeholder for video or high-res image */}
                <div className={styles.overlay} />
                <img
                    src="https://images.unsplash.com/photo-1571896349842-6e53ce41e86a?q=80&w=2671&auto=format&fit=crop"
                    alt="Luxury Bedroom"
                    className={styles.image}
                />
            </div>

            <div className={styles.content}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className={styles.textContent}
                >
                    <h1 className={styles.headline}>
                        Where Luxury Meets <br />
                        <span className={styles.italic}>the Heart of Rwanda</span>
                    </h1>
                    <p className={styles.subheadline}>
                        An sanctuary of calm, culture, and exclusive comfort.
                    </p>

                    <div className={styles.actions}>
                        <Button variant="primary" size="lg" href="/book">
                            Book Your Stay
                        </Button>
                        <Button variant="outline" size="lg" href="/experience" style={{ color: 'white', borderColor: 'white' }}>
                            Explore
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
