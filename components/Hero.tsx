'use client';

import { motion } from 'framer-motion';

export function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-[90vh] pt-32 pb-16 overflow-hidden">
            {/* Background Gradients removed for global background */}

            <div className="container px-4 mx-auto text-center max-w-8xl z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-5xl md:text-6xl font-semibold leading-tight tracking-tight text-gray-900 mb-6">
                        Driving &quot;First Time Right&quot; (FTR) <br />
                        for <span className="text-primary">Loan Agents & Direct Selling Agents(DSA)</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Leveraging Intelligent Document Processing (IDP) and Data Governance <br className="hidden md:block" />
                        for Audit-Ready Loan processing
                    </p>

                    {/* Input Action */}
                    <div className="relative max-w-lg mx-auto mb-16 group">
                        <div className="relative flex items-center p-1.5 bg-gray-50/80 backdrop-blur-sm border border-gray-100 rounded-full shadow-sm hover:shadow-md transition-all duration-300  hover:scale-105  whitespace-nowrap">
                            <input
                                type="email"
                                placeholder="Enter Your Work mail"
                                className="flex-1 w-full px-6 py-3 bg-transparent border-none outline-none text-gray-900 placeholder-gray-400 font-medium"
                            />
                            <button className="px-6 py-3 bg-primary hover:bg-[#2ab552] text-white text-sm font-semibold rounded-full shadow-lg shadow-primary/30 transition-all hover:scale-105 active:scale-95 whitespace-nowrap">
                                Request a Demo
                            </button>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16 max-w-3xl mx-auto mt-16">
                        <CircularStat
                            value={60}
                            label="Faster TAT"
                            delay={0.2}
                        />
                        <CircularStat
                            value={100}
                            label="Data Accuracy"
                            delay={0.3}
                        />
                        <TextStat
                            value="0%"
                            label="Compliance Risk"
                            delay={0.4}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function CircularStat({ value, label, delay }: { value: number, label: string, delay: number }) {
    const radius = 38;
    const stroke = 8;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (value / 100) * circumference;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            className="flex flex-col items-center gap-4"
        >
            <div className="relative w-[100px] h-[100px] flex items-center justify-center">
                <svg width="100" height="100" className="-rotate-90">
                    <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        stroke="#e5e7eb"
                        strokeWidth={stroke}
                        fill="none"
                    />
                    <motion.circle
                        cx="50"
                        cy="50"
                        r={radius}
                        stroke="#34d163"
                        strokeWidth={stroke}
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset: offset }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: delay + 0.2 }}
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-gray-900 leading-none">
                        {value}<span className="text-sm font-bold">%</span>
                    </span>
                </div>
            </div>
            <p className="text-lg text-gray-900 font-medium">{label}</p>
        </motion.div>
    );
}

function TextStat({ value, label, delay }: { value: string, label: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            className="flex flex-col items-center gap-4"
        >
            <div className="relative w-[100px] h-[100px] flex items-center justify-center">
                <span className="text-7xl font-semibold text-[#1a5f2e] tracking-tight">{value}</span>
            </div>
            <p className="text-lg text-gray-900 font-medium">{label}</p>
        </motion.div>
    );
}
