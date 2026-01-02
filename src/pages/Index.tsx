import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Products from '@/components/Products';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import HowItWorks from '@/components/HowItWorks';
import LeadForm from '@/components/LeadForm';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Products />
        <Services />
        <Testimonials />
        <HowItWorks />
        <LeadForm />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
