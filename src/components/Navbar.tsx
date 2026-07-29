import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Icon } from './Icon';
import { Button } from './Button';
import { DIVISIONS, SPECIALIST_SERVICES, SITE } from '../data/content';
import logo from '../assets/logo.png';

const primaryLinks = [
  { label: 'About', to: '/about' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Contact', to: '/contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const allServices = [...DIVISIONS, ...SPECIALIST_SERVICES];

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        scrolled ? 'bg-white/95 backdrop-blur border-b border-line shadow-[0_1px_0_rgba(10,22,40,0.04)]' : 'bg-white/80 backdrop-blur'
      }`}
    >
      <div className="container-page flex items-center justify-between h-16 sm:h-[72px]">
        <Link to="/" className="flex items-center gap-2 sm:gap-2.5 shrink-0 min-w-0" aria-label="SkyTrack ICT home">
          <img src={logo} alt="" width={32} height={32} className="rounded-md w-8 h-8 sm:w-9 sm:h-9 shrink-0" />
          <span className="font-display font-bold text-base sm:text-[1.15rem] leading-tight text-ink truncate">
            SkyTrack<span className="text-signal"> ICT</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1 px-4 py-2 rounded-full text-[0.95rem] font-medium text-ink hover:bg-mist transition-colors"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
            >
              Services
              <Icon name="chevron-down" size={16} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[640px]">
                <div className="bg-white rounded-2xl shadow-card-hover border border-line p-4 grid grid-cols-2 gap-1">
                  {allServices.map((d) => (
                    <Link
                      key={d.slug}
                      to={d.path}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-mist transition-colors"
                    >
                      <span className="mt-0.5 shrink-0 w-9 h-9 rounded-lg bg-signal/10 text-signal flex items-center justify-center">
                        <Icon name={d.icon as import('./Icon').IconName} size={18} />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-ink">{d.name}</span>
                        <span className="block text-xs text-slate mt-0.5">{d.tagline}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {primaryLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-[0.95rem] font-medium transition-colors ${
                  isActive ? 'text-signal bg-signal/10' : 'text-ink hover:bg-mist'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${SITE.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2 text-sm font-medium text-slate hover:text-ink transition-colors"
          >
            <Icon name="phone" size={16} />
            {SITE.phone}
          </a>
          <Button to="/enroll" size="sm">
            Enrol / Book Now
          </Button>
        </div>

        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-mist"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <Icon name={open ? 'close' : 'menu'} size={22} />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-white max-h-[calc(100svh-72px)] overflow-y-auto">
          <div className="container-page py-4 flex flex-col gap-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate px-2 pt-2 pb-1">Services</p>
            {allServices.map((d) => (
              <Link key={d.slug} to={d.path} className="px-2 py-2.5 rounded-lg hover:bg-mist text-ink text-[0.95rem]">
                {d.name}
              </Link>
            ))}
            <div className="h-px bg-line my-2" />
            {primaryLinks.map((l) => (
              <Link key={l.to} to={l.to} className="px-2 py-2.5 rounded-lg hover:bg-mist text-ink text-[0.95rem] font-medium">
                {l.label}
              </Link>
            ))}
            <Button to="/enroll" className="mt-3 w-full justify-center">
              Enrol / Book Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
