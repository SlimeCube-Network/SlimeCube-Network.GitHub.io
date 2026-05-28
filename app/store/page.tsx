'use client';

import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeaderCanvas } from '@/components/HeaderCanvas';
import { BadgesList } from '@/components/BadgesList';

export default function StorePage() {
  return (
    <>
      <Navigation />
      <HeaderCanvas />
      <div className="page-body">
        <div className="container">
          <main className="slimecube-homepage">
            <h2 className="section-title"><span>Server Store</span></h2>
            <h4 className="App">Special Discount for Eid Al-Adha! Valid Until 10th June 2026.</h4>
            <div className="badge-separator"></div>
                <BadgesList />
            <div className="badge-separator"></div>
            <div className="purchase-section flex items-center justify-center flex-col py-20">
              <h3 style={{ color: '#fff', textAlign: 'center', padding: '1rem' }}>Join our Discord to purchase our badges</h3>
              <Link href="https://dsc.gg/slimecube" className="btn is-orange" target="_blank" rel="noreferrer">
                Our Discord
              </Link>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
