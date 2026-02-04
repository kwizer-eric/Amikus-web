
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Rooms from './components/Rooms'
import Services from './components/Services'
import Features from './components/Features'
import Attractions from './components/Attractions'
import Footer from './components/Footer'

function App() {
  return (
    <main className="min-h-screen bg-light font-sans">
      <Navbar />
      <Hero />
      <Rooms />
      <Services />
      <Features />
      <Attractions />
      <Footer />
    </main>
  )
}

export default App
