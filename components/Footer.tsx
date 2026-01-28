import Link from 'next/link';

export function Footer() {
    return (
        <footer className="py-12 border-t border-white/20 bg-white/30 backdrop-blur-md">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xl font-bold text-gray-900">Seldex</span>
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        </div>
                        <p className="text-sm text-gray-500 max-w-xs">
                            AI-powered document processing for modern lending.
                        </p>
                    </div>

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
                            <li><Link href="#" className="hover:text-primary transition-colors">About</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
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

                <div className="pt-8 border-t border-gray-50 text-center text-xs text-gray-400">
                    © {new Date().getFullYear()} Seldex Technologies Pvt Ltd. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
