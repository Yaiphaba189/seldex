'use client';

import { motion } from 'framer-motion';
import {
    FileText,
    Settings2,
    UserCheck,
    BarChart3,
    Clock,
    Database
} from 'lucide-react';

const features = [
    {
        title: "Intelligent Document Processing",
        description: "AI-driven extraction and verification ensures that the document data is accurate instantly.",
        icon: <FileText className="w-8 h-8 text-primary" />,
        color: "bg-green-50"
    },
    {
        title: "Built for Efficiency",
        description: "Streamlined workflows designed to reduce manual intervention and speed up TAT.",
        icon: <Clock className="w-8 h-8 text-primary" />,
        color: "bg-blue-50"
    },
    {
        title: "Compliance Assured",
        description: "Multi-layered verification protocols ensure every file meets audit standards.",
        icon: <UserCheck className="w-8 h-8 text-primary" />,
        color: "bg-purple-50"
    },
    {
        title: "Automated Financial Analysis",
        description: "Algorithmic credit analysis of bank statements and financial documents.",
        icon: <BarChart3 className="w-8 h-8 text-primary" />,
        color: "bg-orange-50"
    },
    {
        title: "60% Faster Processing",
        description: "By reducing rework and manual errors, loan applications move significantly quicker.",
        icon: <Settings2 className="w-8 h-8 text-primary" />,
        color: "bg-red-50" // Special circle graphic case
    },
    {
        title: "Structured Data Output",
        description: "Easily integrated data output ready for loan management systems.",
        icon: <Database className="w-8 h-8 text-primary" />,
        color: "bg-indigo-50/50"
    }
];

export function Features() {
    return (
        <section className="py-24">
            <div className="container px-4 mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-gray-900 inline-block border-b-4 border-primary/20 pb-2"
                    >
                        Key Features
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-gray-600 max-w-2xl mx-auto"
                    >
                        Every feature is designed to eliminate friction, reduce rework, and make every submission compliant — right from the first upload.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <FeatureCard key={idx} feature={feature} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ feature, index }: { feature: any, index: number }) {
    const isSpecial = feature.title.includes("60%");

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-8 bg-white/40 backdrop-blur-lg rounded-3xl border border-white/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
        >
            <div className="mb-6">
                {isSpecial ? (
                    <div className="relative w-24 h-24 mx-auto flex items-center justify-center rounded-full border-4 border-primary/20 text-primary font-bold text-xl">
                        60%
                        <svg className="absolute inset-0 w-full h-full text-primary rotate-[-90deg]" viewBox="0 0 36 36">
                            <path strokeDasharray="60, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="4" stroke="currentColor" />
                        </svg>
                    </div>
                ) : (
                    <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        {feature.icon}
                    </div>
                )}
            </div>

            <h3 className={`text-xl font-bold text-gray-900 mb-3 ${isSpecial ? 'text-center' : ''}`}>
                {feature.title}
            </h3>
            <p className={`text-gray-500 leading-relaxed ${isSpecial ? 'text-center' : ''}`}>
                {feature.description}
            </p>
        </motion.div>
    );
}
