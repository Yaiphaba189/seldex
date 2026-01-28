import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Mission } from '@/components/Mission';
import { Features } from '@/components/Features';
import { Governance } from '@/components/Governance';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { Background } from '@/components/Background';

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent font-sans selection:bg-primary/20 relative">
      <Background />
      <Header />
      <Hero />
      <Mission />
      <Features />
      <Governance />
      <CTA />
      <Footer />
    </main>
  );
}
