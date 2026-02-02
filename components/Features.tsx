'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

interface FeatureConfig {
    title: string;
    description: string;
    image: string;
    layout: 'text-top' | 'image-top';
    width?: number;
    height?: number;
    imageClassName?: string;
    gap?: string;
}

const features: FeatureConfig[] = [
    {
        title: "Intelligent Document Processing",
        description: "AI-powered extraction and validation that detects, verifies and structures documents automatically reducing human error.",
        image: "/IDP.webp",
        layout: "text-top",
        width: 280,
        height: 200,
        imageClassName: "h-40 w-auto",
        gap: "gap-2"
    },
    {
        title: "Built for Efficiency",
        description: "Every feature is designed to remove friction and speed your loan pipeline from intake to disbursal.",
        image: "/Build for efficiency.webp",
        layout: "image-top",
        width: 280,
        height: 200,
        imageClassName: "h-50 w-auto",
        gap: "gap-2"
    },
    {
        title: "Compliance Assured",
        description: "Built-in regulatory rules and timestamped audit trails ensure every file meets audit standards",
        image: "/Compliance Assured.webp",
        layout: "image-top",
        width: 280,
        height: 200,
        imageClassName: "h-50 w-auto",
        gap: "gap-2"
    },
    {
        title: "Automated Financial Analysis",
        description: "AI-powered extraction and validation of loan documents with 100% accuracy",
        image: "/Automated Financial Analysis.webp",
        layout: "image-top",
        width: 280,
        height: 200,
        imageClassName: "h-50 w-auto",
        gap: "gap-2"
    },
    {
        title: "60% Faster Processing",
        description: "Automated checks and workflows cut manual cycles get from submission to underwriting far quicker.",
        image: "/60.webp",
        layout: "image-top",
        width: 280,
        height: 200,
        imageClassName: "h-40 w-auto",
        gap: "gap-2"
    },
    {
        title: "Structured Data Output",
        description: "Clean, normalized data delivered in ready-to-integrate formats for your core systems and downstream analytics.",
        image: "/Structured Data Output.webp",
        layout: "image-top",
        width: 280,
        height: 200,
        imageClassName: "h-40 w-auto",
        gap: "gap-2"
    }
];

export function Features() {
    const shouldReduceMotion = useReducedMotion();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: shouldReduceMotion ? 0 : 0.5,
                ease: "easeOut" as const
            }
        }
    };

    return (
        <section className="py-16">
            <div className="container px-6 md:px-16 mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-medium text-gray-900 inline-block border-b-4 border-primary/20 pb-2"
                    >
                        Key Features
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: shouldReduceMotion ? 0 : 0.2 }}
                        className="mt-4 text-m-gray-600 max-w-2xl mx-auto"
                    >
                        Every feature is designed to eliminate friction, reduce rework, and make every submission compliant — right from the first upload.
                    </motion.p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {features.map((feature, idx) => (
                        <FeatureCard key={idx} feature={feature} index={idx} variants={cardVariants} shouldReduceMotion={shouldReduceMotion ?? false} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function FeatureCard({ feature, index, variants, shouldReduceMotion }: { feature: FeatureConfig, index: number, variants: any, shouldReduceMotion: boolean }) {
    const isTextTop = feature.layout === 'text-top';
    const imgWidth = feature.width || 280;
    const imgHeight = feature.height || 200;
    const imgClass = feature.imageClassName || "object-contain h-40 w-auto";
    const gapClass = feature.gap || "gap-4";

    return (
        <motion.div
            variants={variants}
            whileHover={shouldReduceMotion ? {} : { y: -5 }}
            className={`
                bg-white rounded-[2rem] p-6 md:p-8 h-full flex flex-col
                shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)]
                border border-gray-100/50 transition-shadow duration-300
                text-left ${gapClass} will-change-transform
            `}
        >
            {isTextTop ? (
                <>
                    <div>
                        <h3 className="text-2xl font-medium text-gray-900 mb-4">
                            {feature.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-snug font-light">
                            {feature.description}
                        </p>
                    </div>
                    <div className="w-full flex justify-center">
                        <Image
                            src={feature.image}
                            alt={feature.title}
                            width={imgWidth}
                            height={imgHeight}
                            loading="lazy"
                            className={`object-contain ${imgClass}`}
                        />
                    </div>
                </>
            ) : (
                <>
                    <div className="w-full flex justify-center">
                        <Image
                            src={feature.image}
                            alt={feature.title}
                            width={imgWidth}
                            height={imgHeight}
                            loading="lazy"
                            className={`object-contain ${imgClass}`}
                        />
                    </div>
                    <div>
                        <h3 className="text-2xl font-medium text-gray-900 mb-4">
                            {feature.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-snug font-light">
                            {feature.description}
                        </p>
                    </div>
                </>
            )}
        </motion.div>
    );
}
