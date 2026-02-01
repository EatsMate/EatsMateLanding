import './App.css'
import { Hero } from './components/Hero';
import { ValueProp } from './components/ValueProp';
import { Features } from './components/Features';
import { SocialProof } from './components/SocialProof';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <main>
        <Hero />
        <ValueProp />
        <Features />
        <SocialProof />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
