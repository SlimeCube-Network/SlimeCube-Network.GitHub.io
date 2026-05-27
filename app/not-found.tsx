import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Navigation />
      <div className="page-body">
        <div className="container">
          <main className="slimecube-homepage flex items-center justify-center flex-col py-20">
            <h1 className="text-[72px] font-bold mb-4">404</h1>
            <h2 className="text-[32px] mb-4">Page Not Found</h2>
            <p className="mb-8 text-center">Sorry, we couldn't find the page you're looking for.</p>
            <Link href="/" className="btn is-orange">Return Home</Link>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
