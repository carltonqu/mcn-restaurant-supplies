'use client';
export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0D0D0D' }}>
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>
        {/* 4-column grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2.5rem',
          marginBottom: '3rem',
        }}
          className="footer-grid"
        >
          {/* Logo + tagline */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2px', marginBottom: '0.75rem' }}>
              <span style={{ fontWeight: 800, fontSize: '1.375rem', color: '#ffffff' }}>MCN</span>
              <span style={{
                width: '6px', height: '6px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #FFE566 0%, #F5C800 60%, #D4A800 100%)',
                display: 'inline-block', margin: '0 2px 8px',
              }} />
              <span style={{ fontWeight: 400, fontSize: '1.125rem', color: '#a3a3a3' }}>Supplies</span>
            </div>
            <p style={{ fontSize: '0.8125rem', color: '#737373', fontStyle: 'italic', lineHeight: 1.6, maxWidth: '200px' }}>
              Direct-from-China restaurant equipment sourcing for Philippine food businesses.
            </p>
          </div>

          {/* Products */}
          <div>
            <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#737373', marginBottom: '1rem', fontWeight: 600 }}>
              Products
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {['Kitchen Equipment', 'Utensils & Tools', 'Storage & Shelving', 'Ingredients', 'Custom Orders'].map(link => (
                <a key={link} href="#products" style={{ fontSize: '0.875rem', color: '#737373', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#737373')}>
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#737373', marginBottom: '1rem', fontWeight: 600 }}>
              Company
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {['About Us', 'How It Works', 'Why Choose Us', 'Pricing', 'Get a Quote'].map(link => (
                <a key={link} href="#" style={{ fontSize: '0.875rem', color: '#737373', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#737373')}>
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#737373', marginBottom: '1rem', fontWeight: 600 }}>
              Contact
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div>
                <p style={{ fontSize: '0.8125rem', color: '#737373', marginBottom: '2px' }}>Email</p>
                <a href="mailto:carltonqu@gmail.com" style={{ fontSize: '0.875rem', color: '#a3a3a3', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#a3a3a3')}>
                  carltonqu@gmail.com
                </a>
              </div>
              <div>
                <p style={{ fontSize: '0.8125rem', color: '#737373', marginBottom: '2px' }}>Phone</p>
                <p style={{ fontSize: '0.875rem', color: '#a3a3a3' }}>+63 XXX XXX XXXX</p>
              </div>
              <div>
                <p style={{ fontSize: '0.8125rem', color: '#737373', marginBottom: '2px' }}>Location</p>
                <p style={{ fontSize: '0.875rem', color: '#a3a3a3' }}>Philippines</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid #1f1f1f',
          paddingTop: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}>
          <p style={{ fontSize: '0.8125rem', color: '#737373' }}>
            © 2025 MCN Restaurant Supplies Chain Solutions. All rights reserved.
          </p>
          <p style={{
            fontSize: '0.8125rem', fontWeight: 600,
            background: 'linear-gradient(135deg, #FFE566 0%, #F5C800 60%, #D4A800 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Smart sourcing. Real savings.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
