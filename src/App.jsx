// /src/App.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import windDashboardImg from "./assets/wind-dashboard.png";
import evDashboardImg from "./assets/ev-dashboard.png";

import airbnbImg from "./assets/project-airbnb-amsterdam.png";
import kickstarterImg from "./assets/project-kickstarter.png";
import adventureworksImg from "./assets/project-adventureworks.png";
import hrImg from "./assets/project-hr-attrition.png";
import lendingClubImg from "./assets/project-lending-club.png";
import gapminderImg from "./assets/project-gapminder.png";
import electionsImg from "./assets/project-us-elections.png";
import headshotImg from "./assets/headshot.png";

// Put your Tableau logo image here:
import tableauLogoImg from "./assets/tableau-logo.png";

// ------------ helpers & data ------------- //

const navItems = [
  { label: "About", target: "about" },
  { label: "Projects", target: "projects" },
  { label: "Skills", target: "skills" },
  { label: "Interests", target: "interests" },
  { label: "Contact", target: "contact" },
];

// ONLY pills you want (no Power BI for now)
const TOOL = {
  SQL: "SQL",
  PYTHON: "Python",
  TABLEAU: "Tableau",
  EXCEL: "Excel",
};

// ORDER YOU WANTED:
// ev, wind, gapminder, us pres, excel ones, then sql ones
const projects = [
  {
    id: "ev-chargers",
    title: "EV Charging Infrastructure vs EV Demand (UK)",
    hoverBlurb:
      "End-to-end analysis of public EV charging coverage vs BEV uptake across UK local authorities. Built a reproducible pipeline and delivered insights via an interactive Tableau dashboard.",
    longDescription:
      "This capstone project compares UK public charging supply with private BEV demand at local-authority level. I pulled charger data via API, cleaned and standardised records (status, connector types, power bands, deduping), mapped postcodes to local authorities, and integrated BEV registrations. The final output is a stakeholder-ready Tableau dashboard highlighting under-served areas, power-band mix, and supply-vs-demand gaps.\n\nThe work focused on reproducibility and clean data modelling, with documented assumptions and QA checks to keep outputs decision-ready.",
    tags: [TOOL.TABLEAU, TOOL.SQL, TOOL.PYTHON],
    links: {
      tableau:
        "https://public.tableau.com/app/profile/jamie.tighe/viz/AreUKpublicchargerskeepingupwithEVdemand/Publicchargingcoveragevsprivately-ownedBEVsUKoverview",
      github: "https://github.com/JamieTighe/ev-charging-demand-uk",
      report: null,
    },
    image: evDashboardImg,
    imageAlt: "Screenshot of EV charging coverage dashboard.",
    highlights: [
      "Integrated multiple public datasets into a consistent local-authority view.",
      "Created supply-vs-demand KPIs and mapped under-served areas.",
      "Delivered an interactive Tableau dashboard for exploration and communication.",
    ],
  },
  {
    id: "wind-market",
    title: "U.S. Wind Market — Investment Overview",
    hoverBlurb:
      "Sized the U.S. wind market and built an interactive Tableau dashboard to highlight regional hotspots, OEM concentration, and operator activity. Framed clear investment priorities around high-density regions and supply chains.",
    longDescription:
      "This project provides an investment-style overview of the U.S. wind market. I explored capacity growth, where projects cluster geographically, and which OEMs/operators dominate the installed base. The end result is an interactive Tableau dashboard designed for fast scanning and deeper drill-down.\n\nThe focus was on turning complex market structure into a clean, decision-oriented story: where capacity is concentrated, who controls the supply chain, and what that implies for investment focus.",
    tags: [TOOL.TABLEAU, TOOL.EXCEL],
    links: {
      tableau:
        "https://public.tableau.com/app/profile/jamie.tighe/viz/U_S_WindMarketInvestmentOverview/U_S_WindMarket-InvestmentOverview",
      github: "https://github.com/JamieTighe/us-wind-turbine-market-sprint",
      report: null,
    },
    image: windDashboardImg,
    imageAlt: "Screenshot of U.S. Wind Market dashboard.",
    highlights: [
      "Mapped regional hotspots and market concentration.",
      "Designed a dashboard optimised for fast stakeholder scanning.",
      "Translated findings into clear investment-style takeaways.",
    ],
  },
  {
    id: "gapminder-tableau",
    title: "Recreating Gapminder in Tableau — Animated “Wealth vs Health” Story",
    hoverBlurb:
      "Recreated a Gapminder-style animation in Tableau: GDP per capita vs life expectancy over time, with population-sized bubbles and region colour. Built an interactive time-based story showing how countries changed over ~200 years.",
    longDescription:
      "This project recreates the iconic Gapminder visual popularised by Hans Rosling, showing life expectancy (health) vs income per person/GDP per capita (wealth) over time.\n\nI connected multiple datasets (income, life expectancy, population, and country/region metadata), reshaped wide year columns into a tidy Year–Value structure using Tableau’s pivot, and related sources on common keys. The output is an animated scatterplot using the Pages shelf to play through years, with interaction designed for exploration and storytelling.",
    tags: [TOOL.TABLEAU],
    links: {
      tableau:
        "https://public.tableau.com/app/profile/jamie.tighe/viz/WealthHealthOverTimeGapminderRecreation/WealthHealthOverTimeGapminderRecreation",
      github: null,
      report: null,
    },
    image: gapminderImg,
    imageAlt: "Cover image for Gapminder-style Tableau animation.",
    highlights: [
      "Reshaped wide time-series into tidy Year–Value structure.",
      "Built an animated scatter with Pages + interactive filters.",
      "Designed the output as a narrative visual, not just charts.",
    ],
  },
  {
    id: "us-elections-story",
    title: "Data Journalism Lab — U.S. Presidential Elections (Tableau)",
    hoverBlurb:
      "Tableau data journalism project using MIT Election Lab data: cleaned fields, built county/state maps, and created interactive filters to explore results by year. Delivered a narrative Story supported by dashboards and worksheets.",
    longDescription:
      "As a “data journalist,” I used Tableau to build a story about U.S. presidential elections in the 21st century.\n\nI cleaned and standardised key fields and created calculated metrics not provided directly in the raw dataset (e.g., party vote share and loyalty-style measures). I then built interactive visuals, trend charts and county/state maps, with year filters and informative tooltips so users can explore results at multiple levels. Finally, I packaged everything into a Tableau Story designed to communicate a clear narrative rather than a collection of charts.",
    // ✅ add Excel pill
    tags: [TOOL.TABLEAU, TOOL.EXCEL],
    links: {
      tableau:
        "https://public.tableau.com/app/profile/jamie.tighe/viz/USPresidentialElections20002024TurnoutWinnersGeographicPolarisation/USPresidentialElections20002024TurnoutWinnersandGeographicPolarisation",
      github: null,
      report: null,
    },
    image: electionsImg,
    imageAlt: "Cover image for US elections Tableau story.",
    highlights: [
      "Built interactive maps + trends with clear, explorable tooltips.",
      "Created calculated fields for vote share and derived metrics.",
      "Delivered as a Tableau Story with a narrative arc.",
    ],
  },

  // Excel
  {
    id: "airbnb-fees",
    title: "Airbnb — Optimising Fee Structures to Maximise Host Revenue (Excel)",
    hoverBlurb:
      "Analysed 14,884 Amsterdam Airbnb listings in Excel to understand how pricing and fees vary by property type, size, and amenities. Engineered features (amenity flags, bathroom types, price bands) to recommend a revenue-focused pricing and fee strategy.",
    longDescription:
      "I worked as an “Airbnb analyst” to recommend a host fee structure that maximises yearly revenue, considering nightly price, minimum nights, cleaning fees, deposits, and extra guest fees.\n\nUsing Excel, I cleaned the dataset (removed inactive listings/outliers, corrected data types), engineered new variables (bathroom count/type, amenity flags, price/capacity bands), and explored how each factor impacts nightly price. The final output was a practical recommendation set: baseline nightly prices by room type, cleaning fee tiers by bathroom count, add-on premiums for high-value amenities (e.g., kitchen/washer/workspace), and structured extra-guest fees and deposits based on property size.",
    tags: [TOOL.EXCEL],
    links: {
      tableau: null,
      github: "https://github.com/JamieTighe/airbnb-host-fee-structure-excel-analysis",
      report: null,
    },
    image: airbnbImg,
    imageAlt: "Cover image for Airbnb pricing and fee strategy project.",
    highlights: [
      "Cleaned and standardised messy listing fields; removed inactive/outliers.",
      "Built feature set: bathroom types, amenity flags, capacity and price bands.",
      "Turned insights into a usable host pricing + fee playbook.",
    ],
  },
  {
    id: "kickstarter-success",
    title: "Kickstarter — Campaign Success Recommendations (Excel)",
    hoverBlurb:
      "Analysed ~46,000 Kickstarter campaigns in Excel to identify what drives funding success across goals, duration, and engagement. Turned messy campaign data into clear, evidence-based recommendations founders can apply.",
    longDescription:
      "Kickstarter was considering a consulting service for founders: this project produced the initial data-backed playbook.\n\nI cleaned and structured a large Kickstarter dataset in Excel, then used pivot analysis and charts to compare success rates and outcomes across categories and campaign design choices (goal setting, duration, and engagement). Key findings linked success to realistic goals, more funding levels (driving more backers), and active communication: successful projects posted far more updates and received far more comments, while simply running longer didn’t help. I summarised these insights into concise, practical recommendations founders can use when launching a campaign.",
    tags: [TOOL.EXCEL],
    links: {
      tableau: null,
      github: "https://github.com/JamieTighe/kickstarter-campaign-success-excel-analysis",
      report: null,
    },
    image: kickstarterImg,
    imageAlt: "Cover image for Kickstarter campaign success analysis.",
    highlights: [
      "Converted messy campaign data into decision-ready KPIs.",
      "Compared success rates by category, goal size, duration, and engagement.",
      "Produced a founder-friendly checklist of launch recommendations.",
    ],
  },

  // SQL
  {
    id: "adventureworks-marketing",
    title: "AdventureWorks — Marketing Budget Allocation (SQL)",
    hoverBlurb:
      "Used SQL on the AdventureWorks database to identify where marketing budget should go across products, categories, territories, and reps. Found Bikes drive revenue, Accessories/Clothing drive volume, and top territories include Southwest US, Canada and Northwest US.",
    longDescription:
      "This project used the AdventureWorks database to answer a practical question: how should a company allocate marketing budget for maximum impact?\n\nI wrote SQL queries joining sales transactions with product, vendor, territory, and employee tables to calculate revenue, units sold, seasonality, and performance by segment. Key insights showed Bikes dominate revenue, Accessories/Clothing drive unit volume, and sales are concentrated in territories such as Southwest US, Canada, and Northwest US: while Australia stood out as a growth opportunity. I also compared sales rep performance and commission bands, supporting targeted incentive and enablement efforts.",
    tags: [TOOL.SQL],
    links: {
      github: "https://github.com/JamieTighe/adventureworks-marketing-allocation-sql",
      tableau: null,
      report: null,
    },
    image: adventureworksImg,
    imageAlt: "Cover image for AdventureWorks marketing allocation analysis.",
    highlights: [
      "Joined sales, product, territory, vendor and rep tables to build KPIs.",
      "Segmented performance by category and region to guide budget focus.",
      "Identified concentration effects: top territories and top performers.",
    ],
  },
  {
    id: "hr-consulting-attrition",
    title: "HR Consulting — Workforce & Attrition Diagnostics (SQL)",
    hoverBlurb:
      "Analysed employee lifecycle metrics in SQL (headcount, tenure, hires, terminations) to understand workforce dynamics by year and region. Identified a scale-up period with elevated churn, supporting retention-focused recommendations.",
    longDescription:
      "In this project I acted as an HR consultant, using SQL to diagnose workforce trends and attrition patterns.\n\nI queried employee, business unit, and separation reason tables to calculate active headcount and average tenure, then broke down hires, “bad hires,” and terminations by year. The analysis highlighted a sharp scale-up period accompanied by higher churn. I summarised findings into practical recommendations: prioritise retention for early-tenure cohorts, monitor high-activity areas, and improve metric reliability by standardising definitions and snapshot logic.",
    tags: [TOOL.SQL],
    links: {
      github: "https://github.com/JamieTighe/hr-consulting-employee-lifecycle-sql",
      tableau: null,
      report: null,
    },
    image: hrImg,
    imageAlt: "Cover image for HR workforce and attrition diagnostics.",
    highlights: [
      "Built workforce KPIs: headcount, tenure, hires and terminations.",
      "Segmented trends across time and organisational structure.",
      "Produced retention-focused recommendations for early-tenure cohorts.",
    ],
  },
  {
    id: "lending-club-risk",
    title: "Lending Club — Loan Portfolio Risk Analysis (SQL)",
    hoverBlurb:
      "Profiled a consumer loan book in SQL: volumes, loan size, interest-rate gradients by risk grade, and late-loan rates. Produced stakeholder-ready insights to balance growth with risk controls.",
    longDescription:
      "This project used SQL to analyse Lending Club’s loan portfolio across purpose, risk grade, geography, and borrower characteristics.\n\nI wrote queries joining loan and borrower-related tables to compute volumes, average loan sizes, exposure by segment, and interest-rate patterns by grade. I then focused on delinquency: late loans were relatively small overall but clustered most strongly in mid-risk tiers, suggesting monitoring should concentrate there rather than only the highest-risk segment.",
    tags: [TOOL.SQL],
    links: {
      github: "https://github.com/JamieTighe/lending-club-loan-portfolio-sql",
      tableau: null,
      report: null,
    },
    image: lendingClubImg,
    imageAlt: "Cover image for Lending Club risk analysis.",
    highlights: [
      "Quantified exposure, loan sizes, and rates across risk grades.",
      "Identified where delinquency concentrates for better monitoring.",
      "Translated portfolio patterns into simple risk-control suggestions.",
    ],
  },
];

