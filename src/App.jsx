import React, { useEffect, useMemo, useState } from "react";

/* ----------------------- site data ----------------------- */
const PROFILE = {
  name: "Jamie Tighe",
  role: "Data Analyst",
  tagline: "I make complex data simple and useful.",
  location: "London, UK",
  email: "jamie.tighe@hotmail.co.uk",
  links: {
    linkedin: "https://www.linkedin.com/in/jamietighe98/",
    github: "https://github.com/jamietighe",
    tableau: "https://public.tableau.com/app/profile/jamietighe",
    cv: "#",
  },
};

const PROJECTS = [
  {
    title: "Airbnb Fee Strategy — Maximise Host Revenue",
    year: "2023",
    blurb:
      "Cleaned listings, modelled fee levers (cleaning, min nights, extra-guest) and recommended pricing tiers by property type/amenities.",
    tags: ["Excel", "Power Query", "PivotTables", "Charts"],
    href: "/projects/airbnb",
    thumb: "/thumb-airbnb.jpg",
  },
  {
    title: "Food Distributor — Sales & Margin Intelligence",
    year: "2024",
    blurb:
      "Built a Power BI model across 2012–2014 sales to surface product/region seasonality, top customers and margin hot spots.",
    tags: ["Power BI", "Data Modelling", "DAX (light)", "Maps"],
    href: "/projects/food-dist",
    thumb: "/thumb-food.jpg",
  },
  {
    title: "AdventureWorks — Marketing Allocation (SQL)",
    year: "2025",
    blurb:
      "SQL analysis across products, vendors, territories and reps to guide budget towards high-return categories and regions.",
    tags: ["SQL", "Joins", "Windowing (where needed)"],
    href: "/projects/adventureworks",
    thumb: "/thumb-advw.jpg",
  },
  {
    title: "Lending Club — Portfolio Risk Patterns",
    year: "2025",
    blurb:
      "SQL deep-dive on purpose, grade, geography and borrower profiles; flagged delinquency patterns and exposure pockets.",
    tags: ["SQL", "Aggregation", "Risk profiling"],
    href: "/projects/loans",
    thumb: "/thumb-loans.jpg",
  },
  {
    title: "HR Consulting — Workforce & Tenure Insights",
    year: "2025",
    blurb:
      "Headcount, tenure and exits by BU/region/VP, plus exit reasons and early-tenure risk—actionable retention suggestions.",
    tags: ["SQL", "HR Analytics", "Cohorts"],
    href: "/projects/hr",
    thumb: "/thumb-hr.jpg",
  },

  /* ---------- NEW CARDS (these create hover tiles) ---------- */
  {
    title: "Tableau Lab — HR Attrition",
    year: "2025",
    blurb:
      "Attrition rate by segment, tenure, and role with calculated fields, highlight parameters and interactive dashboard filters.",
    tags: ["Tableau", "HR", "Calculated Fields"],
    href: "/projects/tableau-attrition",
    thumb: "/thumb-tableau-attrition.jpg",
  },
  {
    title: "Tableau Lab — FIFA World Cup",
    year: "2025",
    blurb:
      "Maps and time-series of goals-per-match, finalists, and eras—geocoding fixes and annotated outliers.",
    tags: ["Tableau", "Maps", "Time-series"],
    href: "/projects/tableau-world-cup",
    thumb: "/thumb-tableau-worldcup.jpg",
  },
  {
    title: "Tableau — Animations (Gapminder)",
    year: "2025",
    blurb:
      "Animated bubble chart: life expectancy vs income with population size, pivot-to-long and Pages control.",
    tags: ["Tableau", "Animation", "Design"],
    href: "/projects/tableau-animations",
    thumb: "/thumb-tableau-animations.jpg",
  },
  {
    title: "Data Journalism — U.S. Elections",
    year: "2025",
    blurb:
      "Story with state/county maps, party share calcs, and turnout trends—clean joins and clear narrative.",
    tags: ["Tableau", "Story", "Maps"],
    href: "/projects/tableau-elections",
    thumb: "/thumb-tableau-elections.jpg",
  },
  {
    title: "Wind Turbines — Data Sprint",
    year: "2025",
    blurb:
      "USWT + EIA joins: capacity maps, OEM/operator shares, and growth hotspots for investor brief.",
    tags: ["Python", "Tableau", "Energy"],
    href: "/projects/wind-sprint",
    thumb: "/thumb-wind.jpg",
  },
  {
    title: "EV Charging vs Demand (UK) — Capstone",
    year: "2025",
    blurb:
      "OCM + DfT + ONS: chargers per 1k EVs by power band; prioritise rapid installs where coverage lags demand.",
    tags: ["Python", "SQL", "Tableau"],
    href: "/projects/ev-capstone",
    thumb: "/thumb-ev-capstone.jpg",
  },
];


