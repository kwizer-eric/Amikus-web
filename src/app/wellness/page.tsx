import PageHeader from '@/components/layout/PageHeader';

export default function WellnessPage() {
    return (
        <main>
            <PageHeader
                title="Wellness & Spa"
                subtitle="Rejuvenate your mind, body, and spirit."
                image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670&auto=format&fit=crop"
            />
            <section className="section-padding container">
                <div style={{ textAlign: 'center' }}>
                    <p>Holistic treatments inspired by ancient Rwandan traditions.</p>
                </div>
            </section>
        </main>
    );
}
