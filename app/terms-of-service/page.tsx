'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeaderCanvas } from '@/components/HeaderCanvas';

export default function TermsOfServicePage() {
  return (
    <>
      <Navigation />
      <HeaderCanvas />
      <div className="page-body">
        <div className="container">
          <main className="slimecube-homepage">
            <h1 className="section-title"><span>Terms of Service</span></h1>
            <div className="panel slimecube-page">
              <div className="panel-inner page-content post no-image">
                <section className="post-full-content">
                  <div className="post-content">
                    <p>
                      By using our Services, whether as a guest, as a registered user, or otherwise, you agree that these Terms of Service will govern your relationship with <strong>SlimeCube Network</strong>. These Terms of Service apply to all users of the <strong>SlimeCube Network</strong>. If you do not completely agree to these Terms of Service then you must not use any of our Services.
                    </p>
                    <h4>1. Definitions</h4>
                    <ul>
                      <li>"Account" refers to the Minecraft account used to access the Services.<br /></li>
                      <li>"Services" refers to the Minecraft server provided by SlimeCube Network.<br /></li>
                      <li>"User" or "You" refers to any individual who accesses or uses the Services.<br /></li>
                      <li>"Server" refers to the Minecraft server operated by SlimeCube Network.<br /></li>
                      <li>"Terms of Service" (or "Terms") means the terms and conditions in this agreement.<br /></li>
                      <li>"Player" refers to "You", as the user of the Services.<br /></li>
                      <li>"SlimeCube Network" refers to "Us", "We", or "Our" as the service provider.<br /></li>
                    </ul>
                    <h4>2. Ownership and License</h4>
                    <h5>2.1 Ownership</h5>
                    <p>
                      The Services are owned or licensed by <strong>SlimeCube Network</strong> and are protected by Intellectual Property Rights and other proprietary rights laws. <strong>SlimeCube Network</strong> reserves all rights, titles, and interest in and to the Services, including without limitation all Intellectual Property Rights and other proprietary rights, that are not explicitly granted to you in these Terms. Your permitted use of the Services is limited by the Intellectual Property Rights of <strong>SlimeCube Network</strong>.
                    </p>
                    <h5>2.2 License</h5>
                    <p>
                      <strong>SlimeCube Network</strong> grants you a limited, non-exclusive, non-transferable, revocable license to use the Services for your personal, non-commercial use, subject to these Terms. This license does not grant you any ownership rights in the Services.
                    </p>
                    <h5>2.3 Accounts</h5>
                    <ul>
                      <li>You may access the SlimeCube Network through your Microsoft Account (“Account”) and you agree to be bound by these Terms.<br /></li>
                      <li>You are responsible for maintaining the confidentiality of your account credentials.<br /></li>
                      <li>You acknowledge that if your Account is deleted, you may lose access to any information associated with that Account.<br /></li>
                    </ul>
                    <h4>3. Terms</h4>
                    <p>
                      Unless modified or amended by <strong>SlimeCube Network</strong>, this agreement and its provisions shall remain in effect. Termination of any license granted by <strong>SlimeCube Network</strong> under this agreement does not affect any other provisions of this agreement.
                    </p>
                    <h4>4. Acceptable Use Policy</h4>
                    <p>
                      You are agree to the rules outlined in our <a href="/rules">Rulebook</a>, and you are agree to apply common-sense in our server. If it feels wrong, it really is.
                    </p>
                    <h4>5. Account Access</h4>
                    <p>
                      If you have been previously banned from using any <strong>SlimeCube Network</strong> Services, you may not use our Services.
                    </p>
                    <h4>6. Server Availability and Modifications</h4>
                    <h5>6.1 Service Availability</h5>
                    <p>
                      We strive to maintain server uptime but we cannot guarantee 100% availability. Suppose that the server may be unavailable due to maintenance, technical issues, or other factors beyond our control. We are not liable for losses due to server downtime or technical issues.
                    </p>
                    <h5>6.2 Server Modifications</h5>
                    <p>
                      We reserve the right to modify, update, or discontinue some of the server features. Any plugin updates or changes may affect gameplay mechanics. There will be no compensation will be provided for changes to server features.
                    </p>
                    <h4>7. Privacy and Data Collection</h4>
                    <h5>7.1 Data Collection</h5>
                    <p>
                      Our data collection practices are outlined in our <a href="/privacy-policy">Privacy Policy</a>. By using our services, you consent to data collection as described. We may collect gameplay data to improve server functionality and enforce rules.
                    </p>
                    <h5>7.2 Communication Monitoring</h5>
                    <p>
                      All in-game communications may be logged and monitored. Chat logs may be used for moderation and investigation purposes. Private messages are not guaranteed to be private from our review. We reserve the right to take action based on communication logs if they violate our rules or terms.
                    </p>
                    <h4>8. Limitation of Liability</h4>
                    <h5>8.1 Service Disclaimer</h5>
                    <p>
                      Our services are provided "AS-IS" without warranties of any kind. We do not guarantee error-free or uninterrupted service. We are not liable for any damages arising from the use or inability to use our services, including but not limited to loss of data, virtual items, or any other losses.
                    </p>
                    <h5>8.2 Liability Limits</h5>
                    <p>
                      Our liability is limited to the greatest extent permitted by law. We are not responsible for losses of virtual items, currency, or progress. Players use our services at their own risk.
                    </p>
                    <h4>9. Changes to Terms</h4>
                    <p>
                      We reserve the right to modify these Terms of Service at any time. Changes will be posted on our website and announced in-game when appropriate. Continued use after changes constitutes acceptance of new terms. Players are responsible for reviewing updated terms regularly.
                    </p>
                    <h4>10. Severability</h4>
                    <p>
                      If any provision of these Terms of Service is found to be unenforceable or invalid, the remaining provisions will continue to be valid and enforceable to the fullest extent permitted by law.
                    </p>
                    <br />
                    <hr />
                    <h3>By using our services, you acknowledge that you have read, understood, and agree to these Terms of Service.</h3>
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
