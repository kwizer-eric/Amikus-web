"use client";

import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container-full">
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <h2 className={styles.logo}>AMIKUS <br />RUHENGERI</h2>
                        <p className="mono">Kigali, Rwanda — EST. 2024</p>
                    </div>

                    <div className={styles.meta}>
                        <div className={styles.column}>
                            <h3>Navigation</h3>
                            <ul>
                                <li><Link href="/rooms">Accommodations</Link></li>
                                <li><Link href="/dining">Culinary</Link></li>
                                <li><Link href="/wellness">Wellness</Link></li>
                                <li><Link href="/experiences">Experiences</Link></li>
                            </ul>
                        </div>
                        <div className={styles.column}>
                            <h3>Connect</h3>
                            <ul>
                                <li>Info@amikus.rw</li>
                                <li>+250 788 123 456</li>
                                <li>Instagram</li>
                                <li>LinkedIn</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© {new Date().getFullYear()} AMIKUS HOSPITALITY GROUP</p>
                    <p>PRIVACY — LEGAL</p>
                </div>
            </div>
        </footer>
    );
}
