import PageHeader from '@/components/layout/PageHeader';

export default function GalleryPage() {
    return (
        <main>
            <PageHeader
                title="Gallery"
                subtitle="A visual journey through Amikus."
                image="https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2674&auto=format&fit=crop"
            />
            <section className="section-padding container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                    {/* Placeholder Grid */}
                    <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670" alt="Hotel" />
                    <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2670" alt="Pool" />
                    <img src="https://images.unsplash.com/photo-1571896349842-6e53ce41e86a?q=80&w=2671" alt="Room" />
                    <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574" alt="Food" />
                </div>
            </section>
        </main>
    );
}