/* ----------------------- hooks ----------------------- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("opacity-100", "translate-y-0")
        );
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => {
      el.classList.add("opacity-0", "translate-y-3", "transition", "duration-700");
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
}

/* ----------------------- primitives ----------------------- */
const Container = ({ children }) => (
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
);

const Section = ({ id, title, kicker, children }) => (
  <section id={id} data-reveal className="scroll-mt-24 py-12 sm:py-16">
    <Container>
      {kicker && <p className="mb-2 text-sm uppercase tracking-widest text-blue-200/70">{kicker}</p>}
      <h2 className="text-2xl sm:text-3xl font-semibold font-serif mb-6">{title}</h2>
      {children}
    </Container>
  </section>
);

const Chip = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs bg-white/5 border-white/10">
    {children}
  </span>
);

const Button = ({ as = "a", href = "#", onClick, children, variant = "primary" }) => {
  // kept for the Contact form only
  const As = as;
  const [t, setT] = useState({ x: 0, y: 0 });
  const styles =
    variant === "ghost"
      ? "border border-blue-400/30 text-blue-200 hover:bg-blue-400/10 px-3 py-2 rounded-lg text-sm"
      : "bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-xl text-sm font-medium shadow";
  return (
    <As
      href={href}
      onClick={onClick}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setT({ x: (e.clientX - r.left - r.width / 2) / 12, y: (e.clientY - r.top - r.height / 2) / 12 });
      }}
      onMouseLeave={() => setT({ x: 0, y: 0 })}
      style={{ transform: `translate(${t.x}px, ${t.y}px)` }}
      className={`inline-flex items-center ${styles} transition-transform`}
    >
      {children}
    </As>
  );
};

/* ----------------------- icons ----------------------- */
const Icon = {
  linkedin: (p) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
      <path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6A2.5 2.5 0 1 1 4.98 3.5zM3 8h3v13H3zM9 8h3v2h.04c.42-.8 1.45-1.64 2.98-1.64 3.19 0 3.78 2.1 3.78 4.84V21h-3v-5.6c0-1.33-.02-3.04-1.86-3.04-1.86 0-2.15 1.45-2.15 2.95V21H9z" />
    </svg>
  ),
  github: (p) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
      <path fill="currentColor" d="M12 .5a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.77-1.35-1.77-1.1-.74.08-.73.08-.73 1.22.08 1.86 1.25 1.86 1.25 1.08 1.85 2.84 1.32 3.53 1.01.11-.79.42-1.32.76-1.63-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.25-.12-.3-.54-1.51.12-3.15 0 0 1.01-.32 3.3 1.24a11.45 11.45 0 0 1 6 0c2.29-1.56 3.3-1.24 3.3-1.24.66 1.64.24 2.85.12 3.15.77.85 1.24 1.93 1.24 3.25 0 4.63-2.8 5.66-5.48 5.96.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A12 12 0 0 0 12 .5z" />
    </svg>
  ),
  tableau: (p) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
      <path fill="currentColor" d="M11 2h2v3h3v2h-3v3h-2V7H8V5h3V2zm0 9h2v2h-2v-2zm-7 1h2v2h2v2H6v2H4v-2H2v-2h2v-2zm14 0h2v2h2v2h-2v2h-2v-2h-2v-2h2v-2zM11 19h2v3h3v2h-3v3h-2v-3H8v-2h3v-3z" />
    </svg>
  ),
};

