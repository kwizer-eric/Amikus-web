import PageHeader from '@/components/layout/PageHeader';

export default function ExperiencesPage() {
    return (
        <main>
            <PageHeader
                title="Experiences"
                subtitle="Discover the magic of Rwanda."
                image="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2668&auto=format&fit=crop"
            />
            <section className="section-padding container">
                <ul style={{ listStyle: 'none', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <li>
                        <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.5rem' }}>Gorilla Trekking</h3>
                        <p>An encounter with the gentle giants of the Virungas.</p>
                    </li>
                    <li>
                        <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.5rem' }}>Cultural Immersion</h3>
                        <p>Connect with local communities and artisans.</p>
                    </li>
                </ul>
            </section>
        </main>
    );
}
