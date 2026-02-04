

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-20 border-t border-gray-800">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                {/* Brand */}
                <div>
                    <div className="h-16 w-16 bg-white/10 rounded-full flex items-center justify-center font-serif text-2xl font-bold mb-6">AH</div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        Experience the ultimate comfort and relaxation at Amikus Hotel. Your sanctuary in the heart of nature.
                    </p>
                    <div className="flex space-x-4">
                        {/* Social Icons Placeholder */}
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">f</div>
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">t</div>
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">in</div>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-serif mb-6">Quick Links</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li className="hover:text-primary cursor-pointer transition-colors">About Us</li>
                        <li className="hover:text-primary cursor-pointer transition-colors">Accommodation</li>
                        <li className="hover:text-primary cursor-pointer transition-colors">Dining & Bar</li>
                        <li className="hover:text-primary cursor-pointer transition-colors">Events</li>
                        <li className="hover:text-primary cursor-pointer transition-colors">Contact</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-lg font-serif mb-6">Contact Us</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li className="flex items-start">
                            <span className="text-primary mr-3">📍</span>
                            123 Luxury Avenue, Paradise City, PC 56789
                        </li>
                        <li className="flex items-center">
                            <span className="text-primary mr-3">📞</span>
                            +1 (234) 567-8900
                        </li>
                        <li className="flex items-center">
                            <span className="text-primary mr-3">✉️</span>
                            reservations@amikus.com
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="text-lg font-serif mb-6">Newsletter</h4>
                    <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for special offers.</p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="bg-white/5 border border-gray-700 text-white px-4 py-2 text-sm focus:outline-none focus:border-primary w-full"
                        />
                        <button className="bg-primary px-4 py-2 text-white font-bold hover:bg-orange-600 transition-colors">
                            →
                        </button>
                    </div>
                </div>

            </div>

            <div className="container mx-auto px-6 mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
                &copy; {new Date().getFullYear()} Amikus Hotel. All rights reserved. Built with React & Web3.
            </div>
        </footer>
    )
}

export default Footer
