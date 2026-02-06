export interface Experience {
    id: number;
    title: string;
    category: 'Festival' | 'Dining' | 'Wellness' | 'Event' | 'Social';
    date?: string;
    time?: string;
    location?: string;
    description: string;
    fullDescription: string;
    image: string;
    size: 'large' | 'medium' | 'small';
    features: string[];
}

export const experiences: Experience[] = [
    {
        id: 1,
        title: 'Eid Al-Adha Grand Feast',
        category: 'Festival',
        date: '16 June 2026',
        time: '19:00 - Late',
        location: 'Main Pavilion',
        description: 'Join us for a magnificent celebration under the stars.',
        fullDescription: 'Experience the warmth of community and the richness of tradition at our Grand Eid Al-Adha Feast. Our chefs have prepared a lavish spread featuring slow-roasted lamb, aromatic biryanis, and an array of traditional sweets. The evening will be accompanied by live Oud music and cultural performances.',
        image: 'https://images.unsplash.com/photo-1542646272-137533618177?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        size: 'large',
        features: ['Live Music', 'Traditional Buffet', 'Family Friendly', 'Fireworks']
    },
    {
        id: 2,
        title: 'Valentine’s Sunset Cruise',
        category: 'Event',
        date: '14 Feb 2026',
        time: '17:30 - 20:00',
        location: 'West Pier',
        description: 'Set sail into the golden horizon with champagne and romance.',
        fullDescription: 'Embark on a romantic journey aboard our luxury yacht. As the sun dips below the horizon, painting the sky in hues of orange and purple, enjoy free-flowing champagne and a selection of gourmet canapés. A perfect way to celebrate love.',
        image: 'https://images.unsplash.com/photo-1510006734731-5a02e864f7b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        size: 'large',
        features: ['Champagne Service', 'Live Saxophone', 'Sunset Views', 'Private Tables']
    },
    {
        id: 3,
        title: 'International Coffee Day',
        category: 'Social',
        date: '01 Oct 2026',
        time: '10:00 - 16:00',
        location: 'The Coffee Lounge',
        description: 'Celebrate the art of brewing with tastings and workshops.',
        fullDescription: 'For the love of coffee. Join our master baristas for a day dedicated to the bean. Learn about different roasting techniques, participate in latte art workshops, and taste rare single-origin coffees from around the world.',
        image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        size: 'medium',
        features: ['Barista Workshop', 'Tasting Flight', 'Bean Market', 'Pastry Pairing']
    },
    {
        id: 4,
        title: 'Sunday Seafood Brunch',
        category: 'Dining',
        time: '12:00 - 15:30',
        location: 'Ocean Deck',
        description: 'The freshest catch from local fishermen, prepared live.',
        fullDescription: 'Our legendary Sunday Brunch returns with a focus on the ocean\'s bounty. Select your catch from our ice display and have it grilled to perfection. Accompanied by refreshing cocktails and a laid-back island vibe.',
        image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        size: 'medium',
        features: ['Fresh Catch', 'Live Grilling', 'Cocktail Bar', 'Ocean View']
    },
    {
        id: 5,
        title: 'Full Moon Yoga',
        category: 'Wellness',
        time: '20:00 - 21:30',
        location: 'Sandbank',
        description: 'Align your energy with the lunar cycle on the beach.',
        fullDescription: 'Connect with nature and yourself in this special moonlit practice. The session combines gentle flow yoga with meditation, set to the rhythmic sound of the waves. Mats and refreshments provided.',
        image: 'https://images.unsplash.com/photo-1518002171953-a080ee321e2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        size: 'small',
        features: ['Guided Meditation', 'Moonlit Session', 'Herbal Tea', 'All Levels']
    },
    {
        id: 6,
        title: 'Chef’s Table: Spice Route',
        category: 'Dining',
        time: '19:30 Seating',
        location: 'Private Dining Room',
        description: 'An intimate 7-course tasting menu exploring spices.',
        fullDescription: 'A culinary journey tailored for the epicurean. Executive Chef Marco presents a menu inspired by the ancient spice trade routes. Each course is a story, paired with exceptional wines.',
        image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        size: 'small',
        features: ['7 Courses', 'Wine Pairing', 'Chef Interaction', 'Limited Seats']
    },
    {
        id: 7,
        title: 'New Year’s Gala',
        category: 'Festival',
        date: '31 Dec 2026',
        time: '20:00 - Late',
        location: 'Grand Ballroom & Beach',
        description: 'Ring in the new year with unparalleled glamour and fireworks.',
        fullDescription: 'The most anticipated event of the year. Dress to impress for a night of glitz and glamour. Enjoy a gala dinner, world-class entertainment, and a spectacular fireworks display at midnight to welcome 2027.',
        image: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        size: 'large',
        features: ['Gala Dinner', 'Fireworks', 'Live Band', 'Champagne Toast']
    }
]
