"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import styles from './Gallery.module.css';

const images = [
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2670",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2670",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2370",
    "https://images.unsplash.com/photo-1571896349842-6e53ce41e86a?q=80&w=2671",
    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2670",
];

export default function Gallery() {
    const [selectedImg, setSelectedImg] = useState<string | null>(null);

    return (
        <section className={styles.section}>
            <div className="container">
                <SectionHeader
                    title="Gallery"
                    subtitle="A visual journey through the Amikus experience, capturing moments of calm and luxury."
                />

                <div className={styles.masonry}>
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            className={styles.item}
                            whileHover={{ scale: 1.02 }}
                            onClick={() => setSelectedImg(src)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <img src={src} alt="Gallery" className={styles.image} />
                            <div className={styles.overlay}>
                                <ZoomIn className={styles.icon} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        className={styles.lightbox}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImg(null)}
                    >
                        <div className="noise-bg" /> {/* Global noise overlap */}
                        <div className={styles.lightboxContent}>
                            <img src={selectedImg} alt="Enlarged view" />
                            <button className={styles.closeBtn}><X size={32} /></button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
