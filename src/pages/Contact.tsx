import { useState, type FormEvent } from 'react';
import { Seo } from '../components/Seo';
import { PageHeader } from '../components/Section';
import { Icon } from '../components/Icon';
import { Button } from '../components/Button';
import { SITE } from '../data/content';
import { recordContactMessage } from '../lib/submissions';

export default function Contact() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('sending');
    await recordContactMessage({
      fullName,
      email,
      phone,
      subject,
      message,
      createdAt: new Date().toISOString(),
    });
    setStatus('sent');
    setFullName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');
  }

  return (
    <>
      <Seo
        title="Contact Us"
        description="Get in touch with SkyTrack ICT for testing, training, software, workspace and business solutions enquiries."
        path="/contact"
      />
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about what you need"
        description="Reach us by phone, WhatsApp, email or the form below — we typically respond within one business day."
      />

      <section className="py-14 sm:py-20 md:py-24">
        <div className="container-page grid lg:grid-cols-[0.9fr_1.1fr] gap-12">
          <div>
            <div className="space-y-5">
              {[
                { icon: 'map-pin' as const, label: 'Address', value: SITE.address },
                { icon: 'phone' as const, label: 'Phone', value: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, '')}` },
                { icon: 'mail' as const, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
                { icon: 'clock' as const, label: 'Hours', value: SITE.hours },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 p-5 rounded-xl border border-line bg-white">
                  <span className="w-10 h-10 rounded-lg bg-signal/10 text-signal flex items-center justify-center shrink-0">
                    <Icon name={item.icon} size={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="mt-0.5 block font-medium text-ink hover:text-signal">
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 font-medium text-ink">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/${SITE.whatsapp.replace(/[^\d]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center gap-3 p-5 rounded-xl bg-success/10 text-success font-semibold hover:bg-success/15 transition-colors"
            >
              <Icon name="whatsapp" size={20} />
              Chat with us on WhatsApp
            </a>
          </div>

          <div className="p-6 md:p-8 rounded-2xl border border-line bg-white">
            {status === 'sent' ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 mx-auto rounded-full bg-success/10 text-success flex items-center justify-center">
                  <Icon name="check" size={26} />
                </div>
                <p className="mt-4 font-bold text-ink text-lg">Message sent</p>
                <p className="mt-1.5 text-sm text-slate">Thanks for reaching out — our team will get back to you shortly.</p>
                <Button variant="ghost" className="mt-6" onClick={() => setStatus('idle')}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="c-name">
                      Full name
                    </label>
                    <input
                      id="c-name"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full rounded-xl border border-line px-4 py-3 text-sm focus:border-signal focus:ring-1 focus:ring-signal outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="c-phone">
                      Phone number
                    </label>
                    <input
                      id="c-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-xl border border-line px-4 py-3 text-sm focus:border-signal focus:ring-1 focus:ring-signal outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="c-email">
                    Email address
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-line px-4 py-3 text-sm focus:border-signal focus:ring-1 focus:ring-signal outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="c-subject">
                    Subject
                  </label>
                  <input
                    id="c-subject"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full rounded-xl border border-line px-4 py-3 text-sm focus:border-signal focus:ring-1 focus:ring-signal outline-none"
                    placeholder="e.g. IELTS training enquiry"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="c-message">
                    Message
                  </label>
                  <textarea
                    id="c-message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-xl border border-line px-4 py-3 text-sm focus:border-signal focus:ring-1 focus:ring-signal outline-none resize-none"
                  />
                </div>
                <Button type="submit" disabled={status === 'sending'} className="w-full justify-center">
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