/* ----------------------- sticky hero + section nav ----------------------- */
const SidebarHero = () => {
  const [active, setActive] = useState("about");
  const nav = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "timeline", label: "Timeline" },
    { id: "interests", label: "Interests" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.6 }
    );
    nav.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <aside className="hidden md:flex sticky top-0 h-screen w-[320px] mx-auto items-center">
      <div className="w-full px-2">
        {/* headshot (change to /headshot.png if that's your file) */}
        <img
          src="/headshot.jpg"
          alt="Jamie Tighe"
          width="320"
          height="320"
          className="w-40 h-40 rounded-2xl object-cover shadow-2xl"
        />

        <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white">{PROFILE.name}</h1>
        <p className="mt-1 text-blue-200">{PROFILE.role}</p>
        <p className="mt-3 text-blue-100/85">{PROFILE.tagline}</p>

        <div className="mt-4 flex items-center gap-3 text-blue-100/85">
          <a href={PROFILE.links.linkedin} aria-label="LinkedIn" className="hover:text-white"><Icon.linkedin className="w-5 h-5" /></a>
          <a href={PROFILE.links.github} aria-label="GitHub" className="hover:text-white"><Icon.github className="w-5 h-5" /></a>
          <a href={PROFILE.links.tableau} aria-label="Tableau" className="hover:text-white"><Icon.tableau className="w-5 h-5" /></a>
        </div>

        {/* section nav with animated underline */}
        <nav className="mt-8 grid gap-2 text-sm">
          {nav.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={[
                "group relative px-2 py-1 rounded-md transition",
                "after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-blue-500 after:w-0 after:transition-all",
                active === id ? "text-white after:w-full" : "opacity-80 hover:opacity-100 hover:after:w-full",
              ].join(" ")}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
};

/* ----------------------- sections ----------------------- */
const About = () => (
  <Section id="about" title="About me" kicker="Profile">
    <p className="text-blue-100/85 max-w-prose">
      I’m a London-based data analyst with a 2:1 in Mechanical Engineering. After time in education and a seven-month trip through South America, I pivoted into analytics, completing GA’s Data Analytics course, picking up Python, Excel, SQL, Tableau, and Power BI, and applying them to hands-on projects. I like finding what the data can teach us, then turning it into something people can use. I’m now looking for Data Analyst roles in London.
    </p>
  </Section>
);

const Projects = () => (
  <Section id="projects" title="Selected Projects" kicker="Portfolio">
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {PROJECTS.map((p, idx) => (
        <article
          key={idx}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm transition-all
                     hover:-translate-y-1 hover:shadow-xl focus-within:-translate-y-1"
        >
          {/* Clickable area */}
          <a href={p.href} className="absolute inset-0 z-10" aria-label={`Open: ${p.title}`} />

          {/* Thumbnail */}
          <div className="aspect-[16/10] bg-black/20">
            <img
              alt={`${p.title} thumbnail`}
              src={p.thumb}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>

          {/* Title row */}
          <div className="p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium leading-snug">{p.title}</h3>
              <span className="text-xs text-blue-200/80">{p.year}</span>
            </div>
          </div>

          {/* Hover overlay */}
          <div
            className="pointer-events-none absolute inset-0 flex flex-col justify-end
                       bg-gradient-to-t from-[#0B1220]/90 via-[#0B1220]/40 to-transparent
                       opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            <div className="p-4">
              <p className="text-sm text-blue-100/90">{p.blurb}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] px-2 py-1 rounded-full border border-white/10 bg-white/5">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-3 text-sm text-blue-200/90">
                View <span aria-hidden>→</span>
              </div>
            </div>
          </div>

          {/* Subtle ring on hover */}
          <div className="absolute inset-0 rounded-2xl ring-0 ring-blue-400/0 transition group-hover:ring-2 group-hover:ring-blue-400/30" />
        </article>
      ))}
    </div>
  </Section>
);


