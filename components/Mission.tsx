'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut" as const
        }
    }
};

export function Mission() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container px-4 mx-auto text-center relative z-10">
                <motion.div
                    className="max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <div className="relative inline-block">
                        <h2 className="text-5xl md:text-6xl font-medium text-gray-900 leading-tight relative">
                            <motion.span className='relative block' variants={itemVariants}>
                                Our team of is driving
                                <Image src="/Arrow.svg" alt="arrow" width={90} height={80} loading="lazy" className="absolute -top-18 -right-12 hidden md:block" />
                            </motion.span>

                            <motion.span className="flex flex-wrap items-center justify-center gap-4" variants={itemVariants}>
                                <Image src="/Wave.svg" alt="wave" width={60} height={60} loading="lazy" className="inline-block" />
                                the shift to sustainable
                            </motion.span>
                            <motion.span className="flex flex-wrap items-center justify-center gap-2" variants={itemVariants}>
                                financial
                                <Image src="/Image.svg" alt="decorative" width={100} height={60} loading="lazy" className="inline-block rounded-md object-cover mt-2" />
                                solutions
                            </motion.span>
                        </h2>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
