import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Methodology from './components/Methodology';
import Services from './components/Services';
import Packages from './components/Packages';
import Technology from './components/Technology';
import SuccessStories from './components/SuccessStories';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import LegalModal, { type LegalTab } from './components/LegalModal';

export default function App() {
  const [legalTab, setLegalTab] = useState<LegalTab | null>(null);

  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#terminos' || hash === '#legal-terminos') {
        setLegalTab('terminos');
      } else if (hash === '#privacidad' || hash === '#legal-privacidad') {
        setLegalTab('privacidad');
      } else if (hash === '#seguridad' || hash === '#legal-seguridad') {
        setLegalTab('seguridad');
      } else if (hash === '#legal') {
        setLegalTab('terminos');
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const handleCloseLegal = () => {
    setLegalTab(null);
    const hash = window.location.hash.toLowerCase();
    if (hash.includes('legal') || hash.includes('terminos') || hash.includes('privacidad') || hash.includes('seguridad')) {
      history.pushState(null, '', window.location.pathname + window.location.search);
    }
  };

  return (
    <div className="bg-surface-bright text-on-surface technical-grid min-h-screen selection:bg-primary-container selection:text-white antialiased overflow-x-hidden">
      <Header />
      <Hero />
      <Methodology />
      <Services />
      <Packages />
      <Technology />
      <SuccessStories />
      <FAQ />
      <ContactForm />
      <Footer onOpenLegal={(tab) => setLegalTab(tab)} />
      
      <LegalModal 
        isOpen={legalTab !== null} 
        initialTab={legalTab || 'terminos'} 
        onClose={handleCloseLegal} 
      />
    </div>
  );
}
