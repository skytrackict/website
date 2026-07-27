import { LegalPage } from '../components/LegalPage';
import { SITE } from '../data/content';

export default function RefundPolicy() {
  return (
    <LegalPage
      title="Refund Policy"
      path="/refund-policy"
      description="Our approach to cancellations and refunds across training, testing, workspace and business services."
    >
      <p>Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

      <h2>1. General policy</h2>
      <p>
        Refund requests are considered on a case-by-case basis and are generally only available within 48 hours of
        booking and before the service has been rendered or the exam slot reserved with the certification body.
      </p>

      <h2>2. Training programmes</h2>
      <p>
        If you cancel before your first class, a partial refund (less an administrative fee) may be issued. No
        refund is available after the second class of a programme.
      </p>

      <h2>3. Testing centre bookings</h2>
      <p>
        Exam slot deposits are largely non-refundable once a certification body has confirmed your booking, as
        fees are typically passed on to the exam body. Rescheduling may be possible depending on the exam body's
        own policy.
      </p>

      <h2>4. Workspace & conference bookings</h2>
      <p>
        Coworking and conference room bookings cancelled at least 24 hours in advance are eligible for a full
        refund. Later cancellations may be subject to a partial charge.
      </p>

      <h2>5. Business solutions</h2>
      <p>
        Once work has commenced on a registration, branding or website project, fees already incurred are
        non-refundable. Unused portions of a package may be refunded at our discretion.
      </p>

      <h2>6. How to request a refund</h2>
      <p>
        Email {SITE.email} with your payment reference and reason for the request. We aim to respond within two
        business days.
      </p>
    </LegalPage>
  );
}
