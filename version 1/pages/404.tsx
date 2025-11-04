import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-semibold">404</h1>
        <p className="text-muted mt-2">Page not found.</p>
        <Link href="/" className="mt-6 inline-block rounded-md bg-primary px-5 py-3 text-white font-medium hover:bg-primaryHover">Go home</Link>
      </div>
    </main>
  );
}


