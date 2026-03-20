import Image from 'next/image';

const features = [
  {
    title: 'Factory Direct Pricing',
    desc: 'No middlemen. We buy straight from verified China factories, passing 30–50% savings directly to you.',
  },
  {
    title: 'Verified Supplier Network',
    desc: 'All our factory partners are thoroughly vetted for quality, certifications, and reliability.',
  },
  {
    title: 'Fast Quote Turnaround',
    desc: 'Receive a detailed, itemized quote within 24–48 hours of submitting your requirements.',
  },
  {
    title: 'End-to-End Logistics',
    desc: 'We handle everything — from sourcing to shipping to delivery right to your Philippine location.',
  },
  {
    title: 'Philippine Market Expertise',
    desc: 'We know exactly what restaurant owners in the Philippines need — and where to get it for less.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section" style={{ backgroundColor: '#FFFDF0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{
            display: 'inline-flex',
            backgroundColor: '#FFF3B0',
            color: '#0D0D0D',
            fontSize: '0.75rem',
            fontWeight: 600,
            padding: '0.375rem 1rem',
            borderRadius: '100px',
            marginBottom: '1rem',
          }}>
            Why Choose Us
          </div>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
            fontWeight: 700,
            color: '#0D0D0D',
            marginBottom: '0.75rem',
          }}>
            The Smart Choice for PH Restaurants
          </h2>
        </div>

        {/* Two columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '60% 40%',
          gap: '3rem',
          alignItems: 'center',
        }}
          className="why-grid"
        >
          {/* Left: feature list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {features.map((f) => (
              <div key={f.title} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '24px', height: '24px', borderRadius: '50%', flexShrink: 0,
                  background: 'linear-gradient(135deg, #FFE566 0%, #F5C800 60%, #D4A800 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginTop: '2px',
                }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6l2.5 2.5 5-5" stroke="#0D0D0D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: '1rem', color: '#0D0D0D', marginBottom: '4px' }}>{f.title}</p>
                  <p style={{ fontSize: '0.875rem', color: '#737373', lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: dark card */}
          <div style={{
            backgroundColor: '#0D0D0D',
            borderRadius: '20px',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}>
            <div>
              <div style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #FFE566 0%, #F5C800 60%, #D4A800 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 1.1,
                marginBottom: '8px',
              }}>
                Save ₱5K–₱15K
              </div>
              <p style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 500 }}>
                per item vs local PH prices
              </p>
            </div>

            {/* Image */}
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              position: 'relative',
              height: '160px',
            }}>
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=200&fit=crop"
                alt="Kitchen equipment"
                fill
                style={{ objectFit: 'cover' }}
                unoptimized
              />
            </div>

            <a href="#quote" className="btn-yellow" style={{ marginTop: '8px', justifyContent: 'center' }}>
              Get a Quote
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .why-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
