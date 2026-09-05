<script setup lang="ts">
const roles = [
  { years: '2023—Now', role: 'Lead Software Engineer', company: 'Falcon Aerospace Limited', note: 'Leading product engineering for private-aviation software, including CharterXE’s customer and operations experiences.' },
  { years: '2021—2023', role: 'Lead Frontend Engineer', company: 'Blackcopper', note: 'Owned frontend delivery for SME banking journeys and a Sanity-backed public product website.' },
  { years: '2020—2021', role: 'Frontend Engineer', company: 'Parkway', note: 'Contributed to production frontend applications in financial technology.' },
  { years: '2019—2020', role: 'Frontend Engineer', company: 'Kraksmedia', note: 'Built and maintained responsive web product experiences.' },
]

const work = [
  {
    number: '01',
    name: 'Budds',
    category: 'AI learning workspace',
    proof: 'Designed and built the full-stack product, from revision-scoped retrieval to durable media generation, private delivery and offline study sync.',
    tech: 'Nuxt / Convex / Cloudflare',
    href: 'https://budds.pages.dev',
  },
  {
    number: '02',
    name: 'CharterXE',
    category: 'Private aviation marketplace',
    proof: 'Owned the frontend from initial setup through production iterations across booking, quote, payment and operations workflows.',
    tech: 'Nuxt / Vue / Product systems',
    href: 'https://www.charterxe.com/en',
  },
  {
    number: '03',
    name: 'WACS',
    category: 'Government credit management',
    proof: 'Primary contributor to the Vue web application; later improved the Expo mobile experience for multi-party, permission-aware workflows.',
    tech: 'Vue / Expo / Workflow UX',
    href: 'https://wacs.ippis.gov.ng/',
  },
]

const capabilities = [
  ['01', 'Product engineering', 'Turning ambiguous requirements into durable user and operational workflows.'],
  ['02', 'Frontend architecture', 'Structuring maintainable Nuxt and Vue applications around product boundaries.'],
  ['03', 'Full-stack delivery', 'Connecting interface, data, APIs and infrastructure to ship complete features.'],
  ['04', 'Quality & craft', 'Building responsive, accessible and performance-conscious digital experiences.'],
]
</script>

<template>
  <div class="swiss-shell">
    <a href="#profile" class="skip-link">Skip to profile</a>

    <header class="masthead">
      <a class="monogram" href="#top" aria-label="Wesley Ukadike, back to top">WU</a>
      <p>Wesley Ukadike</p>
      <p>Senior Software Engineer</p>
      <nav aria-label="Primary navigation">
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <main id="top">
      <section id="profile" class="intro" aria-labelledby="intro-title">
        <p class="section-code">00 / Profile</p>
        <div class="intro__headline">
          <h1 id="intro-title">Software for consequential workflows.</h1>
          <span class="intro__mark" aria-hidden="true">●</span>
        </div>
        <div class="intro__details">
          <p class="intro__lede">
            I’m Wesley, a senior software engineer with 7+ years of experience building
            clear, dependable digital products across aviation, financial services,
            government systems and AI-assisted learning.
          </p>
          <dl class="facts">
            <div><dt>Current</dt><dd>Lead Software Engineer</dd></div>
            <div><dt>Strength</dt><dd>Product-minded delivery</dd></div>
            <div><dt>Core</dt><dd>Nuxt · Vue · TypeScript</dd></div>
          </dl>
        </div>
      </section>

      <section id="work" class="section work" aria-labelledby="work-title">
        <header class="section__header">
          <p class="section-code">01 / Selected work</p>
          <h2 id="work-title">Evidence over adjectives.</h2>
          <p>Three projects that show increasing scope: independent product, frontend ownership and complex platform delivery.</p>
        </header>

        <div class="work-list">
          <article v-for="project in work" :key="project.name" class="work-item">
            <p class="work-item__number">{{ project.number }}</p>
            <div class="work-item__title">
              <h3>{{ project.name }}</h3>
              <p>{{ project.category }}</p>
            </div>
            <p class="work-item__proof">{{ project.proof }}</p>
            <div class="work-item__meta">
              <p>{{ project.tech }}</p>
              <a :href="project.href" target="_blank" rel="noopener noreferrer" :aria-label="`View ${project.name} live (opens in a new tab)`">Live ↗</a>
            </div>
          </article>
        </div>
      </section>

      <section id="experience" class="section experience" aria-labelledby="experience-title">
        <header class="section__header">
          <p class="section-code">02 / Experience</p>
          <h2 id="experience-title">Seven years of increasing ownership.</h2>
        </header>
        <ol class="role-list">
          <li v-for="role in roles" :key="role.company">
            <time>{{ role.years }}</time>
            <div><h3>{{ role.role }}</h3><p>{{ role.company }}</p></div>
            <p class="role-list__note">{{ role.note }}</p>
          </li>
        </ol>
      </section>

      <section class="section capabilities" aria-labelledby="capabilities-title">
        <header class="section__header">
          <p class="section-code">03 / Capabilities</p>
          <h2 id="capabilities-title">Where I add leverage.</h2>
        </header>
        <div class="capability-grid">
          <article v-for="capability in capabilities" :key="capability[0]">
            <p>{{ capability[0] }}</p>
            <h3>{{ capability[1] }}</h3>
            <p>{{ capability[2] }}</p>
          </article>
        </div>
        <div class="tool-line">
          <p>Working toolkit</p>
          <p>Nuxt · Vue · TypeScript · JavaScript · Convex · Cloudflare · Sanity · Expo</p>
        </div>
      </section>

      <section id="contact" class="contact" aria-labelledby="contact-title">
        <p class="section-code">04 / Contact</p>
        <div>
          <h2 id="contact-title">Let’s make the complicated feel obvious.</h2>
          <p>For senior engineering roles, product collaborations and systems that need both technical depth and interface care.</p>
          <a href="https://www.linkedin.com/in/wesley-ukadike-3a9440180/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </main>

    <footer class="footer">
      <p>Wesley Ukadike © 2026</p>
      <p>Senior Software Engineer</p>
      <a href="#top">Top ↑</a>
    </footer>
  </div>
</template>

<style scoped>
.swiss-shell {
  --paper: #f1f0eb;
  --ink: #121212;
  --muted: #5b5b55;
  --rule: #1b1b19;
  --red: #e3311d;
  min-height: 100vh;
  color: var(--ink);
  background: var(--paper);
  font-family: Aeonik, Arial, sans-serif;
  line-height: 1.35;
}
.skip-link { position: fixed; z-index: 100; top: -5rem; left: 1rem; padding: .75rem 1rem; background: var(--ink); color: var(--paper); }
.skip-link:focus { top: 1rem; }
.masthead { display: grid; grid-template-columns: .5fr 1.2fr 1fr 1.5fr; gap: 1rem; align-items: center; min-height: 5.25rem; padding: 0 clamp(1rem, 3vw, 3.5rem); border-bottom: 2px solid var(--rule); font-size: .72rem; letter-spacing: .06em; text-transform: uppercase; }
.masthead p { margin: 0; }
.monogram { display: grid; width: 2.5rem; aspect-ratio: 1; place-items: center; color: var(--paper); background: var(--ink); font-weight: 700; text-decoration: none; }
.masthead nav { display: flex; justify-content: flex-end; gap: clamp(1rem, 3vw, 3rem); }
.masthead nav a { color: inherit; text-decoration: none; }
.intro, .section, .contact { padding: clamp(3rem, 6vw, 7rem) clamp(1rem, 3vw, 3.5rem); }
.section-code { margin: 0; color: var(--red); font-size: .68rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }
.intro { min-height: calc(100svh - 5.25rem); display: flex; flex-direction: column; justify-content: space-between; }
.intro__headline { display: grid; grid-template-columns: 1fr auto; gap: 2rem; align-items: start; padding: 3rem 0; }
.intro h1 { max-width: 11.5ch; margin: 0; font-size: clamp(4rem, 10.5vw, 10.5rem); font-weight: 700; letter-spacing: -.075em; line-height: .79; }
.intro__mark { color: var(--red); font-size: clamp(2rem, 5vw, 5rem); line-height: 1; }
.intro__details { display: grid; grid-template-columns: 1.6fr 1fr; gap: clamp(2rem, 9vw, 9rem); align-items: end; padding-top: 1.25rem; border-top: 1px solid var(--rule); }
.intro__lede { max-width: 45rem; margin: 0; font-size: clamp(1.2rem, 2vw, 1.85rem); letter-spacing: -.015em; }
.facts { margin: 0; }
.facts div { display: grid; grid-template-columns: 5rem 1fr; padding: .5rem 0; border-bottom: 1px solid rgb(18 18 18 / 25%); font-size: .78rem; }
.facts dt { color: var(--muted); text-transform: uppercase; }
.facts dd { margin: 0; }
.section { border-top: 2px solid var(--rule); }
.section__header { display: grid; grid-template-columns: .65fr 1.55fr 1fr; gap: clamp(1.5rem, 5vw, 5rem); margin-bottom: clamp(3rem, 7vw, 7rem); }
.section__header h2 { max-width: 12ch; margin: 0; font-size: clamp(2.5rem, 5.5vw, 5.5rem); font-weight: 700; letter-spacing: -.06em; line-height: .9; }
.section__header > p:last-child { max-width: 26rem; margin: 0; color: var(--muted); }
.work-list { border-top: 1px solid var(--rule); }
.work-item { display: grid; grid-template-columns: .3fr 1.05fr 1.55fr .7fr; gap: clamp(1rem, 3vw, 3rem); padding: 2rem 0; border-bottom: 1px solid var(--rule); }
.work-item p { margin: 0; }
.work-item__number { color: var(--red); font-size: .72rem; }
.work-item__title h3 { margin: 0; font-size: clamp(1.5rem, 2.6vw, 2.75rem); letter-spacing: -.04em; }
.work-item__title p, .work-item__meta p { margin-top: .35rem; color: var(--muted); font-size: .75rem; text-transform: uppercase; }
.work-item__proof { max-width: 39rem; }
.work-item__meta { display: flex; flex-direction: column; justify-content: space-between; align-items: flex-end; text-align: right; }
.work-item__meta a { color: inherit; font-size: .78rem; font-weight: 700; text-transform: uppercase; text-underline-offset: .25rem; }
.experience { background: #171715; color: #f1f0eb; }
.experience .section-code { color: #ff5b45; }
.role-list { margin: 0; padding: 0; border-top: 1px solid rgb(241 240 235 / 75%); list-style: none; }
.role-list li { display: grid; grid-template-columns: .55fr 1.1fr 1.35fr; gap: clamp(1rem, 5vw, 5rem); padding: 1.75rem 0; border-bottom: 1px solid rgb(241 240 235 / 35%); }
.role-list time { color: #ff5b45; font-size: .72rem; }
.role-list h3 { margin: 0; font-size: 1.2rem; }
.role-list div p, .role-list__note { margin: .3rem 0 0; color: #aaa9a3; }
.role-list__note { max-width: 38rem; }
.capability-grid { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid var(--rule); border-bottom: 1px solid var(--rule); }
.capability-grid article { min-height: 18rem; padding: 1.25rem 1.5rem 1.25rem 0; }
.capability-grid article + article { padding-left: 1.5rem; border-left: 1px solid var(--rule); }
.capability-grid article > p:first-child { color: var(--red); font-size: .72rem; }
.capability-grid h3 { margin: 4.5rem 0 1rem; font-size: 1.3rem; }
.capability-grid article > p:last-child { max-width: 18rem; color: var(--muted); font-size: .9rem; }
.tool-line { display: grid; grid-template-columns: 1fr 3fr; gap: 2rem; padding: 1rem 0; font-size: .75rem; text-transform: uppercase; }
.tool-line p { margin: 0; }
.tool-line p:first-child { color: var(--red); }
.contact { display: grid; grid-template-columns: .65fr 3fr; min-height: 70vh; align-items: start; border-top: 2px solid var(--rule); background: var(--red); }
.contact .section-code { color: var(--ink); }
.contact h2 { max-width: 12ch; margin: 0 0 2rem; font-size: clamp(3.25rem, 7.7vw, 8rem); font-weight: 700; letter-spacing: -.075em; line-height: .82; }
.contact div > p { max-width: 40rem; font-size: 1.1rem; }
.contact a { display: inline-flex; justify-content: space-between; width: min(100%, 30rem); margin-top: 3rem; padding: 1rem 0; border-top: 1px solid var(--ink); border-bottom: 1px solid var(--ink); color: inherit; font-size: .78rem; font-weight: 700; letter-spacing: .07em; text-decoration: none; text-transform: uppercase; }
.footer { display: grid; grid-template-columns: 1fr 1fr auto; gap: 1rem; padding: 1.5rem clamp(1rem, 3vw, 3.5rem); border-top: 2px solid var(--rule); font-size: .7rem; text-transform: uppercase; }
.footer p { margin: 0; }
.footer a { color: inherit; }
a:focus-visible { outline: 3px solid var(--red); outline-offset: 4px; }
.contact a:focus-visible { outline-color: var(--ink); }
@media (max-width: 760px) {
  .masthead { grid-template-columns: auto 1fr; }
  .masthead > p { display: none; }
  .masthead nav { gap: 1rem; }
  .intro__headline { display: block; }
  .intro__mark { display: block; margin-top: 2rem; }
  .intro__details, .section__header, .contact { grid-template-columns: 1fr; }
  .section__header h2 { order: 2; }
  .section__header > p:last-child { order: 3; }
  .work-item { grid-template-columns: 2.5rem 1fr; }
  .work-item__proof, .work-item__meta { grid-column: 2; }
  .work-item__meta { align-items: flex-start; gap: 1.5rem; text-align: left; }
  .role-list li { grid-template-columns: 5.5rem 1fr; }
  .role-list__note { grid-column: 2; }
  .capability-grid { grid-template-columns: 1fr 1fr; }
  .capability-grid article:nth-child(3) { border-left: 0; border-top: 1px solid var(--rule); }
  .capability-grid article:nth-child(4) { border-top: 1px solid var(--rule); }
  .tool-line { grid-template-columns: 1fr; }
  .footer p:nth-child(2) { display: none; }
}
@media (max-width: 460px) {
  .masthead nav a:nth-child(2) { display: none; }
  .intro h1 { font-size: clamp(3rem, 13vw, 4.25rem); }
  .capability-grid { grid-template-columns: 1fr; }
  .capability-grid article + article { padding-left: 0; border-top: 1px solid var(--rule); border-left: 0; }
  .capability-grid article { min-height: 14rem; }
}
</style>
