'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeaderCanvas } from '@/components/HeaderCanvas';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navigation />
      <HeaderCanvas />
      <div className="page-body">
        <div className="container">
          <main className="slimecube-homepage">
            <section className="panel welcome-section flex items-center">
              <div className="text">
                <h1 className="text-[22px]">Welcome to our Website</h1>
                <p className="mt-5 mb-3 leading-7">
                  SlimeCube Network is a Crossplay Minecraft Java Server that specialized in SlimeFun. That means, Java and Bedrock player can play together. Our Survival mechanism relies heavily on Economy and SlimeFun.
                </p>
                <p>Join us at <strong>play.slimecube.xyz</strong></p>
              </div>
              <div className="links flex items-center">
                <Link href="/vote" className="link link-about">
                  <img src="/images/vote-mascot.webp" alt="" />
                  <strong>Vote our Server</strong>
                  <small>Spread the word!</small>
                </Link>
                <Link href="/store" className="link link-store">
                  <img src="/images/store-mascot.webp" alt="" />
                  <strong>Server Store</strong>
                  <small>Support us!</small>
                </Link>
              </div>
            </section>

            <h2 className="section-title"><span>How to Join</span></h2>
            <div className="panel slimecube-page">
              <div className="panel-inner page-content post">
                <section className="posts-full-content">
                  <div className="post-content">
                    <figure className="image">
                      <img src="/images/mcjava.png" alt="Minecraft Java" />
                    </figure>
                    <center><h2 className="link-title text-[28px]">Minecraft: Java Edition (Windows, Linux, MacOS)</h2></center>
                    <div className="link-tags"></div>
                    <figure className="image">
                      <img src="/images/mcbedrock.png" alt="Minecraft Bedrock" />
                    </figure>
                    <center><h2 className="link-title text-[28px]">Minecraft: Bedrock Edition (Android, iOS, Console)</h2></center>
                    <div className="link-tags"></div>
                  </div>
                </section>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}

function PoweredByCard({ image, name }: { image: string; name: string }) {
  return (
    <div className="powered-by-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '30px', background: 'rgb(58 58 68/var(--tw-bg-opacity))', borderRadius: '8px' }}>
      <img src={image} alt={name} style={{ maxWidth: '200px', maxHeight: '150px', objectFit: 'contain', marginBottom: '15px' }} />
      <h4 style={{ textAlign: 'center', margin: 0, fontWeight: 500, color: '#ebe6e3' }}>{name}</h4>
    </div>
  );
}
