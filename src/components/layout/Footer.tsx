"use client";

import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <h2 className={styles.logo}>AMIKUS</h2>
                        <p className={styles.tagline}>Where luxury meets the heart of Rwanda.</p>
                    </div>

                    <div className={styles.links}>
                        <div className={styles.column}>
                            <h3>Explore</h3>
                            <ul>
                                <li><Link href="/rooms">Rooms & Suites</Link></li>
                                <li><Link href="/dining">Dining</Link></li>
                                <li><Link href="/wellness">Wellness</Link></li>
                                <li><Link href="/experiences">Experiences</Link></li>
                            </ul>
                        </div>
                        <div className={styles.column}>
                            <h3>Contact</h3>
                            <ul>
                                <li>Info@amikus.rw</li>
                                <li>+250 788 123 456</li>
                                <li>Kigali, Rwanda</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Amikus Hotel. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
