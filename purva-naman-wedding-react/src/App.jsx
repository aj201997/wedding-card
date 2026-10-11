import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const MAP_URL = 'https://maps.app.goo.gl/vs6nQKWr71HYymzv9';
const VENUE = 'Krishna Valley Resort, Police Chowki, Krishna Valley NH19 Jait, Chattikara, Jait More, Jait, Vrindavan';

const EVENT_VENUE = 'Krishna Valley Resort, Vrindavan';
const dayOneEvents = [
  { icon: '🪔', title: 'Vinayak Puja (Baan)', time: '9:00 AM', date: '11 December 2026', detail: '', venue: EVENT_VENUE },
  { icon: '🌿', title: 'Mehendi', time: '10:00 AM', date: '11 December 2026', detail: 'मेहंदी की खुशबू, मंगल गीतों का संग, सजे प्रेम के रंग।', dress: 'Green', swatch: '#2f9c65', venue: EVENT_VENUE },
  { icon: '🥁', title: 'Satta & Milni', time: '4:00 PM', date: '11 December 2026', detail: '', venue: EVENT_VENUE },
  { icon: '🎶', title: 'Sangeet Night', time: '8:00 PM onwards', date: '11 December 2026 · Friday', detail: 'नाचेंगे, गाएँगे, खुशियाँ मनाएँगे।', venue: EVENT_VENUE },
];
const dayTwoEvents = [
  { icon: '🪔', title: 'Battisi', time: '8:00 AM', date: '12 December 2026', detail: 'बत्तीसी की रस्म', venue: EVENT_VENUE },
  { icon: '🎁', title: 'Mayra', time: '10:00 AM', date: '12 December 2026', detail: 'मायरा का जश्न', dress: 'Rajputi / Chunari', swatch: '#dba23e', venue: EVENT_VENUE },
  { icon: '🌼', title: 'Haldi', time: '2:30 PM', date: '12 December 2026', detail: 'हल्दी का नूर, खुशियाँ भरपूर 💛', dress: 'Pink', swatch: '#e95797', venue: EVENT_VENUE },
  { icon: '💍', title: 'Dinner & Varmala', time: '8:00 PM', date: '12 December 2026', detail: 'शुभ विवाह · मंगल बेला, प्रेम का मेला ✨❤️', venue: EVENT_VENUE },
];

function useCountdown() {
  const target = useMemo(() => new Date('2026-12-12T20:00:00+05:30').getTime(), []);
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);
  const remaining = Math.max(0, target - now);
  return {
    passed: target <= now,
    days: Math.floor(remaining / 86400000),
    hours: Math.floor((remaining % 86400000) / 3600000),
    minutes: Math.floor((remaining % 3600000) / 60000),
    seconds: Math.floor((remaining % 60000) / 1000),
  };
}

