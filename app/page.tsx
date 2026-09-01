"use client";

import { useEffect, useState } from "react";
import { capabilities, education, experiences, profile, projects } from "../data/profile";

const navItems = [
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "education", label: "ENGINEERING" },
] as const;

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
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

      <header className="site-header">
        <a className="brand" href="#about" aria-label="回到首頁">
          <span className="brand-mark">DP</span>
          <span className="brand-copy">
            <strong>DAI / ENGINEERING</strong>
            <small>PORTFOLIO SYSTEM</small>
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
          VIEW WORK <span aria-hidden="true">↘</span>
        </a>
      </header>

      <main>
        <section className="hero" id="about">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="live-status"><i /> SYSTEM ONLINE</span>
              <span>{profile.location}</span>
            </div>

            <p className="hero-kicker">ENGINEERING CLARITY FROM SIGNAL TO SOLUTION</p>
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
                EXPLORE EXPERIENCE <span aria-hidden="true">↓</span>
              </a>
              <a className="text-action" href="#projects">
                VIEW ENGINEERING WORK <span aria-hidden="true">↗</span>
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

          <aside className="signal-panel" aria-label="目前職務">
            <div className="panel-topline">
              <span>CURRENT NODE</span>
              <span>01 / ACTIVE</span>
            </div>
            <div className="chip-diagram" aria-hidden="true">
              <div className="chip-core">
                <span>FAE</span>
                <small>AUTO IC</small>
              </div>
              <span className="trace trace-a" />
              <span className="trace trace-b" />
              <span className="trace trace-c" />
              <span className="trace trace-d" />
            </div>
            <div className="current-role">
              <span>NOW OPERATING AT</span>
              <h2>{profile.company}</h2>
              <p>車用 IC 部門 · FIELD APPLICATION ENGINEERING</p>
            </div>
            <div className="panel-readout">
              <span><b>INPUT</b> CUSTOMER SIGNALS</span>
              <span><b>OUTPUT</b> VERIFIED SOLUTIONS</span>
            </div>
          </aside>

          <div className="scroll-cue" aria-hidden="true">
            <span>SCROLL TO TRACE</span><i />
          </div>
        </section>

        <section className="section-shell experience-section" id="experience">
          <header className="section-heading">
            <div>
              <span className="section-number">01</span>
              <p>CAREER SIGNAL PATH</p>
            </div>
            <h2>工作經歷<span>。</span></h2>
            <p>從平台軟體到 IC 應用支援，持續把複雜系統問題轉成團隊能共同處理的工程語言。</p>
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
                  {experience.current && <b><i /> LIVE ROLE</b>}
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

        <section className="section-shell projects-section" id="projects">
          <header className="section-heading">
            <div>
              <span className="section-number">02</span>
              <p>ENGINEERING WORK</p>
            </div>
            <h2>專案實作<span>。</span></h2>
            <p>把工程方法延伸到自己的工具：先定義問題邊界，再建立可驗證、可維護、可交付的系統。</p>
          </header>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.repo}>
                <div className="project-topline">
                  <span>PROJECT / {project.index}</span>
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
                  <span>OPEN GITHUB REPOSITORY</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell engineering-section" id="education">
          <header className="section-heading compact">
            <div>
              <span className="section-number">03</span>
              <p>ENGINEERING DNA</p>
            </div>
            <h2>學歷與技術<span>。</span></h2>
          </header>

          <div className="engineering-grid">
            <div className="education-list">
              <div className="subsection-label"><span>EDUCATION</span><b>02 RECORDS</b></div>
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
          <p><strong>DAI / ENGINEERING PORTFOLIO</strong><br />Designed for clear signals and durable systems.</p>
        </div>
        <p>BUILD STATUS <span><i /> READY FOR GITHUB PAGES</span></p>
        <a href="#about">BACK TO TOP ↑</a>
      </footer>
    </>
  );
}
