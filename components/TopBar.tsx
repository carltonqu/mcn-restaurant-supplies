'use client';
export default function TopBar() {
  return (
    <div
      style={{
        backgroundColor: '#0D0D0D',
        width: '100%',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1.5rem',
      }}
      className="hidden md:flex"
    >
      {/* Left: contact info */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
        <span style={{ color: '#ffffff', fontSize: '0.75rem' }}>📞 +63 XXX XXX XXXX</span>
        <span style={{ color: '#404040', fontSize: '0.75rem' }}>|</span>
        <span style={{ color: '#ffffff', fontSize: '0.75rem' }}>✉ carltonqu@gmail.com</span>
        <span style={{ color: '#404040', fontSize: '0.75rem' }}>|</span>
        <span style={{ color: '#ffffff', fontSize: '0.75rem' }}>📍 Philippines</span>
      </div>

      {/* Right: social links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <a href="#" style={{ color: '#ffffff', fontSize: '0.75rem', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#F5C800')}
          onMouseLeave={e => (e.currentTarget.style.color = '#ffffff')}>
          Facebook
        </a>
        <a href="#" style={{ color: '#ffffff', fontSize: '0.75rem', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#F5C800')}
          onMouseLeave={e => (e.currentTarget.style.color = '#ffffff')}>
          Instagram
        </a>
        <a href="#" style={{ color: '#ffffff', fontSize: '0.75rem', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#F5C800')}
          onMouseLeave={e => (e.currentTarget.style.color = '#ffffff')}>
          LinkedIn
        </a>
      </div>
    </div>
  );
}
