"use client";

import { motion } from 'framer-motion';
import Button from '../ui/Button';
import styles from './Intro.module.css';

export default function Intro() {
    return (
        <section className={styles.intro}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={styles.content}
                >
                    <h2 className={styles.heading}>A Sanctuary for the Soul</h2>
                    <p className={styles.text}>
                        Nestled in the breathtaking landscapes of Rwanda, Amikus is more than just a hotel—it is a gateway to the extraordinary.
                        Inspired by the warmth of Rwandan hospitality and the wild beauty of nature, we invite you to disconnect from the world and reconnect with yourself.
                    </p>
                    <div className={styles.actions}>
                        <Button variant="outline" href="/about">Read Our Story</Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
