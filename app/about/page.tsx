import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Background } from '@/components/Background';


export default function AboutPage() {
    return (
        <main className="min-h-screen bg-transparent font-sans selection:bg-primary/20 relative overflow-x-hidden">
            <Background />
            <Header />
            <section className="pt-32 pb-16">
                <div className="container px-6 md:px-16 mx-auto">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-medium text-gray-900 mb-8">About Us</h1>
                        <p className="text-xl text-gray-600 leading-relaxed mb-12">
                            Seldex is dedicated to driving "First Time Right" for Loan Agents and Direct Selling Agents.
                            We leverage Intelligent Document Processing and Data Governance to ensure audit-ready loan processing,
                            making financial solutions more sustainable and efficient.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
