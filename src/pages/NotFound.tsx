import { Seo } from '../components/Seo';
import { Button } from '../components/Button';
import { Icon } from '../components/Icon';

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />
      <section className="py-28 text-center">
        <div className="container-page">
          <span className="w-16 h-16 mx-auto rounded-full bg-mist flex items-center justify-center text-signal">
            <Icon name="radar" size={28} />
          </span>
          <h1 className="mt-6 font-display text-3xl font-bold text-ink">Nothing on our radar here</h1>
          <p className="mt-3 text-slate max-w-sm mx-auto">
            The page you're looking for doesn't exist or may have moved. Let's get you back on track.
          </p>
          <Button to="/" className="mt-8">
            Back to Home
          </Button>
        </div>
      </section>
    </>
  );
}