function CoupleIllustration({ className = '' }) {
  return (
    <svg className={`couple-illustration ${className}`} viewBox="0 0 340 350" role="img" aria-label="Illustration of a bride and groom">
      <defs>
        <linearGradient id="brideSkirt" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stopColor="#f65083"/><stop offset="1" stopColor="#ac174b"/></linearGradient>
        <linearGradient id="groomCoat" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stopColor="#41669b"/><stop offset="1" stopColor="#1f315f"/></linearGradient>
        <linearGradient id="veil" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stopColor="#ffdb95"/><stop offset="1" stopColor="#f39b54"/></linearGradient>
      </defs>
      {/* Bride's veil and hair */}
      <path d="M57 95Q70 24 128 38Q177 54 172 142L152 216L49 207L38 138Z" fill="url(#veil)" stroke="#f7c95c" strokeWidth="3"/>
      <ellipse cx="109" cy="89" rx="30" ry="34" fill="#efbd9c"/>
      <path d="M78 91Q75 44 112 46Q145 45 140 94L128 79Q108 65 85 86Z" fill="#2d1c20"/>
      <path d="M83 84Q92 94 88 105M131 83Q125 94 130 104" fill="none" stroke="#2d1c20" strokeWidth="5" strokeLinecap="round"/>
      <circle cx="109" cy="57" r="5" fill="#f7ca64"/><path d="M94 48Q109 28 125 48" fill="none" stroke="#f7ca64" strokeWidth="4"/>
      <path d="M86 118Q108 108 132 118L150 151L68 153Z" fill="#e9b285"/>
      <path d="M68 145Q108 127 149 145L178 302Q108 336 37 302Z" fill="url(#brideSkirt)" stroke="#ffd16a" strokeWidth="3"/>
      <path d="M48 272Q108 291 168 272M42 293Q109 314 174 293" fill="none" stroke="#f7c85b" strokeWidth="4"/>
      {[[77,179],[116,195],[95,225],[139,244],[69,258],[123,277],[102,300]].map(([cx,cy], i) => <circle key={i} cx={cx} cy={cy} r="4" fill="#ffe8a0" />)}
      {/* Groom */}
      <ellipse cx="229" cy="91" rx="29" ry="33" fill="#edb996"/>
      <path d="M199 87Q198 46 231 49Q257 48 260 83L249 73Q226 62 204 82Z" fill="#25191d"/>
      <path d="M201 80L201 63Q231 37 258 64L254 85Q229 69 201 80Z" fill="#2b2020"/>
      <path d="M202 46Q229 20 258 46L250 65Q230 52 210 64Z" fill="#f3a341" stroke="#e8c157" strokeWidth="3"/>
      <path d="M205 45Q229 28 254 45" stroke="#fce5a0" strokeWidth="3" fill="none"/>
      <path d="M204 120Q230 106 255 120L278 292L187 292Z" fill="url(#groomCoat)"/>
      <path d="M217 119L232 156L247 119" fill="#fff2dd"/>
      <path d="M231 128L236 291" stroke="#d49a42" strokeWidth="5"/>
      {[154,183,212,241,270].map((cy, i) => <circle key={i} cx="237" cy={cy} r="3" fill="#f7c85b" />)}
      <path d="M195 287L190 324L216 324L224 290M247 291L252 324L278 324L271 288" fill="#2b2140"/>
      <path d="M177 324H217M246 324H284" stroke="#f7c85b" strokeWidth="5" strokeLinecap="round"/>
      {/* Couple's joined hands */}
      <path d="M143 150Q164 170 186 157" stroke="#efbd9c" strokeWidth="13" fill="none" strokeLinecap="round"/>
      <path d="M193 150Q177 170 185 159" stroke="#edb996" strokeWidth="13" fill="none" strokeLinecap="round"/>
      <circle cx="185" cy="159" r="8" fill="#f4c09e"/>
    </svg>
  );
}

function Marigold({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <g transform="translate(50 50)" fill="#f7b73f">
        {Array.from({ length: 12 }, (_, i) => <ellipse key={i} cx="0" cy="-20" rx="9" ry="21" transform={`rotate(${i * 30})`} />)}
        <circle r="15" fill="#ec7830" />
        <circle r="7" fill="#f8d55e" />
      </g>
    </svg>
  );
}

function Envelope({ onOpen, isOpening }) {
  return (
    <div className={`envelope ${isOpening ? 'is-opening' : ''}`} role="button" tabIndex={0} aria-label="Open invitation envelope" onClick={onOpen} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpen()}>
      <div className="envelope-back" />
      <div className="letter-insert">
        <div className="letter-monogram">P <span>♥</span> N</div>
        <div className="letter-eyebrow">Wedding Invitation</div>
        <div className="letter-names">Purva & Naman</div>
        <div className="letter-date">11 · 12 DECEMBER 2026</div>
      </div>
      <div className="envelope-flap" />
      <div className="envelope-front"><span className="wax-seal">P<span>♥</span>N</span></div>
    </div>
  );
}

