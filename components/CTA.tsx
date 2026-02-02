'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function CTA() {
    return (
        <section className="py-12 px-6 md:px-8 mx-auto max-w-7xl">
            <div className="container mx-auto max-w-10xl ">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-[#2EB82E] rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 text-center text-white relative overflow-hidden shadow-2xl shadow-green-600/30"
                >
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/CTA Forground.png"
                            alt="Background"
                            className="w-full h-full object-cover opacity-50 mix-blend-multiply"
                        />
                    </div>

                    <div className="relative z-10 max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-normal mb-3 tracking-tight">
                            Ready to transform your loan operations?
                        </h2>
                        <p className="text-white/90 mb-6 mx-auto text-lg font-light">
                            Schedule a demo to see how Seldex can help you achieve first-time-right processing.
                        </p>

                        <button className="bg-white text-green-600 font-medium px-6 py-3 md:px-8 rounded-lg inline-flex items-center gap-2 hover:bg-gray-50 transition-all hover:scale-105 shadow-lg group text-sm md:text-base">
                            Request Demo
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
