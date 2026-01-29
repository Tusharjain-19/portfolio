
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[var(--bg-primary)] text-[var(--text-primary)] px-6">
      <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>
      <p className="text-xl text-[var(--text-muted)] mb-8">Page not found</p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-[var(--text-primary)] text-[var(--bg-primary)] font-bold rounded hover:opacity-90 transition-opacity"
      >
        ← Back to Home
      </Link>
    </main>
  );
}