function Countdown() {
  const time = useCountdown();
  if (time.passed) return <div className="countdown-celebrate">🎊 It’s wedding time! 🎊</div>;
  return (
    <div className="countdown" aria-label="Countdown to wedding">
      {[[time.days, 'Days'], [time.hours, 'Hours'], [time.minutes, 'Mins'], [time.seconds, 'Secs']].map(([value, label]) => (
        <div className="countdown-unit" key={label}><strong>{String(value).padStart(label === 'Days' ? 1 : 2, '0')}</strong><span>{label}</span></div>
      ))}
    </div>
  );
}

function EventCard({ event, index, variant }) {
  return (
    <article className={`event-card ${variant || ''}`} style={{ '--reveal-delay': `${index * 115}ms` }}>
      <div className="event-icon" aria-hidden="true">{event.icon}</div>
      <div className="event-copy">
        <div className="event-time">{event.time}</div>
        <div className="event-date">{event.date}</div>
        <h3>{event.title}</h3>
        {event.detail && <p>{event.detail}</p>}
        {event.dress && <span className="dress-code"><i style={{ background: event.swatch }} />Dress code · {event.dress}</span>}
        <div className="event-venue"><span aria-hidden="true">⌖</span>{event.venue}</div>
      </div>
    </article>
  );
}

function ElephantProcession() {
  return (
    <div className="baraat-scene" aria-label="Animated baraat illustration">
      <div className="baraat-road" />
      <div className="baraat-procession">
        <svg className="elephant" viewBox="0 0 280 210" aria-hidden="true">
          <g className="elephant-bob">
            <ellipse cx="129" cy="112" rx="83" ry="54" fill="#929db2" />
            <circle cx="207" cy="98" r="39" fill="#a7b0c2" />
            <ellipse cx="190" cy="105" rx="18" ry="26" fill="#bdc4d2" />
            <path className="elephant-trunk" d="M224 112Q254 129 242 170Q235 188 225 179Q239 150 214 129Z" fill="#929db2" />
            <path d="M56 83Q129 53 198 83L205 130Q129 152 51 130Z" fill="#a41e4a" />
            <path d="M52 127Q129 150 205 127" stroke="#f8ca61" strokeWidth="7" fill="none" />
            {[94,130,165].map((x) => <circle key={x} cx={x} cy="102" r="5" fill="#f8ca61" />)}
            <rect x="100" y="48" width="64" height="32" rx="6" fill="#efbd4e" />
            <path d="M93 49Q132 12 171 49Z" fill="#d92b3f" />
            <path d="M76 135L74 185M111 139L110 189M153 139L153 189M185 135L188 185" stroke="#7f899f" strokeWidth="22" strokeLinecap="round" />
          </g>
        </svg>
        <svg className="dhol-player" viewBox="0 0 90 90" aria-hidden="true">
          <g className="dhol-bob"><ellipse cx="45" cy="27" rx="28" ry="10" fill="#ffe3a2"/><path d="M17 28Q19 66 45 72Q71 66 73 28Q45 39 17 28Z" fill="#a65c1d"/><path d="M22 43H68M25 56H65" stroke="#f5c55c" strokeWidth="4"/><path d="M23 14L6 4M66 14L83 4" stroke="#4a172d" strokeWidth="4" strokeLinecap="round"/></g>
        </svg>
        <div className="baraat-dancer" aria-hidden="true">🕺</div>
        <div className="baraat-sparkle" aria-hidden="true">✦</div>
      </div>
    </div>
  );
}

function FamilyPill({ children }) { return <span className="family-pill">{children}</span>; }

function VenueMapArt() {
  return (
    <a className="map-art" href={MAP_URL} target="_blank" rel="noreferrer" aria-label="Open Krishna Valley Resort in Google Maps">
      <span className="map-green map-green-one" /><span className="map-green map-green-two" />
      <span className="map-water" />
      <svg className="map-route" viewBox="0 0 360 250" aria-hidden="true"><path d="M-10 207C45 170 63 195 103 151S185 140 211 102S296 100 370 25" fill="none" stroke="#fffaf0" strokeWidth="20" strokeLinecap="round"/><path d="M-10 207C45 170 63 195 103 151S185 140 211 102S296 100 370 25" fill="none" stroke="#db9b58" strokeWidth="7" strokeLinecap="round"/></svg>
      <span className="map-pin">📍</span>
      <span className="map-location-label"><b>Krishna Valley Resort</b><small>Tap to open Google Maps ↗</small></span>
      <span className="map-north">N ↑</span>
    </a>
  );
}

