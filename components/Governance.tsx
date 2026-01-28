'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const governancePoints = [
    "End-to-end data handling and storage protocols",
    "Automated KYC and document validation workflows",
    "Real-time audit trails for complete transparency",
    "Secure data encryption at rest and in transit",
    "Role-based access control for team security",
    "Automated compliance reporting and documentation",
    "Automated compliance reporting and documentation" // Repeated in image, keeping it
];

export function Governance() {
    return (
        <section className="py-24 relative">
            {/* Background blobs removed for global background */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -ml-20" />

            <div className="container px-4 mx-auto grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight mb-8">
                        Enterprise-Grade <br />
                        <span className="text-primary font-bold">Data Governance</span>
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Built to meet the strictest regulatory requirements while maintaining operational efficiency. Every transaction is secure, traceable, and audit-ready.
                    </p>

                    <div className="relative h-64 w-full bg-white/40 backdrop-blur-md rounded-2xl overflow-hidden border border-white/40 shadow-md">
                        {/* Placeholder graphic */}
                        <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                            [Governance Graphic Placeholder]
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <ul className="space-y-6">
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
