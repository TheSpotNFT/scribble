import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    return (
        <nav className="bg-black text-white px-4 py-3 flex items-center justify-between shadow-md h-20 pl-8">
            <Link href="/" className="flex items-center gap-2">
                <Image
                    src="/scribble-white.png"
                    alt="Home"
                    width={128}
                    height={72}
                    className="h-full w-auto object-contain"
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
