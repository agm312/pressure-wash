import React from "react";
import FAQSection from "@/components/DrivewayFAQSection";

export const metadata = {
  title: "Can You Pressure Wash Concrete Driveways? Tips & Safety",
  description:
    "Learn whether you can pressure wash concrete driveways safely, avoid damage, and achieve a pristine finish. Expert tips for homeowners in Chicago.",
  openGraph: {
    title: "Can You Pressure Wash Concrete Driveways? Tips & Safety",
    description:
      "Learn whether you can pressure wash concrete driveways safely, avoid damage, and achieve a pristine finish. Expert tips for homeowners in Chicago.",
    url: "https://chipressurewash.com/can-you-pressure-wash-concrete-driveways.html",
    images: [
      {
        url: "/images/can-you-pressure-wash-concrete-driveway.jpg",
        alt: "Pressure washing a concrete driveway",
      },
    ],
  },
  alternates: {
    canonical: "https://chipressurewash.com/can-you-pressure-wash-concrete-driveways.html",
  },
};

const tocSections = [
  { id: "why-pressure-wash", title: "Why Pressure Wash Concrete Driveways?" },
  { id: "is-it-safe", title: "Is It Safe to Pressure Wash Concrete Driveways?" },
  { id: "benefits", title: "Benefits of Pressure Washing" },
  { id: "step-by-step-guide", title: "Step‑by‑Step Guide" },
  { id: "common-mistakes", title: "Common Mistakes to Avoid" },
  { id: "frequency", title: "How Often Should You Pressure Wash" },
  { id: "faqs", title: "Frequently Asked Questions" },
];

export default function CanYouPressureWashConcreteDrivewaysPage() {
  return (
    <>
      <style>{`
        body { background: #f4f7fb; }
        .blog-container {
          background: #fff;
          max-width: 820px;
          margin: 2.5rem auto 2rem auto;
          border-radius: 1.25rem;
          box-shadow: 0 8px 32px rgba(0,0,0,0.10);
          padding: 2.5rem 1.5rem 2rem 1.5rem;
        }
        header { text-align: center; margin-bottom: 2rem; }
        h1 { font-size: 2.3rem; font-weight: 800; margin-bottom: 1.2rem; }
        h2 { font-size: 1.5rem; font-weight: 700; margin-top: 2.5rem; margin-bottom: 1rem; }
        h3 { font-size: 1.15rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.5rem; }
        img.blog-image {
          display: block;
          margin: 0 auto 1.2rem auto;
          border-radius: 1rem;
          box-shadow: 0 4px 16px rgba(23,78,166,0.10);
          max-width: 100%;
          max-height: 340px;
          object-fit: cover;
        }
        .caption {
          text-align: center;
          color: #4b5563;
          font-size: 1rem;
          margin-bottom: 1.5rem;
        }
        .toc-card {
          background: #e8f0fe;
          border-radius: 0.75rem;
          padding: 2rem 1.5rem 1.5rem 1.5rem;
          margin-bottom: 2.5rem;
        }
        .toc-title {
          font-size: 1.18rem;
          font-weight: 700;
          color: #174ea6;
          margin-bottom: 1.1rem;
        }
        .toc-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .toc-list li {
          margin-bottom: 0.7rem;
        }
        .toc-link {
          display: flex;
          align-items: center;
          color: #2563eb;
          font-weight: 500;
          font-size: 1.07rem;
          text-decoration: none;
          border-radius: 0.5rem;
          padding: 0.35rem 0.5rem;
          transition: background 0.15s, color 0.15s;
        }
        .toc-link:hover {
          background: #dbeafe;
          color: #174ea6;
        }
        .toc-arrow {
          width: 1.1em;
          height: 1.1em;
          margin-right: 0.6em;
          stroke: #2563eb;
          flex-shrink: 0;
        }
        @media (max-width: 600px) {
          .blog-container { padding: 1rem 0.5rem; }
          .toc-card { padding: 1.2rem 0.7rem 1rem 0.7rem; }
        }
        main { font-size: 1.08rem; line-height: 1.7; color: #222; }
        ul.bullets { list-style: disc; margin-left: 1.5rem; }
        footer { text-align: center; color: #6b7280; font-size: 0.98rem; margin-top: 2.5rem; }
      `}</style>
      <div className="blog-container">
        <header>
          <h1>Can You Pressure Wash Concrete Driveways?</h1>
          <img
            src="/images/concrete-driveways-new.png"
            alt="Pressure washing a concrete driveway"
            className="blog-image"
            loading="lazy"
          />
        </header>
        <nav className="toc-card" aria-label="Table of Contents">
          <div className="toc-title">Table of Contents</div>
          <ul className="toc-list">
            {tocSections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="toc-link">
                  <svg className="toc-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <main>
          <section id="why-pressure-wash">
            <h2>Why Pressure Wash Concrete Driveways?</h2>
            <p>
              Concrete driveways collect dirt, oil stains, and mildew over time, making them look worn and reducing curb appeal. So, can you pressure wash concrete driveways? Yes—if done correctly, you can pressure wash concrete driveways safely and restore their clean, bright appearance.
            </p>
          </section>
          <section id="is-it-safe">
            <h2>Is It Safe to Pressure Wash Concrete Driveways?</h2>
            <h3>Equipment & PSI Recommendations</h3>
            <p>
              For best results, use a pressure washer rated between 2,500 and 3,000 PSI with a 25° nozzle for concrete. Using too high of a PSI or a narrow nozzle can etch or damage the surface, so always check your settings. When asking, "can you pressure wash concrete driveways," remember that proper equipment is key to safety.
            </p>
            <h3>Protective Measures</h3>
            <p>
              Always wear protective eyewear and gloves, and avoid spraying near wood or vinyl trim. Keep the nozzle at least 10–12 inches from the surface to prevent chipping or accidental damage.
            </p>
          </section>
          <section id="benefits">
            <h2>Benefits of Pressure Washing</h2>
            <p>
              Pressure washing removes stubborn oil, rust, and tire marks, instantly improving your driveway's curb appeal. Regular cleaning also helps prevent mold and algae buildup, which can make surfaces slippery and unsightly.
            </p>
            <p>
              Concrete driveway cleaning not only keeps your property looking its best, but also extends the lifespan of your driveway by removing damaging contaminants.
            </p>
          </section>
          <section id="step-by-step-guide">
            <h2>Step‑by‑Step Guide</h2>
            <h3>Prepare the Driveway</h3>
            <p>
              Start by clearing away vehicles, toys, and debris, then sweep loose dirt and cover any nearby plants to protect them from spray or detergent.
            </p>
            <h3>Choose the Right Nozzle & Detergent</h3>
            <p>
              Select a 25° or 40° nozzle for even cleaning, and use a mild concrete cleaner designed for outdoor use.
            </p>
            <h3>Pressure Washing Technique</h3>
            <p>
              Hold the wand at a 45° angle and move in steady, overlapping passes, keeping the tip 10–12 inches from the surface. Can you pressure wash concrete driveways with this method? Absolutely—just maintain a consistent distance and pace for best results.
            </p>
            <h3>Rinse & Inspect</h3>
            <p>
              Rinse away all detergent thoroughly, then inspect for any lingering stains. Repeat the process on tough spots as needed for a spotless finish.
            </p>
          </section>
          <section id="common-mistakes">
            <h2>Common Mistakes to Avoid</h2>
            <ul className="bullets">
              <li>
                Using too narrow of a nozzle at close range—this can etch the concrete.
              </li>
              <li>
                Skipping a test spot—always test a small area before cleaning the entire driveway.
              </li>
              <li>
                Ignoring cracks—pressure can worsen existing cracks if you don't seal them first.
              </li>
              <li>
                Forgetting to move slowly—rushing may leave uneven cleaning lines.
              </li>
            </ul>
          </section>
          <section id="frequency">
            <h2>How Often Should You Pressure Wash</h2>
            <p>
              Most homeowners should pressure wash their concrete driveway every 12 to 18 months, depending on climate and usage. Following pressure washing safety guidelines ensures your driveway stays clean and damage-free year-round.
            </p>
          </section>
          <section id="faqs">
            <FAQSection />
          </section>
        </main>
        <footer>
        </footer>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Concrete Driveway Pressure Washing",
            areaServed: { "@type": "City", name: "Chicago, IL" },
            url: "https://chipressurewash.com/can-you-pressure-wash-concrete-driveways.html",
          }),
        }}
      />
    </>
  );
} 