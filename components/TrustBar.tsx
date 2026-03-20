const stats = [
  { value: '1,000+', label: 'Products' },
  { value: '100+', label: 'Factory Partners' },
  { value: '48hrs', label: 'Quote Time' },
  { value: '30–50%', label: 'Avg Savings' },
];

export default function TrustBar() {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderTop: '1px solid #E5E5E5',
      borderBottom: '1px solid #E5E5E5',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          padding: '1.5rem 0',
        }}
          className="trust-grid"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                textAlign: 'center',
                padding: '0.5rem 1rem',
                borderRight: i < stats.length - 1 ? '1px solid #E5E5E5' : 'none',
              }}
            >
              <div style={{
                fontSize: '2rem',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #FFE566 0%, #F5C800 60%, #D4A800 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 1.2,
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.8125rem', color: '#737373', marginTop: '4px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .trust-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .trust-grid > div:nth-child(2) {
            border-right: none !important;
          }
          .trust-grid > div:nth-child(3) {
            border-top: 1px solid #E5E5E5;
          }
          .trust-grid > div:nth-child(4) {
            border-top: 1px solid #E5E5E5;
          }
        }
      `}</style>
    </div>
  );
}
