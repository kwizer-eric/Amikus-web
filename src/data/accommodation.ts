import heroImage from '../assets/images/hero.jpg'
import hero2Image from '../assets/images/hero2.jpg'
import res5 from '../assets/images/res5.jpg'
import res6 from '../assets/images/res6.jpg'

export interface Room {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
    number: string;
    features?: string[];
}

export const rooms: Room[] = [
    {
        id: 1,
        name: 'Presidential Suite',
        description: 'The pinnacle of luxury. Panoramic ocean views, private infinity pool, and dedicated butler service. Experience the ultimate in exclusivity and comfort.',
        price: 'From $1,200',
        image: heroImage,
        number: '01',
        features: ['200m²', 'Ocean View', 'Private Pool', 'Butler']
    },
    {
        id: 2,
        name: 'Ocean Sanctuary',
        description: 'Suspended over the turquoise lagoon. Direct ocean access and unbroken horizons. Perfect for those seeking a deep connection with the sea.',
        price: 'From $850',
        image: res5,
        number: '02',
        features: ['120m²', 'Overwater', 'Direct Access', 'Sun Deck']
    },
    {
        id: 3,
        name: 'Forest Retreat',
        description: 'Hidden amidst lush tropical foliage. Absolute privacy and connection with nature. A serene hideaway for restoration and peace.',
        price: 'From $600',
        image: res6,
        number: '03',
        features: ['90m²', 'Garden View', 'Outdoor Bath', 'Private Patio']
    },
    {
        id: 4,
        name: 'The Residence',
        description: 'A sprawling family estate with private beach access and dual pavilions for living and sleeping. Ample space for gathering and relaxation.',
        price: 'From $2,500',
        image: hero2Image,
        number: '04',
        features: ['350m²', 'Beachfront', '2 Bedrooms', 'Full Kitchen']
    }
]
