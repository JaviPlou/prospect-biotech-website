import React from "react";

const papers = [
  {
    id: "paper-2020",
    number: "01",
    journal: "Advanced Functional Materials",
    year: "2020",
    authors: "Javier Plou et al.",
    title:
      "Multiplex SERS Detection of Metabolic Alterations in Tumor Extracellular Media",
    description:
      "Detection of extracellular metabolites and imaging of metabolic changes associated with cellular stress in tumor models.",
    doi: "10.1002/adfm.201910335",
  },
  {
    id: "paper-small",
    number: "02",
    journal: "Small",
    year: "2023",
    authors: "Javier Plou et al.",
    title:
      "Machine Learning-Assisted High-Throughput SERS Classification of Cell Secretomes",
    description:
      "SERS, microfluidics and machine learning to investigate secretome changes under different cellular stress conditions.",
    doi: "10.1002/smll.202207658",
  },
  {
    id: "paper-pnas",
    number: "03",
    journal: "PNAS",
    year: "2023",
    authors: "Pablo S. Valera, Javier Plou et al.",
    title:
      "SERS analysis of cancer cell-secreted purines reveals a unique paracrine crosstalk in MTAP-deficient tumors",
    description:
      "SERS reveals exchanges of purine metabolites between cancer cells and their microenvironment.",
    doi: "10.1073/pnas.2311674120",
  },
];

function Arrow({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Prospect Biotech home">
      <img
        src={`${process.env.PUBLIC_URL || "."}/assets/prospect-logo.png`}
        alt="Prospect Biotech"
        width="170"
        height="96"
      />
    </a>
  );
}
function NavLinks() {
  return (
    <>
      <a href="#bioprocess">Bioprocess</a>
      <a href="#health">Health</a>
      <a href="#technology">Technology</a>
      <a href="#science">Our science</a>
    </>
  );
}
function SignalIllustration() {
  return (
    <figure className="signal-figure">
      <div className="figure-heading">
        <span className="eyebrow">The extracellular perspective</span>
        <span className="figure-index">FIG. 01</span>
      </div>
      <svg
        className="cell-diagram"
        viewBox="0 0 550 355"
        role="img"
        aria-labelledby="cell-title cell-desc"
      >
        <title id="cell-title">
          From cellular stress to extracellular metabolites
        </title>
        <desc id="cell-desc">
          Conceptual illustration of a cell, metabolites in its surroundings and
          a SERS sensing surface. It represents a sensing principle, not
          measured data.
        </desc>
        <defs>
          <radialGradient id="cell-fill">
            <stop offset="0" stopColor="#f8fcf8" />
            <stop offset="0.72" stopColor="#e0ebe4" />
            <stop offset="1" stopColor="#adccc0" />
          </radialGradient>
          <radialGradient id="nucleus-fill">
            <stop stopColor="#d9e7df" />
            <stop offset="1" stopColor="#729d8a" />
          </radialGradient>
        </defs>
        <circle
          cx="200"
          cy="164"
          r="133"
          fill="none"
          stroke="#d5ddd6"
          strokeDasharray="3 7"
        />
        <circle cx="200" cy="164" r="105" fill="none" stroke="#d5ddd6" />
        <path
          d="M196 77c52-9 96 31 99 82s-32 94-83 96-99-30-104-79 35-90 88-99Z"
          fill="url(#cell-fill)"
          stroke="#91b3a1"
          strokeWidth="1.5"
        />
        <path
          d="M208 84c-50-1-92 34-92 81 0 46 38 83 86 82"
          fill="none"
          stroke="#fff"
          strokeWidth="3"
          opacity=".75"
        />
        <ellipse
          cx="193"
          cy="162"
          rx="39"
          ry="35"
          fill="url(#nucleus-fill)"
          stroke="#779d89"
        />
        <circle cx="200" cy="153" r="11" fill="#7ca58e" opacity=".5" />
        <g fill="none" stroke="#739987" strokeWidth="2" opacity=".6">
          <path d="m146 130 9-6 7 5m66 76 10-6 8 5m-101-9 7 5 6-5m89-59 8 4 5-7" />
        </g>
        <g stroke="#adbcb2" fill="none">
          <path d="M82 50h65l13 26" />
          <path d="M306 151h72l20-27h94" />
          <path d="M319 271h63l18 21h90" />
        </g>
        <text x="46" y="40" fill="#526357" fontSize="12">
          Cellular stress
        </text>
        <text x="400" y="112" fill="#526357" fontSize="12">
          Released metabolites
        </text>
        <g fill="#d27348" stroke="#faf9f4" strokeWidth="3">
          <circle cx="312" cy="151" r="6" />
          <circle cx="336" cy="185" r="5" />
          <circle cx="292" cy="228" r="6" />
          <circle cx="366" cy="222" r="5" />
          <circle cx="272" cy="74" r="5" />
          <circle cx="302" cy="273" r="6" />
          <circle cx="127" cy="266" r="5" />
        </g>
        <path
          d="m337 245 0 39m-5-5 5 5 5-5"
          stroke="#849689"
          strokeDasharray="3 4"
          fill="none"
        />
        <g fill="#c0aa76" stroke="#a58e59">
          <circle cx="257" cy="309" r="12" />
          <circle cx="284" cy="309" r="12" />
          <circle cx="311" cy="309" r="12" />
          <circle cx="338" cy="309" r="12" />
          <circle cx="365" cy="309" r="12" />
        </g>
        <path d="M240 325h142" stroke="#88998c" strokeWidth="2" />
        <text x="400" y="310" fill="#526357" fontSize="12">
          SERS surface
        </text>
        <circle cx="324" cy="293" r="5" fill="#d27348" />
      </svg>
      <div className="signal-caption">
        <span className="dot" /> Small molecules. A different view of cell
        state.
      </div>
      <figcaption>Conceptual illustration · not experimental data</figcaption>
    </figure>
  );
}
function ProcessGraphic({ health = false }) {
  return (
    <svg
      className="pathway-graphic"
      viewBox="0 0 500 120"
      aria-hidden="true"
      fill="none"
    >
      {health ? (
        <g stroke="currentColor" strokeWidth="1.5">
          <circle cx="85" cy="57" r="27" />
          <circle cx="84" cy="58" r="9" />
          <circle cx="111" cy="30" r="17" />
          <circle cx="112" cy="30" r="5" />
          <circle cx="119" cy="78" r="20" />
          <circle cx="117" cy="78" r="6" />
          <path d="M158 58h63m-7-5 7 5-7 5" />
        </g>
      ) : (
        <g stroke="currentColor" strokeWidth="1.5">
          <path d="M68 19h47M76 20v15c-20 14-20 23-20 42 0 15 69 15 69 0 0-19 0-28-19-42V20M58 63h65M91 5v71m-14-4h28M91 42h41v17h17M164 58h57m-7-5 7 5-7 5" />
          <circle cx="73" cy="72" r="2" />
          <circle cx="111" cy="81" r="2" />
        </g>
      )}
      <g stroke="currentColor" strokeWidth="1.5">
        <rect x="244" y="35" width="46" height="46" rx="7" />
        <circle cx="257" cy="48" r="3" />
        <circle cx="277" cy="48" r="3" />
        <circle cx="257" cy="68" r="3" />
        <circle cx="277" cy="68" r="3" />
        <path d="M311 58h40m-7-5 7 5-7 5M376 23v66h95" />
        <path d="m381 75 15-3 6-20 7 23 14-6 7-32 6 29 12-4 6-13 6 18 11-6" />
      </g>
      <g fill="currentColor" fontSize="10">
        <text x="55" y="113">
          {health ? "BIOLOGICAL MODELS" : "CELL CULTURE"}
        </text>
        <text x="246" y="113">
          SERS
        </text>
        <text x="377" y="113">
          METABOLIC INSIGHT
        </text>
      </g>
    </svg>
  );
}
export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header" id="top">
        <div className="container header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            <NavLinks />
          </nav>
          <a className="header-contact" href="#contact">
            Let’s talk <Arrow diagonal />
          </a>
          <details className="mobile-nav">
            <summary aria-label="Navigation menu">
              Menu <span aria-hidden="true">+</span>
            </summary>
            <nav aria-label="Mobile navigation">
              <NavLinks />
              <a href="#contact">Let’s talk</a>
            </nav>
          </details>
        </div>
      </header>
      <main id="main">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="dot" /> Metabolic insight, beyond the obvious
            </p>
            <h1 id="hero-title">
              Cellular stress.
              <br />
              <span>A clearer signal.</span>
            </h1>
            <p className="hero-description">
              Cells tell a story through the metabolites they release. We
              develop SERS technology to bring these often-overlooked signals
              into focus.
            </p>
            <a className="button button-dark" href="#applications">
              Discover our two fields <Arrow />
            </a>
            <a className="quiet-link" href="#metabolites">
              Why stress metabolites? <span aria-hidden="true">↘</span>
            </a>
          </div>
          <SignalIllustration />
        </section>
        <div className="intro-band">
          <div className="container intro-band-inner">
            <span>ONE TECHNOLOGY. TWO FIELDS OF IMPACT.</span>
            <a href="#bioprocess">
              Prospect <strong>Bioprocess</strong> <Arrow diagonal />
            </a>
            <a href="#health">
              Prospect <strong>Health</strong> <Arrow diagonal />
            </a>
          </div>
        </div>
        <section
          className="section container"
          id="metabolites"
          aria-labelledby="metabolite-title"
        >
          <div className="section-heading">
            <p className="eyebrow">01 / The signals that matter</p>
            <div>
              <h2 id="metabolite-title">
                There is more to cell state
                <br />
                than glucose and lactate.
              </h2>
              <p>
                Stress can change the molecules cells release into their
                surroundings. These extracellular metabolites offer a
                complementary view of what is happening inside.
              </p>
            </div>
          </div>
          <div className="metabolite-layout">
            <div className="metabolite-statement">
              <span className="small-label">OUR FOCUS</span>
              <h3>
                Small molecules.
                <br />
                Meaningful changes.
              </h3>
              <p>
                Purine metabolites can reveal shifts in cell metabolism and
                stress responses. Their interpretation depends on the biological
                model and experimental conditions.
              </p>
              <a className="text-link" href="#science">
                Explore the published research <Arrow diagonal />
              </a>
            </div>
            <div className="metabolite-list">
              <details open>
                <summary>
                  <span>
                    <span className="metabolite-index">01</span> Hypoxanthine
                  </span>
                  <span className="detail-plus" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="detail-content">
                  <span className="small-label">
                    PURINE METABOLISM & CELLULAR STRESS
                  </span>
                  <p>
                    Extracellular hypoxanthine accumulation was observed during
                    stress-induced cell death in the tumor models studied. SERS
                    made these changes accessible through their spectral
                    signatures.
                  </p>
                  <a href="#paper-2020">
                    Plou et al. · 2020 <Arrow diagonal />
                  </a>
                </div>
              </details>
              <details>
                <summary>
                  <span>
                    <span className="metabolite-index">02</span> Adenine &
                    related purines
                  </span>
                  <span className="detail-plus" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="detail-content">
                  <span className="small-label">
                    A BROADER METABOLIC PICTURE
                  </span>
                  <p>
                    Adenine-related and hypoxanthine-related signals help
                    investigate changes in extracellular purine profiles. They
                    are part of a molecular pattern, rather than a universal
                    readout of stress.
                  </p>
                  <a href="#paper-2020">
                    Plou et al. · 2020 <Arrow diagonal />
                  </a>
                </div>
              </details>
              <details>
                <summary>
                  <span>
                    <span className="metabolite-index">03</span>{" "}
                    Methylthioadenosine (MTA)
                  </span>
                  <span className="detail-plus" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="detail-content">
                  <span className="small-label">METABOLIC COMMUNICATION</span>
                  <p>
                    In MTAP-deficient cancer models, SERS tracked secreted MTA
                    and its metabolism by fibroblasts. This extends the
                    perspective from cellular stress to communication between
                    cells.
                  </p>
                  <a href="#paper-pnas">
                    Valera, Plou et al. · 2023 <Arrow diagonal />
                  </a>
                </div>
              </details>
            </div>
          </div>
        </section>
        <section
          className="applications section"
          id="applications"
          aria-labelledby="applications-title"
        >
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">02 / Two fields. A shared foundation.</p>
              <div>
                <h2 id="applications-title">
                  From how cells are grown
                  <br />
                  to how they respond.
                </h2>
              </div>
            </div>
            <div className="pathway-grid">
              <article className="pathway bioprocess" id="bioprocess">
                <div className="pathway-top">
                  <span className="small-label">
                    FOR BIOPROCESS DEVELOPMENT
                  </span>
                  <span className="pathway-symbol" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <h3>
                  <span>Prospect</span> Bioprocess
                </h3>
                <p className="pathway-lead">
                  Understand the stress
                  <br />
                  behind your culture.
                </p>
                <p>
                  Bringing extracellular metabolic insight to cell culture and
                  biomanufacturing, alongside the parameters your team already
                  follows.
                </p>
                <ProcessGraphic />
                <ul>
                  <li>Explore stress-associated metabolic changes</li>
                  <li>Compare culture conditions and process stages</li>
                  <li>Develop monitoring strategies for cell therapies</li>
                </ul>
                <a
                  className="text-link"
                  href="mailto:contact@prospect-biotech.com?subject=Prospect%20Bioprocess%20%E2%80%94%20pilot%20discussion"
                >
                  Discuss a bioprocess pilot <Arrow />
                </a>
                <p className="pathway-note">
                  Development focus · research and process development
                </p>
              </article>
              <article className="pathway health" id="health">
                <div className="pathway-top">
                  <span className="small-label">FOR BIOMEDICAL RESEARCH</span>
                  <span className="pathway-symbol" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <h3>
                  <span>Prospect</span> Health
                </h3>
                <p className="pathway-lead">
                  Explore the metabolic
                  <br />
                  language of disease.
                </p>
                <p>
                  Building on research into tumor secretomes to investigate
                  cellular stress, metabolic interactions and treatment
                  responses in biological models.
                </p>
                <ProcessGraphic health />
                <ul>
                  <li>Investigate stress and cell-death secretomes</li>
                  <li>Study metabolic communication in tumor models</li>
                  <li>Explore responses to experimental treatments</li>
                </ul>
                <a
                  className="text-link"
                  href="mailto:contact@prospect-biotech.com?subject=Prospect%20Health%20%E2%80%94%20research%20collaboration"
                >
                  Explore a research collaboration <Arrow />
                </a>
                <p className="pathway-note">
                  Research applications · not a clinical diagnostic service
                </p>
              </article>
            </div>
          </div>
        </section>
        <section
          className="technology section"
          id="technology"
          aria-labelledby="technology-title"
        >
          <div className="container">
            <div className="technology-top">
              <div>
                <p className="eyebrow">03 / Why SERS</p>
                <h2 id="technology-title">
                  Weak Raman signals.
                  <br />
                  <span>Amplified possibilities.</span>
                </h2>
              </div>
              <p>
                Surface-enhanced Raman scattering uses nanostructured metal
                surfaces to enhance the optical fingerprints of nearby
                molecules. It opens a route to sensitive, label-free metabolic
                analysis.
              </p>
            </div>
            <div className="technology-grid">
              <div className="technology-point">
                <span>01</span>
                <h3>Reveal weak signals</h3>
                <p>
                  Enhancement at the sensing surface helps detect metabolites
                  that can be challenging to resolve with conventional Raman.
                </p>
              </div>
              <div className="technology-point">
                <span>02</span>
                <h3>Read molecular patterns</h3>
                <p>
                  Investigate several spectral features together to capture
                  changes in the extracellular metabolic profile.
                </p>
              </div>
              <div className="technology-point">
                <span>03</span>
                <h3>Move toward simpler workflows</h3>
                <p>
                  Published work combines SERS with microfluidics and
                  computational analysis to streamline secretome screening.
                </p>
              </div>
            </div>
            <div className="technology-footnote">
              <p>
                SERS complements established analytical methods, including
                LC–MS. Sensitivity, selectivity and reproducibility depend on
                the molecule, substrate and sample matrix.
              </p>
              <a href="#science">
                See the evidence <Arrow diagonal />
              </a>
            </div>
          </div>
        </section>
        <section
          className="section container science"
          id="science"
          aria-labelledby="science-title"
        >
          <div className="section-heading">
            <p className="eyebrow">04 / Published science</p>
            <div>
              <h2 id="science-title">Research behind the perspective.</h2>
              <p>
                Selected peer-reviewed publications co-authored by Javier Plou.
                Evidence from experimental models guides our development.
              </p>
            </div>
          </div>
          <div className="paper-list">
            {papers.map((paper) => (
              <article className="paper" id={paper.id} key={paper.id}>
                <span className="paper-number">{paper.number}</span>
                <div className="paper-journal">
                  <span>{paper.journal}</span>
                  <span>{paper.year}</span>
                </div>
                <div className="paper-body">
                  <p className="paper-authors">{paper.authors}</p>
                  <h3>
                    <a
                      href={`https://doi.org/${paper.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {paper.title}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </h3>
                  <p>{paper.description}</p>
                </div>
                <a
                  className="paper-arrow"
                  href={`https://doi.org/${paper.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Read ${paper.title} (opens in a new tab)`}
                >
                  <Arrow diagonal />
                </a>
              </article>
            ))}
          </div>
          <p className="science-note">
            These studies support the scientific approach. They do not establish
            clinical performance or validate a commercial Prospect assay.
          </p>
        </section>
        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="container contact-inner">
            <div>
              <p className="eyebrow">
                Let’s explore what your cells are telling you
              </p>
              <h2 id="contact-title">
                A new perspective
                <br />
                starts with a conversation.
              </h2>
            </div>
            <div className="contact-actions">
              <a
                className="button button-light"
                href="mailto:contact@prospect-biotech.com"
              >
                Talk to Prospect <Arrow diagonal />
              </a>
              <a
                className="contact-email"
                href="mailto:contact@prospect-biotech.com"
              >
                contact@prospect-biotech.com
              </a>
              <p>Bioprocess pilots · Research collaborations</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="container footer">
        <Brand />
        <p>Metabolic insight. From cells, for life.</p>
        <a href="#top">Back to top ↑</a>
        <span>© {new Date().getFullYear()} Prospect Biotech</span>
      </footer>
    </>
  );
}
