import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Marquee from '@/components/Marquee';
import WhatWeOffer from '@/components/WhatWeOffer';
import WhyChooseUs from '@/components/WhyChooseUs';
import PricingAdvantage from '@/components/PricingAdvantage';
import HowItWorks from '@/components/HowItWorks';
import QuoteForm from '@/components/QuoteForm';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Marquee />
        <WhatWeOffer />
        <WhyChooseUs />
        <PricingAdvantage />
        <HowItWorks />
        <QuoteForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
