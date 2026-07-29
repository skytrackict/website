import { Seo } from '../components/Seo';
import { PageHeader, SectionHeading } from '../components/Section';
import { Icon } from '../components/Icon';
import { Button } from '../components/Button';
import { CtaSection } from '../components/CtaSection';
import { WorkspacePlanRow } from '../components/PricingRows';
import { WORKSPACE_PLANS, PRIVATE_OFFICE_RENTAL } from '../data/content';

function naira(n: number) {
  return `₦${n.toLocaleString('en-NG')}`;
}

const amenities = [
  { icon: 'wifi' as const, label: 'High-speed internet' },
  { icon: 'coffee' as const, label: 'Coffee & refreshments' },
  { icon: 'monitor' as const, label: 'Projector & AV on request' },
  { icon: 'shield-check' as const, label: 'Backup power' },
];

export default function Workspace() {
  const coworking = WORKSPACE_PLANS.filter((p) => p.group === 'coworking');
  const conference = WORKSPACE_PLANS.filter((p) => p.group === 'conference');
  const minOfficePrice = Math.min(...PRIVATE_OFFICE_RENTAL.packages.map((p) => p.price));

  return (
    <>
      <Seo
        title="Coworking, Offices & Conference Rooms"
        description="Book hot desks, private offices and conference or training halls at SkyTrack ICT, with flexible daily, weekly and monthly plans."
        path="/workspace"
      />
      <PageHeader
        eyebrow="Workspace"
        title="Coworking, private offices and conference rooms"
        description="Flexible space for focused work and events — booked by the day, week or month, with reliable power and internet included."
      />

      <section className="py-8 sm:py-12 md:py-16">
        <div className="container-page">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
            {amenities.map((a) => (
              <div key={a.label} className="flex items-center gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded-xl bg-mist">
                <Icon name={a.icon} size={18} className="text-signal shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-ink">{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10 md:py-14">
        <div className="container-page">
          <SectionHeading eyebrow="Co-working desks" title="Daily, weekly & monthly plans" />
          <div className="mt-8 space-y-3 max-w-2xl">
            {coworking.map((p) => (
              <WorkspacePlanRow key={p.id} plan={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10 md:py-14 bg-mist">
        <div className="container-page">
          <SectionHeading eyebrow="Private offices" title="Dedicated space for your team" />
          <div className="mt-8 max-w-2xl p-5 sm:p-6 rounded-2xl border border-line bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-5">
            <div>
              <p className="font-bold text-ink">Small, medium & large offices</p>
              <p className="text-sm text-slate mt-1.5">
                Lockable private offices for teams of 1–6, with high-speed internet and backup power included.
              </p>
              <p className="mt-2 font-display font-bold text-ink">From {naira(minOfficePrice)}</p>
            </div>
            <Button to="/workspace/private-offices" className="w-full sm:w-auto justify-center">
              View Prices &amp; Book
            </Button>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10 md:py-14">
        <div className="container-page">
          <SectionHeading eyebrow="Conference & training halls" title="For meetings, workshops and events" />
          <div className="mt-8 space-y-3 max-w-2xl">
            {conference.map((p) => (
              <WorkspacePlanRow key={p.id} plan={p} />
            ))}
          </div>
          <p className="mt-4 text-xs text-slate max-w-2xl">
            Extras: Projector ₦5,000 · Sound system ₦5,000. Ask about custom or corporate pricing for recurring bookings.
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
