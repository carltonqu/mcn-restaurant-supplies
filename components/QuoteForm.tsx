'use client';
import { useState } from 'react';

export default function QuoteForm() {
  const [form, setForm] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    businessType: '',
    needs: '',
    budget: '',
    minimumOrderAck: false,
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setForm(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
        setForm({ fullName: '', companyName: '', email: '', phone: '', businessType: '', needs: '', budget: '', minimumOrderAck: false });
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
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
    transition: 'border-color 0.2s, box-shadow 0.2s',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.8125rem',
    color: '#404040',
    fontWeight: 500,
    marginBottom: '6px',
  };

  return (
    <section id="quote" style={{ backgroundColor: '#FFFDF0', padding: '5rem 0' }}>
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
            Get Started
          </div>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
            fontWeight: 700,
            color: '#0D0D0D',
            marginBottom: '0.75rem',
          }}>
            Get Your Free Quote
          </h2>
          <p style={{ fontSize: '1rem', color: '#737373', maxWidth: '480px', margin: '0 auto', lineHeight: 1.6 }}>
            Fill out the form below and receive a detailed price comparison within 24–48 hours.
          </p>
        </div>

        {/* Form card */}
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
          padding: '40px',
        }}>
          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0D0D0D', marginBottom: '0.75rem' }}>
                Quote Request Received!
              </h3>
              <p style={{ color: '#737373', lineHeight: 1.6, maxWidth: '400px', margin: '0 auto' }}>
                We'll review your requirements and send you a detailed quote within 24–48 hours.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="btn-yellow"
                style={{ marginTop: '1.5rem' }}
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.25rem',
                marginBottom: '1.25rem',
              }}
                className="form-grid"
              >
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" style={labelStyle}>Full Name *</label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Juan dela Cruz"
                    style={inputStyle}
                    className="input-field"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label htmlFor="companyName" style={labelStyle}>Company Name *</label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    required
                    value={form.companyName}
                    onChange={handleChange}
                    placeholder="Your Restaurant Name"
                    style={inputStyle}
                    className="input-field"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" style={labelStyle}>Email Address *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="juan@example.com"
                    style={inputStyle}
                    className="input-field"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" style={labelStyle}>Phone / WhatsApp *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+63 9XX XXX XXXX"
                    style={inputStyle}
                    className="input-field"
                  />
                </div>

                {/* Business Type */}
                <div>
                  <label htmlFor="businessType" style={labelStyle}>Business Type *</label>
                  <select
                    id="businessType"
                    name="businessType"
                    required
                    value={form.businessType}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: 'pointer', color: form.businessType ? '#0D0D0D' : '#a3a3a3' }}
                    className="input-field"
                  >
                    <option value="" disabled>Select business type</option>
                    <option value="Restaurant">Restaurant</option>
                    <option value="Fast Food Chain">Fast Food Chain</option>
                    <option value="Catering">Catering</option>
                    <option value="Hotel / Resort">Hotel / Resort</option>
                    <option value="Cloud Kitchen">Cloud Kitchen</option>
                    <option value="Bakery / Café">Bakery / Café</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="budget" style={labelStyle}>Budget Range *</label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    value={form.budget}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: 'pointer', color: form.budget ? '#0D0D0D' : '#a3a3a3' }}
                    className="input-field"
                  >
                    <option value="" disabled>Select budget range</option>
                    <option value="Under ₱50,000">Under ₱50,000</option>
                    <option value="₱50,000 – ₱100,000">₱50,000 – ₱100,000</option>
                    <option value="₱100,000 – ₱250,000">₱100,000 – ₱250,000</option>
                    <option value="₱250,000 – ₱500,000">₱250,000 – ₱500,000</option>
                    <option value="₱500,000+">₱500,000+</option>
                  </select>
                </div>
              </div>

              {/* Needs - full width */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label htmlFor="needs" style={labelStyle}>What do you need? *</label>
                <textarea
                  id="needs"
                  name="needs"
                  required
                  rows={4}
                  value={form.needs}
                  onChange={handleChange}
                  placeholder="List the equipment, quantities, and any specifications (e.g., 2x commercial fryers, 5x stainless tables 180cm...)."
                  style={{ ...inputStyle, resize: 'vertical', fontFamily: 'Inter, sans-serif' }}
                  className="input-field"
                />
              </div>

              {/* Checkbox */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', cursor: 'pointer' }}>
                  <div style={{ position: 'relative', flexShrink: 0, marginTop: '1px' }}>
                    <input
                      type="checkbox"
                      name="minimumOrderAck"
                      checked={form.minimumOrderAck}
                      onChange={handleChange}
                      required
                      style={{ opacity: 0, position: 'absolute', width: '20px', height: '20px', cursor: 'pointer', margin: 0 }}
                    />
                    <div style={{
                      width: '20px', height: '20px',
                      border: form.minimumOrderAck ? 'none' : '2px solid #E5E5E5',
                      borderRadius: '5px',
                      background: form.minimumOrderAck
                        ? 'linear-gradient(135deg, #FFE566 0%, #F5C800 60%, #D4A800 100%)'
                        : '#ffffff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.2s',
                    }}>
                      {form.minimumOrderAck && (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="#0D0D0D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                  </div>
                  <span style={{ fontSize: '0.875rem', color: '#404040', lineHeight: 1.5 }}>
                    I understand that minimum order requirements apply and will be discussed during the quote process. *
                  </span>
                </label>
              </div>

              {/* Error message */}
              {status === 'error' && (
                <div style={{
                  backgroundColor: '#fef2f2',
                  border: '1px solid #fecaca',
                  borderRadius: '10px',
                  padding: '12px 16px',
                  marginBottom: '1rem',
                  color: '#dc2626',
                  fontSize: '0.875rem',
                }}>
                  {errorMsg}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading'}
                style={{
                  width: '100%',
                  height: '52px',
                  background: 'linear-gradient(135deg, #FFE566 0%, #F5C800 60%, #D4A800 100%)',
                  color: '#0D0D0D',
                  fontWeight: 700,
                  fontSize: '1rem',
                  border: 'none',
                  borderRadius: '12px',
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                  opacity: status === 'loading' ? 0.7 : 1,
                  transition: 'all 0.25s ease',
                  boxShadow: '0 2px 12px rgba(245,200,0,0.3)',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                {status === 'loading' ? 'Submitting...' : 'Request My Free Quote →'}
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
