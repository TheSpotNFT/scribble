import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Close menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 640) setIsOpen(false); // Tailwind's `sm:` breakpoint = 640px
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white px-4 py-3 shadow-2xl h-20 flex items-center justify-between pl-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 h-full">
                <Image
                    src="/scribble-white.png"
                    alt="Home"
                    width={148}
                    height={12}
                    className="h-3/5 w-auto object-contain"
                />
            </Link>

            {/* Desktop links */}
            <div className="hidden sm:flex gap-6 text-sm sm:text-base">
                <Link href="/irl" className="hover:underline">IRL</Link>
                <Link href="/digi" className="hover:underline">DIGI</Link>
                <Link href="/faq" className="hover:underline">FAQ</Link>
                <a
                    href="https://www.patreon.com/ScribbleWarlock/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    SUBS
                </a>
            </div>

            {/* Mobile hamburger */}
            <button
                className="sm:hidden text-white"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile dropdown */}
            {isOpen && (
                <div className="absolute top-20 right-0 w-40 bg-zinc-900 border-t border-zinc-700 text-sm text-white px-4 py-3 space-y-2 text-center">
                    <Link href="/irl" className="block hover:underline" onClick={() => setIsOpen(false)}>IRL</Link>
                    <Link href="/digi" className="block hover:underline" onClick={() => setIsOpen(false)}>DIGI</Link>
                    <Link href="/faq" className="block hover:underline" onClick={() => setIsOpen(false)}>FAQ</Link>
                    <a
                        href="https://www.patreon.com/ScribbleWarlock/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block hover:underline"
                        onClick={() => setIsOpen(false)}
                    >
                        SUBS
                    </a>
                </div>
            )}
        </nav>
    );
}
