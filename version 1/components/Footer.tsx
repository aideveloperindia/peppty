import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-24 border-t bg-surface/60">
      <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-muted">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="col-span-2 md:col-span-1">
            <img src="/logo-placeholder.svg" alt="Peppty logo" className="h-8 w-auto mb-3" />
            <p className="max-w-xs">Peppty Technologies — building trusted consumer internet experiences.</p>
          </div>
          <div>
            <div className="font-medium text-text mb-2">Company</div>
            <ul className="space-y-1">
              <li><Link href="/about" className="hover:text-primary">About</Link></li>
              <li><Link href="/founders" className="hover:text-primary">Founders & Team</Link></li>
              <li><Link href="/careers" className="hover:text-primary">Careers</Link></li>
              <li><Link href="/press" className="hover:text-primary">Press</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-medium text-text mb-2">Products</div>
            <ul className="space-y-1">
              <li><Link href="/products/social" className="hover:text-primary">Social</Link></li>
              <li><Link href="/products/chat" className="hover:text-primary">Chat</Link></li>
              <li><Link href="/products/stories" className="hover:text-primary">Stories</Link></li>
              <li><Link href="/products/shops" className="hover:text-primary">Shops</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-medium text-text mb-2">Legal</div>
            <ul className="space-y-1">
              <li><Link href="/legal/privacy" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/legal/terms" className="hover:text-primary">Terms of Use</Link></li>
              <li><Link href="/legal/ip" className="hover:text-primary">IP / Patents</Link></li>
              <li><Link href="/sitemap.xml" className="hover:text-primary">Sitemap</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Peppty Technologies. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:text-primary">Contact</Link>
            <a href="https://calendly.com/" target="_blank" rel="noreferrer" className="hover:text-primary">Calendly</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


