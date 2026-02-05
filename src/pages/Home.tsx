import React from 'react'
import Hero from '../components/Hero'
import Rooms from '../components/Rooms'
import Services from '../components/Services'
import Features from '../components/Features'
import Attractions from '../components/Attractions'
import ElevateStay from '../components/ElevateStay'
import FAQ from '../components/FAQ'
import Testimonials from '../components/Testimonials'

const Home = () => {
    return (
        <>
            <Hero />
            <Rooms />
            <Services />
            <Features />
            <Attractions />
            <ElevateStay />
            <FAQ />
            <Testimonials />
        </>
    )
}

export default Home
