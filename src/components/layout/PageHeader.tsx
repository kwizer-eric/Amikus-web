"use client";

import { motion } from 'framer-motion';
import styles from './PageHeader.module.css';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    image: string;
}

export default function PageHeader({ title, subtitle, image }: PageHeaderProps) {
    return (
        <div className={styles.header}>
            <div className={styles.background}>
                <div className={styles.overlay} />
                <img src={image} alt={title} className={styles.image} />
            </div>
            <div className={styles.content}>
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {title}
                </motion.h1>
                {subtitle && (
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </div>
    );
}
