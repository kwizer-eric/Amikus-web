"use client";

import Link from 'next/link';
import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary' | 'outline';
    href?: string;
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
}


export default function Button({
    variant = 'primary',
    href,
    size = 'md',
    className,
    children,
    ...props
}: ButtonProps) {
    const classes = clsx(
        styles.button,
        styles[variant],
        styles[size],
        className
    );

    const content = (
        <span className={styles.content}>
            {children}
        </span>
    );

    if (href) {
        // When href is provided, render a Link.
        // Note: We filter out button-specific props if necessary, 
        // but typically Link (anchor) accepts most common attributes.
        // We suppress the type mismatch for the 'type' attribute if specific button types are passed.

        // Explicitly casting props to any to avoid "Link does not accept button props" TS error 
        // if strictly typed, but here we just pass them.
        return (
            <Link href={href} className={classes} scroll={false} {...(props as any)}>
                {content}
            </Link>
        );
    }

    return (
        <motion.button
            className={classes}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            {...props}
        >
            {content}
        </motion.button>
    );
}
