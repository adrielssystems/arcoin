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

export default function App() {
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
      <Footer />
    </div>
  );
}
