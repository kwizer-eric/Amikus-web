"use client";

import Button from '../ui/Button';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';
import styles from './ContactSection.module.css';

export default function ContactSection() {
    return (
        <section className={styles.section}>
            <div className="container">
                <SectionHeader
                    title="Visit Us"
                    subtitle="We look forward to welcoming you to our sanctuary in Musanze."
                />

                <div className={styles.grid}>
                    <div className={styles.info}>
                        <p className={styles.address}>
                            Ruhengeri, Musanze District<br />
                            Northern Province, Rwanda
                        </p>
                        <p className={styles.contact}>
                            <span style={{ color: 'var(--c-gold)' }}>+250 788 123 456</span><br />
                            reservations@amikus.rw
                        </p>

                        <div className={styles.mapPlaceholder}>
                            <span>Google Maps Integration</span>
                        </div>
                    </div>

                    <GlassCard className={styles.formWrapper}>
                        <h3 className={styles.formTitle}>Send a Message</h3>
                        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                            <div className={styles.field}>
                                <label>Name</label>
                                <input type="text" placeholder="Your Name" />
                            </div>
                            <div className={styles.field}>
                                <label>Email</label>
                                <input type="email" placeholder="email@example.com" />
                            </div>
                            <div className={styles.field}>
                                <label>Message</label>
                                <textarea placeholder="How can we help you?" rows={4} />
                            </div>
                            <Button variant="primary" style={{ width: '100%', background: 'var(--c-gold)', color: 'var(--c-midnight)' }}>
                                Send Message
                            </Button>
                        </form>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
}
