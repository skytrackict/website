import { Seo } from '../components/Seo';
import { PageHeader, SectionHeading } from '../components/Section';
import { Icon } from '../components/Icon';
import { CtaSection } from '../components/CtaSection';
import { WorkspacePlanRow } from '../components/PricingRows';
import { WORKSPACE_PLANS } from '../data/content';

const amenities = [
  { icon: 'wifi' as const, label: 'High-speed internet' },
  { icon: 'coffee' as const, label: 'Coffee & refreshments' },
  { icon: 'monitor' as const, label: 'Projector & AV on request' },
  { icon: 'shield-check' as const, label: 'Backup power' },
];

export default function Workspace() {
  const coworking = WORKSPACE_PLANS.filter((p) => p.group === 'coworking');
  const offices = WORKSPACE_PLANS.filter((p) => p.group === 'private-office');
  const conference = WORKSPACE_PLANS.filter((p) => p.group === 'conference');

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

      <section className="py-16 md:py-20">
        <div className="container-page">
          <div className="grid sm:grid-cols-4 gap-6">
            {amenities.map((a) => (
              <div key={a.label} className="flex items-center gap-3 p-4 rounded-xl bg-mist">
                <Icon name={a.icon} size={18} className="text-signal shrink-0" />
                <span className="text-sm font-medium text-ink">{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-page">
          <SectionHeading eyebrow="Co-working desks" title="Daily, weekly & monthly plans" />
          <div className="mt-8 space-y-3 max-w-2xl">
            {coworking.map((p) => (
              <WorkspacePlanRow key={p.id} plan={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-mist">
        <div className="container-page">
          <SectionHeading eyebrow="Private offices" title="Dedicated space for your team" />
          <div className="mt-8 space-y-3 max-w-2xl">
            {offices.map((p) => (
              <WorkspacePlanRow key={p.id} plan={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
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
