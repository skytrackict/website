import { LegalPage } from '../components/LegalPage';
import { SITE } from '../data/content';

export default function Terms() {
  return (
    <LegalPage
      title="Terms & Conditions"
      path="/terms"
      description="The terms that govern your use of SkyTrack ICT's services, bookings and payments."
    >
      <p>Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

      <h2>1. Acceptance of terms</h2>
      <p>
        By booking, enrolling in, or paying for any service on this website, you agree to these Terms &amp;
        Conditions and to {SITE.legalName}'s applicable policies for that service.
      </p>

      <h2>2. Bookings and enrolment</h2>
      <p>
        Bookings for training programmes, exam slots, workspace and business services are confirmed once payment is
        successfully processed through Paystack. Availability is not guaranteed until payment is confirmed.
      </p>

      <h2>3. Payments</h2>
      <p>
        All payments are processed by Paystack, an independent, PCI-DSS Level 1 certified payment processor.
        {' '}{SITE.legalName} does not store your card or bank details.
      </p>

      <h2>4. Pricing</h2>
      <p>
        Prices shown are indicative and may vary based on final scope, package or exam-body fees, which will be
        confirmed with you before or at the point of payment where applicable.
      </p>

      <h2>5. Conduct at our facilities</h2>
      <p>
        Candidates and clients using our testing centre, workspace or conference facilities are expected to follow
        posted rules and instructions from staff, including exam-integrity requirements.
      </p>

      <h2>6. Limitation of liability</h2>
      <p>
        {SITE.legalName} is not liable for outcomes of third-party certification exams, scholarship decisions, or
        recruitment or hiring outcomes, which are determined solely by the relevant exam body, institution or
        employer.
      </p>

      <h2>7. Changes to these terms</h2>
      <p>We may update these terms from time to time. Continued use of our services after changes take effect constitutes acceptance of the updated terms.</p>

      <h2>8. Contact</h2>
      <p>Questions about these terms can be sent to {SITE.email}.</p>
    </LegalPage>
  );
}
