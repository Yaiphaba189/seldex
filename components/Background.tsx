'use client';

import { motion } from 'framer-motion';

export function Background() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-white">
            {/* Top Left Green Blob */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-[#34d163] rounded-full blur-[120px] opacity-10"
            />

            {/* Center Right Subtle Blob */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute top-[40%] -right-[10%] w-[40vw] h-[40vw] bg-[#2ab552] rounded-full blur-[100px] opacity-10 mixed-blend-multiply"
            />

            {/* Bottom Left Blob */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, 30, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute -bottom-[10%] left-[20%] w-[45vw] h-[45vw] bg-[#a8e6cf] rounded-full blur-[130px] opacity-25"
            />
        </div>
    );
}
