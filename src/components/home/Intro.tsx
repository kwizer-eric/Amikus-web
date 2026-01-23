"use client";

import { motion } from 'framer-motion';
import { Phone, Play, ChevronRight, Bed } from 'lucide-react';
import Button from '../ui/Button';
import styles from './Intro.module.css';

export default function Intro() {
    return (
        <section className={styles.intro}>
            <div className="container">
                <div className={styles.grid}>

                    <motion.div
                        className={styles.left}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className={styles.mainImageWrapper}>
                            <img
                                src="https://images.unsplash.com/photo-1544124499-58912cbddaad?q=80&w=2670&auto=format&fit=crop"
                                className={styles.mainImage}
                                alt="Luxury Suite Interior"
                            />
                            <div className={styles.playButton}>
                                <Play fill="currentColor" size={24} />
                            </div>
                            <div className={styles.badge}>
                                <Bed size={18} />
                                Luxury Room
                            </div>
                        </div>

                        <motion.div
                            className={styles.insetWrapper}
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=2670&auto=format&fit=crop"
                                className={styles.insetImage}
                                alt="Fine Dining"
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className={styles.right}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <span className="section-tag">About Us</span>
                        <h2 className={styles.heading}>We Can Help You Feel More Comfortable !</h2>
                        <p className={styles.description}>
                            Dedicated to providing an unforgettable stay, our team ensures every detail of your visit is perfect. From curated experiences to bespoke service, feel at home in our sanctuary.
                        </p>

                        <div className={styles.contactCard}>
                            <div className={styles.contactInfo}>
                                <div className={styles.iconCircle}>
                                    <Phone size={24} />
                                </div>
                                <div className={styles.contactText}>
                                    <h4>For More Information, Please Contact Us</h4>
                                    <p className={styles.phone}>+250 788 123 456</p>
                                </div>
                            </div>
                            <Button
                                variant="primary"
                                size="sm"
                                href="/contact"
                                style={{ backgroundColor: '#2CC2C0', padding: '0.8rem 1.5rem' }}
                            >
                                MAIL US
                            </Button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
