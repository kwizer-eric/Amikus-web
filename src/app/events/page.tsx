import PageHeader from '@/components/layout/PageHeader';

export default function EventsPage() {
    return (
        <main>
            <PageHeader
                title="Events & Weddings"
                subtitle="Celebrate life's milestones in unforgetable settings."
                image="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2698&auto=format&fit=crop"
            />
            <section className="section-padding container">
                <p style={{ textAlign: 'center' }}>From intimate gatherings to grand celebrations.</p>
            </section>
        </main>
    );
}
