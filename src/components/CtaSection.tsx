import { Button } from './Button';

export function CtaSection() {
  return (
    <section className="bg-ink relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(46,107,255,0.5), transparent 45%), radial-gradient(circle at 85% 70%, rgba(255,176,32,0.35), transparent 40%)',
        }}
      />
      <div className="container-page relative py-16 md:py-20 text-center">
        <h2 className="text-white text-[1.8rem] md:text-[2.3rem] font-bold max-w-2xl mx-auto leading-tight">
          Ready to get started with SkyTrack ICT?
        </h2>
        <p className="mt-4 text-white/65 max-w-lg mx-auto">
          Book an exam slot, enrol in a course, reserve a desk, or talk to us about your business needs — all in one place.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button to="/enroll" size="lg">
            Enrol / Book Now
          </Button>
          <Button to="/contact" size="lg" variant="outline-light">
            Talk to Us
          </Button>
        </div>
      </div>
    </section>
  );
}
