import clsx from 'clsx';
import { FACILITY_PHOTOS } from '../data/facility';
import { SectionHeading } from './Section';

const tiles = [
  { photo: FACILITY_PHOTOS.cbtCubiclesWide, className: 'col-span-2 lg:row-span-2 aspect-[4/3] lg:aspect-auto' },
  { photo: FACILITY_PHOTOS.lockerLounge, className: 'aspect-square lg:aspect-auto' },
  { photo: FACILITY_PHOTOS.waitingArea, className: 'aspect-square lg:aspect-auto' },
  { photo: FACILITY_PHOTOS.buildingExterior, className: 'col-span-2 aspect-[2/1] lg:aspect-auto' },
];

/** Photo grid of the real testing centre facility. */
export function FacilityGallery({
  eyebrow = 'Our facility',
  title = 'Inside the SkyTrack ICT testing centre',
  description = 'Purpose-built for secure, invigilated exams — private CBT cubicles with headsets and webcams, secure lockers for personal items and a comfortable candidate waiting area.',
  className,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
}) {
  return (
    <section className={clsx('py-14 sm:py-20 md:py-24', className)}>
      <div className="container-page">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-[230px_230px] gap-3 sm:gap-4">
          {tiles.map(({ photo, className: tileClass }) => (
            <figure key={photo.title} className={clsx('relative overflow-hidden rounded-2xl bg-mist-2', tileClass)}>
              <img src={photo.src} alt={photo.alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              <figcaption className="absolute inset-x-0 bottom-0 px-4 pt-10 pb-3 bg-gradient-to-t from-ink/80 to-transparent text-white text-sm font-semibold">
                {photo.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
