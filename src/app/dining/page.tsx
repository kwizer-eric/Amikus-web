import PageHeader from '@/components/layout/PageHeader';

export default function DiningPage() {
    return (
        <main>
            <PageHeader
                title="Culinary Journeys"
                subtitle="Savor the flavors of Rwanda and beyond."
                image="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop"
            />
            <section className="section-padding container">
                <div style={{ textAlign: 'center' }}>
                    <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '2rem', marginBottom: '1rem' }}>The Signature Restaurant</h2>
                    <p>Farm-to-table excellence in an setting of understated luxury.</p>
                </div>
            </section>
        </main>
    );
}
