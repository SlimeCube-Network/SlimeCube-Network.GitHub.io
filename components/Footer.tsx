import Link from 'next/link';

export function Footer() {
  return (
    <footer className="slimecube-footer">
      <div className="container flex-column">
        <div className="top flex justify-between flex-wrap py-12 xs:flex-col">
          <section className="section section-links flex flex-col">
            <h2>Our Policy and Terms</h2>
            <div className="links flex flex-col flex-wrap gap-3 md:flex-row xs:justify-center">
              <a href="/rules"><i className="mdi mdi-open-in-new"></i>Server Rules</a>
              <a href="/terms-of-service"><i className="mdi mdi-open-in-new"></i>Terms of Service</a>
              <a href="/privacy-policy"><i className="mdi mdi-open-in-new"></i>Privacy Policy</a>
            </div>
          </section>
          <br />
          <section className="section section-store">
            <h2>Vote our Server</h2>
            <p className="mb-4">Voting our server helps with the exposure of our server to even more players. Thank you for voting!</p>
            <Link className="btn is-orange" href="/vote" target="_blank">Vote Link</Link>
          </section>
          <br />
          <section className="section section-store">
            <h2>Visit our Store</h2>
            <p className="mb-4">We offer badges in return of awesome perks! We also offers in-game-currency!</p>
            <Link className="btn is-orange" href="/store" target="_blank">Store Link</Link>
          </section>
        </div>
      </div>

      <div className="bottom bg-[#3A3A44]">
        <div className="container">
          <center>
            <h2 className="text-[#787B7F] text-[13px] mr-auto mb-0">
              Copyright © 2026{' '}
              <span className="text-[#A0A4A8]">SlimeCube Network</span>.<br />
              We are not affiliated with Mojang AB and Microsoft.
            </h2>
          </center>
        </div>
      </div>
    </footer>
  );
}