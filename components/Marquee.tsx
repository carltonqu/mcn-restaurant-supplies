const items = 'Kitchen Equipment ✦ Commercial Fryers ✦ Stainless Tables ✦ Freezers ✦ Utensils ✦ Packaging ✦ Bulk Ingredients ✦ Custom Orders ✦ ';

export default function Marquee() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #FFE566, #F5C800, #D4A800)',
      height: '44px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
    }}>
      <div className="marquee-track" style={{ alignItems: 'center', height: '100%' }}>
        {/* Duplicate for seamless loop */}
        {[items, items].map((text, i) => (
          <span
            key={i}
            style={{
              color: '#0D0D0D',
              fontSize: '0.875rem',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              paddingRight: '2rem',
              lineHeight: '44px',
            }}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
