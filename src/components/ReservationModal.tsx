import { X } from 'lucide-react';
import { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { useBodyScrollLock } from '../hooks/useBodyScrollLock';
import { useFocusTrap } from '../hooks/useFocusTrap';

type ReservationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type ReservationForm = {
  date: string;
  time: string;
  guests: string;
  name: string;
  email: string;
  phone: string;
};

type Errors = Partial<Record<keyof ReservationForm, string>>;

const initialForm: ReservationForm = {
  date: '',
  time: '',
  guests: '2',
  name: '',
  email: '',
  phone: '',
};

function getTodayString() {
  const now = new Date();
  const offset = now.getTimezoneOffset();
  const local = new Date(now.getTime() - offset * 60_000);
  return local.toISOString().split('T')[0];
}

export function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [form, setForm] = useState<ReservationForm>(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [showDemoMessage, setShowDemoMessage] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = 'reservation-modal-title';
  const descriptionId = 'reservation-modal-description';

  useBodyScrollLock(isOpen);
  useFocusTrap(isOpen, panelRef);

  useEffect(() => {
    if (!isOpen) {
      setShowDemoMessage(false);
      setErrors({});
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const today = useMemo(() => getTodayString(), []);

  if (!isOpen) {
    return null;
  }

  const validate = () => {
    const nextErrors: Errors = {};

    if (!form.date) {
      nextErrors.date = 'Please choose a date.';
    }
    if (!form.time) {
      nextErrors.time = 'Please choose a time.';
    }
    if (!form.guests) {
      nextErrors.guests = 'Please select the number of guests.';
    }
    if (!form.name.trim()) {
      nextErrors.name = 'Please enter your name.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!/^[+\d][\d\s-]{7,}$/.test(form.phone.trim())) {
      nextErrors.phone = 'Please enter a valid phone number.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) {
      setShowDemoMessage(false);
      return;
    }

    setShowDemoMessage(true);
  };

  const handleChange = (field: keyof ReservationForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-charcoal/80 px-4 py-4 backdrop-blur-sm sm:items-center sm:px-6">
      <div className="absolute inset-0" onClick={onClose} />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="relative max-h-[90vh] w-full max-w-3xl overflow-auto rounded-[2rem] border border-ivory/10 bg-[#1d1a16] shadow-soft motion-safe:animate-modal-in"
        tabIndex={-1}
      >
        <div className="sticky top-0 flex items-start justify-between border-b border-ivory/8 bg-[#1d1a16]/95 px-5 py-5 backdrop-blur sm:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-editorial text-ember">Reservation Experience</p>
            <h3 id={titleId} className="mt-2 font-serif text-3xl text-ivory sm:text-4xl">
              Reserve a Table
            </h3>
            <p id={descriptionId} className="mt-2 max-w-xl text-sm leading-6 text-ivory/68">
              Choose your preferred date, time and party size. This form is for a fictional portfolio concept and does not submit data anywhere.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ivory/12 text-ivory transition hover:border-ivory/30 hover:bg-ivory/5"
            aria-label="Close reservation dialog"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="grid gap-8 px-5 py-6 sm:px-8 sm:py-8 lg:grid-cols-[1.05fr_0.95fr]">
          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-4 sm:grid-cols-3">
              <FormField
                id="reservation-date"
                label="Date"
                error={errors.date}
                field={
                  <input
                    id="reservation-date"
                    type="date"
                    min={today}
                    value={form.date}
                    onChange={(event) => handleChange('date', event.target.value)}
                    className={inputClasses}
                  />
                }
              />
              <FormField
                id="reservation-time"
                label="Time"
                error={errors.time}
                field={
                  <select
                    id="reservation-time"
                    value={form.time}
                    onChange={(event) => handleChange('time', event.target.value)}
                    className={inputClasses}
                  >
                    <option value="">Select</option>
                    <option value="12:30 PM">12:30 PM</option>
                    <option value="1:30 PM">1:30 PM</option>
                    <option value="7:00 PM">7:00 PM</option>
                    <option value="8:00 PM">8:00 PM</option>
                    <option value="9:15 PM">9:15 PM</option>
                  </select>
                }
              />
              <FormField
                id="reservation-guests"
                label="Guests"
                error={errors.guests}
                field={
                  <select
                    id="reservation-guests"
                    value={form.guests}
                    onChange={(event) => handleChange('guests', event.target.value)}
                    className={inputClasses}
                  >
                    {['1', '2', '3', '4', '5', '6', '7', '8+'].map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                }
              />
            </div>

            <FormField
              id="reservation-name"
              label="Name"
              error={errors.name}
              field={
                <input
                  id="reservation-name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(event) => handleChange('name', event.target.value)}
                  className={inputClasses}
                  placeholder="Your name"
                />
              }
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <FormField
                id="reservation-email"
                label="Email"
                error={errors.email}
                field={
                  <input
                    id="reservation-email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(event) => handleChange('email', event.target.value)}
                    className={inputClasses}
                    placeholder="name@example.com"
                  />
                }
              />
              <FormField
                id="reservation-phone"
                label="Phone"
                error={errors.phone}
                field={
                  <input
                    id="reservation-phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    value={form.phone}
                    onChange={(event) => handleChange('phone', event.target.value)}
                    className={inputClasses}
                    placeholder="+91 98765 43210"
                  />
                }
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full border border-ember bg-ember px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ivory transition hover:border-[#a85a37] hover:bg-[#a85a37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-[#1d1a16]"
            >
              Check Availability
            </button>
            <p className="text-xs leading-6 text-ivory/56">
              Demo only. No customer details are stored or transmitted.
            </p>
          </form>

          <div className="space-y-5 rounded-[1.6rem] border border-ivory/10 bg-charcoal/45 p-5 sm:p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-editorial text-olive">Dining Notes</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-ivory/74">
                <li>Seasonal Mediterranean menu with live-fire signatures.</li>
                <li>Designed as a portfolio showcase for a fictional restaurant brand.</li>
                <li>Opening hours: Mon–Thu 12:00 PM – 11:00 PM | Fri–Sun 12:00 PM – 12:00 AM</li>
              </ul>
            </div>

            <div className="h-px bg-ivory/10" />

            <div aria-live="polite" className="min-h-28">
              {showDemoMessage ? (
                <div className="rounded-[1.4rem] border border-ember/30 bg-ember/10 p-5 text-sm leading-7 text-ivory/82">
                  <p className="font-semibold text-ivory">Reservation requests are not active in this demo.</p>
                  <p className="mt-2">
                    This experience is a portfolio concept created for Ember &amp; Olive. The form stays on this page and does not send details to a booking system.
                  </p>
                </div>
              ) : (
                <div className="rounded-[1.4rem] border border-ivory/10 bg-[#151310] p-5 text-sm leading-7 text-ivory/62">
                  Enter your details to preview the reservation flow. A polished demo message will appear here instead of a real confirmation.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

type FormFieldProps = {
  id: string;
  label: string;
  error?: string;
  field: JSX.Element;
};

function FormField({ id, label, error, field }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-xs font-semibold uppercase tracking-editorial text-ivory/70">
        {label}
      </label>
      {field}
      {error ? <p className="mt-2 text-xs text-[#f2a17e]">{error}</p> : null}
    </div>
  );
}

const inputClasses =
  'w-full rounded-2xl border border-ivory/12 bg-[#13110f] px-4 py-3 text-sm text-ivory outline-none transition placeholder:text-ivory/32 focus:border-ember focus:ring-1 focus:ring-ember';
