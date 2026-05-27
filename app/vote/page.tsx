'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeaderCanvas } from '@/components/HeaderCanvas';

const VOTE_LINKS = [
  'https://minecraft-mp.com/server/357383/vote/',
  'https://minecraftpocket-servers.com/server/133205/vote/',
  'https://minecraft-server-list.com/server/507876/vote/',
  'https://minecraftservers.org/vote/667498',
  'https://www.minerank.com/slimecube/vote',
];

export default function VotePage() {
  return (
    <>
      <Navigation />
      <HeaderCanvas />
      <div className="page-body">
        <div className="container">
          <main className="slimecube-homepage">
            <div className="page-body">
              <div className="container">
                <div className="slimecube-vote-page">
                  <div className="panel info">
                    <section className="section-intro">
                      <h1 className="panel-title">Voting Portal</h1>
                      <p>
                        Your daily votes are the lifeblood of SlimeCube Network! Every single vote you cast helps our
                        server climb the rankings on server lists, making us more visible to potential new players who
                        are searching for an amazing Minecraft experience. When you vote, you're not just supporting us
                        – you're helping to build a larger, more vibrant community for everyone to enjoy.
                      </p>
                    </section>
                    <section className="section-voteshop">
                      <div className="panel vote-links flex flex-col">
                        <h1 className="panel-title">Vote Now!</h1>
                        <div className="list">
                          {VOTE_LINKS.map((link, index) => (
                            <a key={index} className="link" href={link} target="_blank" rel="noreferrer">
                              <i className="mdi mdi-vote"></i>
                              <span>Vote Link</span>
                              <i className="mdi mdi-menu-right"></i>
                            </a>
                          ))}
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
