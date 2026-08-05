import BreadCrumb from "@/app/components/common/BreadCrumb";
import getPageMeta from "@/app/utils/getPageMeta";
import type { Metadata } from "next";
import "./style.css";

export function generateMetadata(): Metadata {
  return getPageMeta("/privacy-policy");
}

const contactEmail = "contact@sofgent.com";

export default function PrivacyPolicy() {
  return (
    <>
      <BreadCrumb
        pageTitle="Privacy Policy"
        currentPage="Privacy Policy"
        to="/privacy-policy"
      />
      <main className="legal-page" aria-labelledby="privacy-policy-title">
        <article className="theme-container legal-document">
          <header className="legal-header">
            <p className="legal-eyebrow">Legal</p>
            <h1 id="privacy-policy-title">Privacy Policy</h1>
            <p className="legal-updated">Last updated: August 5, 2026</p>
            <p className="legal-summary">
              This policy explains what personal information SofGent collects through
              sofgent.com, why we use it, and the choices available to you.
            </p>
          </header>

          <nav className="legal-toc" aria-label="Privacy policy contents">
            <strong>On this page</strong>
            <a href="#information-we-collect">Information we collect</a>
            <a href="#how-we-use-information">How we use information</a>
            <a href="#cookies">Cookies and analytics</a>
            <a href="#sharing">Sharing and transfers</a>
            <a href="#your-rights">Your rights</a>
            <a href="#contact-us">Contact us</a>
          </nav>

          <section>
            <h2>Who we are</h2>
            <p>
              SofGent is an AI product and software development studio. For personal
              information collected through this website, SofGent is the organisation
              responsible for deciding how and why that information is used.
            </p>
          </section>

          <section id="information-we-collect">
            <h2>Information we collect</h2>
            <h3>Information you provide</h3>
            <p>
              When you submit our contact form, email us, or speak with us about a
              project, we may collect your name, work email address, phone number,
              organisation, project requirements, and the contents of your message.
              Please do not send confidential, financial, health, or other sensitive
              information through the website contact form.
            </p>
            <h3>Information collected automatically</h3>
            <p>
              Our website and hosting providers may process technical information such
              as your IP address, browser and device type, requested pages, timestamps,
              referrer information, and security or diagnostic logs. We use this data
              to deliver, secure, troubleshoot, and understand the website.
            </p>
          </section>

          <section id="how-we-use-information">
            <h2>How and why we use information</h2>
            <ul>
              <li>To respond to enquiries and discuss potential projects.</li>
              <li>To provide requested services and manage client relationships.</li>
              <li>To operate, secure, diagnose, and improve the website.</li>
              <li>To prevent spam, abuse, fraud, and other harmful activity.</li>
              <li>To comply with legal obligations and protect our legal rights.</li>
            </ul>
            <p>
              Where data-protection law requires a lawful basis, we rely on steps taken
              at your request before entering a contract, performance of a contract,
              our legitimate interests in operating and securing our business, consent
              for optional analytics, or compliance with a legal obligation, depending
              on the processing involved.
            </p>
            <p>
              We do not sell personal information. We do not use website enquiries for
              automated decision-making that produces legal or similarly significant
              effects.
            </p>
          </section>

          <section id="cookies">
            <h2>Cookies and analytics</h2>
            <p>
              We store your cookie choice in your browser so the site can remember it.
              If you select <strong>Accept all</strong>, Google Tag Manager and analytics
              tools configured through it may use cookies or similar technologies to
              help us understand site usage. Analytics storage remains denied when you
              select <strong>Essential only</strong>.
            </p>
            <p>
              You can clear the <code>sg-cookie-consent</code> value from your browser&apos;s
              local storage to make the consent prompt appear again. Your browser also
              lets you delete or block cookies, although some website features may not
              work as expected.
            </p>
          </section>

          <section id="sharing">
            <h2>Sharing, service providers, and international transfers</h2>
            <p>
              We disclose personal information only where reasonably necessary to run
              the website and respond to you. Recipients may include website hosting
              and infrastructure providers, email and communications providers,
              analytics providers where you consent, professional advisers, and public
              authorities where disclosure is legally required.
            </p>
            <p>
              Some providers may process information outside your country. Where
              required, we use appropriate contractual or other safeguards for these
              transfers. Third-party websites linked from our site operate under their
              own privacy policies.
            </p>
          </section>

          <section>
            <h2>Retention and security</h2>
            <p>
              We keep personal information only for as long as needed for the purposes
              described above, including to respond to enquiries, maintain necessary
              business records, resolve disputes, and meet legal requirements. The
              period varies according to the nature of the information and our
              relationship with you.
            </p>
            <p>
              We use reasonable administrative, technical, and organisational measures
              designed to protect personal information. No internet transmission or
              storage system can be guaranteed to be completely secure.
            </p>
          </section>

          <section id="your-rights">
            <h2>Your privacy rights</h2>
            <p>
              Depending on where you live, you may have rights to request access to,
              correction of, deletion of, restriction of, or a portable copy of your
              personal information, and to object to certain processing or withdraw
              consent. Withdrawing consent does not affect processing already carried
              out lawfully.
            </p>
            <p>
              To make a request, email us using the address below. We may need to verify
              your identity before completing it. You may also have the right to lodge
              a complaint with the data-protection authority where you live or work.
            </p>
          </section>

          <section>
            <h2>Children</h2>
            <p>
              This business website is not directed to children, and we do not
              knowingly collect personal information from children through it. If you
              believe a child has provided us with personal information, please contact
              us so we can review and delete it where appropriate.
            </p>
          </section>

          <section>
            <h2>Changes to this policy</h2>
            <p>
              We may update this policy to reflect changes to our website, providers,
              or legal obligations. We will publish the revised policy here and update
              the date at the top of the page.
            </p>
          </section>

          <section id="contact-us" className="legal-contact">
            <h2>Contact us</h2>
            <p>
              For privacy questions or requests, email{" "}
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