function FloatingPetals({ particles }) {
  return <div className="petal-layer" aria-hidden="true">{particles.map((p) => <i className="confetti-piece" key={p.id} style={p.style} />)}</div>;
}

export default function App() {
  const [coverOpen, setCoverOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [particles, setParticles] = useState([]);
  const [toast, setToast] = useState('');
  const [activeSection, setActiveSection] = useState('home');
  const [shareBusy, setShareBusy] = useState(false);
  const toastTimer = useRef(null);

  const celebrate = useCallback((count = 42) => {
    const colors = ['#f2c45e', '#ff6b93', '#b7e6d1', '#8ecbfa', '#f79a54', '#fffaf0'];
    const next = Array.from({ length: count }, (_, index) => {
      const duration = 3.8 + Math.random() * 2.7;
      return {
        id: `${Date.now()}-${index}-${Math.random()}`,
        style: {
          left: `${Math.random() * 100}%`,
          background: colors[Math.floor(Math.random() * colors.length)],
          '--drift': `${Math.random() * 170 - 85}px`,
          '--fall-duration': `${duration}s`,
          '--fall-delay': `${Math.random() * 0.7}s`,
          '--spin': `${Math.random() * 900 - 450}deg`,
        },
      };
    });
    setParticles(next);
    window.setTimeout(() => setParticles([]), 7200);
  }, []);

  const showToast = useCallback((message) => {
    setToast(message);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(''), 2500);
  }, []);

  const openInvitation = useCallback(() => {
    if (isOpening || coverOpen) return;
    setIsOpening(true);
    celebrate(38);
    window.setTimeout(() => {
      setCoverOpen(true);
      document.body.classList.remove('scroll-locked');
      document.getElementById('home')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    }, 1050);
  }, [celebrate, coverOpen, isOpening]);

  useEffect(() => {
    if (!coverOpen) document.body.classList.add('scroll-locked');
    return () => {
      document.body.classList.remove('scroll-locked');
      window.clearTimeout(toastTimer.current);
    };
  }, [coverOpen]);

  useEffect(() => {
    const updateProgress = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(100, Math.max(0, (window.scrollY / maxScroll) * 100)) : 0;
      document.documentElement.style.setProperty('--scroll-progress', `${progress}%`);
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener('scroll', updateProgress);
  }, [coverOpen]);

  useEffect(() => {
    const sections = [...document.querySelectorAll('[data-section]')];
    if (!('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(entry.target.id); });
    }, { threshold: 0.4 });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [coverOpen]);

  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.13, rootMargin: '0px 0px -4% 0px' });
    document.querySelectorAll('.reveal-on-scroll').forEach((el) => revealObserver.observe(el));
    return () => revealObserver.disconnect();
  }, [coverOpen]);

  const handleShare = async () => {
    const shareData = { title: 'Purva ♥ Naman — Wedding Invitation', text: 'Join us to celebrate Purva & Naman on 11–12 December 2026 at Krishna Valley Resort, Vrindavan.', url: window.location.href };
    try {
      setShareBusy(true);
      if (navigator.share) await navigator.share(shareData);
      else if (navigator.clipboard?.writeText) { await navigator.clipboard.writeText(shareData.url); showToast('Invitation link copied!'); }
      else { showToast('Copy this page link from your browser to share it.'); }
    } catch (error) {
      if (error?.name !== 'AbortError') showToast('You can share this invitation using your browser menu.');
    } finally { setShareBusy(false); }
  };

  return (
    <>
      <div className="top-progress" aria-hidden="true" />
      <FloatingPetals particles={particles} />

      {!coverOpen && <div className={`opening-screen ${isOpening ? 'opening-screen-out' : ''}`}>
        <div className="opening-flower opening-flower-left"><Marigold /></div>
        <div className="opening-flower opening-flower-right"><Marigold /></div>
        <div className="opening-content">
          <div className="ganesh-mark">ॐ</div>
          <p className="eyebrow">॥ श्री गणेशाय नमः ॥</p>
          <p className="opening-shloka">वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।<br />निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥</p>
          <Envelope onOpen={openInvitation} isOpening={isOpening} />
          <p className="opening-caption">A little invitation, a lot of love.<br />Tap to open Purva & Naman’s wedding story.</p>
          <button className="button button-gold opening-button" onClick={openInvitation}>Open the invitation <span>↗</span></button>
        </div>
        <div className="opening-bottom-note">11 — 12 DECEMBER 2026 · VRINDAVAN</div>
      </div>}

      <header className={`site-header ${coverOpen ? 'site-header-visible' : ''}`}>
        <a className="brand-mark" href="#home" aria-label="Purva and Naman home"><span>P</span><i>♥</i><span>N</span></a>
        <div className="header-right"><span className="header-date">11—12 DECEMBER 2026</span><button className="share-button" onClick={handleShare} disabled={shareBusy} aria-label="Share invitation">↗ <span>Share invite</span></button></div>
      </header>

      <nav className={`section-dots ${coverOpen ? 'section-dots-visible' : ''}`} aria-label="Invitation navigation">
        {[['home', 'Home'], ['couple', 'The couple'], ['day-one', 'Day one'], ['day-two', 'Day two'], ['family', 'Family'], ['venue', 'Venue']].map(([id, label]) => (
          <a href={`#${id}`} key={id} className={activeSection === id ? 'active' : ''} aria-label={label} title={label}><span>{label}</span></a>
        ))}
      </nav>

      <main>
        <section className="hero-section" id="home" data-section>
          <div className="hero-orb hero-orb-a"/><div className="hero-orb hero-orb-b" />
          <div className="hero-flower hero-flower-a"><Marigold /></div><div className="hero-flower hero-flower-b"><Marigold /></div>
          <div className="hero-content">
            <div className="ganesh-mark hero-om">ॐ</div>
            <p className="eyebrow light-eyebrow">A new chapter begins</p>
            <div className="hero-arch">
              <div className="arch-sun" />
              <div className="arch-ornament arch-ornament-left">✺</div><div className="arch-ornament arch-ornament-right">✺</div>
              <CoupleIllustration />
              <span className="arch-floating-heart heart-one">♥</span><span className="arch-floating-heart heart-two">♥</span>
            </div>
            <h1 className="hero-names"><span>Purva</span><i>and</i><span>Naman</span></h1>
            <p className="hero-tagline">Two families. One beautiful beginning.<br className="desktop-break" /> A lifetime of love waiting to unfold.</p>
            <div className="hero-divider"><span />✦<span /></div>
            <div className="countdown-label">THE WEDDING COUNTDOWN</div>
            <Countdown />
            <p className="hero-date">11 — 12 December 2026 <b>·</b> Krishna Valley Resort, Vrindavan</p>
            <div className="hero-actions"><a className="button button-gold" href="#couple">Explore the invitation <span>↓</span></a><button className="button button-outline" onClick={handleShare}>Share the love ↗</button></div>
          </div>
          <div className="scroll-prompt"><span className="scroll-line" /> SCROLL TO DISCOVER <span className="scroll-line" /></div>
        </section>

        <section className="couple-section section-light" id="couple" data-section>
          <div className="section-floral floral-left"><Marigold /></div><div className="section-floral floral-right"><Marigold /></div>
          <div className="section-container couple-container">
            <p className="eyebrow rose-eyebrow reveal-on-scroll">A promise, surrounded by love</p>
            <h2 className="section-heading reveal-on-scroll">Together with<br /><em>their families</em></h2>
            <div className="invitation-copy reveal-on-scroll">
              <div className="family-blessing">MRS. JHANKAR DEVI DUGAR</div>
              <p>cordially invites you to the wedding ceremony of her grand-daughter</p>
            </div>
            <div className="couple-names-lockup reveal-on-scroll">
              <div className="couple-name-block"><span className="name-swoosh">The bride</span><h3>Purva Dugar</h3><p>D/O Mrs. Madhu & Lalit Dugar</p></div>
              <div className="ampersand">&amp;</div>
              <div className="couple-name-block"><span className="name-swoosh">The groom</span><h3>Naman Jain</h3><p>S/O Mrs. Pratima & Atul Jain</p></div>
            </div>
            <div className="couple-portrait reveal-on-scroll"><div className="portrait-halo"/><CoupleIllustration /><div className="portrait-caption">made for each other <span>♥</span></div></div>
            <p className="love-quote reveal-on-scroll">“The best kind of love is the one that brings everyone you love into the same room.”</p>
          </div>
        </section>

        <section className="event-section event-green" id="day-one" data-section>
          <div className="event-backdrop-flower"><Marigold /></div>
          <div className="section-container">
            <div className="event-section-heading reveal-on-scroll"><span className="chapter-label"><i>01</i> THE CELEBRATIONS BEGIN</span><h2 className="section-heading">Friday, <em>11 December</em></h2><p>The henna, the music, the first hugs — let the festivities begin.</p></div>
            <div className="mehendi-illustration reveal-on-scroll"><div className="mehendi-orbit"/><div className="mehendi-hands"><span className="hand henna-hand-one">✳<i>✦</i><b>✺</b></span><span className="hand henna-hand-two">✳<i>✦</i><b>✺</b></span></div><div className="mehendi-caption">Mehendi & melodies</div></div>
            <div className="event-grid event-grid-green">{dayOneEvents.map((event, index) => <EventCard event={event} index={index} key={event.title} variant="reveal-on-scroll" />)}</div>
            <div className="dress-note reveal-on-scroll"><span>🌿</span><p><b>Mehendi mood</b> — wear your happiest green and come ready to celebrate.</p></div>
          </div>
        </section>

        <section className="event-section event-pink" id="day-two" data-section>
          <div className="section-container">
            <div className="event-section-heading reveal-on-scroll"><span className="chapter-label chapter-dark"><i>02</i> THE BIG DAY</span><h2 className="section-heading">Saturday, <em>12 December</em></h2><p>From the first ritual to the varmala — a day full of colour, blessings and happy tears.</p></div>
            <ElephantProcession />
            <div className="event-grid event-grid-pink">{dayTwoEvents.map((event, index) => <EventCard event={event} index={index} key={event.title} variant="reveal-on-scroll" />)}</div>
            <div className="haldi-note reveal-on-scroll"><span className="haldi-flower">✿</span><div><b>Dress for the moment</b><p>Mayra: Rajputi / Chunari · Haldi: Pink</p></div><span className="haldi-flower">✿</span></div>
          </div>
        </section>

        <section className="family-section section-light" id="family" data-section>
          <div className="section-container">
            <p className="eyebrow rose-eyebrow reveal-on-scroll">A celebration made by many hands</p>
            <h2 className="section-heading reveal-on-scroll">All our love,<br /><em>all our people</em></h2>
            <div className="family-card-grid">
              <article className="family-card reveal-on-scroll"><div className="family-card-icon">✿</div><div className="family-card-label">WITH A WARM WELCOME FROM</div><h3>Welcome by</h3><div className="family-list"><FamilyPill>Kamala – Kamal Singh Ji Baid</FamilyPill><FamilyPill>Vineeta – Ramesh Ji Bhandari</FamilyPill><FamilyPill>Varsha – Hitesh Ji Chitlangia</FamilyPill><FamilyPill>Nisha – Yash Ji Sancheti</FamilyPill></div></article>
              <article className="family-card family-card-blush reveal-on-scroll"><div className="family-card-icon">❀</div><div className="family-card-label">MATERNAL FAMILY</div><h3>Nanihal Paksh</h3><div className="family-list"><FamilyPill>Mina Devi – Shantilal Ji Patawari</FamilyPill><FamilyPill>Deepika – Pawan Patawari</FamilyPill><FamilyPill>Laxmi – Santosh Patawari</FamilyPill></div></article>
            </div>
            <div className="little-ones-card reveal-on-scroll"><div className="little-ones-heading"><span>✧</span><h3>|| बाल मनुहार ||</h3><span>✧</span></div><p>The little lights of the family</p><div className="family-list little-ones-list">{['Ritika', 'Kaushik', 'Daksh', 'Vridhi', 'Rishabh', 'Kaushik', 'Kaira', 'Nayra'].map((person, index) => <FamilyPill key={`${person}-${index}`}>{person}</FamilyPill>)}</div></div>
          </div>
        </section>

        <section className="venue-section" id="venue" data-section>
          <div className="venue-star venue-star-one">✦</div><div className="venue-star venue-star-two">✧</div>
          <div className="section-container venue-container">
            <p className="eyebrow light-eyebrow reveal-on-scroll">We saved you a place</p>
            <h2 className="section-heading venue-heading reveal-on-scroll">Meet us at<br /><em>the celebration</em></h2>
            <div className="venue-ribbon reveal-on-scroll"><span>✦</span> THE WEDDING VENUE <span>✦</span></div>
            <div className="venue-layout">
              <div className="venue-art-wrap reveal-on-scroll"><VenueMapArt /><p className="map-caption">A little journey to a very big celebration.</p></div>
              <div className="venue-info reveal-on-scroll"><div className="venue-icon">⌖</div><h3>Krishna Valley<br /><em>Resort</em></h3><p className="venue-address">Police Chowki, Krishna Valley NH19 Jait, Chattikara, Jait More, Jait, Vrindavan</p><a className="button button-gold button-wide" href={MAP_URL} target="_blank" rel="noreferrer">Open in Google Maps <span>↗</span></a><div className="venue-divider"/><div className="rsvp-heading"><span>Kindly respond</span><b>R.S.V.P · DUGAR FAMILY</b></div><div className="rsvp-list"><a href="tel:+919322643009"><span>Madhu – Lalit Dugar</span><b>93226 43009</b></a><a href="tel:+919830493137"><span>Seema – Surendra Dugar</span><b>98304 93137</b></a><a href="tel:+918444023252"><span>Meera – Mahendra Dugar</span><b>84440 23252</b></a></div><p className="additional-rsvp">Preeti – Vivek Dugar <span>·</span> Vedika – Lokesh Dugar</p></div>
            </div>
          </div>
        </section>

        <section className="finale-section" id="finale" data-section>
          <div className="finale-flowers"><Marigold /><Marigold /><Marigold /></div>
          <div className="section-container finale-content">
            <div className="finale-heart reveal-on-scroll">♥</div>
            <p className="eyebrow light-eyebrow reveal-on-scroll">And this is only the beginning</p>
            <h2 className="finale-heading script reveal-on-scroll">See you at<br />the shaadi!</h2>
            <p className="finale-copy reveal-on-scroll">Bring your dancing shoes, your happiest smile, and a little room for one more plate at dinner.</p>
            <div className="finale-actions reveal-on-scroll"><a className="button button-gold" href="#home">Back to the beginning ↑</a><button className="button button-outline" onClick={handleShare}>Share with family ↗</button></div>
            <div className="final-monogram reveal-on-scroll">P <span>♥</span> N</div>
            <p className="final-date">11—12 DECEMBER 2026 · VRINDAVAN</p>
          </div>
        </section>
      </main>

      <div className={`mobile-dock ${coverOpen ? 'mobile-dock-visible' : ''}`} aria-label="Quick navigation">
        <a href="#day-one"><span>🌿</span><small>Events</small></a><a href="#family"><span>✿</span><small>Family</small></a><a href="#venue"><span>⌖</span><small>Venue</small></a><button onClick={handleShare}><span>↗</span><small>Share</small></button>
      </div>

      {toast && <div className="toast" role="status">{toast}</div>}
    </>
  );
}
