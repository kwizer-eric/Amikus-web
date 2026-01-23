"use client";

import { motion } from 'framer-motion';

interface SectionHeaderProps {
    title: string;
    subtitle: string;
    centered?: boolean;
    light?: boolean;
}

export default function SectionHeader({ title, subtitle, centered = true, light = true }: SectionHeaderProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
                textAlign: centered ? 'center' : 'left',
                marginBottom: '4rem',
                color: light ? 'var(--text-primary)' : 'var(--c-midnight)'
            }}
        >
            <span style={{
                color: 'var(--c-gold)',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                fontSize: '0.8rem',
                fontWeight: 700,
                display: 'block',
                marginBottom: '1rem'
            }}>
                Amikus Experience
            </span>
            <h2 style={{
                font: 'var(--h2)',
                marginBottom: '1rem',
                background: light ? 'linear-gradient(180deg, #fff 0%, #ccc 100%)' : 'var(--c-midnight)',
                WebkitBackgroundClip: light ? 'text' : 'border-box',
                WebkitTextFillColor: light ? 'transparent' : 'inherit'
            }}>
                {title}
            </h2>
            <p style={{
                color: 'var(--text-secondary)',
                maxWidth: '600px',
                margin: centered ? '0 auto' : '0',
                fontSize: '1.1rem',
                lineHeight: 1.6
            }}>
                {subtitle}
            </p>
        </motion.div>
    );
}
