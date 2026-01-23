"use client";

import { Calendar, Users, Home, ArrowRight } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import styles from './BookingWidget.module.css';

export default function BookingWidget() {
    return (
        <div className={styles.wrapper}>
            <GlassCard className={styles.widget} hoverEffect={false}>
                <div className={styles.innerGrid}>

                    <div className={styles.group}>
                        <div className={styles.labelRow}>
                            <Calendar size={14} className={styles.icon} />
                            <label>Check In</label>
                        </div>
                        <input type="date" className={styles.input} />
                    </div>

                    <div className={styles.divider} />

                    <div className={styles.group}>
                        <div className={styles.labelRow}>
                            <Calendar size={14} className={styles.icon} />
                            <label>Check Out</label>
                        </div>
                        <input type="date" className={styles.input} />
                    </div>

                    <div className={styles.divider} />

                    <div className={styles.group}>
                        <div className={styles.labelRow}>
                            <Users size={14} className={styles.icon} />
                            <label>Guests</label>
                        </div>
                        <select className={styles.select}>
                            <option>2 Adults</option>
                            <option>Family</option>
                        </select>
                    </div>

                    <div className={styles.divider} />

                    <div className={styles.group}>
                        <div className={styles.labelRow}>
                            <Home size={14} className={styles.icon} />
                            <label>Room</label>
                        </div>
                        <select className={styles.select}>
                            <option>Suite</option>
                            <option>Villa</option>
                        </select>
                    </div>

                    <button className={styles.checkBtn}>
                        <span>Check Availability</span>
                        <ArrowRight size={18} />
                    </button>

                </div>
            </GlassCard>
        </div>
    );
}
