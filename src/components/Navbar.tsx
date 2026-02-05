import { useState, useEffect } from 'react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { address, isConnected } = useAccount()
    const { connectors, connect } = useConnect()
    const { disconnect } = useDisconnect()
    const location = useLocation()

    // Check if we are on the home page
    const isHomePage = location.pathname === '/'

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Effect to handle hash scrolling when navigating from another page
    useEffect(() => {
        if (location.hash) {
            const elem = document.getElementById(location.hash.substring(1));
            if (elem) {
                setTimeout(() => {
                    elem.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);


    const handleWalletClick = () => {
        if (isConnected) {
            disconnect()
        } else {
            const injectedConnector = connectors.find((c) => c.type === 'injected')
            if (injectedConnector) {
                connect({ connector: injectedConnector })
            } else {
                alert('No wallet connection found. Please install MetaMask.')
            }
        }
    }

    const formatAddress = (addr: string) => {
        return `${addr.slice(0, 6)}...${addr.slice(-4)}`
    }

    const navLinks = [
        { name: 'Home', href: '/', type: 'route' },
        { name: 'Gallery', href: '/gallery', type: 'route' },
        { name: 'Dining', href: '/dining', type: 'route' },
        { name: 'Accommodation', href: '/accommodation', type: 'route' },
        { name: 'Experience', href: '#experience', type: 'hash' },
        { name: 'Contact', href: '#contact', type: 'hash' },
    ]

    const getLinkProps = (link: { name: string, href: string, type: string }) => {
        // If it's a route, always use Link
        if (link.type === 'route') {
            return { to: link.href, as: Link }
        }
        // If it's a hash
        if (link.type === 'hash') {
            // If on home page, treat as normal anchor for smooth scroll if possible 
            // (or let standard browser behavior handle it, but we use a specialized scroll usually)
            if (isHomePage) {
                return { href: link.href, as: 'a' }
            } else {
                // If not on home page, go to home + hash
                return { to: '/' + link.href, as: Link }
            }
        }
        return { href: link.href, as: 'a' }
    }

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHomePage ? 'bg-black/90 shadow-md py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <Link to="/" className={`h-12 w-12 rounded-full flex items-center justify-center font-serif text-xl font-bold border-2 ${isScrolled || !isHomePage ? 'border-white text-white' : 'border-white text-white bg-white/10 backdrop-blur-sm'}`}>
                        AH
                    </Link>
                </div>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => {
                        const props = getLinkProps(link)
                        const Component = props.as as any

                        return (
                            <Component
                                key={link.name}
                                {...(props.to ? { to: props.to } : { href: props.href })}
                                className="text-white text-xs font-bold tracking-[0.15em] hover:text-primary transition-colors uppercase"
                            >
                                {link.name}
                            </Component>
                        )
                    })}
                </div>

                {/* Wallet & Mobile Menu Toggle */}
                <div className="flex items-center space-x-4">
                    <button
                        onClick={handleWalletClick}
                        className="px-6 py-2 rounded-full font-semibold text-xs transition-all duration-300 bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 uppercase tracking-wider"
                    >
                        {isConnected && address ? formatAddress(address) : 'Connect'}
                    </button>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden text-2xl focus:outline-none"
                    >
                        <span className="text-white">☰</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 shadow-xl py-8 px-6 flex flex-col space-y-6 animate-fade-in border-t border-gray-800">
                    {navLinks.map((link) => {
                        const props = getLinkProps(link)
                        const Component = props.as as any
                        return (
                            <Component
                                key={link.name}
                                {...(props.to ? { to: props.to } : { href: props.href })}
                                className="text-white font-serif text-xl hover:text-primary tracking-wide text-center"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Component>
                        )
                    })}
                </div>
            )}
        </nav>
    )
}

export default Navbar
