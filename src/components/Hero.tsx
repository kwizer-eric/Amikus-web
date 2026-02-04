

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')", // Fallback luxury hotel image
                }}
            >
                <div className="absolute inset-0 bg-black/30"></div> {/* Overlay */}
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center pt-20">
                <p className="text-white text-sm uppercase tracking-[0.2em] mb-4 animate-fade-in-up">Welcome to Amikus Hotel</p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-8 leading-tight animate-fade-in-up delay-100">
                    Experience the ultimate <br /> comfort and relaxation
                </h1>

                <p className="text-white/90 max-w-2xl text-sm md:text-base font-light mb-12 animate-fade-in-up delay-200">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>

                {/* Booking Widget */}
                <div className="bg-white rounded shadow-2xl p-4 md:p-6 w-full max-w-5xl grid grid-cols-1 md:grid-cols-4 gap-4 items-end animate-fade-in-up delay-300">

                    {/* Check In/Out */}
                    <div className="flex flex-col text-left group">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 group-focus-within:text-primary">Dates</label>
                        <div className="border-b border-gray-300 py-2">
                            <input type="text" placeholder="Mon 02 Feb 2026" className="w-full text-dark font-medium focus:outline-none placeholder-gray-400 text-sm" />
                        </div>
                    </div>

                    {/* Rooms & Guests */}
                    <div className="flex flex-col text-left group">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 group-focus-within:text-primary">Rooms & Guests</label>
                        <div className="border-b border-gray-300 py-2 relative">
                            <select className="w-full text-dark font-medium focus:outline-none text-sm bg-transparent appearance-none">
                                <option>1 Room, 2 Adults</option>
                                <option>2 Rooms, 4 Adults</option>
                            </select>
                            <span className="absolute right-0 top-2 pointer-events-none text-gray-400">▼</span>
                        </div>
                    </div>

                    {/* Special Rates */}
                    <div className="flex flex-col text-left group">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 group-focus-within:text-primary">Special Rates</label>
                        <div className="border-b border-gray-300 py-2 relative">
                            <select className="w-full text-dark font-medium focus:outline-none text-sm bg-transparent appearance-none">
                                <option>Lowest Available</option>
                                <option>Senior Discount</option>
                            </select>
                            <span className="absolute right-0 top-2 pointer-events-none text-gray-400">▼</span>
                        </div>
                    </div>

                    {/* Book Button */}
                    <div>
                        <button className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-4 rounded transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            BOOK
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero
