import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Camera,
  Check,
  Globe2,
  Layers3,
  Mail,
  Sparkles,
} from 'lucide-react';
import { content } from './data/content.js';
import './styles.css';

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;

function App() {
  const [lang, setLang] = useState('zh');
  const t = content[lang];
  const otherLang = lang === 'zh' ? 'en' : 'zh';

  const nav = useMemo(
    () => [
      { id: 'work', label: t.nav.work },
      { id: 'story', label: t.nav.story },
      { id: 'contact', label: t.nav.contact },
    ],
    [t],
  );

  return (
    <main>
      <header className="site-header" aria-label={t.a11y.header}>
        <a className="brand" href="#top" aria-label={t.a11y.home}>
          <span className="brand-mark">CP</span>
          <span>{t.profile.name}</span>
        </a>
        <nav aria-label={t.a11y.nav}>
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <button className="language-button" onClick={() => setLang(otherLang)} type="button">
          <Globe2 size={17} aria-hidden="true" />
          <span>{content[otherLang].languageName}</span>
        </button>
      </header>

      <section className="hero" id="top">
        <img className="hero-media" src={asset('hero-portfolio.png')} alt={t.images.hero} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">{t.profile.eyebrow}</p>
          <h1>{t.profile.headline}</h1>
          <p className="hero-copy">{t.profile.intro}</p>
          <div className="hero-actions">
            <a className="primary-action" href="#work">
              {t.cta.primary}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="secondary-action" href={`mailto:${t.profile.email}`}>
              <Mail size={18} aria-hidden="true" />
              {t.cta.secondary}
            </a>
          </div>
        </div>
        <div className="hero-panel" aria-label={t.a11y.snapshot}>
          {t.metrics.map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="intro-band" aria-label={t.a11y.focus}>
        <div className="intro-copy">
          <p className="section-kicker">{t.sections.focus.kicker}</p>
          <h2>{t.sections.focus.title}</h2>
        </div>
        <div className="focus-grid">
          {t.focus.map((item) => (
            <article key={item.title} className="focus-item">
              <Check size={18} aria-hidden="true" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="section-kicker">{t.sections.work.kicker}</p>
          <h2>{t.sections.work.title}</h2>
        </div>
        <div className="project-grid">
          {t.projects.map((project) => (
            <article className="project-card" key={project.title}>
              <img src={asset(project.image)} alt={project.alt} />
              <div className="project-body">
                <div className="project-meta">
                  <span>{project.year}</span>
                  <span>{project.role}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="story-section" id="story">
        <div className="story-copy">
          <p className="section-kicker">{t.sections.story.kicker}</p>
          <h2>{t.sections.story.title}</h2>
          <p>{t.sections.story.body}</p>
          <div className="tool-list">
            {t.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </div>
        <div className="story-media">
          <img src={asset('studio-narrative.png')} alt={t.images.studio} />
          <img src={asset('visual-system.png')} alt={t.images.visualSystem} />
        </div>
      </section>

      <section className="capabilities-section" aria-label={t.a11y.capabilities}>
        {t.capabilities.map((capability, index) => {
          const Icon = [Layers3, BookOpen, BriefcaseBusiness, Camera][index] ?? Sparkles;
          return (
            <article key={capability.title} className="capability">
              <Icon size={22} aria-hidden="true" />
              <h3>{capability.title}</h3>
              <p>{capability.text}</p>
            </article>
          );
        })}
      </section>

      <section className="contact-section" id="contact">
        <img className="contact-media" src={asset('closing-contact.png')} alt={t.images.contact} />
        <div className="contact-overlay" />
        <div>
          <p className="section-kicker">{t.sections.contact.kicker}</p>
          <h2>{t.sections.contact.title}</h2>
        </div>
        <a className="contact-link" href={`mailto:${t.profile.email}`}>
          {t.profile.email}
          <ArrowUpRight size={20} aria-hidden="true" />
        </a>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
