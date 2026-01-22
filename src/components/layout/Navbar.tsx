"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import Button from '../ui/Button';
import styles from './Navbar.module.css';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Rooms & Suites', href: '/rooms' },
    { name: 'Dining', href: '/dining' },
    { name: 'Wellness', href: '/wellness' },
    { name: 'Experiences', href: '/experiences' },
    { name: 'Events', href: '/events' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileOpen(false);
    }, [pathname]);

    return (
        <>
            <header
                className={clsx(styles.header, {
                    [styles.scrolled]: isScrolled,
                    [styles.mobileOpen]: isMobileOpen
                })}
            >
                <div className={styles.container}>
                    <Link href="/" className={styles.logo}>
                        AMIKUS
                    </Link>

                    <nav className={styles.desktopNav}>
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className={styles.navLink}>
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className={styles.actions}>
                        <Button variant={isScrolled ? 'primary' : 'outline'} href="/book" className={styles.bookBtn}>
                            Book Now
                        </Button>
                        <button
                            className={styles.mobileToggle}
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                        >
                            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <nav className={styles.mobileNav}>
                            {navLinks.map((link) => (
                                <Link key={link.href} href={link.href} className={styles.mobileNavLink}>
                                    {link.name}
                                </Link>
                            ))}
                            <Button variant="primary" href="/book" className={styles.mobileBookBtn}>
                                Book Your Stay
                            </Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
