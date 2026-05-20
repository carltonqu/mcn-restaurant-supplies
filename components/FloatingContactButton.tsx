'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingContactButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '12px',
      }}
    >
      {/* Expanded options */}
      {isExpanded && (
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '16px 20px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
            border: '1px solid #F5F5F5',
            maxWidth: '280px',
            animation: 'slideIn 0.3s ease',
          }}
        >
          <p
            style={{
              fontSize: '0.875rem',
              color: '#737373',
              marginBottom: '12px',
              lineHeight: 1.5,
            }}
          >
            Can&apos;t see what you&apos;re looking for?
          </p>
          <a
            href="/quotation"
            style={{
              display: 'block',
              background: 'linear-gradient(135deg, #FFE566 0%, #F5C800 60%, #D4A800 100%)',
              color: '#0D0D0D',
              padding: '12px 20px',
              borderRadius: '12px',
              fontSize: '0.875rem',
              fontWeight: 600,
              textDecoration: 'none',
              textAlign: 'center',
              marginBottom: '8px',
              transition: 'all 0.2s ease',
            }}
          >
            Contact Us →
          </a>
          <a
            href="https://wa.me/639669765949"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              backgroundColor: '#25D366',
              color: '#ffffff',
              padding: '12px 20px',
              borderRadius: '12px',
              fontSize: '0.875rem',
              fontWeight: 600,
              textDecoration: 'none',
              textAlign: 'center',
              transition: 'all 0.2s ease',
            }}
          >
            Chat on WhatsApp
          </a>
        </div>
      )}

      {/* Main floating button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          background: isExpanded
            ? '#0D0D0D'
            : 'linear-gradient(135deg, #FFE566 0%, #F5C800 60%, #D4A800 100%)',
          color: isExpanded ? '#ffffff' : '#0D0D0D',
          border: 'none',
          borderRadius: '50px',
          padding: isExpanded ? '14px' : '14px 24px',
          fontSize: '0.875rem',
          fontWeight: 600,
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'all 0.3s ease',
        }}
      >
        {isExpanded ? (
          <X size={20} />
        ) : (
          <>
            <MessageCircle size={18} />
            <span>Can&apos;t see what you&apos;re looking for?</span>
          </>
        )}
      </button>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
