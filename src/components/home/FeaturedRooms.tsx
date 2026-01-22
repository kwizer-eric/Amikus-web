"use client";

import { motion } from 'framer-motion';
import Button from '../ui/Button';
import styles from './FeaturedRooms.module.css';

const rooms = [
    {
        id: 1,
        name: 'Mountain View Suite',
        description: 'Panoramic views of the volcanic landscape, featuring a private terrace and deep soaking tub.',
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2574&auto=format&fit=crop', // Luxury room
    },
    {
        id: 2,
        name: 'Forest Villa',
        description: 'Immersed in nature, this villa offers seclusion and direct access to forest trails.',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2370&auto=format&fit=crop', // Villa
    },
    {
        id: 3,
        name: 'Royal Residence',
        description: 'The epitome of luxury with spacious living areas, private pool, and dedicated butler service.',
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2670&auto=format&fit=crop', // Royal
    },
];

export default function FeaturedRooms() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Accommodations</h2>
                    <Button variant="outline" href="/rooms">View All Rooms</Button>
                </div>

                <div className={styles.grid}>
                    {rooms.map((room, index) => (
                        <motion.div
                            key={room.id}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className={styles.imageWrapper}>
                                <img src={room.image} alt={room.name} className={styles.image} />
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.roomName}>{room.name}</h3>
                                <p className={styles.description}>{room.description}</p>
                                <Button variant="secondary" size="sm" href={`/rooms/${room.id}`}>
                                    Details
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
