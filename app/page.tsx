import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PricingAdvantage from '@/components/PricingAdvantage';
import TrustBar from '@/components/TrustBar';
import Marquee from '@/components/Marquee';
import WhatWeOffer from '@/components/WhatWeOffer';
import WhyChooseUs from '@/components/WhyChooseUs';
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
        <PricingAdvantage />
        <TrustBar />
        <Marquee />
        <WhatWeOffer />
        <WhyChooseUs />
        <HowItWorks />
        <QuoteForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
