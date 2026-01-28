'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function CTA() {
    return (
        <section className="py-24 px-4">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-primary rounded-[3rem] p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/30"
                >
                    {/* Background pattern */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Ready to transform your loan operations?
                        </h2>
                        <p className="text-green-50 mb-10 max-w-2xl mx-auto text-lg">
                            Join the lenders who are delivering faster approvals and efficient processing.
                        </p>

                        <button className="bg-white text-primary font-bold px-8 py-4 rounded-full inline-flex items-center gap-2 hover:bg-green-50 transition-colors shadow-lg group">
                            Request Demo
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
