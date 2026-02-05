import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import GalleryPage from './pages/GalleryPage'
import AccommodationPage from './pages/AccommodationPage'
import DiningPage from './pages/DiningPage'
import ScrollToTop from './components/ScrollToTop' // Helper we should create

function App() {
  return (
    <Router>
      <main className="min-h-screen bg-light font-sans flex flex-col">
        <Navbar />
        <ScrollToTop /> {/* Ensure page starts at top on navigation */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/accommodation" element={<AccommodationPage />} />
            <Route path="/dining" element={<DiningPage />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </Router>
  )
}



export default App
