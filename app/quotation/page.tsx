import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ViberButton from '@/components/ViberButton';
import QuotationForm from '@/components/QuotationForm';

export default function QuotationPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <QuotationForm />
      </main>
      <Footer />
      <ViberButton />
    </>
  );
}
