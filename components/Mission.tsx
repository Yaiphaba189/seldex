'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function Mission() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container px-4 mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="relative inline-block">
                        {/* Decorative arrow/scribble */}
                        <svg className="absolute -top-12 -right-12 w-24 h-24 text-primary opacity-80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20,80 Q50,10 80,50 T90,90" strokeDasharray="5,5" />
                            <path d="M85,85 L90,90 L80,92" />
                        </svg>

                        <h2 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight">
                            Our team of is driving <br />
                            <span className="relative inline-block">
                                the shift
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </span> to sustainable <br />
                            financial solutions
                        </h2>
                    </div>

                    <div className="mt-12 relative w-full h-64 md:h-80 bg-white/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-white/50">
                        {/* Placeholder for team image */}
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
                            <span className="text-lg">[Team Image Placeholder]</span>
                        </div>
                        {/* If we had an image: <Image src="/team.jpg" alt="Team" fill className="object-cover" /> */}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
