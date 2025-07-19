import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50
                        bg-black text-white px-4 py-3
                        flex items-center justify-between shadow-2xl h-20 pl-8">
            <Link href="/" className="flex items-center gap-2 h-full">
                <Image
                    src="/scribble-white.png"
                    alt="Home"
                    width={148}
                    height={12}
                    className="h-3/5 w-auto object-contain"
                />
            </Link>
            <div className="flex gap-6 text-sm sm:text-base">
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
        </nav>
    )
}
