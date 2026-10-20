import React, { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, CalendarDays, Menu, Phone, X } from "lucide-react";
import { ConceptWidget, StudioCredit } from "./concept.jsx";

// ---------------------------------------------------------------- Content (from boulderado.com, checked 2026-10-20)
const COMPANY = "Hotel Boulderado";
const ABBR = "hb";
const END_DATE = "2026-11-24T23:59:59-07:00";
const PHONE = "(303) 442-4344";
const PHONE_HREF = "tel:+13034424344";
const EMAIL = "info@boulderado.com";
const ADDRESS = "2115 13th St, Boulder, CO 80302";
const ORIGINAL = "https://www.boulderado.com/";
const BOOK = "https://be.synxis.com/?Hotel=50528&Chain=25795";

const UP = "https://www.boulderado.com/wp-content/uploads";
const LOGO = `${UP}/2018/03/boulderado-logo_white.svg`;
const PHOTO = {
  exterior: `${UP}/2020/05/HB_Exterior-13_Tim-Romano-scaled.jpg`,
  interior: `${UP}/2019/02/Interior-Slider.jpg`,
  room509: `${UP}/2021/01/MVC185300196-Hotel-Boulderado-Boulder-CO-USA-Bedroom-509-looking-outwards-Web-.jpg`,
  rooms: `${UP}/2021/05/1Guest-Rooms.png`,
  dine: `${UP}/2021/05/1Dine-Drink.png`,
  corporate: `${UP}/2021/05/1Corporate-Events.png`,
  wedding: `${UP}/2023/03/Boulderado-Wedding-EC-501-2.jpg`,
  wedding2: `${UP}/2023/03/M-1350-CliftonMarie-Boulderado-5.jpg`,
  cornerBar: `${UP}/2021/01/Corner-Bar_Patio-5_Tim-Romano-300x200.jpg`,
  license: `${UP}/2021/01/LNO_Space-39_Tim-Romano-300x200.jpg`,
  spruce: `${UP}/2021/01/081414SpruceFarmFishMenuItemsMP1171-300x200.jpg`,
  postcard: `${UP}/2020/12/HBpostcard.1910-300x188.jpg`,
};

const AWARDS = [
  { src: `${UP}/2023/10/HHA_AwardsOfExcellenceLogo_2023-winner.png`, alt: "Historic Hotels of America Awards of Excellence 2023 winner" },
  { src: "https://static.tacdn.com/img2/travelers_choice/widgets/tchotel_2023_L.png", alt: "Tripadvisor Travelers' Choice 2023" },
  { src: `${UP}/2018/03/historic-logo.jpg`, alt: "Historic Hotels of America member" },
  { src: "https://www.rockymountainbride.com/wp-content/uploads/2022/09/2023-RMB-Badges.png", alt: "Rocky Mountain Bride featured vendor 2023" },
  { src: `${UP}/2024/08/2024-VenuHub-Member-g.png`, alt: "VenuHub member 2024" },
  { src: `${UP}/2021/03/EPA_SMM_WW_badge_partner_2021-SMALL.png`, alt: "EPA SmartWay partner 2021" },
];

const STAYS = [
  { name: "Guest Rooms", img: PHOTO.room509, text: "Victorian-inspired rooms with large windows looking out on downtown Boulder, the foothills and the Flatirons." },
  { name: "Suites", img: PHOTO.rooms, text: "More room to settle in, with the same Victorian detail as the rest of the hotel." },
  { name: "Carriage House", img: PHOTO.interior, text: "The Boulderado Carriage House, for longer stays and travelers who want a little more privacy." },
];

const DINING = [
  { name: "Spruce Farm & Fish", note: "Restaurant", img: PHOTO.spruce, href: "https://spruceboulderado.com/" },
  { name: "The Corner Bar", note: "Bar & patio", img: PHOTO.cornerBar, href: "https://cornerbarboulderado.com/" },
  { name: "License No. 1", note: "Underground bar · comedy showcase", img: PHOTO.license, href: "https://license1boulderado.com/" },
];

const EXPERIENCES = ["Seasonal Teas", "Holiday Buffets", "Wine Club", "Friday Night Jazz", "The Underground Comedy Showcase"];

const TIMELINE = [
  ["1908", "A Gala Ball on New Year's Eve opens the hotel. The first guests check in on January 1, 1909."],
  ["1909", "William Redding & Son's five-story brick hotel blends Italian Renaissance and Spanish Revival around a central court under an Italian stained-glass ceiling."],
  ["1977", "Marie Distel Garcia helps restore the stained-glass ceiling with about 1,500 square feet of new leaded panels."],
  ["1985", "The North Wing adds 61 rooms, and 48 more follow in 1989."],
  ["Today", "The original Otis elevator still runs, and the hotel still marks its opening every New Year's Eve."],
];

