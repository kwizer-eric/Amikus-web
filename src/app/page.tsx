"use client";

import Hero from '@/components/home/Hero';
import RoomsCarousel from '@/components/home/RoomsCarousel';
import Amenities from '@/components/home/Amenities';
import StorySection from '@/components/home/StorySection';
import Gallery from '@/components/home/Gallery';
import ContactSection from '@/components/home/ContactSection';

export default function Home() {
  return (
    <main>
      <div className="noise-bg" />
      <Hero />
      <RoomsCarousel />
      <Amenities />
      <StorySection />
      <Gallery />
      <ContactSection />
    </main>
  );
}