// --- tiny icons (optional; they’re aria-hidden so names do the SEO/UX work) ---
const Mini = {
  python: (p) => <svg viewBox="0 0 24 24" {...p}><circle cx="12" cy="12" r="10" fill="currentColor"/></svg>,
  sql:    (p) => <svg viewBox="0 0 24 24" {...p}><text x="3" y="17" fontSize="14" fill="currentColor">SQL</text></svg>,
  excel:  (p) => <svg viewBox="0 0 24 24" {...p}><rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor"/></svg>,
  tableau:(p) => <Icon.tableau {...p} />,
  pbi:    (p) => <svg viewBox="0 0 24 24" {...p}>
                  <rect x="3" y="10" width="3" height="8" rx="1" fill="currentColor"/>
                  <rect x="8" y="7" width="3" height="11" rx="1" fill="currentColor"/>
                  <rect x="13" y="5" width="3" height="13" rx="1" fill="currentColor"/>
                  <rect x="18" y="8" width="3" height="10" rx="1" fill="currentColor"/>
                </svg>,
};

const CORE_SKILLS = [
  { name: "Python (pandas)", icon: "python" },
  { name: "SQL (PostgreSQL)", icon: "sql" },
  { name: "Excel", icon: "excel" },
  { name: "Tableau", icon: "tableau" },
  { name: "Power BI", icon: "pbi" },
];

const Skills = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: CORE_SKILLS.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
    })),
  };

  return (
    <Section id="skills" title="Skills" kicker="Core analytics">
      <ul className="flex flex-wrap gap-2" role="list" aria-label="Core analytics">
        {CORE_SKILLS.map(({ name, icon }) => {
          const I = Mini[icon] || (() => null);
          return (
            <li key={name}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5"
                data-skill={name} aria-label={name}>
              <I className="h-4 w-4 opacity-80" aria-hidden="true" />
              <span className="text-sm">{name}</span>
            </li>
          );
        })}
      </ul>

      {/* JSON-LD for SEO */}
      <script type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </Section>
  );
};

