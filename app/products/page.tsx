import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ProductCategory from '@/components/ProductCategory';
import CategoryNav from '@/components/CategoryNav';

const productCategories = [
  {
    id: 'refrigeration',
    title: 'Refrigeration Equipment',
    description: 'Commercial-grade cooling solutions for your kitchen',
    products: [
      { name: 'Double Door Upright Chiller', description: 'High-capacity upright chiller with dual doors for efficient cold storage', specs: 'Various sizes available' },
      { name: 'Chest Freezer', description: 'Deep chest freezer for bulk frozen storage', specs: '100L - 500L capacity' },
    ],
  },
  {
    id: 'cooking',
    title: 'Cooking Equipment',
    description: 'Professional cooking stations and ventilation systems',
    products: [
      { name: 'Commercial Gas Fryer', description: 'Heavy-duty gas fryer for high-volume frying', specs: 'Single or double tank' },
      { name: 'Commercial Range / Stove', description: 'Multi-burner gas range for professional kitchens', specs: '2-6 burner options' },
      { name: 'Exhaust Hood System', description: 'Commercial ventilation hood with filtration', specs: 'Custom sizing available' },
      { name: 'Ice Machine', description: 'Automatic ice maker for restaurants and bars', specs: '50-500kg/day capacity' },
      { name: 'Convection Oven', description: 'High-efficiency convection oven for even baking', specs: 'Electric or gas powered' },
    ],
  },
  {
    id: 'prep',
    title: 'Prep & Storage',
    description: 'Stainless steel workstations and preparation equipment',
    products: [
      { name: 'Stainless Prep Table', description: 'Durable stainless steel work table with undershelf', specs: 'Various dimensions' },
      { name: 'Sink Station', description: 'Commercial sink with drainboard and storage', specs: 'Single, double, or triple basin' },
      { name: 'Spiral Dough Mixer', description: 'Heavy-duty spiral mixer for bakeries and pizza shops', specs: '10L - 80L bowl capacity' },
    ],
  },
  {
    id: 'signage',
    title: 'Signage & Displays',
    description: 'Eye-catching signage and menu solutions',
    products: [
      { name: 'LED Acrylic Signage', description: 'Illuminated acrylic sign with LED backlighting', specs: 'Custom sizes and designs' },
      { name: 'Digital Menu Board', description: 'HD digital display for dynamic menu content', specs: '32" - 55" screens' },
      { name: 'Acrylic Table Displays', description: 'Elegant table tents and display stands', specs: 'Various sizes' },
      { name: 'Menu Holders', description: 'Premium acrylic menu holders and stands', specs: 'A4, A5, custom sizes' },
    ],
  },
  {
    id: 'packaging',
    title: 'Packaging & Supplies',
    description: 'Custom packaging solutions for food businesses',
    products: [
      { name: 'Custom Food Packaging', description: 'Branded packaging boxes, bags, and containers', specs: 'MOQ applies' },
    ],
  },
  {
    id: 'uniforms',
    title: 'Staff Apparel',
    description: 'Professional uniforms for your team',
    products: [
      { name: 'Staff Uniforms', description: 'Custom embroidered staff shirts and polo shirts', specs: 'Various colors and styles' },
      { name: 'Aprons', description: 'Chef aprons, waist aprons, and bib aprons', specs: 'Cotton or polyester blend' },
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="section" style={{ paddingTop: '6rem', backgroundColor: '#ffffff' }}>
          <div className="container">
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
                Product Catalog
              </div>
              <h1 style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                color: '#0D0D0D',
                marginBottom: '1rem',
                letterSpacing: '-1px',
              }}>
                Restaurant Equipment & Supplies
              </h1>
              <p style={{
                fontSize: '1.125rem',
                color: '#737373',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: 1.6,
              }}>
                Browse our complete catalog of commercial kitchen equipment, signage, packaging, and staff apparel — all sourced directly from China factories at wholesale prices.
              </p>
            </div>

            {/* Category Navigation */}
            <CategoryNav categories={productCategories} />
          </div>
        </section>

        {/* Product Categories */}
        {productCategories.map((category, index) => (
          <ProductCategory
            key={category.id}
            category={category}
            isEven={index % 2 === 1}
          />
        ))}

        {/* CTA Section */}
        <section className="section" style={{ backgroundColor: '#0D0D0D' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '1rem',
            }}>
              Need a Custom Quote?
            </h2>
            <p style={{
              fontSize: '1rem',
              color: '#a3a3a3',
              maxWidth: '480px',
              margin: '0 auto 2rem',
              lineHeight: 1.6,
            }}>
              Tell us what you need and we&apos;ll source it directly from our verified factory partners in China.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/quotation" className="btn-yellow" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}>
                Request Quotation →
              </a>
              <a href="https://wa.me/639123456789" target="_blank" rel="noopener noreferrer" className="btn-outline-white" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />

      <style>{`
        .btn-outline-white {
          background: transparent;
          color: #ffffff;
          font-weight: 600;
          border: 2px solid #ffffff;
          border-radius: 100px;
          padding: 0.75rem 1.75rem;
          cursor: pointer;
          transition: all 0.25s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          font-size: 1rem;
          min-height: 44px;
        }
        .btn-outline-white:hover {
          background: #ffffff;
          color: #0D0D0D;
        }
      `}</style>
    </>
  );
}
