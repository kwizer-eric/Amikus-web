import { useState, useEffect } from 'react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { address, isConnected } = useAccount()
    const { connectors, connect } = useConnect()
    const { disconnect } = useDisconnect()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

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
        { name: 'Home', href: '#' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Dining', href: '#dining' },
        { name: 'Accommodation', href: '#rooms' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <div className={`h-12 w-12 rounded-full flex items-center justify-center font-serif text-xl font-bold border-2 ${isScrolled ? 'border-primary text-primary' : 'border-white text-white bg-white/10 backdrop-blur-sm'}`}>
                        AH
                    </div>
                </div>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium tracking-wide hover:text-primary transition-colors ${isScrolled ? 'text-dark' : 'text-white'
                                }`}
                        >
                            {link.name.toUpperCase()}
                        </a>
                    ))}
                </div>

                {/* Wallet & Mobile Menu Toggle */}
                <div className="flex items-center space-x-4">
                    <button
                        onClick={handleWalletClick}
                        className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${isScrolled
                                ? 'bg-primary text-white hover:bg-orange-600'
                                : 'bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30'
                            }`}
                    >
                        {isConnected && address ? formatAddress(address) : 'Connect Wallet'}
                    </button>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden text-2xl focus:outline-none"
                    >
                        <span className={isScrolled ? 'text-dark' : 'text-white'}>☰</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl py-4 px-6 flex flex-col space-y-4 animate-fade-in">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-dark font-medium hover:text-primary"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name.toUpperCase()}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default Navbar
