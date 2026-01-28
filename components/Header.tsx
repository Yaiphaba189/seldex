'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import logo from '@/public/seldex.webp';
import Image from 'next/image';

export function Header() {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={cn(
                "flex flex-wrap items-center justify-between px-6 py-6 md:px-26",

            )}
        >
            <div className="flex items-center gap-2">

                <Image src={logo} alt="Logo" width={100} height={100} />
            </div>

            <nav className="flex items-center gap-2 md:gap-4">
                <Link
                    href="#"
                    className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium text-gray-900 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                    About Us
                </Link>
                <Link
                    href="#"
                    className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium text-gray-900 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                    Contact Us
                </Link>
            </nav>
        </motion.header>
    );
}
