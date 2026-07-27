import { LegalPage } from '../components/LegalPage';
import { SITE } from '../data/content';

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy"
      description="How SkyTrack ICT collects, uses and protects your personal information."
    >
      <p>Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

      <h2>1. Information we collect</h2>
      <p>
        When you enrol in a course, book a service, or contact us, we collect your name, email address, phone
        number and details about the service requested. We do not collect or store card details — these are
        handled directly by Paystack.
      </p>

      <h2>2. How we use your information</h2>
      <p>
        We use your information to confirm bookings, deliver the services you've requested, respond to enquiries,
        and — where you've agreed — send updates about new test dates, training programmes and relevant offers.
      </p>

      <h2>3. Where your information is stored</h2>
      <p>
        Enrolment and contact information is stored in Contentful, our content management platform, and used
        internally by our team to fulfil your booking or request.
      </p>

      <h2>4. Background check data</h2>
      <p>
        Information collected for background-check services is used solely for the purpose of the requested
        verification and shared only with the relevant candidate's consent, or as required by the requesting
        organisation.
      </p>

      <h2>5. Your rights</h2>
      <p>
        You may request access to, correction of, or deletion of your personal information at any time by emailing
        {' '}{SITE.email}.
      </p>

      <h2>6. Contact</h2>
      <p>Questions about this policy can be sent to {SITE.email}.</p>
    </LegalPage>
  );
}
