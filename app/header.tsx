import Link from "next/link";
import ThemeToggle from "../componets/modeToggle";


export default function Header(){
    return (
        <header className="fixed p-5 w-full flex justify-between items-center"> {/* padding: 20, borderBottom */}
            <div className="font-bold text-2xl logo">
                <Link href="/">:LEE</Link>
            </div>
            <nav className="flex gap-5">
                <Link href="/work" className="hover:text-blue-500 transition">Work</Link>
                <Link href="/about" className="hover:text-blue-500 transition">About</Link>
                <Link href="/blog" className="hover:text-blue-500 transition">Blog</Link>
            </nav>
            <ThemeToggle />
        </header>
    );
}