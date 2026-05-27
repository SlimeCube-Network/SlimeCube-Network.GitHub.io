'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeaderCanvas } from '@/components/HeaderCanvas';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />
      <HeaderCanvas />
      <div className="page-body">
        <div className="container">
          <main className="slimecube-homepage">
            <h1 className="section-title"><span>Privacy Policy</span></h1>
            <div className="panel slimecube-page">
              <div className="panel-inner page-content post no-image">
                <section className="post-full-content">
                  <div className="post-content">
                    <p>
                      This privacy policy (“Policy”) describes the data practices of <strong>SlimeCube Network</strong>, covering its services under its control, including this website and the server. By using our services, such as playing on our server, you are consenting to this Policy and the processing of your data in the manner provided in this Policy. If you do not agree with these terms, please do not use the Services. This Privacy Policy was last updated on 1st May 2026.
                    </p>
                    <h4>1. Information Collection</h4>
                    <ul>
                      <li>We only collect the necessary information required to provide our Minecraft server services and player support.<br /></li>
                      <li>We may collect device-identifiable information. From these platforms, we may also receive other information, such as your IP address, user agent, timestamps, and more.<br /></li>
                      <li>Our services also collect gameplay data such as your in-game actions, builds, and progress to enhance server functionality and maintain fair play.<br /></li>
                    </ul>
                    <h4>2. In-Game Data Collection</h4>
                    <ul>
                      <li>We collect gameplay information including but not limited to: player movements, chat messages, commands used, and interactions with other players.<br /></li>
                      <li>This data is used for server administration, anti-cheat measures, moderation purposes, and improving gameplay experience.<br /></li>
                      <li>Chat logs may be monitored and stored for moderation and rule enforcement purposes.<br /></li>
                    </ul>
                    <h4>3. Third-Party Services</h4>
                    <ul>
                      <li>We do not sell, trade, or distribute your personal information to any third-party services or individuals.<br /></li>
                      <li>However, we may use trusted third-party services for server hosting, anti-cheat protection, and player verification, which have their own privacy policies.<br /></li>
                      <li>Some plugins or mods may collect additional data as outlined in their respective privacy policies.<br /></li>
                    </ul>
                    <h4>4. Player Communication & Moderation</h4>
                    <ul>
                      <li>All in-game chat, private messages, and voice communications may be logged and monitored for moderation purposes.<br /></li>
                      <li>We reserve the right to review communications to enforce server rules, investigate violations, and maintain a safe gaming environment.<br /></li>
                      <li>Inappropriate content or rule violations may result in disciplinary action including warnings, mutes, or bans.<br /></li>
                    </ul>
                    <h4>5. Data Retention</h4>
                    <ul>
                      <li>All in-game chat, private messages, and voice communications may be logged and monitored for moderation purposes.<br /></li>
                      <li>We reserve the right to review communications to enforce server rules, investigate violations, and maintain a safe gaming environment.<br /></li>
                      <li>Inappropriate content or rule violations may result in disciplinary action including warnings, mutes, or bans.<br /></li>
                    </ul>
                    <h4>6. Age Requirements & Parental Consent</h4>
                    <ul>
                      <li>Our Minecraft server is designed to be family-friendly, and we welcome players of all ages.<br /></li>
                      <li>Players under 13 should have parental supervision and consent before joining our server.<br /></li>
                      <li>Parents or guardians may contact us to request information about their child's account or request data deletion.<br /></li>
                    </ul>
                    <h4>7. Policy Updates</h4>
                    <ul>
                      <li>We may update this Privacy Policy from time to time to reflect changes in our services or legal requirements.<br /></li>
                      <li>Any changes will be posted on our website and announced on our server when appropriate.<br /></li>
                      <li>We encourage players to review this policy periodically to stay informed about how we protect their information.<br /></li>
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
