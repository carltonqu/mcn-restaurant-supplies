import Image from 'next/image';

const rows = [
  {
    img: '/images/commercial-fryer.jpg',
    item: 'Commercial Fryer',
    ph: '₱25,000',
    mcn: '₱15,000',
    save: '₱10,000',
    percent: '40%',
  },
  {
    img: 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=80&h=80&fit=crop',
    item: 'Stainless Work Table',
    ph: '₱18,000',
    mcn: '₱11,000',
    save: '₱7,000',
    percent: '39%',
  },
  {
    img: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=80&h=80&fit=crop',
    item: 'Rice Cooker (Commercial)',
    ph: '₱8,000',
    mcn: '₱4,500',
    save: '₱3,500',
    percent: '44%',
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

        {/* Price Comparison Table */}
        <div style={{
          maxWidth: '900px',
          margin: '0 auto 2rem',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          border: '1px solid #E5E5E5',
        }}>
          {/* Table Header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            background: 'linear-gradient(135deg, #FFE566 0%, #F5C800 60%, #D4A800 100%)',
            padding: '1rem 1.5rem',
            alignItems: 'center',
          }}>
            <div style={{
              fontSize: '0.8125rem',
              fontWeight: 700,
              color: '#0D0D0D',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}>
              Item
            </div>
            <div style={{
              fontSize: '0.8125rem',
              fontWeight: 700,
              color: '#0D0D0D',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              textAlign: 'center',
            }}>
              PH Market Price
            </div>
            <div style={{
              fontSize: '0.8125rem',
              fontWeight: 700,
              color: '#0D0D0D',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              textAlign: 'center',
            }}>
              MCN Price
            </div>
            <div style={{
              fontSize: '0.8125rem',
              fontWeight: 700,
              color: '#0D0D0D',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              textAlign: 'center',
            }}>
              You Save
            </div>
          </div>

          {/* Table Rows */}
          {rows.map((row, i) => (
            <div
              key={row.item}
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr 1fr 1fr',
                padding: '1rem 1.5rem',
                alignItems: 'center',
                backgroundColor: i % 2 === 0 ? '#ffffff' : '#FAFAFA',
                borderBottom: i < rows.length - 1 ? '1px solid #F5F5F5' : 'none',
              }}
            >
              {/* Item with thumbnail */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  position: 'relative',
                  flexShrink: 0,
                  border: '1px solid #E5E5E5',
                }}>
                  <Image
                    src={row.img}
                    alt={row.item}
                    fill
                    style={{ objectFit: 'cover' }}
                    unoptimized
                  />
                </div>
                <span style={{ 
                  fontSize: '0.9375rem', 
                  fontWeight: 600, 
                  color: '#0D0D0D',
                }}>
                  {row.item}
                </span>
              </div>
              
              {/* PH Market Price */}
              <div style={{ 
                textAlign: 'center', 
                fontSize: '0.9375rem', 
                color: '#737373',
                fontWeight: 500,
              }}>
                {row.ph}
              </div>
              
              {/* MCN Price */}
              <div style={{ 
                textAlign: 'center', 
                fontSize: '0.9375rem', 
                fontWeight: 700, 
                color: '#0D0D0D',
              }}>
                {row.mcn}
              </div>
              
              {/* You Save */}
              <div style={{ 
                textAlign: 'center', 
                fontSize: '0.9375rem', 
                fontWeight: 700, 
                color: '#16a34a',
              }}>
                {row.save} <span style={{ fontSize: '0.8125rem' }}>({row.percent})</span>
              </div>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div style={{ textAlign: 'center' }}>
          <p style={{
            fontSize: '1.0625rem',
            fontWeight: 600,
            color: '#0D0D0D',
          }}>
            Average savings:{' '}
            <span style={{
              background: 'linear-gradient(135deg, #FFE566 0%, #F5C800 60%, #D4A800 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 700,
            }}>30%–50%</span>
            {' '}depending on order volume
          </p>
        </div>
      </div>
    </section>
  );
}
