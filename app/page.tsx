"use client";

import { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ChefHat,
  Utensils,
  Package,
  ShoppingBasket,
  Settings,
  CheckCircle,
  MessageCircle,
} from "lucide-react";
import ImageGallery from "../components/ImageGallery";

const GOLD_GRADIENT = "linear-gradient(135deg, #F5D060 0%, #C9A227 50%, #A07D1C 100%)";
const GOLD_GRADIENT_HOVER = "linear-gradient(135deg, #FFE080 0%, #D4A930 50%, #B08020 100%)";

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
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const value =
      target.type === "checkbox"
        ? (target as HTMLInputElement).checked
        : target.value;
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
      setError(
        "Something went wrong. Please try again or contact us via WhatsApp."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const tickerText =
    "Kitchen Equipment ✦ Commercial Fryers ✦ Stainless Tables ✦ Freezers & Refrigerators ✦ Restaurant Utensils ✦ Packaging Solutions ✦ Bulk Ingredients ✦ Custom Orders ✦ ";

  return (
    <div style={{ backgroundColor: "#ffffff", color: "#0a0a0a", fontFamily: "'Inter', sans-serif" }}>

      {/* ── 1. Top Info Bar ── */}
      <div style={{
        backgroundColor: "#0a0a0a",
        color: "#ffffff",
        padding: "0.5rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "0.5rem",
        fontSize: "0.8rem",
      }}>
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
            <Phone size={12} color="#C9A227" />
            <span style={{ color: "#e5e0d0" }}>+63 XXX XXX XXXX</span>
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
            <Mail size={12} color="#C9A227" />
            <span style={{ color: "#e5e0d0" }}>carltonqu@gmail.com</span>
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
            <MapPin size={12} color="#C9A227" />
            <span style={{ color: "#e5e0d0" }}>Philippines</span>
          </span>
        </div>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <a href="#" aria-label="Facebook" style={{ color: "#C9A227" }}><Facebook size={14} /></a>
          <a href="#" aria-label="Instagram" style={{ color: "#C9A227" }}><Instagram size={14} /></a>
          <a href="#" aria-label="LinkedIn" style={{ color: "#C9A227" }}><Linkedin size={14} /></a>
        </div>
      </div>

      {/* ── 2. Sticky Nav ── */}
      <nav
        className={navScrolled ? "nav-scrolled" : ""}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e5e0d0",
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          transition: "box-shadow 0.3s",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <span style={{ color: "#0a0a0a", fontSize: "1.4rem", fontWeight: 900, letterSpacing: "-0.03em" }}>MCN</span>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: GOLD_GRADIENT, display: "inline-block", marginBottom: "2px" }} />
          <span style={{ color: "#555", fontSize: "0.85rem", fontWeight: 500 }}>Restaurant Supplies</span>
        </div>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", fontSize: "0.875rem", fontWeight: 500 }}>
            {[
              ["Home", "#"],
              ["What We Offer", "#offer"],
              ["Why Us", "#why"],
              ["Pricing", "#pricing"],
              ["How It Works", "#how"],
            ].map(([label, href]) => (
              <a key={label} href={href} style={{ color: "#0a0a0a", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#C9A227")}
                onMouseLeave={e => (e.currentTarget.style.color = "#0a0a0a")}>
                {label}
              </a>
            ))}
          </div>
          <a
            href="#quote"
            style={{
              background: GOLD_GRADIENT,
              color: "#0a0a0a",
              padding: "0.55rem 1.25rem",
              borderRadius: "6px",
              fontWeight: 700,
              fontSize: "0.875rem",
              textDecoration: "none",
              transition: "all 0.3s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = GOLD_GRADIENT_HOVER)}
            onMouseLeave={e => (e.currentTarget.style.background = GOLD_GRADIENT)}
          >
            Get Free Quote
          </a>
        </div>
      </nav>

      {/* ── 3. Hero Section ── */}
      <section style={{
        position: "relative",
        overflow: "hidden",
        padding: "5rem 2rem 4rem",
        backgroundColor: "#ffffff",
      }}>
        {/* Decorative orbs */}
        <div className="orb orb-gold" style={{ width: "500px", height: "500px", top: "-100px", right: "-100px" }} />
        <div className="orb orb-gold" style={{ width: "300px", height: "300px", bottom: "-50px", left: "-50px" }} />

        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}>
          {/* Left */}
          <div>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: GOLD_GRADIENT,
              borderRadius: "50px",
              padding: "0.4rem 1rem",
              marginBottom: "1.5rem",
              fontSize: "0.8rem",
              color: "#0a0a0a",
              fontWeight: 600,
            }}>
              🏭 Direct from China Factories
            </div>
            <h1 style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: "1.25rem",
              color: "#0a0a0a",
              letterSpacing: "-0.02em",
            }}>
              Save Up to{" "}
              <span style={{
                background: GOLD_GRADIENT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                30–50%
              </span>
              {" "}on Restaurant Equipment & Supplies
            </h1>
            <p style={{
              fontSize: "1.1rem",
              color: "#555",
              marginBottom: "2rem",
              lineHeight: 1.65,
            }}>
              Direct factory pricing. No middlemen. Verified suppliers.
            </p>
            <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem", flexWrap: "wrap" }}>
              <a
                href="#quote"
                style={{
                  background: GOLD_GRADIENT,
                  color: "#0a0a0a",
                  padding: "0.85rem 2rem",
                  borderRadius: "8px",
                  fontWeight: 700,
                  fontSize: "1rem",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  display: "inline-block",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = GOLD_GRADIENT_HOVER)}
                onMouseLeave={e => (e.currentTarget.style.background = GOLD_GRADIENT)}
              >
                Get a Free Quote
              </a>
              <a
                href="#offer"
                style={{
                  backgroundColor: "transparent",
                  color: "#0a0a0a",
                  padding: "0.85rem 2rem",
                  borderRadius: "8px",
                  fontWeight: 700,
                  fontSize: "1rem",
                  textDecoration: "none",
                  border: "2px solid #0a0a0a",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#0a0a0a"; e.currentTarget.style.color = "#ffffff"; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#0a0a0a"; }}
              >
                View Products
              </a>
            </div>
            {/* Trust Badges */}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
              {["✓ Factory Direct", "✓ Verified Suppliers", "✓ PH Market Savings"].map((b) => (
                <span key={b} style={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "#0a0a0a",
                  background: GOLD_GRADIENT,
                  padding: "0.3rem 0.75rem",
                  borderRadius: "50px",
                }}>
                  {b}
                </span>
              ))}
            </div>
            <p style={{ fontSize: "0.8rem", color: "#888", fontStyle: "italic" }}>
              Minimum order: ₱200,000
            </p>
          </div>

          {/* Right: image grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div style={{ gridColumn: "1 / -1" }}>
              <img
                src="https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=600&h=400&fit=crop"
                alt="Commercial fryer"
                style={{ width: "100%", height: "220px", objectFit: "cover", borderRadius: "12px", border: "2px solid transparent", outline: "2px solid #C9A227" }}
              />
            </div>
            <img
              src="https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&h=400&fit=crop"
              alt="Commercial kitchen equipment"
              style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "12px", border: "2px solid #e5e0d0", transition: "box-shadow 0.3s ease" }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 8px 32px rgba(201,162,39,0.2)")}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
            />
            <img
              src="https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&h=400&fit=crop"
              alt="Stainless steel kitchen"
              style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "12px", border: "2px solid #e5e0d0", transition: "box-shadow 0.3s ease" }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 8px 32px rgba(201,162,39,0.2)")}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
            />
          </div>
        </div>
      </section>

      {/* ── 4. Ticker/Marquee Strip ── */}
      <div style={{
        background: GOLD_GRADIENT,
        color: "#0a0a0a",
        padding: "0.75rem 0",
        overflow: "hidden",
        whiteSpace: "nowrap",
      }}>
        <div className="marquee-track" style={{ fontWeight: 600, fontSize: "0.9rem", letterSpacing: "0.02em" }}>
          {[tickerText, tickerText].map((t, i) => (
            <span key={i} style={{ paddingRight: "2rem" }}>{t}</span>
          ))}
        </div>
      </div>

      {/* ── 5. Stats Bar ── */}
      <section style={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e5e0d0",
        padding: "2.5rem 2rem",
      }}>
        <div style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "0",
        }}>
          {[
            { num: "500+", label: "Products Sourced" },
            { num: "50+", label: "Factory Partners" },
            { num: "48hrs", label: "Quote Turnaround" },
            { num: "20–50%", label: "Average Savings" },
          ].map((stat, i) => (
            <div key={stat.label} style={{
              textAlign: "center",
              padding: "1.5rem 1rem",
              borderLeft: i > 0 ? "1px solid #e5e0d0" : "none",
            }}>
              <div
                className="gold-gradient-text"
                style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "0.35rem" }}
              >
                {stat.num}
              </div>
              <div style={{ fontSize: "0.85rem", color: "#666", fontWeight: 500 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5b. Image Gallery ── */}
      <ImageGallery />

      {/* ── 6. What We Offer ── */}
      <section id="offer" style={{ padding: "6rem 2rem", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{
              display: "inline-block",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              background: GOLD_GRADIENT,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "0.75rem",
            }}>
              Our Products
            </span>
            <h2 style={{ fontSize: "2.25rem", fontWeight: 900, color: "#0a0a0a", letterSpacing: "-0.02em" }}>
              Everything Your Restaurant Needs
            </h2>
            <div style={{
              width: "60px",
              height: "3px",
              background: GOLD_GRADIENT,
              margin: "0.75rem auto 0",
              borderRadius: "2px",
            }} />
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}>
            {[
              { Icon: ChefHat, title: "Kitchen Equipment", desc: "Stoves, fryers, freezers, commercial cookware and more" },
              { Icon: Utensils, title: "Tools & Utensils", desc: "Full range of restaurant-grade professional tools" },
              { Icon: Package, title: "Packaging & Consumables", desc: "Takeout boxes, food containers, disposable supplies" },
              { Icon: ShoppingBasket, title: "Ingredients Sourcing", desc: "Bulk dry goods and specialty items at competitive rates" },
              { Icon: Settings, title: "Custom Bulk Orders", desc: "Tailored sourcing for your exact specifications and volume" },
            ].map(({ Icon, title, desc }) => (
              <div key={title} style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e0d0",
                borderRadius: "12px",
                padding: "2rem",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#C9A227";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(201,162,39,0.2)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#e5e0d0";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <div style={{
                  background: GOLD_GRADIENT,
                  borderRadius: "10px",
                  width: "48px",
                  height: "48px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}>
                  <Icon size={22} color="#0a0a0a" />
                </div>
                <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem", color: "#0a0a0a" }}>{title}</h3>
                <p style={{ fontSize: "0.875rem", color: "#666", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Why Choose Us ── */}
      <section id="why" style={{ padding: "6rem 2rem", backgroundColor: "#FAFAF5", position: "relative", overflow: "hidden" }}>
        {/* Decorative orbs */}
        <div className="orb orb-gold" style={{ width: "400px", height: "400px", top: "-80px", right: "-80px" }} />
        <div className="orb orb-gold" style={{ width: "250px", height: "250px", bottom: "-60px", left: "-60px" }} />

        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{
              display: "inline-block",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              background: GOLD_GRADIENT,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "0.75rem",
            }}>
              Our Advantage
            </span>
            <h2 style={{ fontSize: "2.25rem", fontWeight: 900, color: "#0a0a0a", letterSpacing: "-0.02em" }}>
              Why Smart Restaurants Choose MCN
            </h2>
            <div style={{
              width: "60px",
              height: "3px",
              background: GOLD_GRADIENT,
              margin: "0.75rem auto 0",
              borderRadius: "2px",
            }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "start" }}>
            {/* Left: benefits list */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { title: "Direct factory pricing", desc: "No middlemen — we connect you straight to China manufacturers." },
                { title: "Dedicated China buyer team", desc: "Our on-ground team handles negotiations and QC checks." },
                { title: "Verified factory partners", desc: "All suppliers are vetted for quality and reliability." },
                { title: "Faster sourcing & shipping", desc: "Streamlined logistics means less waiting, more cooking." },
                { title: "Same or better quality vs PH suppliers", desc: "Factory-direct goods at a fraction of local prices." },
              ].map(({ title, desc }) => (
                <div key={title} style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e0d0",
                  borderRadius: "12px",
                  padding: "1.25rem 1.5rem",
                  transition: "box-shadow 0.3s ease",
                }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 8px 32px rgba(201,162,39,0.2)")}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
                >
                  <CheckCircle size={20} color="#C9A227" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0a0a0a", marginBottom: "0.25rem" }}>{title}</div>
                    <div style={{ fontSize: "0.85rem", color: "#666", lineHeight: 1.5 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
            {/* Right: dark card */}
            <div style={{
              backgroundColor: "#0a0a0a",
              borderRadius: "16px",
              padding: "3rem 2.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minHeight: "320px",
            }}>
              <div style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                background: GOLD_GRADIENT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "1.5rem",
              }}>
                Real Savings
              </div>
              <div
                className="gold-gradient-text"
                style={{ fontSize: "2.5rem", fontWeight: 900, lineHeight: 1.2, marginBottom: "1rem" }}
              >
                Save ₱5,000–<br />₱15,000
              </div>
              <p style={{ color: "#e5e0d0", fontSize: "1rem", lineHeight: 1.6, marginBottom: "2rem" }}>
                per item vs local PH prices — on every single order you place.
              </p>
              <a href="#quote" style={{
                display: "inline-block",
                background: GOLD_GRADIENT,
                color: "#0a0a0a",
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                fontWeight: 700,
                fontSize: "0.9rem",
                textDecoration: "none",
                textAlign: "center",
                transition: "all 0.3s ease",
              }}
                onMouseEnter={e => (e.currentTarget.style.background = GOLD_GRADIENT_HOVER)}
                onMouseLeave={e => (e.currentTarget.style.background = GOLD_GRADIENT)}
              >
                Get Your Quote Now →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Pricing Advantage ── */}
      <section id="pricing" style={{ padding: "6rem 2rem", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2.25rem", fontWeight: 900, color: "#0a0a0a", letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>
              Real Savings. Real Numbers.
            </h2>
            <p style={{ color: "#666", fontSize: "1rem" }}>
              Compare our prices against the Philippine market
            </p>
            <div style={{
              width: "60px",
              height: "3px",
              background: GOLD_GRADIENT,
              margin: "0.75rem auto 0",
              borderRadius: "2px",
            }} />
          </div>
          <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start", flexWrap: "wrap" }}>
            {/* Side image */}
            <div style={{ flexShrink: 0 }}>
              <img
                src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=220&h=300&fit=crop"
                alt="Commercial kitchen equipment"
                style={{ width: "200px", height: "280px", objectFit: "cover", borderRadius: "12px", border: "2px solid #C9A227" }}
              />
            </div>
            <div style={{ flex: 1, overflowX: "auto", borderRadius: "12px", border: "1px solid #e5e0d0", overflow: "hidden" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: GOLD_GRADIENT }}>
                    <th style={{ padding: "1rem 1.5rem", textAlign: "left", fontWeight: 700, color: "#0a0a0a", fontSize: "0.9rem" }}>Item</th>
                    <th style={{ padding: "1rem 1.5rem", textAlign: "right", fontWeight: 700, color: "#0a0a0a", fontSize: "0.9rem" }}>PH Market Price</th>
                    <th style={{ padding: "1rem 1.5rem", textAlign: "right", fontWeight: 700, color: "#0a0a0a", fontSize: "0.9rem" }}>MCN Price</th>
                    <th style={{ padding: "1rem 1.5rem", textAlign: "right", fontWeight: 700, color: "#0a0a0a", fontSize: "0.9rem" }}>You Save</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "Commercial Fryer", ph: 25000, mcn: 15000, save: "₱10,000 (40%)" },
                    { item: "Stainless Work Table", ph: 18000, mcn: 11000, save: "₱7,000 (39%)" },
                    { item: "Rice Cooker (Commercial)", ph: 8000, mcn: 4500, save: "₱3,500 (44%)" },
                  ].map(({ item, ph, mcn, save }, i) => (
                    <tr key={item} style={{
                      backgroundColor: i % 2 === 0 ? "#ffffff" : "#FAFAF5",
                      borderTop: "1px solid #e5e0d0",
                    }}>
                      <td style={{ padding: "1rem 1.5rem", fontWeight: 600, color: "#0a0a0a" }}>{item}</td>
                      <td style={{ padding: "1rem 1.5rem", textAlign: "right", color: "#888", textDecoration: "line-through" }}>
                        ₱{ph.toLocaleString()}
                      </td>
                      <td style={{ padding: "1rem 1.5rem", textAlign: "right", color: "#C9A227", fontWeight: 700 }}>
                        ₱{mcn.toLocaleString()}
                      </td>
                      <td style={{ padding: "1rem 1.5rem", textAlign: "right", color: "#16a34a", fontWeight: 700 }}>
                        {save}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p style={{
            textAlign: "center",
            marginTop: "1.5rem",
            color: "#555",
            fontSize: "0.95rem",
            fontWeight: 600,
          }}>
            Average savings:{" "}
            <span
              className="gold-gradient-text"
              style={{ fontWeight: 700 }}
            >
              20%–50%
            </span>
            {" "}depending on order volume
          </p>
        </div>
      </section>

      {/* ── 9. How It Works ── */}
      <section
        id="how"
        style={{
          padding: "6rem 2rem",
          backgroundColor: "#0a0a0a",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background image overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=600&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.05,
          zIndex: 0,
        }} />
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.25rem", fontWeight: 900, color: "#ffffff", letterSpacing: "-0.02em" }}>
              How It Works
            </h2>
            <p style={{ color: "#888", marginTop: "0.75rem", fontSize: "1rem" }}>Simple. Fast. Reliable.</p>
            <div style={{
              width: "60px",
              height: "3px",
              background: GOLD_GRADIENT,
              margin: "0.75rem auto 0",
              borderRadius: "2px",
            }} />
          </div>
          <div style={{ position: "relative" }}>
            {/* Connecting line */}
            <div style={{
              position: "absolute",
              top: "28px",
              left: "12.5%",
              right: "12.5%",
              height: "2px",
              borderTop: "2px dashed #C9A227",
              opacity: 0.4,
              zIndex: 0,
            }} />
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1.5rem",
              position: "relative",
              zIndex: 1,
            }}>
              {[
                { n: "1", title: "Submit Requirements", desc: "Fill out our quick form with your needs and budget" },
                { n: "2", title: "We Source from China", desc: "Our team contacts verified factory partners" },
                { n: "3", title: "Get Quote in 24–48hrs", desc: "Receive a detailed quote with pricing & timeline" },
                { n: "4", title: "Delivery to PH", desc: "We handle logistics and ship direct to your door" },
              ].map(({ n, title, desc }) => (
                <div key={n} style={{ textAlign: "center" }}>
                  <div style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: GOLD_GRADIENT,
                    color: "#0a0a0a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 900,
                    fontSize: "1.25rem",
                    margin: "0 auto 1.5rem",
                    border: "3px solid #0a0a0a",
                    outline: "2px solid #C9A227",
                  }}>
                    {n}
                  </div>
                  <h3 style={{ fontWeight: 700, color: "#ffffff", fontSize: "1rem", marginBottom: "0.5rem" }}>{title}</h3>
                  <p style={{ color: "#888", fontSize: "0.875rem", lineHeight: 1.6 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. Quotation Form ── */}
      <section id="quote" style={{ padding: "6rem 2rem", backgroundColor: "#FAFAF5", position: "relative", overflow: "hidden" }}>
        {/* Decorative orbs */}
        <div className="orb orb-gold" style={{ width: "350px", height: "350px", top: "-80px", right: "-80px" }} />
        <div className="orb orb-gold" style={{ width: "200px", height: "200px", bottom: "-40px", left: "-40px" }} />

        <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2.25rem", fontWeight: 900, color: "#0a0a0a", letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>
              Get Your Free Quote
            </h2>
            <p style={{ color: "#666", fontSize: "1rem" }}>
              Fill out the form and our team will respond within 24–48 hours
            </p>
            <div style={{
              width: "60px",
              height: "3px",
              background: GOLD_GRADIENT,
              margin: "0.75rem auto 0",
              borderRadius: "2px",
            }} />
          </div>

          {submitted ? (
            <div style={{
              backgroundColor: "#ffffff",
              border: "1px solid #C9A227",
              borderRadius: "16px",
              padding: "3rem 2rem",
              textAlign: "center",
              boxShadow: "0 8px 32px rgba(201,162,39,0.2)",
            }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem", color: "#0a0a0a" }}>
                Quote Request Received!
              </h3>
              <p style={{ color: "#666", lineHeight: 1.6 }}>
                Thank you! We&apos;ll review your requirements and send you a detailed quotation within 24–48 hours.
                Check your email for a confirmation.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e0d0",
                borderRadius: "16px",
                padding: "2.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} placeholder="Juan dela Cruz" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Company Name *</label>
                  <input type="text" name="companyName" required value={formData.companyName} onChange={handleChange} placeholder="Your Restaurant" style={inputStyle} />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="juan@example.com" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Phone / WhatsApp *</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+63 917 000 0000" style={inputStyle} />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                <div>
                  <label style={labelStyle}>Business Type *</label>
                  <select name="businessType" required value={formData.businessType} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}>
                    <option value="">Select type...</option>
                    <option value="Restaurant">Restaurant</option>
                    <option value="Cafe">Cafe</option>
                    <option value="Cloud Kitchen">Cloud Kitchen</option>
                    <option value="Distributor">Distributor</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Estimated Budget *</label>
                  <select name="budget" required value={formData.budget} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}>
                    <option value="">Select budget...</option>
                    <option value="₱200k–₱500k">₱200k – ₱500k</option>
                    <option value="₱500k–₱1M">₱500k – ₱1M</option>
                    <option value="₱1M+">₱1M+</option>
                  </select>
                </div>
              </div>
              <div>
                <label style={labelStyle}>What do you need? *</label>
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
                backgroundColor: "#F5E6B2",
                border: "1px solid #C9A227",
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
                  style={{ marginTop: "2px", accentColor: "#C9A227", width: "16px", height: "16px", flexShrink: 0 }}
                />
                <label htmlFor="minimumOrderAck" style={{ fontSize: "0.9rem", color: "#555", cursor: "pointer" }}>
                  I understand the <strong style={{ color: "#0a0a0a" }}>minimum order is ₱200,000</strong> and confirm my order meets this requirement
                </label>
              </div>
              {error && (
                <div style={{
                  backgroundColor: "#fef2f2",
                  border: "1px solid #fca5a5",
                  borderRadius: "8px",
                  padding: "0.75rem 1rem",
                  fontSize: "0.9rem",
                  color: "#dc2626",
                }}>
                  {error}
                </div>
              )}
              <button
                type="submit"
                disabled={submitting}
                style={{
                  background: submitting ? "#A07D1C" : GOLD_GRADIENT,
                  color: "#0a0a0a",
                  border: "none",
                  padding: "1rem 2rem",
                  borderRadius: "8px",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  cursor: submitting ? "not-allowed" : "pointer",
                  transition: "all 0.3s ease",
                  width: "100%",
                  fontFamily: "inherit",
                }}
                onMouseEnter={e => { if (!submitting) e.currentTarget.style.background = GOLD_GRADIENT_HOVER; }}
                onMouseLeave={e => { if (!submitting) e.currentTarget.style.background = GOLD_GRADIENT; }}
              >
                {submitting ? "Submitting..." : "Request Free Quote →"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── 11. Footer ── */}
      <footer style={{ backgroundColor: "#0a0a0a", color: "#ffffff", padding: "4rem 2rem 2rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "3rem", marginBottom: "3rem" }}>
            {/* Brand */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "1rem" }}>
                <span style={{ fontSize: "1.4rem", fontWeight: 900, color: "#ffffff" }}>MCN</span>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: GOLD_GRADIENT, display: "inline-block" }} />
              </div>
              <p style={{ color: "#888", fontSize: "0.875rem", lineHeight: 1.7, maxWidth: "260px" }}>
                Smart sourcing. Real savings.
                <br />Direct factory pricing for Philippine restaurants.
              </p>
            </div>
            {/* About */}
            <div>
              <h4 style={{ fontWeight: 700, marginBottom: "1rem", fontSize: "0.875rem", color: "#ffffff" }}>About</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {["Our Story", "How It Works", "Why Us", "Partners"].map(l => (
                  <a key={l} href="#" style={{ color: "#888", fontSize: "0.875rem", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#C9A227")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#888")}>
                    {l}
                  </a>
                ))}
              </div>
            </div>
            {/* Quick Links */}
            <div>
              <h4 style={{ fontWeight: 700, marginBottom: "1rem", fontSize: "0.875rem", color: "#ffffff" }}>Quick Links</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {["Products", "Pricing", "Get Quote", "FAQ"].map(l => (
                  <a key={l} href="#" style={{ color: "#888", fontSize: "0.875rem", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#C9A227")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#888")}>
                    {l}
                  </a>
                ))}
              </div>
            </div>
            {/* Contact */}
            <div>
              <h4 style={{ fontWeight: 700, marginBottom: "1rem", fontSize: "0.875rem", color: "#ffffff" }}>Contact</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <span style={{ color: "#888", fontSize: "0.875rem" }}>carltonqu@gmail.com</span>
                <span style={{ color: "#888", fontSize: "0.875rem" }}>+63 XXX XXX XXXX</span>
                <span style={{ color: "#888", fontSize: "0.875rem" }}>Philippines</span>
              </div>
            </div>
          </div>
          {/* Bottom bar */}
          <div style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}>
            <span style={{ color: "#555", fontSize: "0.8rem" }}>© 2025 MCN Restaurant Supplies Chain Solutions</span>
            <span style={{ color: "#555", fontSize: "0.8rem" }}>All rights reserved.</span>
          </div>
        </div>
      </footer>

      {/* ── 12. WhatsApp Button ── */}
      <a
        href="https://wa.me/63XXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          backgroundColor: "#25D366",
          color: "#ffffff",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
          textDecoration: "none",
          zIndex: 200,
          transition: "transform 0.2s",
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
      >
        <MessageCircle size={28} fill="#ffffff" />
      </a>
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.85rem",
  fontWeight: 600,
  marginBottom: "0.5rem",
  color: "#0a0a0a",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  backgroundColor: "#ffffff",
  border: "1px solid #e5e0d0",
  borderRadius: "8px",
  padding: "0.75rem 1rem",
  color: "#0a0a0a",
  fontSize: "0.95rem",
  outline: "none",
  fontFamily: "inherit",
  transition: "border-color 0.2s",
};
