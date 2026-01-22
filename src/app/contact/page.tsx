import PageHeader from '@/components/layout/PageHeader';
import Button from '@/components/ui/Button';

export default function ContactPage() {
    return (
        <main>
            <PageHeader
                title="Contact Us"
                subtitle="We are here to assist you."
                image="https://images.unsplash.com/photo-1596178065756-784f18d6a8fa?q=80&w=2669&auto=format&fit=crop"
            />
            <section className="section-padding container">
                <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
                    <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.5rem', marginBottom: '1rem' }}>Get in Touch</h3>
                    <p style={{ marginBottom: '2rem' }}>
                        Email: info@amikus.rw<br />
                        Phone: +250 788 123 456<br />
                        Address: Kigali, Rwanda
                    </p>
                    <Button href="#">Open in Maps</Button>
                </div>
            </section>
        </main>
    );
}
