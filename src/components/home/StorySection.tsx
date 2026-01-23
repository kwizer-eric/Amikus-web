"use client";

import { motion } from 'framer-motion';
import Button from '../ui/Button';
import SectionHeader from '../ui/SectionHeader';
import styles from './StorySection.module.css';

export default function StorySection() {
    return (
        <section className={styles.section}>
            <div className={styles.parallaxBg} />
            <div className={styles.overlay} />

            <div className={`container ${styles.container}`}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <SectionHeader
                        title="A History of Excellence"
                        subtitle=""
                        centered={false}
                        light={true}
                    />
                    <p className={styles.text}>
                        Amikus Ruhengeri is more than a hotel; it's a legacy of Rwandan hospitality. Founded on the principles of warmth and community, we have curated a space where every guest feels like royalty.
                    </p>
                    <div className={styles.quote}>
                        "The most beautiful view I have ever seen. The service is impeccable."
                        <span>- Sarah Jenkins, Vogue Travel</span>
                    </div>
                    <Button variant="primary" style={{ marginTop: '2rem', background: 'var(--c-white)', color: 'var(--c-midnight)' }}>
                        Read Our Full Story
                    </Button>
                </motion.div>

                <motion.div
                    className={styles.visuals}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2670"
                        alt="Hotel History"
                        className={styles.image}
                    />
                </motion.div>
            </div>
        </section>
    );
}
