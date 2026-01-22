import PageHeader from '@/components/layout/PageHeader';

export default function RoomsPage() {
    return (
        <main>
            <PageHeader
                title="Rooms & Suites"
                subtitle="Sanctuaries of peace designed for your absolute comfort."
                image="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2670&auto=format&fit=crop"
            />
            <section className="section-padding container">
                <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
                    Explore our collection of elegantly appointed rooms, suites, and villas, each offering a unique connection to the Rwandan landscape.
                </p>

                {/* Room list would go here - reusing FeaturedRooms structure or a list component */}
            </section>
        </main>
    );
}
