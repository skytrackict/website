import { Icon } from './Icon';
import { SITE } from '../data/content';

export function WhatsAppFloat() {
  const digits = SITE.whatsapp.replace(/[^\d]/g, '');
  return (
    <a
      href={`https://wa.me/${digits}?text=${encodeURIComponent('Hi SkyTrack ICT, I would like to know more about your services.')}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with SkyTrack ICT on WhatsApp"
      className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-success text-white flex items-center justify-center shadow-[0_8px_24px_rgba(22,163,74,0.4)] hover:scale-105 transition-transform"
    >
      <Icon name="whatsapp" size={26} />
    </a>
  );
}
