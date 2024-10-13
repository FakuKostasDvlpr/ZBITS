import './styles/App.css';
import { TypewriterEffectDemo } from './Components/Hero';
import Navbar from './Components/Navbar';
import { HoverEffect } from './Components/ui/card-hover-effect';
import { CardHoverEffectDemo } from './Components/Service';
import { FlipWordsDemo } from './Components/SobreNosotros';
import { ContactSectionJsx } from './Components/contact-section';
import { FooterJsx } from './Components/footer';
import ButtonToTop from './Components/ui/ButtonToTop';

function App() {

  return (
    <>
      <div id="home"></div>
      <Navbar />
      <TypewriterEffectDemo />
      <HoverEffect />
      <div id="services"></div>
      <CardHoverEffectDemo />
      <div id="nosotros"></div>
      <FlipWordsDemo />
      <div id="contacto"></div>
      <ContactSectionJsx />
      <FooterJsx />
      {/* Botón flotante para volver al inicio */}
      <ButtonToTop/>
    </>
  );
}

export default App;
