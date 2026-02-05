import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-20 pb-10 border-t border-gray-900 font-sans">
            <div className="container mx-auto px-6">

                {/* Main Columns Section */}
                <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-24">

                    {/* Column 1: Logo */}
                    <div className="lg:w-1/5">
                        <div className="font-serif text-4xl italic mb-6">Amikus</div>
                    </div>

                    {/* Column 2: About Us */}
                    <div className="lg:w-1/5">
                        <h5 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-6 text-gray-400">About Us</h5>
                        <ul className="space-y-4 text-xs font-medium tracking-wide">
                            <li className="hover:text-gray-400 cursor-pointer transition-colors">About Amikus</li>
                            <li className="hover:text-gray-400 cursor-pointer transition-colors">Our Resorts</li>
                            <li className="hover:text-gray-400 cursor-pointer transition-colors">Private Homes</li>
                        </ul>
                    </div>

                    {/* Column 3: News and Awards */}
                    <div className="lg:w-1/5">
                        <h5 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-6 text-gray-400">News and Awards</h5>
                        <ul className="space-y-4 text-xs font-medium tracking-wide">
                            <li className="hover:text-gray-400 cursor-pointer transition-colors">Media Centre</li>
                            <li className="hover:text-gray-400 cursor-pointer transition-colors">Awards</li>
                            <li className="hover:text-gray-400 cursor-pointer transition-colors">Newsletter Signup</li>
                        </ul>
                    </div>

                    {/* Column 4: Terms & Conditions */}
                    <div className="lg:w-1/5">
                        <h5 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-6 text-gray-400">Terms & Conditions</h5>
                        <ul className="space-y-4 text-xs font-medium tracking-wide">
                            <li className="hover:text-gray-400 cursor-pointer transition-colors">Privacy Policy</li>
                            <li className="hover:text-gray-400 cursor-pointer transition-colors">Website Terms</li>
                            <li className="hover:text-gray-400 cursor-pointer transition-colors">Sitemap</li>
                        </ul>
                    </div>

                    {/* Column 5: Contact */}
                    <div className="lg:w-1/5">
                        <h5 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-6 text-gray-400">Contact</h5>
                        <ul className="space-y-4 text-xs font-medium tracking-wide">
                            <li className="hover:text-gray-400 cursor-pointer transition-colors">Contact Us</li>
                            <li className="block mt-8 mb-6 h-[1px] w-10 bg-gray-800"></li> {/* Separator like in ref */}
                            <li className="hover:text-gray-400 cursor-pointer transition-colors">Careers</li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar Section */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-900">

                    {/* Social Icons */}
                    <div className="flex space-x-6 mb-4 md:mb-0">
                        {/* Simple text/icon placeholders to match the clean look */}
                        <a href="#" className="hover:text-gray-400 transition-colors text-lg">in</a>
                        <a href="#" className="hover:text-gray-400 transition-colors text-lg">X</a>
                        <a href="#" className="hover:text-gray-400 transition-colors text-lg">f</a>
                        <a href="#" className="hover:text-gray-400 transition-colors text-lg">📷</a>
                        <a href="#" className="hover:text-gray-400 transition-colors text-lg">▶</a>
                    </div>

                    {/* Copyright */}
                    <div className="text-[9px] tracking-[0.1em] font-bold text-gray-500 uppercase">
                        2026 &copy; Amikus International Limited. All Rights Reserved.
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer
