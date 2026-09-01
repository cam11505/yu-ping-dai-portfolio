"use client";

import { useEffect, useState } from "react";
import { capabilities, education, experiences, profile, projects } from "../data/profile";

const navItems = [
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "education", label: "ENGINEERING" },
] as const;

const sectionSignals: Record<(typeof navItems)[number]["id"], string> = {
  about: "0.782041",
  experience: "0.419337",
  projects: "0.663204",
  education: "0.914552",
};

export default function Home() {
  const [activeSection, setActiveSection] = useState<(typeof navItems)[number]["id"]>("about");

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible && navItems.some(({ id }) => id === visible.target.id)) {
          setActiveSection(visible.target.id as (typeof navItems)[number]["id"]);
        }
      },
      { rootMargin: "-25% 0px -60%", threshold: [0.1, 0.3, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".hero");
    if (!hero) return;
    const updateSignal = (event: PointerEvent) => {
      const bounds = hero.getBoundingClientRect();
      hero.style.setProperty("--signal-x", `${event.clientX - bounds.left}px`);
      hero.style.setProperty("--signal-y", `${event.clientY - bounds.top}px`);
    };
    hero.addEventListener("pointermove", updateSignal);
    return () => hero.removeEventListener("pointermove", updateSignal);
  }, []);

  return (
    <>
      <div className="ambient-grid" aria-hidden="true" />
      <div className="crt-vignette" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#about" aria-label="回到首頁">
          <span className="brand-mark">DP</span>
          <span className="brand-copy">
            <strong>DAI / APPLIED SYSTEMS</strong>
            <small>ENGINEERING RECORD</small>
          </span>
        </a>

        <nav aria-label="主要導覽">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "active" : ""}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#projects">
          ACCESS WORK LOG <span aria-hidden="true">↘</span>
        </a>
      </header>

      <div className="header-readout" aria-hidden="true">
        <small>OBSERVATION TRACE / {activeSection.toUpperCase()}</small>
        <strong>{sectionSignals[activeSection]}</strong>
      </div>

      <main>
        <section className="hero" id="about">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="live-status"><i /> LAB NODE / ONLINE</span>
              <span>{profile.location}</span>
            </div>

            <p className="hero-kicker">OBSERVE / ISOLATE / VERIFY / RESOLVE</p>
            <h1>
              <span>{profile.name}</span>
              <em>{profile.englishName}</em>
            </h1>
            <p className="hero-role">
              {profile.role} <span>×</span> {profile.focus}
            </p>
            <p className="hero-intro">{profile.intro}</p>

            <div className="hero-actions">
              <a className="primary-action" href="#experience">
                ACCESS CAREER LOG <span aria-hidden="true">↓</span>
              </a>
              <a className="text-action" href="#projects">
                OPEN EXPERIMENT ARCHIVE <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="metrics" aria-label="職涯摘要">
              {profile.metrics.map((metric) => (
                <div className="metric" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="signal-panel" aria-label="工程觀測資訊">
            <div className="panel-topline">
              <span>DIVERGENCE / ENGINEERING SIGNAL</span>
              <span>NODE 01 / ACTIVE</span>
            </div>

            <div className="divergence-stage" aria-label={`目前觀測訊號 ${sectionSignals[activeSection]}`}>
              <div className="divergence-display">
                <span>OBSERVATION VALUE</span>
                <div className="divergence-number">
                  {sectionSignals[activeSection]}
                  <i aria-hidden="true" />
                </div>
                <p className="divergence-caption">CALIBRATED FOR PORTFOLIO NAVIGATION / NON-PHYSICAL REFERENCE</p>
              </div>
              <div className="readout-scale" aria-hidden="true">
                {Array.from({ length: 16 }, (_, index) => <i key={index} />)}
              </div>
            </div>

            <div className="current-role">
              <span>CURRENT OBSERVATION POINT</span>
              <h2>{profile.company}</h2>
              <p>車用 IC 部門 · FIELD APPLICATION ENGINEERING</p>
            </div>
            <div className="panel-readout">
              <span><b>INPUT</b> FIELD / CUSTOMER SIGNALS</span>
              <span><b>OUTPUT</b> VERIFIED ROOT CAUSE</span>
            </div>
          </aside>

          <div className="scroll-cue" aria-hidden="true">
            <span>TRACE THE RECORD</span><i />
          </div>
        </section>

        <section className="section-shell experience-section" id="experience" data-lab-code="LOG-01">
          <header className="section-heading">
            <div>
              <span className="section-number">01</span>
              <p>CAREER WORLD-LINE TRACE</p>
            </div>
            <h2>職涯記錄<span>。</span></h2>
            <p>沿著嵌入式平台、SDK 與 IC 應用支援的軌跡，把每一個模糊現象收斂成可以重現、量測與驗證的工程問題。</p>
          </header>

          <div className="timeline">
            {experiences.map((experience) => (
              <article
                className={`experience-card${experience.current ? " current" : ""}`}
                key={`${experience.company}-${experience.period}`}
              >
                <div className="timeline-node" aria-hidden="true">
                  <span>{experience.index}</span>
                </div>
                <div className="experience-meta">
                  <span>{experience.period}</span>
                  {experience.current && <b><i /> OBSERVING NOW</b>}
                </div>
                <div className="experience-title">
                  <p>{experience.team}</p>
                  <h3>{experience.company}</h3>
                  <h4>{experience.role}</h4>
                </div>
                <p className="experience-summary">{experience.summary}</p>
                <ul className="signal-tags" aria-label="技術關鍵字">
                  {experience.signals.map((signal) => <li key={signal}>{signal}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell projects-section" id="projects" data-lab-code="EXP-02">
          <header className="section-heading">
            <div>
              <span className="section-number">02</span>
              <p>EXPERIMENT ARCHIVE</p>
            </div>
            <h2>工程實驗<span>。</span></h2>
            <p>把個人專案視為可重複驗證的工程實驗：先定義 Problem，再留下 Approach、Stack 與可交付的 Result。</p>
          </header>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.repo}>
                <div className="project-topline">
                  <span>DEVICE / {project.index}</span>
                  <b>{project.status}</b>
                </div>

                <div className="project-title">
                  <p>{project.repo}</p>
                  <h3>{project.name}</h3>
                </div>

                <dl className="project-flow">
                  <div className="project-step">
                    <dt>PROBLEM</dt>
                    <dd>{project.problem}</dd>
                  </div>
                  <div className="project-step">
                    <dt>APPROACH</dt>
                    <dd>{project.approach}</dd>
                  </div>
                  <div className="project-step">
                    <dt>STACK</dt>
                    <dd>
                      <ul className="project-stack" aria-label={`${project.name} 技術棧`}>
                        {project.stack.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </dd>
                  </div>
                  <div className="project-step">
                    <dt>RESULT</dt>
                    <dd>{project.result}</dd>
                  </div>
                </dl>

                <a
                  className="project-link"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`在 GitHub 開啟 ${project.name}`}
                >
                  <span>ACCESS SOURCE RECORD</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell engineering-section" id="education" data-lab-code="DATA-03">
          <header className="section-heading compact">
            <div>
              <span className="section-number">03</span>
              <p>ENGINEERING ARCHIVE</p>
            </div>
            <h2>工程基底<span>。</span></h2>
          </header>

          <div className="engineering-grid">
            <div className="education-list">
              <div className="subsection-label"><span>EDUCATION RECORDS</span><b>02 ENTRIES</b></div>
              {education.map((item) => (
                <article className="education-card" key={item.code}>
                  <span className="degree-code">{item.code}</span>
                  <div>
                    <p>{item.period}</p>
                    <h3>{item.school}</h3>
                    <h4>{item.degree}</h4>
                  </div>
                </article>
              ))}
            </div>

            <div className="capability-matrix">
              <div className="subsection-label"><span>CAPABILITY MATRIX</span><b>04 DOMAINS</b></div>
              <div className="capability-grid">
                {capabilities.map((capability, index) => (
                  <article key={capability.label}>
                    <div className="capability-head">
                      <span>0{index + 1}</span><h3>{capability.label}</h3>
                    </div>
                    <ul>
                      {capability.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <span className="brand-mark">DP</span>
          <p><strong>DAI / ENGINEERING RECORD</strong><br />Observe carefully. Reduce uncertainty. Verify the result.</p>
        </div>
        <p>ARCHIVE STATUS <span><i /> ONLINE / STABLE</span></p>
        <a href="#about">RETURN TO NODE 00 ↑</a>
      </footer>
    </>
  );
}
