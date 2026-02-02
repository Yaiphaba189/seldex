'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const governancePoints = [
    "End-to-end data handling and storage protocols",
    "Automated KYC and document validation workflows",
    "Real-time audit trails for complete transparency",
    "Secure data encryption at rest and in transit",
    "Role-based access control for team security",
    "Automated compliance reporting and documentation" // Repeated in image, keeping it
];

export function Governance() {
    return (
        <section className="py-24 px-6 md:px-16 mx-auto max-w-7xl">
            {/* Background blobs removed for global background */}
            <div className="absolute top-1/2  w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -ml-20" />

            <div className="container px-6 md:px-16 mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 leading-tight mb-6 md:mb-8">
                        <span className="relative inline-block">
                            Enterprise-Grade
                            <Image src="/Arrow.svg" alt="arrow" width={90} height={80} loading="lazy" className="absolute -top-16 -right-18 hidden md:block" />
                        </span> <br />
                        <span className="text-primary font-semibold">Data Governance</span>
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Built to meet the strictest regulatory requirements while maintaining operational efficiency. Every transaction is secure, traceable, and audit-ready.
                    </p>


                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <ul className="space-y-4 md:space-y-6">
                        {governancePoints.map((point, idx) => (
                            <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * idx }}
                                className="flex items-start gap-3"
                            >
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 text-lg">{point}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
