'use client';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <>
      <a
        href="https://wa.me/63XXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-pulse"
        aria-label="Chat on WhatsApp"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
          zIndex: 1000,
          cursor: 'pointer',
        }}
      >
        <MessageCircle size={26} color="#ffffff" />
      </a>
    </>
  );
}
