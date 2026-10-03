import React, { useState } from 'react';
import { Calendar, Clock, Users, Gamepad2, Phone, CheckCircle2, Copy, Sparkles, MessageCircle, AlertCircle } from 'lucide-react';
import { PricingPass } from '../data/mockData';
import { SpacebarLogo } from './SpacebarLogo';

interface ReservationSectionProps {
  initialStation?: string;
  initialPass?: PricingPass | null;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({
  initialStation = 'racing-sim',
  initialPass = null,
}) => {
  const [station, setStation] = useState<string>(initialStation);
  const [date, setDate] = useState<string>(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState<string>('04:00 PM');
  const [partySize, setPartySize] = useState<number>(2);
  const [durationHours, setDurationHours] = useState<number>(2);
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [snackBundle, setSnackBundle] = useState<string>('none');
  const [specialRequests, setSpecialRequests] = useState<string>('');

  const [bookingConfirmed, setBookingConfirmed] = useState<any | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  // Sync initialStation changes if passed from other components
  React.useEffect(() => {
    if (initialStation) {
      setStation(initialStation);
    }
  }, [initialStation]);

  React.useEffect(() => {
    if (initialPass) {
      setStation(initialPass.stationType);
    }
  }, [initialPass]);

  // Rates calculation
  const getBaseRatePerHour = () => {
    switch (station) {
      case 'racing-sim':
        return 350;
      case 'console-lounge':
        return 250;
      case 'pc-battlestations':
        return 180;
      case 'vip-party-zone':
        return 1499;
      default:
        return 250;
    }
  };

  const getSnackPrice = () => {
    switch (snackBundle) {
      case 'burger-combo':
        return 399 * partySize;
      case 'shakes-sampler':
        return 219 * partySize;
      case 'wings-fries-box':
        return 299 * partySize;
      default:
        return 0;
    }
  };

  const gamingCost = getBaseRatePerHour() * durationHours;
  const snackCost = getSnackPrice();
  const totalCost = gamingCost + snackCost;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    const bookingId = 'SB-' + Math.floor(1000 + Math.random() * 9000);
    const stationLabel =
      station === 'racing-sim'
        ? 'Motion Racing Simulator'
        : station === 'console-lounge'
        ? 'PS5 / Xbox 4K Lounge'
        : station === 'pc-battlestations'
        ? 'Esports PC Battlestation'
        : 'VIP Squad & Birthday Arena';

    setBookingConfirmed({
      id: bookingId,
      name: fullName,
      phone,
      station: stationLabel,
      date,
      timeSlot,
      partySize,
      durationHours,
      snackBundle:
        snackBundle === 'burger-combo'
          ? 'Gourmet Burger + Drink Combo'
          : snackBundle === 'shakes-sampler'
          ? 'Loaded Shakes Sampler'
          : snackBundle === 'wings-fries-box'
          ? 'Wings & Loaded Fries Platter'
          : 'None (Order on-site)',
      totalCost,
    });
  };

  const getWhatsAppBookingUrl = () => {
    if (!bookingConfirmed) return '#';
    const text = encodeURIComponent(
      `Hello Spacebar Gaming Cafe Ludhiana!\n\nI have created a slot reservation request:\n- Booking ID: ${bookingConfirmed.id}\n- Name: ${bookingConfirmed.name}\n- Phone: ${bookingConfirmed.phone}\n- Station: ${bookingConfirmed.station}\n- Date: ${bookingConfirmed.date}\n- Time Slot: ${bookingConfirmed.timeSlot}\n- Players: ${bookingConfirmed.partySize}\n- Duration: ${bookingConfirmed.durationHours} Hours\n- Estimated Total: ₹${bookingConfirmed.totalCost}\n\nPlease confirm desk availability.`
    );
    return `https://wa.me/919877950582?text=${text}`;
  };

  const copyBookingSummary = () => {
    if (!bookingConfirmed) return;
    const summary = `SPACEBAR Ludhiana Reservation (${bookingConfirmed.id})\nName: ${bookingConfirmed.name}\nStation: ${bookingConfirmed.station}\nDate & Time: ${bookingConfirmed.date} at ${bookingConfirmed.timeSlot}\nParty: ${bookingConfirmed.partySize} players (${bookingConfirmed.durationHours} hrs)\nTotal: ₹${bookingConfirmed.totalCost}\nVenue: 51, I - Block, Sarabha Nagar, Ludhiana`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="reservation" className="py-20 bg-slate-50/70 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-rose-600 font-semibold">
            <span>05. INSTANT DESK & TABLE BOOKING</span>
            <span aria-hidden="true">·</span>
            <span>ZERO ADVANCE OBLIGATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-950 tracking-tight">
            Reserve Your Gaming Slot
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Avoid wait times during rush hours and weekend matches. Choose your gaming rig, pick your squad size, and lock in your session in seconds.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl">
          {!bookingConfirmed ? (
            <form onSubmit={handleBookingSubmit} className="space-y-8">
              
              {/* Step 1: Rig / Station Selection */}
              <div>
                <label className="block text-xs font-mono text-slate-700 font-semibold uppercase tracking-wider mb-3">
                  1. Select Gaming Setup or Experience:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    { id: 'racing-sim', label: 'Motion Racing Sim', rate: '₹350/hr' },
                    { id: 'console-lounge', label: 'PS5 / Xbox 4K', rate: '₹250/hr' },
                    { id: 'pc-battlestations', label: '240Hz PC Arena', rate: '₹180/hr' },
                    { id: 'vip-party-zone', label: 'VIP Party Lounge', rate: '₹1499/hr' },
                  ].map((s) => (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => setStation(s.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        station === s.id
                          ? 'bg-slate-950 border-slate-950 text-white shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <div className="text-xs font-bold">{s.label}</div>
                      <div className={`text-[11px] font-mono mt-1 ${station === s.id ? 'text-amber-400' : 'text-purple-600'}`}>{s.rate}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Date, Time Slot & Duration */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-mono text-slate-700 font-semibold mb-2">
                    Date of Session:
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-slate-950 focus:bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 font-semibold mb-2">
                    Preferred Time Slot:
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-slate-950 focus:bg-white"
                  >
                    {[
                      '11:30 AM',
                      '01:00 PM',
                      '02:30 PM',
                      '04:00 PM',
                      '05:30 PM',
                      '07:00 PM',
                      '08:30 PM',
                      '09:30 PM',
                    ].map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 font-semibold mb-2">
                    Duration:
                  </label>
                  <select
                    value={durationHours}
                    onChange={(e) => setDurationHours(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-slate-950 focus:bg-white font-mono"
                  >
                    <option value={1}>1 Hour Session</option>
                    <option value={2}>2 Hours (Recommended)</option>
                    <option value={3}>3 Hours (Pro Pass rate)</option>
                    <option value={4}>4 Hours (Squad LAN)</option>
                  </select>
                </div>
              </div>

              {/* Step 3: Squad Size & Food Pack */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-slate-700 font-semibold mb-2">
                    Number of Players:
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 4, 6, 8].map((size) => (
                      <button
                        type="button"
                        key={size}
                        onClick={() => setPartySize(size)}
                        className={`flex-1 py-2 text-xs font-mono font-bold rounded-lg border transition-colors cursor-pointer ${
                          partySize === size
                            ? 'bg-slate-950 text-white border-slate-950'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {size} {size === 1 ? 'Solo' : 'Squad'}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 font-semibold mb-2">
                    Optional Food & Snack Fuel:
                  </label>
                  <select
                    value={snackBundle}
                    onChange={(e) => setSnackBundle(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-slate-950 focus:bg-white"
                  >
                    <option value="none">No snack bundle (Order fresh on-site)</option>
                    <option value="burger-combo">Burger + Fries + Drink (+₹399/person)</option>
                    <option value="shakes-sampler">Oreo / Biscoff Shake (+₹219/person)</option>
                    <option value="wings-fries-box">Wings & Cheesy Fries Platter (+₹299/person)</option>
                  </select>
                </div>
              </div>

              {/* Step 4: Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <div>
                  <label className="block text-xs font-mono text-slate-700 font-semibold mb-2">
                    Your Full Name:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Danish Wadhawan"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-950 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 font-semibold mb-2">
                    Phone Number (WhatsApp):
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-950 focus:bg-white font-mono"
                  />
                </div>
              </div>

              {/* Live Cost Breakdown Banner */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-slate-700 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">Gaming Fee:</span>
                    <span className="font-mono font-bold text-slate-900">
                      ₹{getBaseRatePerHour()} × {durationHours} hr = ₹{gamingCost}
                    </span>
                  </div>
                  {snackCost > 0 && (
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500">Food Combo ({partySize} players):</span>
                      <span className="font-mono font-bold text-slate-900">₹{snackCost}</span>
                    </div>
                  )}
                  <div className="text-[11px] text-emerald-700 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> No advance prepayment needed · Pay at the counter
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[11px] text-slate-500 font-medium">Estimated Total Session Bill</div>
                  <div className="text-2xl font-black font-mono text-slate-950">
                    ₹{totalCost}
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 text-sm font-bold font-display text-white bg-slate-950 hover:bg-black rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Generate Reservation Pass</span>
                </button>
              </div>

            </form>
          ) : (
            /* Booking Confirmed State */
            <div className="space-y-6 animate-fade-in text-center py-4">
              <div className="w-16 h-16 bg-emerald-50 border border-emerald-300 rounded-full flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-9 h-9 text-emerald-600" />
              </div>

              <div>
                <span className="text-xs font-mono text-emerald-700 font-semibold uppercase tracking-widest">
                  Reservation Ticket Generated
                </span>
                <h3 className="text-2xl font-display font-black text-slate-950 mt-1">
                  Ready to Play, {bookingConfirmed.name}!
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Your gaming slot has been queued for confirmation at SPACEBAR Ludhiana.
                </p>
              </div>

              {/* Ticket Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left max-w-md mx-auto space-y-3 font-mono text-xs shadow-md">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <SpacebarLogo size="sm" className="h-6 w-auto" />
                    <span className="font-display font-black text-xs text-slate-950">SPACEBAR</span>
                  </div>
                  <span className="text-[11px] text-slate-950 font-bold bg-white border border-slate-300 px-2 py-0.5 rounded shadow-2xs">
                    {bookingConfirmed.id}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Station:</span>
                  <span className="text-slate-950 font-semibold">{bookingConfirmed.station}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Date & Time:</span>
                  <span className="text-slate-950 font-semibold">
                    {bookingConfirmed.date} · {bookingConfirmed.timeSlot}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Players & Duration:</span>
                  <span className="text-slate-950 font-semibold">
                    {bookingConfirmed.partySize} Players ({bookingConfirmed.durationHours} hrs)
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Snack Add-on:</span>
                  <span className="text-slate-900 truncate max-w-[200px] text-right font-medium">
                    {bookingConfirmed.snackBundle}
                  </span>
                </div>
                <div className="flex justify-between border-t border-slate-200 pt-2 text-sm">
                  <span className="text-slate-700 font-sans font-semibold">Estimated Bill:</span>
                  <span className="text-slate-950 font-black">₹{bookingConfirmed.totalCost}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={getWhatsAppBookingUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Ticket on WhatsApp</span>
                </a>

                <button
                  onClick={copyBookingSummary}
                  className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 rounded-xl border border-slate-300 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                >
                  <Copy className="w-4 h-4" />
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Pass Summary'}</span>
                </button>

                <button
                  onClick={() => setBookingConfirmed(null)}
                  className="w-full sm:w-auto px-4 py-3 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                >
                  Book Another Slot
                </button>
              </div>

              <div className="text-[11px] text-slate-500">
                Venue: 51, I - Block, Sarabha Nagar, Ludhiana · Contact: +91 98779 50582
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
