import BreadCrumb from "@/app/components/common/BreadCrumb";
import getPageMeta from "@/app/utils/getPageMeta";
import type { Metadata } from "next";
import "./style.css";

export function generateMetadata(): Metadata {
  return getPageMeta("/terms-conditions");
}

const contactEmail = "contact@sofgent.com";

export default function TermsOfService() {
  return (
    <>
      <BreadCrumb
        pageTitle="Terms of Service"
        currentPage="Terms of Service"
        to="/terms-conditions"
      />
      <main className="legal-page" aria-labelledby="terms-title">
        <article className="theme-container legal-document">
          <header className="legal-header">
            <p className="legal-eyebrow">Legal</p>
            <h1 id="terms-title">Terms of Service</h1>
            <p className="legal-updated">Last updated: August 5, 2026</p>
            <p className="legal-summary">
              These terms govern your use of sofgent.com. Client projects and paid
              services are governed by the separate agreement signed for that work.
            </p>
          </header>

          <nav className="legal-toc" aria-label="Terms of service contents">
            <strong>On this page</strong>
            <a href="#using-the-site">Using the site</a>
            <a href="#intellectual-property">Intellectual property</a>
            <a href="#enquiries-and-services">Enquiries and services</a>
            <a href="#disclaimers">Disclaimers</a>
            <a href="#liability">Liability</a>
            <a href="#contact-us">Contact us</a>
          </nav>

          <section>
            <h2>Acceptance of these terms</h2>
            <p>
              By accessing or using this website, you agree to these Terms of Service
              and our Privacy Policy. If you do not agree, please do not use the site.
              You must be legally able to accept these terms on your own behalf or for
              the organisation you represent.
            </p>
          </section>

          <section id="using-the-site">
            <h2>Using the site</h2>
            <p>
              You may use the site for lawful business and informational purposes. You
              must not:
            </p>
            <ul>
              <li>Break any applicable law or infringe another person&apos;s rights.</li>
              <li>Attempt to gain unauthorised access to the site or related systems.</li>
              <li>Introduce malware, overload the service, or interfere with its operation.</li>
              <li>Scrape, copy, or republish substantial site content without permission.</li>
              <li>Use the contact form for spam, fraudulent, or abusive communications.</li>
              <li>Misrepresent your identity or affiliation with another person or entity.</li>
            </ul>
            <p>
              We may restrict access where reasonably necessary to protect the website,
              our users, or our rights.
            </p>
          </section>

          <section id="intellectual-property">
            <h2>Intellectual property</h2>
            <p>
              Unless stated otherwise, SofGent or its licensors own the website and its
              text, graphics, branding, code, and other content. We grant you a limited,
              revocable, non-exclusive right to view and use the site for its intended
              purpose. No ownership rights are transferred to you.
            </p>
            <p>
              Client names, product names, logos, and case-study materials may belong
              to their respective owners and are displayed for identification or with
              permission. Your use of third-party marks is subject to the owner&apos;s terms.
            </p>
          </section>

          <section id="enquiries-and-services">
            <h2>Enquiries, proposals, and client services</h2>
            <p>
              Sending an enquiry does not create a client relationship, confidentiality
              obligation, partnership, or commitment to perform services. A project
              begins only when the relevant parties enter a written agreement.
            </p>
            <p>
              Website descriptions, examples, timelines, and indicative results are
              general information. The scope, fees, ownership, warranties, delivery
              dates, support, data processing, and other terms for paid work will be set
              out in the applicable proposal, statement of work, or services agreement.
              If that agreement conflicts with these website terms, the signed agreement
              controls for the client services it covers.
            </p>
          </section>

          <section>
            <h2>Third-party websites and services</h2>
            <p>
              The site may link to websites or services operated by others. We do not
              control those services and are not responsible for their content,
              availability, security, or practices. A link does not necessarily mean
              that SofGent endorses the third party.
            </p>
          </section>

          <section id="disclaimers">
            <h2>Availability and disclaimers</h2>
            <p>
              We aim to keep the website accurate and available, but it may contain
              errors or be interrupted, changed, or withdrawn. To the extent permitted
              by law, the site is provided on an “as available” basis without warranties
              of any kind, whether express or implied.
            </p>
            <p>
              Website content is general information and is not legal, financial,
              security, or other professional advice. You should obtain advice suited
              to your circumstances before relying on it for an important decision.
            </p>
          </section>

          <section id="liability">
            <h2>Limitation of liability</h2>
            <p>
              Nothing in these terms excludes or limits liability that cannot lawfully
              be excluded. To the maximum extent permitted by law, SofGent will not be
              liable for indirect, incidental, special, consequential, or punitive loss,
              or for loss of profits, revenue, data, business, opportunity, or goodwill,
              arising from use of or inability to use this website.
            </p>
            <p>
              Terms governing liability for client services appear in the applicable
              signed agreement and are not replaced by this section.
            </p>
          </section>

          <section>
            <h2>Changes to the site or these terms</h2>
            <p>
              We may update the website and these terms from time to time. Revised terms
              take effect when posted here, with the updated date shown above. Continued
              use after an update means you accept the revised terms.
            </p>
          </section>

          <section>
            <h2>General terms</h2>
            <p>
              If a provision of these terms is found unenforceable, the remaining
              provisions continue in effect. A delay in enforcing a right is not a
              waiver of that right. These terms, together with the Privacy Policy,
              constitute the agreement governing use of this website.
            </p>
          </section>

          <section id="contact-us" className="legal-contact">
            <h2>Contact us</h2>
            <p>
              Questions about these terms can be sent to{" "}
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
