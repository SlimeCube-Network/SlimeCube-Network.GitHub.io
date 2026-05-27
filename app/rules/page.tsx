'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeaderCanvas } from '@/components/HeaderCanvas';

export default function RulesPage() {
  return (
    <>
      <Navigation />
      <HeaderCanvas />
      <div className="page-body">
        <div className="container">
          <main className="slimecube-homepage">
            <h1 className="section-title"><span>Rulebook of the Server</span></h1>
            <div className="panel slimecube-page">
              <div className="panel-inner page-content post no-image">
                <section className="post-full-content">
                  <div className="post-content">
                    <p>
                      <strong>SlimeCube Network</strong> is intended to be a fun, safe, and friendly environment for all players to enjoy. As such, we have a list of rules we expect all players to follow with no exceptions. By choosing to play on the <strong>SlimeCube Network</strong>, you agree to follow all rules listed within the rulebook and policies.
                    </p>
                    <h4>You'll get a WARNING inside of the server or in the Discord server if:</h4>
                    <ul>
                      <li>Disrespecting the Owner, Admins, Staff, and Helpers.</li>
                      <li>Being toxic, using offensive language or swearing.</li>
                      <li>Inappropriate Nicknames, Gamertags, or Usernames.</li>
                      <li>Scamming the SlimeCube team for personal gain.</li>
                      <li>Showing negative behavior towards other players or the community(*).</li>
                      <li>Disrespecting other players.</li>
                      <li>Not cooperating during rule enforcement or investigations.</li>
                      <li>Using inappropriate skins.</li>
                      <li>TP Spam.</li>
                    </ul>
                    <h4>You'll get a MUTE and TIMEOUT from our server if:</h4>
                    <ul>
                      <li>Mentioning other Servers or Realms!</li>
                      <li>Criticizing without offering solutions or constructive feedback.</li>
                      <li>Sending Spam or Repeated chat messages.</li>
                      <li>Asking the Owner or Staff for Items/Money.</li>
                      <li>Disrespecting others.</li>
                      <li>Racism/Religious offense/Bigotry.</li>
                      <li>Doxxing without the player's consent.</li>
                      <li>Sending unverified or suspicious links.</li>
                    </ul>
                    <h4>You'll get a IP BAN and DISCORD BAN from our server if:</h4>
                    <ul>
                      <li>Any promotion without Owner's permission.</li>
                      <li>X-Ray Mining</li>
                      <li>Ignoring the existing rules</li>
                      <li>DDoS/Hacking</li>
                      <li>Using modded or hacked clients</li>
                      <li>Impersonating others or Negative Impersonation of others</li>
                      <li>Obtaining illegal items</li>
                      <li>Intentionally fake reporting players</li>
                      <li>Insulting the SlimeCube Server</li>
                      <li>Sharing NSFW content</li>
                      <li>Commiting Fraud or Scamming</li>
                      <li>Rioting and griefing other players(**)</li>
                      <li>Utilizing bugs or glitches for your own benefit</li>
                      <li>Duplicating slimefun and/or vanilla items</li>
                      <li>Spy Console Log</li>
                      <li>Free cam</li>
                    </ul>
                    <h4>Players proven to violate the rules but not banned Will receive a Cheater Badge as a warning!</h4>
                    <h4>Notes:</h4>
                    <ul>
                      <li>(*) May Result in a Mute.</li>
                      <li>(**) Only applies within 10 blocks of claim land; if harassment occurs outside the player's base, this rule does not apply.</li>
                    </ul>
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
