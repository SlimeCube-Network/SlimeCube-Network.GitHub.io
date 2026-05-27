'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePlayerCount } from '@/hooks/usePlayerCount';
import { siteConfig } from '@/config/siteConfig';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { playerCount } = usePlayerCount();

  return (
    <>
      <header id="slimecube-header" className="slimecube-header">
        <section className="top">
          <div className="container flex items-center">
            <nav className="nav-pages flex items-center">
              <div className="navigation-web flex items-center">
                <Link href="/" className="nav-link flex-center">
                  <span>Home</span>
                </Link>
                <Link href="/rules" className="nav-link flex-center">
                  <span>Rules</span>
                </Link>
                <Link href="/vote" className="nav-link flex-center">
                  <span>Vote</span>
                </Link>
                <Link href="/staff" className="nav-link flex-center">
                  <span>Staff</span>
                </Link>
              </div>
              <button
                className="mobile-nav-btn nav-link flex items-center"
                onClick={() => setMobileMenuOpen(true)}
              >
                <i className="mdi mdi-menu mr-2.5 relative text-[28px]"></i>
                <span>Menu</span>
              </button>
            </nav>
            <nav className="nav-redirects flex items-center ml-auto">
              <a href={siteConfig.social.discord} target="_blank" rel="noreferrer" className="mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="25.449" viewBox="0 0 29 22.449">
                  <path
                    d="M24.566,1.88A23.619,23.619,0,0,0,18.583,0a17.558,17.558,0,0,0-.766,1.591,21.968,21.968,0,0,0-6.631,0A17.008,17.008,0,0,0,10.41,0,23.541,23.541,0,0,0,4.423,1.885a25.092,25.092,0,0,0-4.3,16.8,23.921,23.921,0,0,0,7.338,3.76,18.253,18.253,0,0,0,1.572-2.588,15.448,15.448,0,0,1-2.475-1.2c.208-.154.411-.315.607-.48a16.91,16.91,0,0,0,14.671,0c.2.165.4.326.607.48a15.407,15.407,0,0,1-2.479,1.207,18.162,18.162,0,0,0,1.572,2.588,23.872,23.872,0,0,0,7.342-3.762A25.067,25.067,0,0,0,24.566,1.88ZM9.683,15.3a2.815,2.815,0,0,1-2.607-2.966A2.8,2.8,0,0,1,9.683,9.37a2.782,2.782,0,0,1,2.607,2.968A2.8,2.8,0,0,1,9.683,15.3Zm9.635,0a2.815,2.815,0,0,1-2.607-2.966A2.8,2.8,0,0,1,19.317,9.37a2.782,2.782,0,0,1,2.607,2.968A2.8,2.8,0,0,1,19.317,15.3Z"
                    fill="#fff"
                  />
                </svg>
              </a>
              <Link href="/store" className="nav-link btn is-orange">
                <i className="mdi mdi-storefront text-[22px] mr-2.5"></i>
                Store
              </Link>
            </nav>
          </div>
        </section>

        <section className="bottom">
          <div className="container flex items-center">
            <CopyIPButton />
            <div className="header-logo"></div>
            <div className="devider"></div>
            <a href={siteConfig.social.discord} target="_blank" rel="noreferrer" className="header-discord">
              <i className="mdi mdi-discord mr-7 xl:mr-4 relative top-1"></i>
              <div className="text text-left">
                <span className="big">Our Discord</span>
                <div className="small">
                  <span className="discordcount">0</span> Members Online
                </div>
              </div>
            </a>
          </div>
        </section>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div id="mobile-nav" className="mobile-nav active">
          <div className="backdrop" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="nav-collapse">
            <button className="close-menu" onClick={() => setMobileMenuOpen(false)}>
              <i className="mdi mdi-close"></i>
            </button>
            <div className="nav-header">
              <div className="logo"></div>
              <a href={siteConfig.social.discord} target="_blank" rel="noreferrer" className="mr-1">
                <img src="/images/discord-mobile.svg" alt="Discord" />
              </a>
            </div>
            <div className="nav-content">
              <Link href="/" className="nav-link flex-center" onClick={() => setMobileMenuOpen(false)}>
                <span>Home</span>
              </Link>
              <Link href="/rules" className="nav-link flex-center" onClick={() => setMobileMenuOpen(false)}>
                <span>Rules</span>
              </Link>
              <Link href="/vote" className="nav-link flex-center" onClick={() => setMobileMenuOpen(false)}>
                <span>Vote</span>
              </Link>
              <Link href="/staff" className="nav-link flex-center" onClick={() => setMobileMenuOpen(false)}>
                <span>Staff</span>
              </Link>
              <Link href="/store" className="nav-link btn is-orange" onClick={() => setMobileMenuOpen(false)}>
                <i className="mdi mdi-storefront text-[22px] mr-2.5"></i>
                Store
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function CopyIPButton() {
  const { playerCount } = usePlayerCount();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const textToCopy = siteConfig.server.connect.maskIp;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Copy failed:', error);
    }
  };

  return (
    <>
      <button type="button" onClick={handleCopy} className="header-server-ip slimecube-js--copyip">
        <div className="text text-right">
          <span className="big">{siteConfig.server.connect.maskIp}</span>
          <span className="small">
            <span className="slimecube-js--playercount">{playerCount ?? 0}</span> players online
          </span>
        </div>
        <i className="mdi mdi-minecraft ml-7 xl:ml-5 relative top-0.5"></i>
      </button>

      <div
        className={`modal is-slide-up ${copied ? 'is-open' : ''}`}
        id="copy-ip-modal"
        aria-hidden={copied ? 'false' : 'true'}
        onClick={() => setCopied(false)}
      >
        <div className="modal-dialog">
          <div className="modal-box modal-body">
            <div className="header-logo"></div>
            <p className="desc">Nice! IP has been Copied</p>
            <h1 className="ip">{siteConfig.server.connect.maskIp}</h1>
            <div className="btn btn-success">
              <span>See you there!</span>
              <span>Click anywhere to close.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}