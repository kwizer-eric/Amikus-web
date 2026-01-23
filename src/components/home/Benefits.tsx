"use client";

import { motion } from 'framer-motion';
import { Dumbbell } from 'lucide-react';
import styles from './Benefits.module.css';

export default function Benefits() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.grid}>

                    <motion.div
                        className={styles.left}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <span className="section-tag" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>Our Benefits</span>
                        <h2 className={styles.heading}>Comfort Are Perfectly Combined Here !</h2>
                        <p className={styles.description}>
                            Discover a space where every element is harmonized for your well-being. Our facilities are designed to provide the ultimate balance of activity and relaxation.
                        </p>
                    </motion.div>

                    <motion.div
                        className={styles.right}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670&auto=format&fit=crop"
                            className={styles.mainImg}
                            alt="Luxury Gym"
                        />

                        <motion.div
                            className={styles.floatingCard}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            <div className={styles.iconBox}>
                                <Dumbbell size={28} />
                            </div>
                            <h3 className={styles.cardTitle}>Fitness Center</h3>
                            <p className={styles.cardText}>
                                State-of-the-art equipment to keep you active and energized.
                            </p>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
