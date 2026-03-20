import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="section" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '55% 45%',
          gap: '3rem',
          alignItems: 'center',
        }}
          className="hero-grid"
        >
          {/* Left column */}
          <div>
            {/* Pill badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center',
              backgroundColor: '#FFF3B0', color: '#0D0D0D',
              fontSize: '0.75rem', fontWeight: 600,
              padding: '0.375rem 0.875rem', borderRadius: '100px',
              marginBottom: '1.5rem',
            }}>
              🏭 Direct from China · Factory Pricing
            </div>

            {/* H1 */}
            <h1 style={{
              fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              color: '#0D0D0D',
              marginBottom: '1.25rem',
              letterSpacing: '-1px',
            }}>
              Save Up to{' '}
              <span className="yellow-gradient-text">30–50%</span>
              {' '}on Restaurant Equipment
            </h1>

            {/* Subtext */}
            <p style={{
              fontSize: '1.125rem',
              color: '#737373',
              lineHeight: 1.6,
              maxWidth: '460px',
              marginBottom: '2rem',
            }}>
              Direct factory pricing from verified China suppliers. Same quality, faster delivery, lower cost for Philippine restaurants.
            </p>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              <a href="#quote" className="btn-yellow" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}>
                Get a Free Quote →
              </a>
              <a href="#products" className="btn-outline-black" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}>
                View Products
              </a>
            </div>

            {/* Trust row */}
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              {['Factory Direct', 'Verified Suppliers', 'PH Market Savings'].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{
                    width: '20px', height: '20px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #FFE566 0%, #F5C800 60%, #D4A800 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#0D0D0D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span style={{ fontSize: '0.875rem', color: '#404040', fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Min order note */}
            <p style={{ fontSize: '0.8125rem', color: '#737373', fontStyle: 'italic' }}>
              * Minimum order requirements apply. Contact us for details.
            </p>
          </div>

          {/* Right column — single hero image */}
          <div style={{
            position: 'relative',
            minHeight: '480px',
            borderRadius: '20px',
            overflow: 'hidden',
          }}>
            <Image
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop"
              alt="Restaurant kitchen equipment"
              fill
              style={{ objectFit: 'cover' }}
              priority
              unoptimized
            />
            {/* Yellow overlay */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(245,200,0,0.2) 0%, transparent 60%)',
              pointerEvents: 'none',
            }} />

            {/* Floating badge */}
            <div style={{
              position: 'absolute', bottom: '20px', left: '20px',
              backgroundColor: '#ffffff',
              padding: '14px 18px',
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
            }}>
              <p style={{ fontWeight: 700, color: '#0D0D0D', fontSize: '0.9375rem', marginBottom: '2px' }}>
                ⭐ Factory Verified
              </p>
              <p style={{ fontSize: '0.8125rem', color: '#737373' }}>
                500+ verified factory partners in China
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
