import Link from 'next/link';
import logo from '@/public/seldex.webp';
import Image from 'next/image';
export function Footer() {
    return (
        <footer className="py-12 ">
            <div className="container px-10 mx-auto">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 mb-12">
                    {/* Left Side: Logo & Description */}
                    <div className="max-w-sm">
                        <div className="flex items-center gap-2">
                            <Image src={logo} alt="Seldex Logo" width={100} height={100} />
                        </div>
                        <p className="mt-4 text-sm text-gray-500">
                            AI-powered document processing <br />
                            for modern lending.
                        </p>
                    </div>

                    {/* Right Side: Links Group */}
                    <div className="flex gap-16xx md:gap-24">
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
                            <ul className="space-y-2 text-sm text-gray-500">
                                <li><Link href="#" className="hover:text-primary transition-colors">Features</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Solutions</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
                            <ul className="space-y-2 text-sm text-gray-500">
                                <li><Link href="#" className="hover:text-primary transition-colors">About us</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Contact us</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
                            <ul className="space-y-2 text-sm text-gray-500">
                                <li><Link href="#" className="hover:text-primary transition-colors">Privacy</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Terms</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-50 text-center text-xs text-gray-400">
                    © {new Date().getFullYear()} Awpara Technologies Pvt. Ltd. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
