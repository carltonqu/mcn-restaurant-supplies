'use client';

import { useState } from 'react';

type QuotationPayload = {
  name: string;
  email: string;
  phone: string;
  company: string;
  productOrService: string;
  quantity: string;
  message: string;
};

const initialState: QuotationPayload = {
  name: '',
  email: '',
  phone: '',
  company: '',
  productOrService: '',
  quantity: '',
  message: '',
};

export default function QuotationForm() {
  const [form, setForm] = useState<QuotationPayload>(initialState);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError('');

    try {
      // Using Formspree for form submission
      const res = await fetch('https://formspree.io/f/xnqevjdr', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...form,
          _subject: `New Quotation Request from ${form.name} - ${form.company}`,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setForm(initialState);
      } else {
        setStatus('error');
        setError('Unable to submit quotation request. Please try again or contact us via Viber.');
      }
    } catch {
      setStatus('error');
      setError('Network error. Please try again or contact us via Viber.');
    }
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.8125rem',
    color: '#404040',
    fontWeight: 500,
    marginBottom: '6px',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: '#ffffff',
    border: '1px solid #E5E5E5',
    borderRadius: '10px',
    padding: '12px 16px',
    fontSize: '0.9375rem',
    color: '#0D0D0D',
    outline: 'none',
    fontFamily: 'Inter, sans-serif',
  };

  return (
    <section className="section" style={{ backgroundColor: '#FFFDF0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div
            style={{
              display: 'inline-flex',
              backgroundColor: '#FFF3B0',
              color: '#0D0D0D',
              fontSize: '0.75rem',
              fontWeight: 600,
              padding: '0.375rem 1rem',
              borderRadius: '100px',
              marginBottom: '1rem',
            }}
          >
            Quotation Request
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3vw, 2.75rem)', fontWeight: 800, color: '#0D0D0D', marginBottom: '0.75rem' }}>
            Request a Quotation
          </h1>
          <p style={{ fontSize: '1rem', color: '#737373', maxWidth: '560px', margin: '0 auto', lineHeight: 1.6 }}>
            Tell us what you need and our team will prepare a custom quote based on your quantity and requirements.
          </p>
        </div>

        <div
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
            padding: '40px',
          }}
        >
          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0D0D0D', marginBottom: '0.75rem' }}>
                Quotation Request Sent!
              </h3>
              <p style={{ color: '#737373', lineHeight: 1.6, maxWidth: '480px', margin: '0 auto' }}>
                Thanks for your inquiry. We&apos;ll get back to you with a detailed quotation within 24–48 hours.
              </p>
              <button onClick={() => setStatus('idle')} className="btn-yellow" style={{ marginTop: '1.5rem' }}>
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="quotation-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
                <div>
                  <label htmlFor="name" style={labelStyle}>Name *</label>
                  <input id="name" name="name" required value={form.name} onChange={handleChange} placeholder="Juan Dela Cruz" style={inputStyle} className="input-field" />
                </div>
                <div>
                  <label htmlFor="email" style={labelStyle}>Email *</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="juan@example.com" style={inputStyle} className="input-field" />
                </div>
                <div>
                  <label htmlFor="phone" style={labelStyle}>Phone *</label>
                  <input id="phone" name="phone" required value={form.phone} onChange={handleChange} placeholder="+63 9XX XXX XXXX" style={inputStyle} className="input-field" />
                </div>
                <div>
                  <label htmlFor="company" style={labelStyle}>Company *</label>
                  <input id="company" name="company" required value={form.company} onChange={handleChange} placeholder="Your Company Name" style={inputStyle} className="input-field" />
                </div>
                <div>
                  <label htmlFor="productOrService" style={labelStyle}>Product/Service Interested In *</label>
                  <input id="productOrService" name="productOrService" required value={form.productOrService} onChange={handleChange} placeholder="e.g. Kitchen equipment" style={inputStyle} className="input-field" />
                </div>
                <div>
                  <label htmlFor="quantity" style={labelStyle}>Quantity *</label>
                  <input id="quantity" name="quantity" required value={form.quantity} onChange={handleChange} placeholder="e.g. 20 units" style={inputStyle} className="input-field" />
                </div>
              </div>

              <div style={{ marginTop: '1.25rem', marginBottom: '1.25rem' }}>
                <label htmlFor="message" style={labelStyle}>Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Share your requirements, target timeline, and any specifications."
                  style={{ ...inputStyle, resize: 'vertical' }}
                  className="input-field"
                />
              </div>

              {status === 'error' && (
                <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '10px', padding: '12px 16px', marginBottom: '1rem', color: '#dc2626', fontSize: '0.875rem' }}>
                  {error}
                </div>
              )}

              <button type="submit" disabled={status === 'loading'} className="btn-yellow" style={{ width: '100%', height: '52px', borderRadius: '12px', fontWeight: 700 }}>
                {status === 'loading' ? 'Submitting...' : 'Request Quotation'}
              </button>

              <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.8125rem', color: '#737373' }}>
                Or message us directly on{' '}
                <a href="https://wa.me/639669765949" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', fontWeight: 600 }}>
                  WhatsApp
                </a>
              </p>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .quotation-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
