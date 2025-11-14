import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="text-center">
        <h1 className="text-6xl font-medium text-slate-900">404</h1>
        <p className="mt-4 text-lg text-slate-600">Page not found.</p>
        <Link href="/" className="mt-8 inline-block rounded-lg bg-primary px-8 py-3 text-sm font-medium text-white transition-colors duration-[150ms] hover:bg-[#d11a1f]">Go home</Link>
      </div>
    </main>
  );
}


