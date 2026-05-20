'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        backgroundColor: '#ffffff',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid #F5F5F5',
        transition: 'box-shadow 0.3s ease',
        boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.08)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img src="/mcn-logo.png" alt="MCN Logo" style={{ height: '44px', width: 'auto', objectFit: 'contain', filter: 'brightness(0)' }} />
        </Link>

        {/* Center nav links */}
        <div className="hidden md:flex" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {[
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
            { label: 'Why Us', href: '/#why-us' },
            { label: 'Pricing', href: '/#pricing' },
            { label: 'How It Works', href: '/#how-it-works' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: '#404040', fontSize: '0.875rem', textDecoration: 'none',
                fontWeight: 500, transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#0D0D0D')}
              onMouseLeave={e => (e.currentTarget.style.color = '#404040')}
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/quotation"
            style={{
              color: '#404040', fontSize: '0.875rem', textDecoration: 'none',
              fontWeight: 500, transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#0D0D0D')}
            onMouseLeave={e => (e.currentTarget.style.color = '#404040')}
          >
            Quotation
          </Link>
        </div>

        {/* CTA button */}
        <Link
          href="/quotation"
          className="btn-yellow"
          style={{ fontSize: '0.875rem', padding: '0.5rem 1.25rem', borderRadius: '100px' }}
        >
          Get Free Quote
        </Link>
      </div>
    </nav>
  );
}
