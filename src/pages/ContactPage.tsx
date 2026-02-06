import { motion } from 'framer-motion'

const ContactPage = () => {
    return (
        <div className="bg-dark min-h-screen pt-24 pb-32 text-white flex flex-col items-center">
            {/* Header */}
            <div className="container mx-auto px-6 text-center max-w-4xl mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Get in Touch</span>
                    <h1 className="text-5xl md:text-7xl font-serif mb-8">We are here to help</h1>
                    <p className="text-gray-400 font-light text-lg">
                        Whether you have a question about your stay, need assistance with a reservation, or simply want to say hello.
                    </p>
                </motion.div>
            </div>

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-16"
                >
                    <div>
                        <h3 className="font-serif text-3xl mb-6">Amikus Resort</h3>
                        <p className="text-gray-400 font-light leading-relaxed">
                            No. 123, Paradise Road <br />
                            Nordic Island, NI 00123 <br />
                            North Atlantic Ocean
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 block">Reservations</span>
                            <a href="mailto:reservations@amikus.com" className="text-xl font-serif hover:text-primary transition-colors">reservations@amikus.com</a>
                            <p className="text-gray-400 mt-1">+1 (555) 123-4567</p>
                        </div>
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 block">General Enquiries</span>
                            <a href="mailto:info@amikus.com" className="text-xl font-serif hover:text-primary transition-colors">info@amikus.com</a>
                            <p className="text-gray-400 mt-1">+1 (555) 987-6543</p>
                        </div>
                    </div>

                    <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 block">Follow Us</span>
                        <div className="flex gap-6">
                            {['Instagram', 'Facebook', 'Twitter', 'LinkedIn'].map((social) => (
                                <a key={social} href="#" className="text-sm font-bold uppercase tracking-wider text-white hover:text-primary transition-colors">
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white/5 p-10 md:p-14 border border-white/10 backdrop-blur-sm"
                >
                    <form className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">First Name</label>
                                <input type="text" className="bg-transparent border-b border-gray-600 py-2 text-white focus:outline-none focus:border-primary transition-colors" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Last Name</label>
                                <input type="text" className="bg-transparent border-b border-gray-600 py-2 text-white focus:outline-none focus:border-primary transition-colors" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                            <input type="email" className="bg-transparent border-b border-gray-600 py-2 text-white focus:outline-none focus:border-primary transition-colors" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message</label>
                            <textarea rows={4} className="bg-transparent border-b border-gray-600 py-2 text-white focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
                        </div>

                        <button className="px-10 py-4 bg-white text-dark text-xs font-bold uppercase tracking-[0.2em] hover:bg-primary hover:text-white w-full md:w-auto transition-all duration-300 mt-4">
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    )
}

export default ContactPage
