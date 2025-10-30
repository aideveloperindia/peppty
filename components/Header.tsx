import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? 'bg-white/90 backdrop-blur shadow-subtle py-2' : 'bg-transparent py-4'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 flex items-center justify-between" aria-label="Primary">
        <Link href="/" className="flex items-center gap-2" aria-label="Peppty Home">
          <img src="/peppty_logo.jfif" alt="Peppty logo" className="h-8 w-auto" />
          <span className="sr-only">Peppty Technologies</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/products" className="hover:text-primary">Products</Link>
          <Link href="/about" className="hover:text-primary">About</Link>
          <Link href="/founders" className="hover:text-primary">Founders & Team</Link>
          <Link href="/investors" className="hover:text-primary">Investors</Link>
          <Link href="/careers" className="hover:text-primary">Careers</Link>
          <Link href="/press" className="hover:text-primary">Press</Link>
          <Link href="/contact" className="hover:text-primary">Contact</Link>
          <Link
            href="/contact"
            className="ml-2 inline-flex items-center rounded-md bg-primary px-4 py-2 font-medium text-white shadow hover:bg-primaryHover focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Request Demo
          </Link>
        </div>
        <div className="md:hidden">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white shadow hover:bg-primaryHover"
          >
            Request Demo
          </Link>
        </div>
      </nav>
    </header>
  );
}


