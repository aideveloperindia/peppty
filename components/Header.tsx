import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const navLinks = [
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/investors', label: 'Investors' },
  { href: '/founders', label: 'Founders & Team' },
  { href: '/press', label: 'Press' },
  { href: '/legal/ip', label: 'IP / Patents' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => setMobileMenuOpen(false);
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Primary">
        <Link href="/" className="flex items-center gap-3" aria-label="Peppty Home">
          <img src="/peppty_logo.jfif" alt="Peppty logo" className="h-8 w-auto" />
          <span className="text-sm font-medium text-slate-900">Peppty Technologies</span>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors duration-[150ms] hover:text-primary focus-visible:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-slate-700 transition-colors duration-[150ms] hover:text-primary focus-visible:text-primary md:hidden"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </div>
        </button>
      </nav>

      {mobileMenuOpen && (
        <div id="mobile-nav" className="border-t border-slate-100 bg-white md:hidden">
          <ul className="space-y-1 px-6 py-4 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-2 transition-colors duration-[150ms] hover:text-primary focus-visible:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
