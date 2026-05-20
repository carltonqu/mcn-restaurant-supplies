export default function ImageGallery() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=400&h=280&fit=crop",
      alt: "Commercial kitchen equipment",
    },
    {
      src: "https://images.unsplash.com/photo-1585671964206-4c6491aa3429?w=400&h=280&fit=crop",
      alt: "Cutlery set",
    },
    {
      src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=280&fit=crop",
      alt: "Commercial refrigerator",
    },
    {
      src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=280&fit=crop",
      alt: "Commercial deep fryer",
    },
    {
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=280&fit=crop",
      alt: "Stainless steel cookware",
    },
  ];

  return (
    <section
      style={{
        padding: "3rem 2rem",
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e5e0d0",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "1.25rem",
          }}
        >
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
              background: "linear-gradient(135deg, #F5D060 0%, #C9A227 50%, #A07D1C 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Equipment Gallery
          </span>
          <span style={{ fontSize: "0.8rem", color: "#999" }}>Scroll to see more →</span>
        </div>
        <div className="image-gallery-scroll">
          {images.map((img) => (
            <div key={img.src} className="gallery-card">
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  width: "320px",
                  height: "200px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