const Timeline = () => {
  const ITEMS = [
    {
      when: "2019–2023",
      what: "BEng Mechanical Engineering (Robotics), Sussex (2:1).",
      details: [
        "Modules: Control, Embedded, Industrial Automation, AI & Robotics.",
        "Final year: autonomous line-following robot; PID control.",
        "Societies: Robotics Club (workshops, Arduino nights)."
      ],
    },
    {
      when: "2023–2024",
      what: "Learning Support Assistant, Elmwood Primary.",
      details: [
        "Data tracking for pupil progress; created simple Excel dashboards.",
        "Communication and stakeholder skills with teachers/parents.",
      ],
    },
    {
      when: "2025",
      what: "General Assembly Data Analytics (Capstone projects).",
      details: [
        "EV charging vs EV demand: OpenChargeMap + DfT + ONS.",
        "Wind data sprint: US Turbines + EIA923 maps and trends.",
        "Tooling: Python/SQL/Tableau/Power BI; APIs & geospatial joins.",
      ],
    },
    {
      when: "Next",
      what: "Data Analyst roles in London; sustainability & mobility focus.",
      details: [
        "Goal: ship decision tools for infrastructure and clean transport.",
        "Interested in teams using Python/SQL + Tableau/Power BI at scale.",
      ],
    },
  ];

  return (
    <Section id="timeline" title="Milestones" kicker="Timeline">
      <ol className="relative ml-3 border-l border-white/10">
        {ITEMS.map((i, idx) => (
          <li key={idx} className="group mb-6 ml-4">
            {/* Dot */}
            <div className="absolute -left-1.5 mt-1 size-3 rounded-full bg-blue-600 group-hover:scale-110 transition" />
            {/* Header row */}
            <div className="flex items-baseline gap-3">
              <time className="text-xs uppercase tracking-wide text-blue-200/80">
                {i.when}
              </time>
              <h3 className="font-medium">
                {i.what}
              </h3>
            </div>

            {/* Expand-on-hover / focus panel */}
            <div
              tabIndex={0}
              className="
                mt-2 rounded-xl border border-white/10 bg-white/5 p-3
                opacity-0 translate-y-1 max-h-0 overflow-hidden
                group-hover:opacity-100 group-hover:translate-y-0 group-hover:max-h-[320px]
                focus:opacity-100 focus:translate-y-0 focus:max-h-[320px]
                transition-all duration-300 ease-out
              "
              aria-label={`${i.when} details`}
            >
              <ul className="list-disc pl-5 text-sm text-blue-100/85 space-y-1">
                {i.details.map((d, j) => <li key={j}>{d}</li>)}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-3 text-xs text-blue-200/70">
        Hover or focus items to see more (tap on mobile).
      </p>
    </Section>
  );
};

const Interests = () => {
  const photos = ["/travel1.jpg", "/travel2.jpg", "/travel3.jpg"]; // put these files in /public
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <Section id="interests" title="Interests" kicker="Human side">
      <div className="grid gap-6 sm:grid-cols-3">
        <div className="rounded-2xl border p-5 bg-white/5 border-white/10">
          <h3 className="font-medium mb-1">Travel</h3>
          <p className="text-sm text-blue-100/85">
            I love long itineraries and off-grid hikes; I often map routes and log stats.
          </p>
        </div>
        <div className="rounded-2xl border p-5 bg-white/5 border-white/10">
          <h3 className="font-medium mb-1">Football</h3>
          <p className="text-sm text-blue-100/85">
            Sunday league + Arsenal fan; I track simple match stats for fun.
          </p>
        </div>
        <div className="rounded-2xl border p-5 bg-white/5 border-white/10">
          <h3 className="font-medium mb-1">Chess</h3>
          <p className="text-sm text-blue-100/85">
            Rapid ~1500, building an attacking gambit repertoire.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-3 grid-cols-3">
        {photos.map((src) => (
          <button
            key={src}
            onClick={() => setLightbox(src)}
            className="aspect-[4/3] rounded-xl overflow-hidden bg-black/20 group"
          >
            <img
              src={src}
              alt="travel"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <img
            src={lightbox}
            alt="expanded"
            className="max-w-[92vw] max-h-[86vh] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-4 right-4 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm"
            onClick={() => setLightbox(null)}
          >
            Close
          </button>
        </div>
      )}
    </Section>
  );
};

const Contact = () => (
  <Section id="contact" title="Contact" kicker="Say hello">
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="rounded-2xl border p-6 bg-white/5 border-white/10">
        <h3 className="font-medium mb-2">Let’s talk</h3>
        <p className="text-sm text-blue-100/85 mb-4">
          I’m open to data analyst roles, internships, and collaboration.
        </p>
        <div className="space-y-2 text-sm">
          <div><span className="text-blue-200/70">Email:</span> <a className="underline" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></div>
          <div><span className="text-blue-200/70">LinkedIn:</span> <a className="underline" href={PROFILE.links.linkedin}>{PROFILE.links.linkedin}</a></div>
        </div>
      </div>
      <div className="rounded-2xl border p-6 bg-white/5 border-white/10">
        <h3 className="font-medium mb-3">Drop a quick note</h3>
        <form action="https://formspree.io/f/your-id" method="POST" className="space-y-3">
          <input className="w-full rounded-xl border px-3 py-2 bg-white/5 border-white/10" name="name" placeholder="Your name" required />
          <input className="w-full rounded-xl border px-3 py-2 bg-white/5 border-white/10" name="email" placeholder="Email" type="email" required />
          <textarea className="w-full rounded-xl border px-3 py-2 bg-white/5 border-white/10" name="message" placeholder="Message" rows={4} />
          <Button as="button">Send message</Button>
        </form>
      </div>
    </div>
  </Section>
);

const Footer = () => (
  <footer className="border-t border-white/10 py-10 text-sm text-blue-200/70">
    <Container>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
        <div>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</div>
        <div className="flex gap-4">
          <a className="underline" href="#about">About</a>
          <a className="underline" href="#projects">Projects</a>
          <a className="underline" href="#contact">Contact</a>
        </div>
      </div>
    </Container>
  </footer>
);

/* ----------------------- app (site-wide spotlight) ----------------------- */
function PortfolioSite() {
  const [pos, setPos] = useState({ x: 0, y: 0 }); // site-wide spotlight
  useMemo(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, []);
  useReveal();

  return (
    <div
      className="min-h-screen text-gray-100 bg-[#0B1220] relative"
      onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
    >
      {/* subtle spotlight across the whole site */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-[background] duration-200 opacity-35"
        style={{
          background: `radial-gradient(420px at ${pos.x}px ${pos.y}px,
            rgba(59,130,246,0.16), rgba(14,165,233,0.10) 35%, transparent 70%)`,
        }}
      />

      <div className="md:grid md:grid-cols-[380px,1fr] md:gap-12 md:px-8">
        {/* sticky hero + nav (left) */}
        <SidebarHero />

        {/* scrolling content (right) */}
        <main>
          <About />
          <Projects />
          <Skills />
          <Timeline />
          <Interests />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}
// (add these imports near the bottom, but still top-level)
import { Routes, Route, Link } from "react-router-dom";
import AirbnbCase from "./pages/AirbnbCase.jsx";
import FoodCase from "./pages/FoodCase.jsx";
import AdvWorksCase from "./pages/AdvWorksCase.jsx";
import LoansCase from "./pages/LoansCase.jsx";
import HrCase from "./pages/HrCase.jsx";
import TableauAttritionLab from "./pages/TableauAttritionLab.jsx";
import TableauWorldCupLab from "./pages/TableauWorldCupLab.jsx";
import TableauAnimationsLab from "./pages/TableauAnimationsLab.jsx";
import TableauElectionsLab from "./pages/TableauElectionsLab.jsx";
import WindSprint from "./pages/WindSprint.jsx";
import EVCapstone from "./pages/EVCapstone.jsx";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioSite />} />
      <Route path="/projects/airbnb" element={<AirbnbCase />} />
      <Route path="/projects/food-dist" element={<FoodCase />} />
      <Route path="/projects/adventureworks" element={<AdvWorksCase />} />
      <Route path="/projects/loans" element={<LoansCase />} />
      <Route path="/projects/hr" element={<HrCase />} />
	<Route path="/projects/tableau-attrition" element={<TableauAttritionLab />} />
<Route path="/projects/tableau-world-cup" element={<TableauWorldCupLab />} />
<Route path="/projects/tableau-animations" element={<TableauAnimationsLab />} />
<Route path="/projects/tableau-elections" element={<TableauElectionsLab />} />
<Route path="/projects/wind-sprint" element={<WindSprint />} />
<Route path="/projects/ev-capstone" element={<EVCapstone />} />

      <Route
        path="*"
        element={
          <div className="min-h-screen grid place-items-center bg-[#0B1220] text-white p-6">
            <div className="text-center space-y-4">
              <h1 className="text-2xl font-semibold">Page not found</h1>
              <Link className="underline" to="/">Go back home</Link>
            </div>
          </div>
        }
      />
    </Routes>
  );
}

