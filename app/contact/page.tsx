'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Background } from '@/components/Background';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-transparent font-sans selection:bg-primary/20 relative overflow-x-hidden">
            <Background />
            <Header />
            <section className="pt-32 pb-16">
                <div className="container px-6 md:px-16 mx-auto">
                    <div className="max-w-2xl mx-auto text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-medium text-gray-900 mb-6">Contact Us</h1>
                        <p className="text-xl text-gray-600">
                            Get in touch with us to request a demo or learn more about how Seldex can help your business.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start max-w-6xl mx-auto">
                        {/* Contact Information - Left Column */}
                        <div className="flex flex-col gap-10">
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in touch</h2>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    Have questions about our platform? Our team is here to help you get started with the right solution.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                                        <a href="mailto:contact@seldex.com" className="text-gray-600 hover:text-primary transition-colors">
                                            contact@awpara.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                                        <a href="tel:+919963382225" className="text-gray-600 hover:text-primary transition-colors">
                                            +91 99633 82225
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Office</h3>
                                        <p className="text-gray-600">
                                            Software Technology Park of India, G Floor, MIMS Building,
                                            Manipur University, Canchipur, Imphal, Manipur, 795003.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form - Right Column */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 w-full">
                            <form className="flex flex-col gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Work Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                                        placeholder="name@company.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>
                                <button type="submit" className="w-full py-3 bg-primary hover:bg-[#2ab552] text-white font-semibold rounded-lg shadow-lg shadow-primary/30 transition-all">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
