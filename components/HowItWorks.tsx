const steps = [
  {
    num: '1',
    title: 'Submit Requirements',
    desc: 'Tell us what equipment you need',
  },
  {
    num: '2',
    title: 'We Source from China',
    desc: 'Our buyers find verified factory partners',
  },
  {
    num: '3',
    title: 'Quote in 24–48 Hours',
    desc: 'Detailed pricing sent to your email',
  },
  {
    num: '4',
    title: 'Delivery to PH',
    desc: 'We handle logistics end to end',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section" style={{ backgroundColor: '#0D0D0D', position: 'relative', overflow: 'hidden' }}>
      {/* Background texture */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=600&fit=crop"
        alt=""
        aria-hidden
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', opacity: 0.04, pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '0.75rem',
          }}>
            How It Works
          </h2>
          <p style={{ fontSize: '1rem', color: '#a3a3a3', maxWidth: '480px', margin: '0 auto', lineHeight: 1.6 }}>
            From request to delivery — our streamlined process makes sourcing effortless.
          </p>
        </div>

        {/* Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0',
          position: 'relative',
        }}
          className="steps-grid"
        >
          {steps.map((step, i) => (
            <div key={step.num} style={{ textAlign: 'center', padding: '0 1.5rem', position: 'relative' }}>
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '50%',
                  width: '100%',
                  height: '2px',
                  borderTop: '2px dashed rgba(245, 200, 0, 0.4)',
                  zIndex: 0,
                }} />
              )}

              {/* Circle */}
              <div style={{
                width: '40px', height: '40px',
                background: 'linear-gradient(135deg, #FFE566 0%, #F5C800 60%, #D4A800 100%)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 1rem',
                position: 'relative', zIndex: 1,
                fontWeight: 700, fontSize: '1rem', color: '#0D0D0D',
                boxShadow: '0 4px 16px rgba(245,200,0,0.3)',
              }}>
                {step.num}
              </div>

              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#ffffff', marginBottom: '8px' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '0.8125rem', color: '#a3a3a3', lineHeight: 1.5 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="#quote" className="btn-yellow" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}>
            Start Your Order →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .steps-grid { grid-template-columns: repeat(2, 1fr) !important; row-gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