const GUESTS = ["Enos Mills", "Ethel Barrymore", "Douglas Fairbanks Sr.", "Clarence Darrow", "Helen Keller", "Robert Frost", "Benny Goodman", "Louis Armstrong"];

// ---------------------------------------------------------------- Components
function StainedGlass({ className = "" }) {
  // The lobby's leaded-glass ceiling, abstracted into a repeating pattern.
  return (
    <svg className={`glass ${className}`} viewBox="0 0 240 120" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <pattern id="pane" width="60" height="60" patternUnits="userSpaceOnUse">
          <rect width="60" height="60" className="g-base" />
          <path d="M30 0 L60 30 L30 60 L0 30Z" className="g-a" />
          <circle cx="30" cy="30" r="9" className="g-b" />
          <path d="M0 0 L12 0 L0 12Z M60 0 L48 0 L60 12Z M0 60 L12 60 L0 48Z M60 60 L48 60 L60 48Z" className="g-c" />
          <path d="M30 0 L60 30 L30 60 L0 30Z M30 21 a9 9 0 1 0 .01 0" className="g-lead" />
        </pattern>
      </defs>
      <rect width="240" height="120" fill="url(#pane)" />
    </svg>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [["#stay", "Stay"], ["#dine", "Dine & Drink"], ["#gather", "Weddings & Events"], ["#history", "History"], ["#visit", "Visit"]];
  return (
    <header className={`site-header${solid || open ? " is-solid" : ""}`}>
      <div className="wrap header-row">
        <a href="#top" className="brand" aria-label={`${COMPANY} home`}><img src={LOGO} alt="Hotel Boulderado" className="logo" /></a>
        <nav className={`nav${open ? " is-open" : ""}`} aria-label="Main">
          {links.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="nav-book" href={BOOK} target="_blank" rel="noopener noreferrer">Book a Room</a>
        </nav>
        <button type="button" className="menu-btn" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <img className="hero-img" src={PHOTO.exterior} alt="Hotel Boulderado's brick exterior in downtown Boulder" />
      <div className="hero-shade" />
      <div className="wrap hero-inner">
        <p className="kicker">Downtown Boulder · Since 1909</p>
        <h1>Historic charm<br /><em>for the modern traveler.</em></h1>
        <p className="lede">Boulder's landmark hotel, a block from Pearl Street, with Victorian rooms, three places to eat and drink, and a stained-glass lobby guests have gathered under for more than a century.</p>
      </div>
      <BookingBar />
    </section>
  );
}

function BookingBar() {
  const today = new Date();
  const iso = (d) => d.toISOString().slice(0, 10);
  const [arrive, setArrive] = useState(iso(today));
  const [depart, setDepart] = useState(iso(new Date(today.getTime() + 86400000)));
  const [adults, setAdults] = useState("2");
  const href = `${BOOK}&arrive=${arrive}&depart=${depart}&adult=${adults}`;
  return (
    <form className="booking wrap" onSubmit={(e) => { e.preventDefault(); window.open(href, "_blank", "noopener"); }} aria-label="Check availability">
      <label>Arrive<input type="date" value={arrive} onChange={(e) => setArrive(e.target.value)} /></label>
      <label>Depart<input type="date" value={depart} onChange={(e) => setDepart(e.target.value)} /></label>
      <label>Guests
        <select value={adults} onChange={(e) => setAdults(e.target.value)}>
          {["1", "2", "3", "4"].map((n) => <option key={n} value={n}>{n} adult{n === "1" ? "" : "s"}</option>)}
        </select>
      </label>
      <button type="submit"><CalendarDays size={18} /> Check availability</button>
    </form>
  );
}

function Intro() {
  return (
    <section className="intro">
      <StainedGlass className="intro-glass" />
      <div className="wrap intro-grid">
        <p className="intro-quote">Top rated historic hotel in Colorado.</p>
        <div className="awards" aria-label="Awards and memberships">
          {AWARDS.map((a) => <img key={a.src} src={a.src} alt={a.alt} loading="lazy" />)}
        </div>
      </div>
    </section>
  );
}

function Stay() {
  return (
    <section className="stay" id="stay">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker dark">Stay</p>
          <h2>Rooms with a <em>view of the Flatirons.</em></h2>
        </div>
        <div className="stay-grid">
          {STAYS.map((s) => (
            <article className="stay-card" key={s.name}>
              <div className="arch"><img src={s.img} alt={s.name} loading="lazy" /></div>
              <h3>{s.name}</h3>
              <p>{s.text}</p>
              <a href={BOOK} target="_blank" rel="noopener noreferrer">Check rates <ArrowRight size={16} /></a>
            </article>
          ))}
        </div>
        <p className="offers">Looking for a deal? <a href={ORIGINAL} target="_blank" rel="noopener noreferrer">See packages &amp; special offers <ArrowUpRight size={15} /></a></p>
      </div>
    </section>
  );
}

function Dine() {
  return (
    <section className="dine" id="dine">
      <div className="wrap">
        <div className="section-head light">
          <p className="kicker">Dine &amp; drink</p>
          <h2>Three rooms, <em>three moods.</em></h2>
        </div>
        <div className="dine-grid">
          {DINING.map((d) => (
            <a className="dine-card" key={d.name} href={d.href} target="_blank" rel="noopener noreferrer">
              <img src={d.img} alt={d.name} loading="lazy" />
              <span className="dine-note">{d.note}</span>
              <strong>{d.name} <ArrowUpRight size={18} /></strong>
            </a>
          ))}
        </div>
        <div className="experiences">
          <span>Experiences</span>
          {EXPERIENCES.map((x) => <span key={x} className="pill">{x}</span>)}
        </div>
      </div>
    </section>
  );
}

function Gather() {
  return (
    <section className="gather" id="gather">
      <div className="gather-photos">
        <img src={PHOTO.wedding} alt="A wedding at Hotel Boulderado" loading="lazy" />
        <img src={PHOTO.wedding2} alt="Wedding couple on the hotel's staircase" loading="lazy" />
      </div>
      <div className="gather-copy">
        <p className="kicker dark">Weddings &amp; events</p>
        <h2>Say it under <em>the stained glass.</em></h2>
        <p>10,000 square feet of meeting and banquet space, from the Grand Staircase and Mezzanine to the ballroom and the Juniper Room. Receptions and rehearsal dinners for up to 200 guests, plus corporate meetings and social events.</p>
        <ul className="spaces">
          <li>Grand Staircase</li><li>Mezzanine</li><li>Ballroom</li><li>Juniper Room</li>
        </ul>
        <div className="gather-actions">
          <a className="btn btn-oxblood" href={ORIGINAL} target="_blank" rel="noopener noreferrer">Wedding inquiry</a>
          <a className="btn btn-outline" href={ORIGINAL} target="_blank" rel="noopener noreferrer">Meetings RFP</a>
        </div>
      </div>
    </section>
  );
}

function History() {
  return (
    <section className="history" id="history">
      <div className="wrap history-grid">
        <div className="history-head">
          <p className="kicker">Our history</p>
          <h2>Open since <em>New Year's Day, 1909.</em></h2>
          <figure className="postcard"><img src={PHOTO.postcard} alt="Hotel Boulderado postcard, around 1910" loading="lazy" /><figcaption>Postcard, c. 1910</figcaption></figure>
        </div>
        <ol className="timeline">
          {TIMELINE.map(([year, text]) => <li key={year}><span>{year}</span><p>{text}</p></li>)}
        </ol>
      </div>
      <div className="wrap guests">
        <span>Past guests</span>
        <p>{GUESTS.join(" · ")}</p>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section className="visit" id="visit">
      <div className="wrap visit-grid">
        <div>
          <p className="kicker dark">Visit</p>
          <h2>A block from <em>Pearl Street.</em></h2>
          <dl className="details">
            <div><dt>Address</dt><dd>{ADDRESS}</dd></div>
            <div><dt>Reservations &amp; questions</dt><dd><a href={PHONE_HREF}>{PHONE}</a></dd></div>
            <div><dt>Email</dt><dd><a href={`mailto:${EMAIL}`}>{EMAIL}</a></dd></div>
            <div><dt>Press</dt><dd><a href="mailto:press@ajcpt.com">press@ajcpt.com</a></dd></div>
          </dl>
          <a className="btn btn-oxblood" href={BOOK} target="_blank" rel="noopener noreferrer">Book your stay <ArrowRight size={18} /></a>
        </div>
        <div className="map"><iframe title="Map to Hotel Boulderado" src={`https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS)}&z=15&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <StainedGlass className="footer-glass" />
      <div className="wrap footer-row">
        <img src={LOGO} alt="Hotel Boulderado" className="footer-logo" />
        <div className="footer-links">
          <a href="#stay">Stay</a><a href="#dine">Dine &amp; Drink</a><a href="#gather">Events</a><a href="#history">History</a>
          <a href="https://www.facebook.com/HotelBoulderado/" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com/hotel.boulderado/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.youtube.com/channel/UCfFhHAJCy1WI9mjgWm2pT2g" target="_blank" rel="noopener noreferrer">YouTube</a>
        </div>
        <a className="footer-phone" href={PHONE_HREF}><Phone size={16} /> {PHONE}</a>
      </div>
      <div className="wrap footer-base">
        <span>© {new Date().getFullYear()} {COMPANY}. Independent concept · not for official use. Current site: <a href={ORIGINAL}>boulderado.com</a></span>
        <StudioCredit />
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Stay />
        <Dine />
        <Gather />
        <History />
        <Visit />
      </main>
      <Footer />
      <ConceptWidget company={COMPANY} abbr={ABBR} endDate={END_DATE} />
    </>
  );
}
