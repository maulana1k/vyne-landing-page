import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 lg:px-12 mix-blend-difference text-white pointer-events-auto">
      <div className="text-xl font-medium tracking-tight font-sans">
        <Link href="/">vyne_protocol™</Link>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
        <Link href="/ecosystem" className="cursor-hover hover:opacity-70 transition-opacity">Ecosystem</Link>
        <Link href="/governance" className="cursor-hover hover:opacity-70 transition-opacity">Governance</Link>
        <Link href="/developers" className="cursor-hover hover:opacity-70 transition-opacity">Developers</Link>
        <Link href="/community" className="cursor-hover hover:opacity-70 transition-opacity">Community</Link>
      </div>
      <div className="md:hidden">
        <button className="text-sm font-medium cursor-hover">Terminal</button>
      </div>
    </nav>
  );
}
