const rows = [
  {
    img: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=80&h=80&fit=crop',
    item: 'Commercial Fryer',
    ph: '₱25,000',
    mcn: '₱15,000',
    save: '₱10,000 (40%)',
  },
  {
    img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=80&h=80&fit=crop',
    item: 'Stainless Work Table',
    ph: '₱18,000',
    mcn: '₱11,000',
    save: '₱7,000 (39%)',
  },
  {
    img: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=80&h=80&fit=crop',
    item: 'Rice Cooker (Commercial)',
    ph: '₱8,000',
    mcn: '₱4,500',
    save: '₱3,500 (44%)',
  },
];

export default function PricingAdvantage() {
  return (
    <section id="pricing" className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
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
            Pricing Advantage
          </div>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
            fontWeight: 700,
            color: '#0D0D0D',
            marginBottom: '0.75rem',
          }}>
            See the Difference
          </h2>
          <p style={{ fontSize: '1rem', color: '#737373', maxWidth: '480px', margin: '0 auto', lineHeight: 1.6 }}>
            Real price comparisons between local PH market and MCN factory-direct pricing.
          </p>
        </div>

        {/* Table */}
        <div style={{
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid #E5E5E5',
          maxWidth: '900px',
          margin: '0 auto 2rem',
        }}>
          {/* Thead */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            background: 'linear-gradient(135deg, #FFE566 0%, #F5C800 60%, #D4A800 100%)',
            padding: '0 1.5rem',
            height: '52px',
            alignItems: 'center',
          }}>
            {['ITEM', 'PH MARKET PRICE', 'MCN PRICE', 'YOU SAVE'].map((h) => (
              <div key={h} style={{
                fontSize: '0.8125rem',
                fontWeight: 700,
                color: '#0D0D0D',
                letterSpacing: '0.05em',
                textAlign: h === 'ITEM' ? 'left' : 'center',
              }}>
                {h}
              </div>
            ))}
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.item}
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr 1fr 1fr',
                padding: '0 1.5rem',
                height: '60px',
                alignItems: 'center',
                backgroundColor: i % 2 === 0 ? '#ffffff' : '#FAFAFA',
                borderBottom: i < rows.length - 1 ? '1px solid #F5F5F5' : 'none',
              }}
            >
              {/* Item with thumbnail */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={row.img}
                  alt={row.item}
                  style={{ width: '40px', height: '40px', borderRadius: '8px', objectFit: 'cover', flexShrink: 0 }}
                />
                <span style={{ fontSize: '0.9375rem', fontWeight: 500, color: '#0D0D0D' }}>{row.item}</span>
              </div>
              <div style={{ textAlign: 'center', fontSize: '0.9375rem', color: '#737373' }}>{row.ph}</div>
              <div style={{ textAlign: 'center', fontSize: '0.9375rem', fontWeight: 600, color: '#0D0D0D' }}>{row.mcn}</div>
              <div style={{ textAlign: 'center', fontSize: '0.9375rem', fontWeight: 700, color: '#16a34a' }}>{row.save}</div>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div style={{ textAlign: 'center' }}>
          <p style={{
            fontSize: '1.0625rem',
            fontWeight: 700,
            color: '#0D0D0D',
          }}>
            Average savings:{' '}
            <span className="yellow-gradient-text">20%–50%</span>{' '}
            depending on order volume
          </p>
        </div>
      </div>
    </section>
  );
}
