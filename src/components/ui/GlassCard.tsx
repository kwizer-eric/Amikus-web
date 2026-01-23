"use client";

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export default function GlassCard({ children, className = '', hoverEffect = true, ...props }: GlassCardProps) {
    return (
        <motion.div
            className={`glass-panel ${className}`}
            whileHover={hoverEffect ? { y: -10, borderColor: 'var(--c-gold)' } : {}}
            transition={{ duration: 0.4 }}
            style={{
                borderRadius: 'var(--radius-panel)',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
                // Default styles from glass-panel class, but extended here if needed
            }}
            {...props}
        >
            {/* Subtle Gradient Glow specific to card */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                background: 'radial-gradient(circle at top right, rgba(214,106,24,0.05), transparent 70%)',
                pointerEvents: 'none'
            }} />

            <div style={{ position: 'relative', zIndex: 2 }}>
                {children}
            </div>
        </motion.div>
    );
}
