import { motion } from 'framer-motion'
import { useState } from 'react'

const BookingPage = () => {
    const [step, setStep] = useState(1)

    return (
        <div className="bg-light min-h-screen pt-24 pb-32 text-dark">
            <div className="container mx-auto px-6 max-w-5xl">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Reservations</span>
                        <h1 className="text-4xl md:text-6xl font-serif">Secure Your Stay</h1>
                    </motion.div>
                </div>

                {/* Progress Steps */}
                <div className="flex justify-center items-center gap-4 mb-16 text-xs font-bold uppercase tracking-widest text-gray-400">
                    <span className={step >= 1 ? 'text-primary' : ''}>01 Dates</span>
                    <span className="w-8 h-[1px] bg-gray-300"></span>
                    <span className={step >= 2 ? 'text-primary' : ''}>02 Room</span>
                    <span className="w-8 h-[1px] bg-gray-300"></span>
                    <span className={step >= 3 ? 'text-primary' : ''}>03 Details</span>
                </div>

                {/* Content Area */}
                <motion.div
                    className="bg-white p-8 md:p-12 shadow-2xl rounded-sm border border-gray-100 min-h-[400px] flex flex-col justify-center items-center text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {step === 1 && (
                        <div className="w-full max-w-lg space-y-8">
                            <h2 className="text-2xl font-serif">Select your dates</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2 text-left">
                                    <label className="text-xs uppercase tracking-wider font-bold text-gray-500">Check In</label>
                                    <input type="date" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-primary font-serif text-lg bg-transparent" />
                                </div>
                                <div className="space-y-2 text-left">
                                    <label className="text-xs uppercase tracking-wider font-bold text-gray-500">Check Out</label>
                                    <input type="date" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-primary font-serif text-lg bg-transparent" />
                                </div>
                            </div>
                            <div className="space-y-2 text-left">
                                <label className="text-xs uppercase tracking-wider font-bold text-gray-500">Guests</label>
                                <select className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-primary font-serif text-lg bg-transparent">
                                    <option>2 Adults, 0 Children</option>
                                    <option>1 Adult</option>
                                    <option>2 Adults, 1 Child</option>
                                </select>
                            </div>
                            <button onClick={() => setStep(2)} className="w-full bg-dark text-white py-4 font-bold uppercase tracking-widest text-xs hover:bg-primary transition-colors mt-8">
                                Check Availability
                            </button>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="w-full max-w-lg space-y-8">
                            <h2 className="text-2xl font-serif">Availability</h2>
                            <p className="text-gray-500">Showing standard availability for selected dates.</p>
                            <div className="space-y-4">
                                <div className="bg-gray-50 p-6 text-left border border-gray-100 hover:border-primary cursor-pointer transition-colors" onClick={() => setStep(3)}>
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-serif text-xl">Ocean Sanctuary</h3>
                                        <span className="font-bold text-primary">$850/night</span>
                                    </div>
                                    <p className="text-sm text-gray-500">Overwater villa with direct ocean access.</p>
                                </div>
                                <div className="bg-gray-50 p-6 text-left border border-gray-100 hover:border-primary cursor-pointer transition-colors" onClick={() => setStep(3)}>
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-serif text-xl">Forest Retreat</h3>
                                        <span className="font-bold text-primary">$600/night</span>
                                    </div>
                                    <p className="text-sm text-gray-500">Private garden villa amidst lush foliage.</p>
                                </div>
                            </div>
                            <button onClick={() => setStep(1)} className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-dark mt-4">
                                ← Back
                            </button>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="w-full max-w-lg space-y-8">
                            <h2 className="text-2xl font-serif">Guest Details</h2>
                            <form className="space-y-6 text-left">
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="text" placeholder="First Name" className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-primary" />
                                    <input type="text" placeholder="Last Name" className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-primary" />
                                </div>
                                <input type="email" placeholder="Email Address" className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-primary" />
                                <input type="tel" placeholder="Phone Number" className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-primary" />
                                <div className="pt-4">
                                    <button type="button" className="w-full bg-primary text-white py-4 font-bold uppercase tracking-widest text-xs hover:bg-dark transition-colors">
                                        Complete Reservation
                                    </button>
                                </div>
                            </form>
                            <button onClick={() => setStep(2)} className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-dark mt-4">
                                ← Back to Room Selection
                            </button>
                        </div>
                    )}
                </motion.div>

            </div>
        </div>
    )
}

export default BookingPage
