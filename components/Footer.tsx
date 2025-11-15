import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <img src="/peppty_logo.jfif" alt="Peppty logo" className="h-8 w-auto" />
            <p className="mt-6 max-w-sm text-base text-slate-600">
              Peppty Technologies builds privacy-first consumer internet platforms for global partners.
            </p>
          </div>
          <div>
            <div className="text-sm font-medium text-slate-900">Company</div>
            <ul className="mt-4 space-y-3">
              <li><Link href="/about" className="text-base text-slate-600 transition-colors duration-[150ms] hover:text-primary">About</Link></li>
              <li><Link href="/founders" className="text-base text-slate-600 transition-colors duration-[150ms] hover:text-primary">Founders & Team</Link></li>
              <li><Link href="/careers" className="text-base text-slate-600 transition-colors duration-[150ms] hover:text-primary">Careers</Link></li>
              <li><Link href="/press" className="text-base text-slate-600 transition-colors duration-[150ms] hover:text-primary">Press</Link></li>
              <li><Link href="/contact" className="text-base text-slate-600 transition-colors duration-[150ms] hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-medium text-slate-900">Legal</div>
            <ul className="mt-4 space-y-3">
              <li><Link href="/legal/privacy" className="text-base text-slate-600 transition-colors duration-[150ms] hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/legal/ip" className="text-base text-slate-600 transition-colors duration-[150ms] hover:text-primary">IP / Patents</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-slate-100 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Peppty Technologies Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


