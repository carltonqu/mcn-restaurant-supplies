"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    businessType: "",
    needs: "",
    budget: "",
    minimumOrderAck: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const value = target.type === "checkbox" ? (target as HTMLInputElement).checked : target.value;
    setFormData((prev) => ({ ...prev, [target.name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or contact us via WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#ffffff", fontFamily: "'Inter', sans-serif" }}>
      {/* Sticky Nav */}
      <nav style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "rgba(10,10,10,0.95)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ color: "#f97316", fontSize: "1.5rem", fontWeight: 800 }}>MCN</span>
          <span style={{ color: "#ffffff", fontSize: "0.9rem", fontWeight: 500, opacity: 0.8 }}>Restaurant Supplies</span>
        </div>
        <a
          href="#quote"
          style={{
            backgroundColor: "#f97316",
            color: "#ffffff",
            padding: "0.5rem 1.25rem",
            borderRadius: "6px",
            fontWeight: 600,
            fontSize: "0.9rem",
            textDecoration: "none",
            transition: "background-color 0.2s",
          }}
        >
          Get a Quote
        </a>
      </nav>

      {/* Hero Section */}
      <section style={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "6rem 2rem",
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a0a00 50%, #0a0a0a 100%)",
      }}>
        <div style={{ maxWidth: "800px" }}>
          <div style={{
            display: "inline-block",
            backgroundColor: "rgba(249,115,22,0.15)",
            border: "1px solid rgba(249,115,22,0.3)",
            borderRadius: "50px",
            padding: "0.4rem 1rem",
            marginBottom: "1.5rem",
            fontSize: "0.85rem",
            color: "#f97316",
            fontWeight: 600,
          }}>
            🇨🇳 Direct from China Factories
          </div>
          <h1 style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: "1.5rem",
          }}>
            Save Up to{" "}
            <span style={{ color: "#f97316" }}>30–50%</span>
            {" "}on Restaurant Equipment & Supplies
          </h1>
          <p style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            opacity: 0.75,
            marginBottom: "2.5rem",
            lineHeight: 1.6,
          }}>
            Direct from China factories. Same quality. Faster delivery. Lower cost.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
            <a
              href="#quote"
              style={{
                backgroundColor: "#f97316",
                color: "#ffffff",
                padding: "1rem 2.5rem",
                borderRadius: "8px",
                fontWeight: 700,
                fontSize: "1.1rem",
                textDecoration: "none",
                boxShadow: "0 0 30px rgba(249,115,22,0.4)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
            >
              Get a Free Quote →
            </a>
            <span style={{ fontSize: "0.85rem", opacity: 0.5 }}>Minimum order: ₱200,000</span>
          </div>
          {/* Trust Badges */}
          <div style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            marginTop: "3rem",
            flexWrap: "wrap",
          }}>
            {["🏭 Factory Direct", "✅ Verified Suppliers", "💰 PH Market Savings"].map((badge) => (
              <div key={badge} style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
                padding: "0.6rem 1.25rem",
                fontSize: "0.9rem",
                fontWeight: 500,
              }}>
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section style={{ padding: "6rem 2rem", backgroundColor: "#111111" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: 800, marginBottom: "0.75rem" }}>
            What We Offer
          </h2>
          <p style={{ textAlign: "center", opacity: 0.6, marginBottom: "3rem" }}>
            Everything your restaurant or food business needs — sourced directly
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5rem",
          }}>
            {[
              { icon: "🍳", title: "Kitchen Equipment", desc: "Commercial stoves, fryers, freezers, and more" },
              { icon: "🔪", title: "Restaurant Tools & Utensils", desc: "Full range of professional kitchen tools" },
              { icon: "📦", title: "Packaging & Consumables", desc: "Food-grade packaging and disposables" },
              { icon: "🌾", title: "Ingredients Sourcing", desc: "Bulk ingredients at competitive rates" },
              { icon: "🏷️", title: "Custom Bulk Orders", desc: "Tailored sourcing for your exact requirements" },
            ].map((item) => (
              <div key={item.title} style={{
                backgroundColor: "#1a1a1a",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                padding: "1.75rem",
                transition: "border-color 0.2s, transform 0.2s",
              }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{item.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.5rem", fontSize: "1rem" }}>{item.title}</h3>
                <p style={{ opacity: 0.6, fontSize: "0.9rem", lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ padding: "6rem 2rem", backgroundColor: "#0a0a0a" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: 800, marginBottom: "0.75rem" }}>
            Why Choose Us
          </h2>
          <p style={{ textAlign: "center", opacity: 0.6, marginBottom: "3rem" }}>
            We cut the middlemen so you save more
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              "Direct factory pricing (no middlemen)",
              "Dedicated China buyer team",
              "Verified factory partners",
              "Faster sourcing & shipping",
              "Same or better quality vs PH suppliers",
            ].map((item) => (
              <div key={item} style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                backgroundColor: "#111111",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "10px",
                padding: "1.25rem 1.5rem",
              }}>
                <span style={{
                  backgroundColor: "rgba(249,115,22,0.15)",
                  color: "#f97316",
                  borderRadius: "50%",
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1rem",
                  flexShrink: 0,
                }}>✓</span>
                <span style={{ fontWeight: 500, fontSize: "1.05rem" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Advantage */}
      <section style={{ padding: "6rem 2rem", backgroundColor: "#111111" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: 800, marginBottom: "0.75rem" }}>
            Pricing Advantage
          </h2>
          <p style={{ textAlign: "center", opacity: 0.6, marginBottom: "3rem" }}>
            Real numbers. Real savings.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{
              width: "100%",
              borderCollapse: "collapse",
              backgroundColor: "#1a1a1a",
              borderRadius: "12px",
              overflow: "hidden",
            }}>
              <thead>
                <tr style={{ backgroundColor: "#f97316" }}>
                  <th style={{ padding: "1rem 1.5rem", textAlign: "left", fontWeight: 700 }}>Item</th>
                  <th style={{ padding: "1rem 1.5rem", textAlign: "right", fontWeight: 700 }}>Philippines Price</th>
                  <th style={{ padding: "1rem 1.5rem", textAlign: "right", fontWeight: 700 }}>Our Price</th>
                  <th style={{ padding: "1rem 1.5rem", textAlign: "right", fontWeight: 700 }}>You Save</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: "Commercial Fryer", ph: 25000, ours: 15000 },
                  { item: "Stainless Work Table", ph: 18000, ours: 11000 },
                  { item: "Rice Cooker (Commercial)", ph: 8000, ours: 4500 },
                ].map((row, i) => {
                  const save = Math.round(((row.ph - row.ours) / row.ph) * 100);
                  return (
                    <tr key={row.item} style={{
                      borderTop: "1px solid rgba(255,255,255,0.06)",
                      backgroundColor: i % 2 === 0 ? "#1a1a1a" : "#1f1f1f",
                    }}>
                      <td style={{ padding: "1rem 1.5rem", fontWeight: 500 }}>{row.item}</td>
                      <td style={{ padding: "1rem 1.5rem", textAlign: "right", opacity: 0.6, textDecoration: "line-through" }}>
                        ₱{row.ph.toLocaleString()}
                      </td>
                      <td style={{ padding: "1rem 1.5rem", textAlign: "right", color: "#f97316", fontWeight: 700 }}>
                        ₱{row.ours.toLocaleString()}
                      </td>
                      <td style={{ padding: "1rem 1.5rem", textAlign: "right", color: "#4ade80", fontWeight: 600 }}>
                        -{save}%
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p style={{ textAlign: "center", marginTop: "1.5rem", opacity: 0.6, fontSize: "0.9rem" }}>
            * Average savings: 20%–50% depending on order volume
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: "6rem 2rem", backgroundColor: "#0a0a0a" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: 800, marginBottom: "0.75rem" }}>
            How It Works
          </h2>
          <p style={{ textAlign: "center", opacity: 0.6, marginBottom: "3rem" }}>
            Simple. Fast. Reliable.
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
          }}>
            {[
              { step: "01", title: "Submit Your Requirements", desc: "Fill out our quick quote form with your needs and budget" },
              { step: "02", title: "We Source from China", desc: "Our dedicated team contacts verified factory partners" },
              { step: "03", title: "Get Quotation in 24–48h", desc: "Receive a detailed quote with pricing and delivery timeline" },
              { step: "04", title: "Delivery to Philippines", desc: "We handle logistics and shipping direct to your door" },
            ].map((item) => (
              <div key={item.step} style={{
                textAlign: "center",
                padding: "2rem 1.5rem",
                backgroundColor: "#111111",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                position: "relative",
              }}>
                <div style={{
                  fontSize: "2.5rem",
                  fontWeight: 900,
                  color: "rgba(249,115,22,0.2)",
                  marginBottom: "0.75rem",
                }}>
                  {item.step}
                </div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.5rem", fontSize: "1rem" }}>{item.title}</h3>
                <p style={{ opacity: 0.6, fontSize: "0.9rem", lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quotation Form */}
      <section id="quote" style={{ padding: "6rem 2rem", backgroundColor: "#111111" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: 800, marginBottom: "0.75rem" }}>
            Request a Free Quote
          </h2>
          <p style={{ textAlign: "center", opacity: 0.6, marginBottom: "3rem" }}>
            Fill in your details and we&apos;ll get back to you within 24–48 hours
          </p>

          {submitted ? (
            <div style={{
              backgroundColor: "rgba(74,222,128,0.1)",
              border: "1px solid rgba(74,222,128,0.3)",
              borderRadius: "12px",
              padding: "3rem 2rem",
              textAlign: "center",
            }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem", color: "#4ade80" }}>
                Quote Request Received!
              </h3>
              <p style={{ opacity: 0.7, lineHeight: 1.6 }}>
                Thank you! We&apos;ll review your requirements and send you a detailed quotation within 24–48 hours.
                Check your email for a confirmation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{
              backgroundColor: "#1a1a1a",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "16px",
              padding: "2.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.5rem", opacity: 0.8 }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Juan dela Cruz"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.5rem", opacity: 0.8 }}>
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Your Restaurant"
                    style={inputStyle}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.5rem", opacity: 0.8 }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="juan@example.com"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.5rem", opacity: 0.8 }}>
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+63 917 000 0000"
                    style={inputStyle}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.5rem", opacity: 0.8 }}>
                    Business Type *
                  </label>
                  <select
                    name="businessType"
                    required
                    value={formData.businessType}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: "pointer" }}
                  >
                    <option value="">Select type...</option>
                    <option value="Restaurant">Restaurant</option>
                    <option value="Cafe">Cafe</option>
                    <option value="Cloud Kitchen">Cloud Kitchen</option>
                    <option value="Distributor">Distributor</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.5rem", opacity: 0.8 }}>
                    Estimated Budget *
                  </label>
                  <select
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: "pointer" }}
                  >
                    <option value="">Select budget...</option>
                    <option value="₱200k–₱500k">₱200k – ₱500k</option>
                    <option value="₱500k–₱1M">₱500k – ₱1M</option>
                    <option value="₱1M+">₱1M+</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.5rem", opacity: 0.8 }}>
                  What do you need? *
                </label>
                <textarea
                  name="needs"
                  required
                  value={formData.needs}
                  onChange={handleChange}
                  placeholder="Describe the equipment or supplies you need, quantities, specifications..."
                  rows={4}
                  style={{ ...inputStyle, resize: "vertical", minHeight: "100px" }}
                />
              </div>

              <div style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.75rem",
                backgroundColor: "rgba(249,115,22,0.08)",
                border: "1px solid rgba(249,115,22,0.2)",
                borderRadius: "8px",
                padding: "1rem",
              }}>
                <input
                  type="checkbox"
                  name="minimumOrderAck"
                  id="minimumOrderAck"
                  required
                  checked={formData.minimumOrderAck}
                  onChange={handleChange}
                  style={{ marginTop: "2px", accentColor: "#f97316", width: "16px", height: "16px", flexShrink: 0 }}
                />
                <label htmlFor="minimumOrderAck" style={{ fontSize: "0.9rem", opacity: 0.85, cursor: "pointer" }}>
                  I understand the <strong>minimum order is ₱200,000</strong> and confirm my order meets this requirement
                </label>
              </div>

              {error && (
                <div style={{
                  backgroundColor: "rgba(239,68,68,0.1)",
                  border: "1px solid rgba(239,68,68,0.3)",
                  borderRadius: "8px",
                  padding: "0.75rem 1rem",
                  fontSize: "0.9rem",
                  color: "#f87171",
                }}>
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                style={{
                  backgroundColor: submitting ? "rgba(249,115,22,0.6)" : "#f97316",
                  color: "#ffffff",
                  border: "none",
                  padding: "1rem 2rem",
                  borderRadius: "8px",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  cursor: submitting ? "not-allowed" : "pointer",
                  transition: "background-color 0.2s",
                  width: "100%",
                }}
              >
                {submitting ? "Submitting..." : "Request Free Quote →"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: "#050505",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "3rem 2rem",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.5rem" }}>
            <span style={{ color: "#f97316" }}>MCN</span> Restaurant Supplies Chain Solutions
          </div>
          <p style={{ opacity: 0.5, fontSize: "0.9rem", marginBottom: "1.5rem" }}>
            Smart sourcing. Real savings.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap", opacity: 0.5, fontSize: "0.85rem" }}>
            <span>© 2024 MCN Restaurant Supplies</span>
            <span>Philippines</span>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/63XXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          backgroundColor: "#25d366",
          color: "#ffffff",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.75rem",
          boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
          textDecoration: "none",
          zIndex: 200,
          transition: "transform 0.2s",
        }}
        title="Chat on WhatsApp"
      >
        💬
      </a>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  backgroundColor: "#0a0a0a",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: "8px",
  padding: "0.75rem 1rem",
  color: "#ffffff",
  fontSize: "0.95rem",
  outline: "none",
  fontFamily: "inherit",
};
