import { Seo } from '../components/Seo';
import { PageHeader, SectionHeading } from '../components/Section';
import { CtaSection } from '../components/CtaSection';
import { BusinessServiceRow } from '../components/PricingRows';
import { BUSINESS_SERVICES } from '../data/content';

export default function BusinessSolutions() {
  return (
    <>
      <Seo
        title="Business Solutions"
        description="CAC business registration, LLC incorporation, branding, website design, business plans and digital marketing management from SkyTrack ICT."
        path="/business-solutions"
      />
      <PageHeader
        eyebrow="Business Solutions"
        title="From registration to a launch-ready brand"
        description="Everything a founder needs to get properly set up — registration, identity, an online presence, and a plan to grow — handled by one team."
      />

      <section className="py-20 md:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="Our services" title="Choose what you need" />
          <div className="mt-10 space-y-3 max-w-3xl">
            {BUSINESS_SERVICES.map((s) => (
              <BusinessServiceRow key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-mist">
        <div className="container-page">
          <SectionHeading
            eyebrow="Bundle & save"
            title="Need more than one service?"
            description="We regularly bundle registration, branding and a website together for new founders. Contact us for a package quote tailored to your business."
          />
        </div>
      </section>

      <CtaSection />
    </>
  );
}
