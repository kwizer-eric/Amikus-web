import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
    {
        category: 'General',
        items: [
            { q: 'What are the check-in and check-out times?', a: 'Check-in is from 3:00 PM, and check-out is until 11:00 AM. Early check-in and late check-out are subject to availability.' },
            { q: 'Is breakfast included in the room rate?', a: 'Yes, a complimentary continental breakfast is included for all guests. A la carte options are available for an additional charge.' },
            { q: 'Do you offer airport transportation?', a: 'We provide private car transfers from the airport upon request. Please contact our concierge at least 24 hours in advance to arrange.' }
        ]
    },
    {
        category: 'Meetings & Events',
        items: [
            { q: 'What is the capacity of your largest meeting room?', a: 'Our Grand Ballroom can accommodate up to 300 guests theater-style or 200 for a banquet.' },
            { q: 'Do you provide AV equipment?', a: 'State-of-the-art audio-visual equipment is available in all meeting rooms, including projectors, screens, and sound systems.' }
        ]
    },
    {
        category: 'Pets Policy',
        items: [
            { q: 'Are pets allowed?', a: 'We are a pet-friendly hotel! We welcome dogs up to 20kg. A cleaning fee of $50 per stay applies.' },
            { q: 'Do you provide amenities for pets?', a: 'Yes, we provide a pet bed, water bowl, and a welcome treat for your furry friend.' }
        ]
    },
    {
        category: 'Parking Information',
        items: [
            { q: 'Is parking available on site?', a: 'We offer secure underground valet parking for all guests at a rate of $25 per night.' },
            { q: 'Do you have electric vehicle charging stations?', a: 'Yes, we have 4 Tesla Superchargers and 2 universal EV charging stations available for guests.' }
        ]
    }
]

const FAQ = () => {
    const [activeCategory, setActiveCategory] = useState(0)
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-4">
                    <h2 className="text-3xl md:text-5xl font-serif text-dark">Common <br /><span className="italic text-gray-400">Questions</span></h2>
                    <p className="hidden md:block text-gray-500 max-w-xs text-right mb-1 text-sm">Everything you need to know about your stay.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
                    {/* Categories (Minimal Vertical List) */}
                    <div className="w-full lg:w-1/4">
                        <ul className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-6 lg:gap-4 pb-2 lg:pb-0 hide-scrollbar">
                            {faqs.map((faq, index) => (
                                <li key={index} className="flex-shrink-0">
                                    <button
                                        onClick={() => { setActiveCategory(index); setOpenIndex(0); }}
                                        className={`text-xs tracking-[0.2em] uppercase font-bold transition-all duration-500 text-left ${activeCategory === index ? 'text-dark pl-3 border-l-2 border-dark' : 'text-gray-300 hover:text-gray-500 pl-0 border-l-2 border-transparent'}`}
                                    >
                                        {faq.category}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Accordion Items (Clean Lines) */}
                    <div className="w-full lg:w-3/4">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-0"
                        >
                            {faqs[activeCategory].items.map((item, index) => (
                                <div key={index} className="border-b border-gray-100 group">
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="w-full flex justify-between items-baseline py-5 text-left focus:outline-none"
                                    >
                                        <span className={`text-lg md:text-xl font-serif transition-colors duration-300 ${openIndex === index ? 'text-dark' : 'text-gray-400 group-hover:text-gray-600'}`}>
                                            {item.q}
                                        </span>
                                        <span className={`text-[10px] ml-4 transform transition-all duration-300 ${openIndex === index ? 'rotate-45 text-dark' : 'text-gray-300'}`}>
                                            +
                                        </span>
                                    </button>
                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pb-6 pr-0 md:pr-10">
                                                    <p className="text-gray-500 leading-relaxed font-light text-sm">
                                                        {item.a}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ
