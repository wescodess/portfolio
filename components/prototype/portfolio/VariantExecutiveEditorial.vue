<script setup lang="ts">
const projects = [
  {
    number: '01',
    title: 'Budds',
    descriptor: 'AI learning workspace',
    role: 'Product design & full-stack engineering',
    summary: 'A learning workspace that turns a student’s own documents into cited conversations, quizzes, flashcards, structured courses and two-host audio overviews.',
    detail: 'Designed and built with Nuxt, Convex and Cloudflare, including revision-scoped retrieval, durable media generation, private artifact delivery and offline study sync.',
    url: 'https://budds.pages.dev',
  },
  {
    number: '02',
    title: 'CharterXE',
    descriptor: 'Private aviation marketplace',
    role: 'Frontend ownership',
    summary: 'Customer booking and operations experiences spanning multi-leg requests, aircraft selection, quote review, acceptance and payment.',
    detail: 'Owned the Nuxt frontend codebase from initial setup through production iterations, alongside operations tools for fleet, customers, offers and quote fulfilment.',
    url: 'https://www.charterxe.com/en',
  },
  {
    number: '03',
    title: 'WACS',
    descriptor: 'Government credit management',
    role: 'Primary web contributor',
    summary: 'A multi-sided credit platform connecting Nigerian federal employees, lenders and IPPIS administrators.',
    detail: 'Built permission-aware workflows across loan requests, approvals, payroll-deduction validation, payment warrants, audit trails and reporting.',
    url: 'https://wacs.ippis.gov.ng/',
  },
]

const experience = [
  { role: 'Lead Software Engineer', company: 'Falcon Aerospace Limited', period: '2023 — Present' },
  { role: 'Lead Frontend Engineer', company: 'Blackcopper', period: '2021 — 2023' },
  { role: 'Frontend Engineer', company: 'Parkway', period: '2020 — 2021' },
]
</script>

<template>
  <div class="editorial-shell">
    <header class="editorial-nav">
      <NuxtLink class="wordmark" to="#top" aria-label="Wesley Ukadike, back to top">
        W<span aria-hidden="true">.</span>U
      </NuxtLink>
      <nav aria-label="Primary navigation">
        <NuxtLink to="#work">Selected work</NuxtLink>
        <NuxtLink to="#experience">Experience</NuxtLink>
        <NuxtLink class="nav-contact" to="#contact">Start a conversation</NuxtLink>
      </nav>
    </header>

    <main id="top">
      <section class="editorial-hero" aria-labelledby="editorial-title">
        <div class="hero-kicker">
          <span>Wesley Ukadike</span>
          <span>Senior Software Engineer</span>
          <span>Toronto, Canada</span>
        </div>

        <h1 id="editorial-title">
          Engineering useful products with
          <em>clarity, care,</em>
          and conviction.
        </h1>

        <div class="hero-summary">
          <p>
            I lead and build digital products across complex domains — shaping the interface,
            application architecture and delivery systems that carry an idea into production.
          </p>
          <NuxtLink to="#work" class="text-link">
            Read the selected work <span aria-hidden="true">↓</span>
          </NuxtLink>
        </div>
      </section>

      <section id="work" class="selected-work" aria-labelledby="work-title">
        <div class="section-intro">
          <p class="eyebrow">Selected work / 2026</p>
          <h2 id="work-title">Three products.<br>Three kinds of complexity.</h2>
          <p>
            A focused record of ownership, engineering decisions and the product systems
            those decisions made possible.
          </p>
        </div>

        <div class="project-journal">
          <article v-for="project in projects" :key="project.title" class="journal-entry">
            <div class="entry-index" aria-hidden="true">{{ project.number }}</div>
            <div class="entry-heading">
              <p>{{ project.descriptor }}</p>
              <h3>{{ project.title }}</h3>
            </div>
            <div class="entry-story">
              <p class="entry-role">{{ project.role }}</p>
              <p class="entry-lead">{{ project.summary }}</p>
              <p class="entry-detail">{{ project.detail }}</p>
              <NuxtLink
                :to="project.url"
                external
                target="_blank"
                rel="noopener noreferrer"
                class="project-link"
              >
                Visit product <span aria-hidden="true">↗</span>
              </NuxtLink>
            </div>
          </article>
        </div>
      </section>

      <section class="practice" aria-labelledby="practice-title">
        <p class="eyebrow">The practice</p>
        <h2 id="practice-title">Senior engineering is a way of reducing uncertainty.</h2>
        <div class="practice-columns">
          <article>
            <span>01</span>
            <h3>Frame the real problem</h3>
            <p>Align product intent, user needs and technical constraints before implementation hardens assumptions.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Design for the whole system</h3>
            <p>Connect interface decisions to data, permissions, failure states, operations and long-term maintenance.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Make quality observable</h3>
            <p>Use accessibility, testing, performance and clear delivery boundaries as product requirements.</p>
          </article>
        </div>
      </section>

      <section id="experience" class="experience" aria-labelledby="experience-title">
        <div>
          <p class="eyebrow">Selected experience</p>
          <h2 id="experience-title">Product-minded leadership, grounded in the work.</h2>
        </div>
        <ol>
          <li v-for="item in experience" :key="item.company">
            <div>
              <strong>{{ item.role }}</strong>
              <span>{{ item.company }}</span>
            </div>
            <span>{{ item.period }}</span>
          </li>
        </ol>
      </section>

      <section id="contact" class="editorial-contact" aria-labelledby="contact-title">
        <div class="contact-copy">
          <p class="eyebrow">Have a meaningful problem?</p>
          <h2 id="contact-title">Let’s make the complicated feel clear.</h2>
          <p>
            For senior engineering and product leadership conversations where thoughtful systems,
            strong execution and real user outcomes matter.
          </p>
          <NuxtLink
            class="contact-button"
            to="https://www.linkedin.com/in/wesley-ukadike-3a9440180/"
            external
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn <span aria-hidden="true">↗</span>
          </NuxtLink>
        </div>
        <NuxtImg
          class="contact-bitmoji"
          src="/images/winkbit.png"
          alt=""
          width="138"
          height="186"
          loading="lazy"
        />
      </section>
    </main>

    <footer class="editorial-footer">
      <span>Wesley Ukadike</span>
      <span>Senior Software Engineer</span>
      <NuxtLink to="#top">Back to top ↑</NuxtLink>
    </footer>
  </div>
</template>

<style scoped>
.editorial-shell {
  --ink: #1b1a17;
  --paper: #f2ede4;
  --accent: #9b3f2b;
  --rule: rgb(27 26 23 / 24%);
  min-height: 100dvh;
  overflow: hidden;
  color: var(--ink);
  background:
    radial-gradient(circle at 80% 8%, rgb(190 148 110 / 14%), transparent 27rem),
    var(--paper);
  font-family: 'Aeonik', system-ui, sans-serif;
}

.editorial-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(100% - 2rem, 88rem);
  margin-inline: auto;
  padding-block: 1.35rem;
  border-bottom: 1px solid var(--rule);
}

.wordmark {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.06em;
}

.wordmark span { color: var(--accent); }
.editorial-nav nav { display: flex; align-items: center; gap: clamp(1rem, 3vw, 2.5rem); font-size: 0.78rem; }
.editorial-nav a { transition: color 180ms ease; }
.editorial-nav a:hover { color: var(--accent); }
.nav-contact { padding: 0.7rem 1rem; border: 1px solid var(--ink); border-radius: 999px; }

.editorial-hero {
  display: grid;
  grid-template-columns: minmax(9rem, 0.38fr) minmax(0, 1fr);
  width: min(100% - 2rem, 88rem);
  min-height: 45rem;
  margin-inline: auto;
  padding-block: clamp(4rem, 10vw, 8.5rem) 4.5rem;
}

.hero-kicker {
  display: flex;
  flex-direction: column;
  gap: 0.38rem;
  padding-top: 1rem;
  color: #5f5a52;
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  line-height: 1.45;
  text-transform: uppercase;
}

.editorial-hero h1 {
  max-width: 15ch;
  margin: 0;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(3.6rem, 8.8vw, 8.75rem);
  font-weight: 400;
  letter-spacing: -0.065em;
  line-height: 0.88;
}

.editorial-hero h1 em { display: block; color: var(--accent); font-weight: 400; }
.hero-summary { grid-column: 2; display: flex; align-items: end; justify-content: space-between; gap: 2rem; margin-top: 4rem; }
.hero-summary p { max-width: 34rem; margin: 0; color: #49453f; font-size: clamp(1rem, 1.7vw, 1.3rem); line-height: 1.55; }
.text-link, .project-link { border-bottom: 1px solid currentcolor; font-size: 0.78rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; }

.selected-work {
  padding: clamp(5rem, 10vw, 9rem) max(1rem, calc((100vw - 88rem) / 2));
  color: #f5f0e8;
  background: #1d201e;
}

.section-intro { display: grid; grid-template-columns: 0.45fr 1fr 0.75fr; gap: 2rem; align-items: start; padding-bottom: 5rem; }
.eyebrow { margin: 0; color: var(--accent); font-size: 0.7rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; }
.section-intro h2, .practice h2, .experience h2, .editorial-contact h2 {
  margin: 0;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(2.4rem, 5vw, 5.25rem);
  font-weight: 400;
  letter-spacing: -0.045em;
  line-height: 0.98;
}
.section-intro > p:last-child { max-width: 26rem; margin: 0; color: #b8b5ae; line-height: 1.65; }

.journal-entry { display: grid; grid-template-columns: 0.45fr 1fr 0.75fr; gap: 2rem; padding-block: 3.5rem; border-top: 1px solid rgb(245 240 232 / 20%); }
.entry-index { color: #807c74; font-family: Georgia, serif; font-size: 1.05rem; }
.entry-heading p, .entry-role { margin: 0 0 0.85rem; color: #aaa69e; font-size: 0.67rem; letter-spacing: 0.12em; text-transform: uppercase; }
.entry-heading h3 { margin: 0; font-family: Georgia, serif; font-size: clamp(2.8rem, 6vw, 6rem); font-weight: 400; letter-spacing: -0.055em; line-height: 0.9; }
.entry-story p { margin-top: 0; }
.entry-lead { color: #f5f0e8; font-size: 1.1rem; line-height: 1.5; }
.entry-detail { color: #aaa69e; font-size: 0.9rem; line-height: 1.65; }
.project-link { display: inline-block; margin-top: 1rem; color: #e5b5a7; }

.practice, .experience { width: min(100% - 2rem, 88rem); margin-inline: auto; padding-block: clamp(5rem, 10vw, 9rem); }
.practice > h2 { max-width: 16ch; margin-top: 1.5rem; }
.practice-columns { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-top: 5rem; border-top: 1px solid var(--rule); }
.practice-columns article { padding-top: 1.5rem; }
.practice-columns span { color: var(--accent); font-family: Georgia, serif; }
.practice-columns h3 { margin: 3rem 0 1rem; font-family: Georgia, serif; font-size: 1.45rem; font-weight: 400; }
.practice-columns p { max-width: 25rem; color: #625d55; line-height: 1.65; }

.experience { display: grid; grid-template-columns: 0.75fr 1fr; gap: clamp(3rem, 8vw, 8rem); border-top: 1px solid var(--rule); }
.experience h2 { max-width: 11ch; margin-top: 1.25rem; }
.experience ol { margin: 0; padding: 0; list-style: none; }
.experience li { display: flex; justify-content: space-between; gap: 2rem; padding: 1.65rem 0; border-bottom: 1px solid var(--rule); }
.experience li div { display: flex; flex-direction: column; gap: 0.3rem; }
.experience li strong { font-family: Georgia, serif; font-size: 1.15rem; font-weight: 400; }
.experience li span { color: #655f57; font-size: 0.8rem; }

.editorial-contact { display: flex; align-items: end; justify-content: space-between; gap: 3rem; min-height: 38rem; padding: clamp(5rem, 10vw, 9rem) max(1rem, calc((100vw - 88rem) / 2)) 0; color: #f7f1e8; background: var(--accent); }
.contact-copy { max-width: 58rem; padding-bottom: clamp(5rem, 8vw, 8rem); }
.editorial-contact .eyebrow { color: #f2d3c9; }
.editorial-contact h2 { max-width: 13ch; margin-top: 1.25rem; }
.editorial-contact p:not(.eyebrow) { max-width: 40rem; margin-top: 2rem; color: #f0d6cd; line-height: 1.65; }
.contact-button { display: inline-flex; gap: 1rem; margin-top: 2rem; padding: 0.9rem 1.25rem; border: 1px solid #f7f1e8; border-radius: 999px; font-size: 0.8rem; font-weight: 700; }
.contact-bitmoji { flex: 0 0 auto; width: clamp(6rem, 13vw, 9rem); height: auto; filter: saturate(0.78); }
.editorial-footer { display: flex; justify-content: space-between; gap: 1rem; padding: 1.3rem max(1rem, calc((100vw - 88rem) / 2)); color: #c9c4bc; background: #1d201e; font-size: 0.68rem; letter-spacing: 0.11em; text-transform: uppercase; }

a:focus-visible { outline: 2px solid currentcolor; outline-offset: 5px; }

@media (max-width: 760px) {
  .editorial-nav nav a:not(.nav-contact) { display: none; }
  .editorial-hero { grid-template-columns: 1fr; min-height: auto; padding-block: 3rem 4rem; }
  .hero-kicker { margin-bottom: 3rem; }
  .hero-summary { grid-column: 1; flex-direction: column; align-items: start; margin-top: 3rem; }
  .section-intro, .journal-entry { grid-template-columns: 1fr; }
  .section-intro { padding-bottom: 3rem; }
  .entry-index { margin-bottom: -0.75rem; }
  .journal-entry { gap: 1.5rem; padding-block: 2.75rem; }
  .practice-columns { grid-template-columns: 1fr; }
  .practice-columns article { padding-bottom: 1.5rem; border-bottom: 1px solid var(--rule); }
  .practice-columns h3 { margin-top: 1.5rem; }
  .experience { grid-template-columns: 1fr; }
  .experience li { flex-direction: column; gap: 0.7rem; }
  .editorial-contact { min-height: 34rem; }
  .contact-bitmoji { width: 6rem; }
  .editorial-footer span:nth-child(2) { display: none; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { scroll-behavior: auto !important; }
}
</style>
