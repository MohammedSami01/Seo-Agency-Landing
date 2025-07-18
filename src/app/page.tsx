import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Solutions from './components/Solutions';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Services />
      <Solutions />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}