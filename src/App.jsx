import Nav from './components/Nav';
import Hero from './components/Hero';
import Calculator from './components/Calculator';
import HowItWorks from './components/HowItWorks';
import WhatYouReceive from './components/WhatYouReceive';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Calculator />
        <HowItWorks />
        <WhatYouReceive />
        <Portfolio />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
