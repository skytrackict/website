import { Link } from 'react-router-dom';
import { Icon } from './Icon';
import { DIVISIONS, SPECIALIST_SERVICES, SITE } from '../data/content';
import logo from '../assets/logo.png';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-white">
      <div className="container-page py-12 sm:py-16 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr] lg:gap-12">
        <div className="col-span-2 lg:col-span-1">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="" width={34} height={34} className="rounded-md" />
            <span className="font-display font-bold text-lg">
              SkyTrack<span className="text-signal-light"> ICT</span>
            </span>
          </Link>
          <p className="mt-4 text-sm text-white/60 max-w-xs leading-relaxed">
            Testing, training and technology solutions built for accuracy — from certification exams to
            software, workspace and business support.
          </p>
          <div className="flex items-center gap-3 mt-6">
            {[
              { name: 'twitter', href: SITE.social.twitter },
              { name: 'facebook', href: SITE.social.facebook },
              { name: 'instagram', href: SITE.social.instagram },
              { name: 'linkedin', href: SITE.social.linkedin },
            ].map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-ink hover:bg-amber hover:border-amber transition-colors"
              >
                <Icon name={s.name as import('./Icon').IconName} size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">Core Divisions</p>
          <ul className="space-y-2.5 text-sm text-white/70">
            {DIVISIONS.map((d) => (
              <li key={d.slug}>
                <Link to={d.path} className="hover:text-white transition-colors">
                  {d.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">Specialist Services</p>
          <ul className="space-y-2.5 text-sm text-white/70">
            {SPECIALIST_SERVICES.map((d) => (
              <li key={d.slug}>
                <Link to={d.path} className="hover:text-white transition-colors">
                  {d.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/pricing" className="hover:text-white transition-colors">
                Full Price List
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">Get in Touch</p>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2.5">
              <Icon name="map-pin" size={16} className="mt-0.5 shrink-0 text-signal-light" />
              {SITE.address}
            </li>
            <li className="flex items-center gap-2.5">
              <Icon name="phone" size={16} className="shrink-0 text-signal-light" />
              <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="hover:text-white">
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Icon name="mail" size={16} className="shrink-0 text-signal-light" />
              <a href={`mailto:${SITE.email}`} className="hover:text-white">
                {SITE.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Icon name="clock" size={16} className="shrink-0 text-signal-light" />
              {SITE.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {year} {SITE.legalName}. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link to="/terms" className="hover:text-white">Terms &amp; Conditions</Link>
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/refund-policy" className="hover:text-white">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