// ---------- small components ---------- //

function TableauLogoImg({ className = "h-6 w-6", alt = "Tableau" }) {
  return (
    <img
      src={tableauLogoImg}
      alt={alt}
      className={`${className} object-contain`}
      style={{ aspectRatio: "1 / 1" }}
    />
  );
}

function ToolPillDark({ children }) {
  return (
    <span className="inline-flex items-center text-[11px] rounded-full border border-white/20 bg-white/10 text-white px-2.5 py-1 backdrop-blur">
      {children}
    </span>
  );
}

function ToolPillLight({ children }) {
  return (
    <span className="inline-flex items-center text-[11px] rounded-full border border-slate-200 bg-slate-50 text-slate-700 px-2.5 py-1">
      {children}
    </span>
  );
}

function safeSplitParagraphs(text) {
  return String(text || "")
    .split("\n")
    .map((p) => p.trim())
    .filter(Boolean);
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur hover:bg-white/15 hover:border-white/30 transition"
    >
      <span className="transition-transform group-hover:scale-[1.06]">
        {children}
      </span>
    </a>
  );
}

// ---------- animated background ---------- //

function ConstellationBackground() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null });
  const rectRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = window.devicePixelRatio || 1;

    const isSmallScreen = window.innerWidth < 768;
    const NODE_COUNT = isSmallScreen ? 40 : 78;
    const MAX_LINE_DIST = 170;

    const BASE_SPEED = 0.22;
    const MAX_SPEED = 0.85;
    const JITTER = 0.012;
    const FRICTION = 0.985;

    const MOUSE_RADIUS = 230;
    const MOUSE_FORCE = 0.42;

    const EDGE_PAD = 4;
    const BOUNCE = 0.92;

    let lastTs = performance.now();
    const nodes = [];

    const updateRect = () => {
      rectRef.current = canvas.getBoundingClientRect();
    };

    const setupCanvasSize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const r = parent.getBoundingClientRect();
      width = Math.max(1, Math.floor(r.width));
      height = Math.max(1, Math.floor(r.height));

      dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      updateRect();

      for (const n of nodes) {
        n.x = Math.min(Math.max(n.x, EDGE_PAD), width - EDGE_PAD);
        n.y = Math.min(Math.max(n.y, EDGE_PAD), height - EDGE_PAD);
      }
    };

    const seedNodesIfEmpty = () => {
      if (nodes.length) return;
      for (let i = 0; i < NODE_COUNT; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = BASE_SPEED * (0.7 + Math.random() * 0.8);
        const baseRadius = 1.3 + Math.random() * 2.0;
        const isBig = Math.random() < 0.18;

        nodes.push({
          x: EDGE_PAD + Math.random() * (width - EDGE_PAD * 2),
          y: EDGE_PAD + Math.random() * (height - EDGE_PAD * 2),
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: isBig ? baseRadius * 2.1 : baseRadius,
        });
      }
    };

    const handleMouseMove = (e) => {
      const rect = rectRef.current || canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
        mouseRef.current.x = null;
        mouseRef.current.y = null;
        return;
      }
      mouseRef.current.x = x;
      mouseRef.current.y = y;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    const updateNodes = (dt) => {
      const mouse = mouseRef.current;
      const friction = Math.pow(FRICTION, dt);

      for (const node of nodes) {
        node.vx += (Math.random() - 0.5) * JITTER * dt;
        node.vy += (Math.random() - 0.5) * JITTER * dt;

        node.vx *= friction;
        node.vy *= friction;

        if (mouse.x != null && mouse.y != null) {
          const dx = node.x - mouse.x;
          const dy = node.y - mouse.y;
          const dist = Math.hypot(dx, dy) || 1;

          if (dist < MOUSE_RADIUS) {
            const t = 1 - dist / MOUSE_RADIUS;
            const force = t * t * MOUSE_FORCE * dt;
            node.vx += (dx / dist) * force;
            node.vy += (dy / dist) * force;
          }
        }

        const sp = Math.hypot(node.vx, node.vy) || 1;
        if (sp < BASE_SPEED) {
          const f = (BASE_SPEED / sp) * 0.6;
          node.vx *= f;
          node.vy *= f;
        } else if (sp > MAX_SPEED) {
          const f = MAX_SPEED / sp;
          node.vx *= f;
          node.vy *= f;
        }

        node.x += node.vx * dt;
        node.y += node.vy * dt;

        if (node.x < EDGE_PAD) {
          node.x = EDGE_PAD;
          node.vx = Math.abs(node.vx) * BOUNCE;
        } else if (node.x > width - EDGE_PAD) {
          node.x = width - EDGE_PAD;
          node.vx = -Math.abs(node.vx) * BOUNCE;
        }

        if (node.y < EDGE_PAD) {
          node.y = EDGE_PAD;
          node.vy = Math.abs(node.vy) * BOUNCE;
        } else if (node.y > height - EDGE_PAD) {
          node.y = height - EDGE_PAD;
          node.vy = -Math.abs(node.vy) * BOUNCE;
        }
      }
    };

    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < MAX_LINE_DIST) {
            const t = 1 - dist / MAX_LINE_DIST;
            const alpha = 0.12 + 0.24 * t;
            const lineWidth = 0.6 + 0.8 * t;
            ctx.strokeStyle = `rgba(226,232,240,${alpha})`;
            ctx.lineWidth = lineWidth;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const node of nodes) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(226,232,240,0.70)";
        ctx.fill();
      }
    };

    const loop = (ts) => {
      const dt = Math.min(2, (ts - lastTs) / 16.67);
      lastTs = ts;

      if (width > 1 && height > 1) {
        seedNodesIfEmpty();
        updateNodes(dt);
        drawFrame();
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    setupCanvasSize();

    const ro = new ResizeObserver(() => setupCanvasSize());
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    window.addEventListener("resize", setupCanvasSize, { passive: true });
    window.addEventListener("scroll", updateRect, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("blur", handleMouseLeave);
    window.addEventListener("mouseout", (e) => {
      if (!e.relatedTarget) handleMouseLeave();
    });

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      window.removeEventListener("resize", setupCanvasSize);
      window.removeEventListener("scroll", updateRect);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("blur", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 block h-full w-full opacity-45"
    />
  );
}

// ---------- layout components ---------- //

function NavBar({ activeSection, onNavClick }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-30 transition-all ${
        isScrolled
          ? "py-2 bg-slate-950/90 backdrop-blur border-b border-white/10"
          : "py-3 bg-slate-950/70 backdrop-blur border-b border-white/10"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between gap-4">
        <button
          onClick={() => onNavClick("home")}
          className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-white"
        >
          JAMIE TIGHE
        </button>

        <nav className="hidden sm:flex items-center gap-6 text-sm text-white/70">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => onNavClick(item.target)}
              className={`relative pb-1 transition-colors ${
                activeSection === item.target ? "text-white" : "hover:text-white"
              }`}
            >
              {item.label}
              {activeSection === item.target && (
                <span className="absolute left-0 right-0 -bottom-0.5 h-[2px] rounded-full bg-brand" />
              )}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(1100px_circle_at_30%_20%,rgba(56,189,248,0.25),transparent_55%),radial-gradient(900px_circle_at_70%_60%,rgba(99,102,241,0.22),transparent_52%),linear-gradient(180deg,#020617_0%,#0B1220_35%,#020617_100%)]" />
      <ConstellationBackground />
      <div className="pointer-events-none absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:22px_22px]" />

      <div className="relative max-w-5xl mx-auto px-4 pt-28 pb-16 text-center">
        <p className="text-xs font-medium tracking-[0.25em] uppercase text-white">
          Data Analyst · London, UK
        </p>

        <h1 className="mt-4 font-heading text-4xl sm:text-5xl md:text-6xl font-semibold text-white">
          Jamie Tighe
        </h1>

        <div className="mt-5 h-px w-20 mx-auto bg-white/20" />

        <p className="mt-5 max-w-2xl mx-auto text-sm sm:text-base text-white/75 leading-relaxed">
          Engineering graduate turned data analyst. I turn{" "}
          <span className="text-white">real-world mess</span> into{" "}
          <span className="text-white">decision-ready outputs</span>: clean
          tables, sharp KPIs, and dashboards people rely on.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <SocialIcon href="https://github.com/JamieTighe" label="GitHub">
            <FaGithub className="text-xl text-[#181717]" />
          </SocialIcon>

          <SocialIcon
            href="https://public.tableau.com/app/profile/jamie.tighe/vizzes"
            label="Tableau Public"
          >
            <TableauLogoImg className="h-7 w-7" />
          </SocialIcon>

          <SocialIcon
            href="https://www.linkedin.com/in/jamietighe98/"
            label="LinkedIn"
          >
            <FaLinkedin className="text-xl text-[#0A66C2]" />
          </SocialIcon>
        </div>

        <div className="mt-10 flex items-center justify-center">
          <button
            onClick={() => {
              const el = document.getElementById("projects");
              if (!el) return;
              const header = document.querySelector("header");
              const navHeight = header ? header.offsetHeight : 64;
              const top =
                el.getBoundingClientRect().top + window.scrollY - navHeight;
              window.scrollTo({ top, behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/15 px-6 py-2.5 text-sm font-medium text-white hover:bg-white/20 transition"
          >
            View projects
          </button>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-slate-50">
      <div className="max-w-6xl mx-auto w-full px-4 py-20">
        <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-10 items-start">
          <div className="flex justify-center">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-3xl overflow-hidden shadow-lg border border-white/60 bg-white">
              <img
                src={headshotImg}
                alt="Jamie Tighe headshot"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              About me
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-slate-900">
              Analytical, practical, stakeholder-focused
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              I enjoy working with real-world datasets, building reproducible
              workflows and presenting insights clearly to non-technical
              stakeholders. My background in engineering shaped how I think:
              define the problem, validate assumptions, and communicate
              solutions simply.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------- Projects ---------------- //

function ProjectsSection() {
  const [activeTag, setActiveTag] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filterTags = useMemo(() => {
    const order = ["All", TOOL.SQL, TOOL.PYTHON, TOOL.TABLEAU, TOOL.EXCEL];
    const present = new Set(projects.flatMap((p) => p.tags || []));
    return order.filter((t) => t === "All" || present.has(t));
  }, []);

  const visibleProjects =
    activeTag === "All"
      ? projects
      : projects.filter((p) => (p.tags || []).includes(activeTag));

  return (
    <section id="projects" className="scroll-mt-24 py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-slate-900">
          Selected projects
        </h2>
        <p className="mt-2 text-sm text-slate-600 max-w-2xl">
          End-to-end projects across Excel, SQL, Python and Tableau: focused on
          clean analysis, clear storytelling, and stakeholder-ready outputs.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {filterTags.map((tag) => {
            const isActive = activeTag === tag;
            return (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                  isActive
                    ? "bg-slate-950 text-white border-slate-950 shadow-sm"
                    : "border-slate-300 text-slate-700 hover:bg-slate-50"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

function ProjectCard({ project, onOpen }) {
  const fallbackTitle = project.title || "Project";
  const hoverText = project.hoverBlurb || project.description || "";

  return (
    <article
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all"
      onClick={() => onOpen(project)}
      role="button"
      tabIndex={0}
      aria-label={`Open project: ${fallbackTitle}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onOpen(project);
      }}
    >
      <div className="relative aspect-[4/3] bg-slate-100">
        {project.image ? (
          <img
            src={project.image}
            alt={project.imageAlt || fallbackTitle}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
            <div className="text-center px-6">
              <div className="text-xs font-medium tracking-[0.18em] uppercase text-slate-500">
                Project
              </div>
              <div className="mt-2 text-base font-semibold text-slate-800">
                {fallbackTitle}
              </div>
            </div>
          </div>
        )}

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-slate-950/80 backdrop-blur-md">
          <div className="flex h-full flex-col items-center justify-center px-6 text-center">
            <h3 className="font-heading text-base sm:text-lg font-semibold text-white">
              {fallbackTitle}
            </h3>
            <p className="mt-2 max-w-sm text-[12px] sm:text-sm text-slate-100/90 leading-relaxed">
              {hoverText}
            </p>

            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {(project.tags || []).slice(0, 4).map((t) => (
                <ToolPillDark key={t}>{t}</ToolPillDark>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

// ---------------- Modal ---------------- //

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const hasEmbed =
    typeof project.embedUrl === "string" && project.embedUrl.startsWith("http");
  const hasTableau = !!project.links?.tableau && project.links.tableau !== "#";
  const hasGithub = !!project.links?.github && project.links.github !== "#";

  const paragraphs = safeSplitParagraphs(project.longDescription);

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} details`}
    >
      {/* smaller modal so you can see top & bottom */}
      <div
        className="relative mx-4 w-full max-w-5xl rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
          aria-label="Close modal"
        >
          ×
        </button>

        <div className="p-6 sm:p-8">
          {/* Title + links */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
              {project.title}
            </h3>

            <div className="mt-3 flex flex-wrap items-center gap-3">
              {hasTableau && (
                <a
                  href={project.links.tableau}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm hover:bg-slate-50 hover:border-slate-300"
                >
                  <TableauLogoImg className="h-5 w-5" />
                  <span>View</span>
                  <FiExternalLink className="opacity-70" />
                </a>
              )}

              {hasGithub && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm hover:bg-slate-50 hover:border-slate-300"
                >
                  <FaGithub className="text-lg" />
                  <span>Code</span>
                  <FiExternalLink className="opacity-70" />
                </a>
              )}
            </div>
          </div>

          {/* 2-column layout */}
          <div className="mt-6 grid gap-6 lg:grid-cols-[420px_1fr] items-start">
            {/* Left: image */}
            <div className="rounded-2xl overflow-hidden bg-white">
              {hasEmbed ? (
                <iframe
                  title={`${project.title} dashboard`}
                  src={project.embedUrl}
                  className="w-full h-[260px] lg:h-[320px]"
                  frameBorder="0"
                  allowFullScreen
                />
              ) : project.image ? (
                <img
                  src={project.image}
                  alt={project.imageAlt || project.title}
                  className="w-full h-[260px] lg:h-[320px] object-cover"
                />
              ) : (
                <div className="w-full h-[260px] lg:h-[320px] flex items-center justify-center text-sm text-slate-600">
                  Add an image in <code className="mx-1">src/assets</code>
                </div>
              )}
            </div>

            {/* Right: text */}
            <div className="flex flex-col gap-4">
              {/* Tools */}
              <div className="flex flex-wrap gap-2">
                {(project.tags || []).map((t) => (
                  <ToolPillLight key={t}>{t}</ToolPillLight>
                ))}
              </div>

              {/* Blurb */}
              {project.hoverBlurb && (
                <p className="text-sm text-slate-600 leading-relaxed">
                  {project.hoverBlurb}
                </p>
              )}

              {/* Long description */}
              {paragraphs.length > 0 && (
                <div className="space-y-3 text-sm text-slate-700">
                  {paragraphs.map((p, i) => (
                    <p key={i} className="leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              )}

              {/* Highlights */}
              {Array.isArray(project.highlights) &&
                project.highlights.length > 0 && (
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                      Key highlights
                    </div>
                    <ul className="mt-2 space-y-1 text-sm text-slate-700 list-disc pl-5">
                      {project.highlights.map((h, idx) => (
                        <li key={idx}>{h}</li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------- Skills & Tools (no Power BI, no pills) ---------------- //

function SkillsSection() {
  const skills = [
    {
      title: "SQL",
      text: "Joins, CTEs, window functions, KPI definition, building clean tables for analysis.",
    },
    {
      title: "Python",
      text: "Pandas-based cleaning, reproducible pipelines, and turning raw data into analysis-ready datasets.",
    },
    {
      title: "Tableau",
      text: "Interactive dashboards and storytelling with strong hierarchy, tooltips, and maps.",
    },
    {
      title: "Excel",
      text: "Feature engineering, pivot analysis, and translating findings into practical recommendations.",
    },
  ];

  return (
    <section id="skills" className="scroll-mt-24 py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-slate-900">
          Skills & tools
        </h2>
        <p className="mt-2 text-sm text-slate-600 max-w-2xl">
          The tools I use to take a project from raw data → insight → dashboard.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-white/60 bg-white/70 backdrop-blur p-5 shadow-sm"
            >
              <div className="font-semibold text-slate-900">{s.title}</div>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------- Interests ---------------- //

function InterestsSection() {
  const items = [
    {
      icon: "🏃‍♂️",
      title: "Running & fitness",
      text: "Training for a half marathon and keeping the gym ticking over between runs.",
    },
    {
      icon: "🍽️",
      title: "Food",
      text: "Always hunting for great food. I keep a running list of London spots to try.",
    },
    {
      icon: "♟️",
      title: "Chess",
      text: "Rapid games, a bit of tactics, and a long-term plan to actually improve.",
    },
    {
      icon: "✈️",
      title: "Travel",
      text: "I’ve travelled around South America and Southeast Asia. Plenty more on the list.",
    },
  ];

  return (
    <section id="interests" className="scroll-mt-24 py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-slate-900">
          Beyond data
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          A few things I enjoy outside of work.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="text-2xl">{item.icon}</div>
              <div className="mt-2 font-semibold text-slate-900">
                {item.title}
              </div>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 py-16 bg-slate-950 text-white border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold">
            Let&apos;s work together
          </h2>
          <p className="mt-2 text-sm text-white/70 max-w-xl">
            I&apos;m currently looking for data analyst roles in London and
            remote. If my projects look relevant, I&apos;d love to hear from
            you.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:jamie.tighe@hotmail.co.uk?subject=Website%20enquiry"
            className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium hover:bg-white/10 transition"
          >
            Email me
          </a>

          <a
            href="https://www.linkedin.com/in/jamietighe98/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium hover:bg-white/10 transition"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>

      <div className="mt-10 text-center text-[11px] text-white/50">
        © {new Date().getFullYear()} Jamie Tighe. Built with React &amp;
        Tailwind.
      </div>
    </section>
  );
}

// ------------- main app --------------- //

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const header = document.querySelector("header");
    const navHeight = header ? header.offsetHeight : 64;

    const elementTop = el.getBoundingClientRect().top + window.scrollY;
    const offsetTop = elementTop - navHeight;

    window.scrollTo({ top: offsetTop, behavior: "smooth" });
  };

  useEffect(() => {
    const sectionIds = ["home", "about", "projects", "skills", "interests", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;

        const mostVisible = visible.reduce((prev, curr) =>
          prev.intersectionRatio > curr.intersectionRatio ? prev : curr
        );
        setActiveSection(mostVisible.target.id);
      },
      { threshold: 0.5 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavBar activeSection={activeSection} onNavClick={scrollToSection} />

      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <InterestsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
