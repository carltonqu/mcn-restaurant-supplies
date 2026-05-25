'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp, Package } from 'lucide-react';

interface Product {
  name: string;
  description: string;
  specs: string;
}

interface CategoryProps {
  category: {
    id: string;
    title: string;
    description: string;
    products: Product[];
  };
  isEven: boolean;
}

// Product-specific images - AI-generated professional product photos
const productImages: Record<string, string> = {
  // Refrigeration
  'Double Door Upright Chiller': '/images/double-door-chiller.jpg',
  'Chest Freezer': '/images/chest-freezer.jpg',
  // Cooking
  'Commercial Gas Fryer': '/images/gas-fryer.jpg',
  'Commercial Range / Stove': '/images/commercial-range.jpg',
  'Exhaust Hood System': '/images/exhaust-hood.jpg',
  'Ice Machine': '/images/ice-machine.jpg',
  'Convection Oven': '/images/convection-oven.jpg',
  // Prep & Storage
  'Stainless Prep Table': '/images/prep-table.jpg',
  'Sink Station': '/images/sink-station.jpg',
  'Spiral Dough Mixer': '/images/dough-mixer.jpg',
  // Signage
  'LED Acrylic Signage': '/images/led-signage.jpg',
  'Digital Menu Board': '/images/digital-menu-board.jpg',
  'Acrylic Table Displays': '/images/acrylic-displays.jpg',
  'Menu Holders': '/images/menu-holders.jpg',
  // Packaging
  'Custom Food Packaging': '/images/food-packaging.jpg',
  // Uniforms
  'Staff Uniforms': '/images/staff-uniforms.jpg',
  'Aprons': '/images/aprons.jpg',
};

export default function ProductCategory({ category, isEven }: CategoryProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <section
      id={category.id}
      className="section"
      style={{
        backgroundColor: isEven ? '#FFFDF0' : '#ffffff',
        borderBottom: '1px solid #F5F5F5',
      }}
    >
      <div className="container">
        {/* Category Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '2rem',
            cursor: 'pointer',
          }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div style={{ flex: 1 }}>
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 700,
                color: '#0D0D0D',
                marginBottom: '0.5rem',
              }}
            >
              {category.title}
            </h2>
            <p
              style={{
                fontSize: '1rem',
                color: '#737373',
                maxWidth: '500px',
              }}
            >
              {category.description}
            </p>
          </div>
          <button
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              color: '#0D0D0D',
            }}
            aria-label={isExpanded ? 'Collapse section' : 'Expand section'}
          >
            {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>

        {isExpanded && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {category.products.map((product, index) => (
              <ProductCard
                key={product.name}
                product={product}
                categoryId={category.id}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProductCard({
  product,
  categoryId,
  index,
}: {
  product: Product;
  categoryId: string;
  index: number;
}) {
  const [showInquiry, setShowInquiry] = useState(false);

  // Get product-specific image based on product name
  const getProductImage = () => {
    return productImages[product.name] || 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop';
  };

  return (
    <div
      className="hover-card"
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid #E5E5E5',
        borderRadius: '16px',
        overflow: 'hidden',
      }}
    >
      {/* Product Image */}
      <div
        style={{
          position: 'relative',
          height: '200px',
          backgroundColor: '#F5F5F5',
        }}
      >
        <Image
          src={getProductImage()}
          alt={product.name}
          fill
          style={{ objectFit: 'cover' }}
          unoptimized
        />
        <div
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            backgroundColor: '#F5C800',
            color: '#0D0D0D',
            padding: '4px 12px',
            borderRadius: '100px',
            fontSize: '0.75rem',
            fontWeight: 600,
          }}
        >
          Factory Direct
        </div>
      </div>

      {/* Product Info */}
      <div style={{ padding: '1.5rem' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '0.75rem',
          }}
        >
          <div
            style={{
              width: '32px',
              height: '32px',
              background: 'linear-gradient(135deg, #FFE566 0%, #F5C800 60%, #D4A800 100%)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Package size={16} color="#0D0D0D" />
          </div>
          <span
            style={{
              fontSize: '0.75rem',
              color: '#737373',
              fontWeight: 500,
            }}
          >
            {product.specs}
          </span>
        </div>

        <h3
          style={{
            fontSize: '1.125rem',
            fontWeight: 700,
            color: '#0D0D0D',
            marginBottom: '0.5rem',
          }}
        >
          {product.name}
        </h3>

        <p
          style={{
            fontSize: '0.875rem',
            color: '#737373',
            lineHeight: 1.6,
            marginBottom: '1rem',
          }}
        >
          {product.description}
        </p>

        {/* Inquiry Button */}
        <button
          onClick={() => setShowInquiry(!showInquiry)}
          style={{
            width: '100%',
            background: 'linear-gradient(135deg, #FFE566 0%, #F5C800 60%, #D4A800 100%)',
            color: '#0D0D0D',
            fontWeight: 600,
            border: 'none',
            borderRadius: '10px',
            padding: '0.75rem 1rem',
            cursor: 'pointer',
            transition: 'all 0.25s ease',
            fontSize: '0.9375rem',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(245, 200, 0, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          {showInquiry ? 'Hide Form' : 'Inquire Now'}
        </button>

        {/* Quick Inquiry Form */}
        {showInquiry && (
          <div
            style={{
              marginTop: '1rem',
              padding: '1rem',
              backgroundColor: '#FAFAFA',
              borderRadius: '10px',
            }}
          >
            <p
              style={{
                fontSize: '0.8125rem',
                color: '#737373',
                marginBottom: '0.75rem',
              }}
            >
              Interested in <strong>{product.name}</strong>? Send us a quick inquiry:
            </p>
            <a
              href={`viber://chat?number=%2B639669765949&text=Hi! I'm interested in ${encodeURIComponent(product.name)}. Can you provide pricing and availability?`}
              style={{
                display: 'block',
                backgroundColor: '#7360F2',
                color: '#ffffff',
                textAlign: 'center',
                padding: '0.625rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: 600,
              }}
            >
              Ask on Viber →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
