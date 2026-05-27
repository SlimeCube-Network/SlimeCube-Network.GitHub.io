'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      <Navigation />
      <div className="page-body">
        <div className="container">
          <main className="slimecube-homepage flex items-center justify-center flex-col py-20">
            <h1 className="text-[72px] font-bold mb-4">500</h1>
            <h2 className="text-[32px] mb-4">Internal Server Error</h2>
            <p className="mb-8 text-center">Something went wrong. Please try again later.</p>
            <button onClick={() => reset()} className="btn is-orange">Try again</button>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
