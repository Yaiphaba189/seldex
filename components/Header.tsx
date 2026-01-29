'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import logo from '@/public/seldex.webp';
import Image from 'next/image';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={cn(
                "flex flex-wrap items-center justify-between px-6 py-6 md:px-26 relative z-50",
            )}
        >
            <div className="flex items-center gap-2">
                <Image src={logo} alt="Logo" width={120} height={120} />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-4">
                <Link
                    href="#"
                    className="px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                    About Us
                </Link>
                <Link
                    href="#"
                    className="px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                    Contact Us
                </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden p-2 text-gray-900"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Navigation Dropdown */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-full left-0 right-0 bg-white shadow-lg p-4 flex flex-col gap-4 md:hidden border-t border-gray-100"
                >
                    <Link
                        href="#"
                        className="px-4 py-3 text-sm font-medium text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-center"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        About Us
                    </Link>
                    <Link
                        href="#"
                        className="px-4 py-3 text-sm font-medium text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-center"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact Us
                    </Link>
                </motion.div>
            )}
        </motion.header>
    );
}
