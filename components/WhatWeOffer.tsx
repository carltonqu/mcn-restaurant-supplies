import Image from 'next/image';
import { ChefHat, Utensils, Package, ShoppingBasket, Settings } from 'lucide-react';

const mainCards = [
  {
    img: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=500&h=375&fit=crop',
    icon: ChefHat,
    title: 'Kitchen Equipment',
    desc: 'Commercial-grade fryers, grills, ranges, and ovens sourced directly from verified factories in China. Restaurant-ready quality at factory prices.',
  },
  {
    img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&h=375&fit=crop',
    icon: Utensils,
    title: 'Utensils & Tools',
    desc: 'Professional cookware, stainless steel tools, storage containers, and prep equipment for every kitchen need.',
  },
  {
    img: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=375&fit=crop',
    icon: Package,
    title: 'Storage & Shelving',
    desc: 'Stainless work tables, commercial freezers, refrigeration units, and industrial shelving for organized, efficient kitchens.',
  },
];

const featureCards = [
  {
    icon: ShoppingBasket,
    title: 'Ingredients Sourcing',
    desc: 'Bulk food-grade packaging, dry ingredients, and consumables sourced at wholesale China prices for Philippine food businesses.',
  },
  {
    icon: Settings,
    title: 'Custom Bulk Orders',
    desc: 'Need something specific? We work with our factory partners to fulfill custom orders, branded equipment, and bulk configurations.',
  },
];

export default function WhatWeOffer() {
  return (
    <section id="products" className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        {/* Header */}
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
            Our Products
          </div>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
            fontWeight: 700,
            color: '#0D0D0D',
            marginBottom: '0.75rem',
          }}>
            Everything Your Restaurant Needs
          </h2>
          <p style={{ fontSize: '1rem', color: '#737373', maxWidth: '520px', margin: '0 auto', lineHeight: 1.6 }}>
            From kitchen equipment to bulk ingredients, we source it all directly from verified China factories.
          </p>
        </div>

        {/* Main 3-col card grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
          alignItems: 'stretch',
          marginBottom: '1.5rem',
        }}
          className="cards-3col"
        >
          {mainCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="hover-card card-equal"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #F5F5F5',
                  borderRadius: '16px',
                  padding: '28px',
                  cursor: 'pointer',
                }}
              >
                {/* Image */}
                <div style={{
                  aspectRatio: '4/3',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  position: 'relative',
                  marginBottom: '16px',
                }}>
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    unoptimized
                  />
                </div>

                {/* Icon badge */}
                <div style={{
                  width: '36px', height: '36px',
                  background: 'linear-gradient(135deg, #FFE566 0%, #F5C800 60%, #D4A800 100%)',
                  borderRadius: '8px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '12px',
                }}>
                  <Icon size={18} color="#0D0D0D" />
                </div>

                {/* Content */}
                <div className="card-body">
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0D0D0D', marginBottom: '8px' }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#737373', lineHeight: 1.6, marginBottom: '16px' }}>
                    {card.desc}
                  </p>
                </div>

                {/* Bottom link */}
                <a
                  href="#quote"
                  style={{
                    color: '#D4A800', fontSize: '0.875rem', fontWeight: 600,
                    textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px',
                  }}
                >
                  Learn more →
                </a>
              </div>
            );
          })}
        </div>

        {/* Feature cards 2-col */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.5rem',
          alignItems: 'stretch',
        }}
          className="cards-2col"
        >
          {featureCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="hover-card card-equal"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #F5F5F5',
                  borderRadius: '16px',
                  padding: '28px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                }}
              >
                <div style={{
                  width: '44px', height: '44px', flexShrink: 0,
                  background: 'linear-gradient(135deg, #FFE566 0%, #F5C800 60%, #D4A800 100%)',
                  borderRadius: '10px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={20} color="#0D0D0D" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#0D0D0D', marginBottom: '6px' }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#737373', lineHeight: 1.6 }}>
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cards-3col { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .cards-3col { grid-template-columns: 1fr !important; }
          .cards-2col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
