<script setup lang="ts">
const chapters = [
  {
    number: '01',
    id: 'budds',
    title: 'Budds',
    descriptor: 'AI learning workspace',
    status: 'Independent product · Active development',
    summary: 'A study environment that turns a learner’s own documents into cited conversations, quizzes, flashcards, structured courses and two-host audio overviews.',
    ownership: 'I designed and built the full-stack product: the learning experience, retrieval model, media pipeline, private delivery and offline study behaviour.',
    decisions: [
      'Revision-scoped retrieval keeps answers connected to the correct source material.',
      'Durable media generation separates long-running work from the interactive experience.',
      'Private artifact delivery and offline sync make generated study material dependable.',
    ],
    stack: ['Nuxt', 'Convex', 'Cloudflare', 'AI workflows'],
    href: 'https://budds.pages.dev',
  },
  {
    number: '02',
    id: 'charterxe',
    title: 'CharterXE',
    descriptor: 'Private aviation marketplace',
    status: 'Lead frontend ownership · Production',
    summary: 'A customer booking experience and operations console for complex private-flight requests, from itinerary design through quote acceptance and payment.',
    ownership: 'I owned the frontend codebase from initial setup through production iterations across both the traveller and operations experiences.',
    decisions: [
      'Modelled one-way, return and multi-leg requests without fragmenting the booking journey.',
      'Made quote review and acceptance legible while preserving the detail expected in aviation.',
      'Built operations tools for inventory, customers, curated offers and quote fulfilment.',
    ],
    stack: ['Nuxt', 'Vue', 'Frontend architecture', 'Operations UX'],
    href: 'https://www.charterxe.com/en',
  },
  {
    number: '03',
    id: 'wacs',
    title: 'WACS',
    descriptor: 'Government credit management',
    status: 'Primary web contributor · Multi-sided platform',
    summary: 'A credit-management platform connecting Nigerian federal employees, lenders and IPPIS administrators through permission-aware workflows.',
    ownership: 'I was the primary contributor to the Vue web application and later improved the Expo mobile experience.',
    decisions: [
      'Connected loan discovery and requests to lender approval and payroll-deduction workflows.',
      'Supported batch validation, payment warrants, audit trails and reporting.',
      'Adapted the experience for distinct users without hiding operational complexity.',
    ],
    stack: ['Vue', 'Expo', 'Workflow design', 'Role-based UX'],
    href: 'https://wacs.ippis.gov.ng/',
  },
]

const experience = [
  ['2023—Now', 'Lead Software Engineer', 'Falcon Aerospace Limited'],
  ['2021—2023', 'Lead Frontend Engineer', 'Blackcopper'],
  ['2020—2021', 'Frontend Engineer', 'Parkway'],
  ['2019—2020', 'Frontend Engineer', 'Kraksmedia'],
]
</script>

<template>
  <div class="case-study-shell">
    <a class="skip-link" href="#case-studies">Skip to selected work</a>

    <header class="topbar">
      <a class="wordmark" href="#top" aria-label="Wesley Ukadike, back to top">
        <span>WU</span>
        <span class="wordmark__name">Wesley Ukadike</span>
      </a>
      <p>Senior Software Engineer</p>
      <a class="topbar__cta" href="#contact">Start a conversation <span aria-hidden="true">↘</span></a>
    </header>

    <main id="top">
      <section class="hero" aria-labelledby="case-hero-title">
        <p class="eyebrow">Portfolio / Selected work / 2026</p>
        <h1 id="case-hero-title">
          I make complex systems
          <em>feel considered.</em>
        </h1>
        <div class="hero__footer">
          <p class="hero__intro">
            Senior software engineer building dependable product experiences where workflow,
            architecture and interface design have to work as one.
          </p>
          <dl class="proof">
            <div><dt>Experience</dt><dd>7+ years</dd></div>
            <div><dt>Current role</dt><dd>Lead engineer</dd></div>
            <div><dt>Focus</dt><dd>Product systems</dd></div>
          </dl>
        </div>
      </section>

      <div class="story-layout">
        <aside class="chapter-nav" aria-label="Case study chapters">
          <p>Selected work</p>
          <ol>
            <li v-for="chapter in chapters" :key="chapter.id">
              <a :href="`#${chapter.id}`">
                <span>{{ chapter.number }}</span>
                {{ chapter.title }}
              </a>
            </li>
          </ol>
          <a href="#practice">Practice</a>
          <a href="#experience">Experience</a>
        </aside>

        <div id="case-studies" class="chapters">
          <article
            v-for="chapter in chapters"
            :id="chapter.id"
            :key="chapter.id"
            class="chapter"
            :aria-labelledby="`${chapter.id}-title`"
          >
            <div class="chapter__mast">
              <span class="chapter__number" aria-hidden="true">{{ chapter.number }}</span>
              <div>
                <p class="eyebrow">{{ chapter.status }}</p>
                <h2 :id="`${chapter.id}-title`">{{ chapter.title }}</h2>
                <p class="chapter__descriptor">{{ chapter.descriptor }}</p>
              </div>
            </div>

            <p class="chapter__summary">{{ chapter.summary }}</p>

            <div class="chapter__body">
              <div>
                <p class="label">Ownership</p>
                <p class="ownership">{{ chapter.ownership }}</p>
                <ul class="stack" aria-label="Technology and discipline">
                  <li v-for="item in chapter.stack" :key="item">{{ item }}</li>
                </ul>
              </div>
              <div>
                <p class="label">Engineering decisions</p>
                <ol class="decisions">
                  <li v-for="(decision, index) in chapter.decisions" :key="decision">
                    <span>{{ String(index + 1).padStart(2, '0') }}</span>
                    <p>{{ decision }}</p>
                  </li>
                </ol>
              </div>
            </div>

            <a class="project-link" :href="chapter.href" target="_blank" rel="noopener noreferrer">
              View live product <span aria-hidden="true">↗</span>
            </a>
          </article>
        </div>
      </div>

      <section id="practice" class="practice" aria-labelledby="practice-title">
        <p class="eyebrow">How I work</p>
        <h2 id="practice-title">The interface is the last mile of a larger engineering decision.</h2>
        <div class="practice__grid">
          <article>
            <span>01</span><h3>Frame the system</h3>
            <p>Map users, states and operational constraints before committing to screens.</p>
          </article>
          <article>
            <span>02</span><h3>Build the path</h3>
            <p>Choose an architecture that keeps product work maintainable as the workflow grows.</p>
          </article>
          <article>
            <span>03</span><h3>Prove the experience</h3>
            <p>Validate behaviour, accessibility and performance across the complete journey.</p>
          </article>
        </div>
      </section>

      <section id="experience" class="experience" aria-labelledby="experience-title">
        <div>
          <p class="eyebrow">Experience</p>
          <h2 id="experience-title">From implementation to product ownership.</h2>
        </div>
        <ol>
          <li v-for="item in experience" :key="item[0]">
            <time>{{ item[0] }}</time><strong>{{ item[1] }}</strong><span>{{ item[2] }}</span>
          </li>
        </ol>
      </section>

      <section id="contact" class="contact" aria-labelledby="contact-title">
        <p class="eyebrow">Next chapter</p>
        <h2 id="contact-title">Have a hard product problem?</h2>
        <p>Let’s talk about the system behind it—and the experience people should have in front of it.</p>
        <a href="https://www.linkedin.com/in/wesley-ukadike-3a9440180/" target="_blank" rel="noopener noreferrer">
          Start a conversation <span aria-hidden="true">↗</span>
        </a>
      </section>
    </main>

    <footer class="footer"><span>Wesley Ukadike</span><span>Senior Software Engineer</span><a href="#top">Back to top ↑</a></footer>
  </div>
</template>

<style scoped>
.case-study-shell {
  --ink: #eef1e8;
  --muted: #9ca59d;
  --line: rgb(238 241 232 / 18%);
  --signal: #c7ff4a;
  min-height: 100vh;
  overflow: clip;
  color: var(--ink);
  background:
    radial-gradient(circle at 78% 4%, rgb(199 255 74 / 10%), transparent 24rem),
    #0c100e;
  font-family: Aeonik, ui-sans-serif, system-ui, sans-serif;
}
.skip-link { position: fixed; z-index: 100; left: 1rem; top: -5rem; padding: .75rem 1rem; color: #0c100e; background: var(--signal); }
.skip-link:focus { top: 1rem; }
.topbar { position: relative; z-index: 10; display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; min-height: 5.5rem; padding: 0 clamp(1.25rem, 4vw, 4.5rem); border-bottom: 1px solid var(--line); font-size: .75rem; letter-spacing: .08em; text-transform: uppercase; }
.wordmark { display: inline-flex; align-items: center; gap: .85rem; width: max-content; text-decoration: none; color: inherit; }
.wordmark > span:first-child { display: grid; width: 2.3rem; aspect-ratio: 1; place-items: center; border: 1px solid var(--signal); border-radius: 50%; color: var(--signal); letter-spacing: 0; }
.topbar > p { color: var(--muted); }
.topbar__cta { justify-self: end; color: var(--ink); text-decoration: none; }
.topbar__cta span { color: var(--signal); margin-left: .4rem; }
.hero { display: flex; min-height: min(54rem, calc(100vh - 5.5rem)); flex-direction: column; justify-content: space-between; padding: clamp(2rem, 5vw, 5rem) clamp(1.25rem, 4vw, 4.5rem) 3rem; }
.eyebrow, .label { color: var(--signal); font-size: .72rem; letter-spacing: .14em; text-transform: uppercase; }
.hero h1 { max-width: 14ch; margin: 3rem 0; font-size: clamp(3.5rem, 8.7vw, 9rem); font-weight: 500; letter-spacing: -.065em; line-height: .86; }
.hero h1 em { display: block; color: var(--signal); font-family: Georgia, serif; font-weight: 400; }
.hero__footer { display: grid; grid-template-columns: 1.15fr 1fr; gap: 4rem; align-items: end; }
.hero__intro { max-width: 38rem; font-size: clamp(1.15rem, 2vw, 1.65rem); line-height: 1.45; }
.proof { display: grid; grid-template-columns: repeat(3, 1fr); margin: 0; border-top: 1px solid var(--line); }
.proof div { padding: 1rem 0; border-bottom: 1px solid var(--line); }
.proof dt { color: var(--muted); font-size: .7rem; letter-spacing: .08em; text-transform: uppercase; }
.proof dd { margin: .45rem 0 0; font-size: .95rem; }
.story-layout { display: grid; grid-template-columns: minmax(13rem, 22vw) 1fr; border-top: 1px solid var(--line); }
.chapter-nav { position: sticky; top: 0; height: 100vh; padding: 3rem clamp(1.25rem, 3vw, 3.5rem); border-right: 1px solid var(--line); }
.chapter-nav p { margin: 0 0 2rem; color: var(--muted); font-size: .7rem; letter-spacing: .12em; text-transform: uppercase; }
.chapter-nav ol { margin: 0 0 2rem; padding: 0; list-style: none; }
.chapter-nav a { display: block; padding: .7rem 0; color: var(--muted); text-decoration: none; transition: color .2s ease; }
.chapter-nav ol a { color: var(--ink); font-size: 1.05rem; }
.chapter-nav a:hover, .chapter-nav a:focus-visible { color: var(--signal); }
.chapter-nav a span { display: inline-block; width: 2.25rem; color: var(--signal); font-size: .65rem; }
.chapter { min-height: 100vh; padding: clamp(3rem, 7vw, 7rem) clamp(1.25rem, 6vw, 7rem); border-bottom: 1px solid var(--line); scroll-margin-top: 1rem; }
.chapter__mast { display: grid; grid-template-columns: auto 1fr; gap: clamp(1.5rem, 4vw, 4rem); align-items: start; }
.chapter__number { color: var(--signal); font-size: clamp(1.2rem, 2vw, 1.8rem); }
.chapter h2 { margin: .9rem 0 0; font-size: clamp(4rem, 10vw, 10rem); font-weight: 500; letter-spacing: -.07em; line-height: .8; }
.chapter__descriptor { margin: 1.5rem 0 0; color: var(--muted); font: italic clamp(1.25rem, 2.4vw, 2rem) Georgia, serif; }
.chapter__summary { max-width: 48rem; margin: clamp(4rem, 10vw, 9rem) 0 clamp(3rem, 6vw, 5rem) auto; font-size: clamp(1.6rem, 3vw, 3rem); line-height: 1.17; letter-spacing: -.025em; }
.chapter__body { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(2rem, 6vw, 7rem); padding-top: 2rem; border-top: 1px solid var(--line); }
.ownership { max-width: 36rem; color: #c8cdc8; line-height: 1.65; }
.stack { display: flex; flex-wrap: wrap; gap: .5rem; padding: 1.5rem 0 0; list-style: none; }
.stack li { padding: .45rem .7rem; border: 1px solid var(--line); border-radius: 999px; color: var(--muted); font-size: .72rem; }
.decisions { padding: 0; list-style: none; }
.decisions li { display: grid; grid-template-columns: 2rem 1fr; gap: .5rem; padding: 1rem 0; border-bottom: 1px solid var(--line); }
.decisions span { color: var(--signal); font-size: .7rem; }
.decisions p { margin: 0; color: #c8cdc8; line-height: 1.45; }
.project-link { display: inline-flex; gap: 2rem; align-items: center; margin-top: 4rem; padding-bottom: .45rem; border-bottom: 1px solid var(--signal); color: var(--ink); text-decoration: none; }
.project-link span { color: var(--signal); }
.practice, .experience, .contact { padding: clamp(4rem, 9vw, 9rem) clamp(1.25rem, 7vw, 8rem); }
.practice h2, .experience h2 { max-width: 19ch; margin: 1.5rem 0 4rem; font-size: clamp(2.5rem, 5.4vw, 5.5rem); font-weight: 500; letter-spacing: -.05em; line-height: .98; }
.practice { background: var(--signal); color: #0c100e; }
.practice .eyebrow { color: #334214; }
.practice__grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid rgb(12 16 14 / 35%); }
.practice article { padding: 1.5rem 2rem 1rem 0; }
.practice article + article { padding-left: 2rem; border-left: 1px solid rgb(12 16 14 / 35%); }
.practice h3 { margin: 3rem 0 1rem; font-size: 1.25rem; }
.practice p { max-width: 25rem; line-height: 1.55; }
.experience { display: grid; grid-template-columns: 1fr 1.25fr; gap: 5rem; border-bottom: 1px solid var(--line); }
.experience h2 { font-size: clamp(2.5rem, 4.5vw, 4.75rem); }
.experience ol { margin: 0; padding: 0; list-style: none; }
.experience li { display: grid; grid-template-columns: 6.5rem 1fr; padding: 1.25rem 0; border-top: 1px solid var(--line); }
.experience time { grid-row: span 2; color: var(--signal); font-size: .75rem; }
.experience strong { font-size: 1.1rem; font-weight: 500; }
.experience li span { margin-top: .25rem; color: var(--muted); }
.contact { min-height: 75vh; display: flex; flex-direction: column; justify-content: center; background: #ebece5; color: #0c100e; }
.contact .eyebrow { color: #526517; }
.contact h2 { max-width: 10ch; margin: 1.5rem 0 2rem; font-size: clamp(3.75rem, 9vw, 9rem); font-weight: 500; letter-spacing: -.075em; line-height: .82; }
.contact > p:not(.eyebrow) { max-width: 39rem; font-size: 1.2rem; line-height: 1.55; }
.contact a { width: max-content; margin-top: 3rem; padding: 1rem 1.25rem; background: #0c100e; color: var(--ink); text-decoration: none; }
.footer { display: flex; justify-content: space-between; gap: 1rem; padding: 1.5rem clamp(1.25rem, 4vw, 4.5rem); color: var(--muted); font-size: .75rem; }
.footer a { color: inherit; }
a:focus-visible { outline: 2px solid var(--signal); outline-offset: 4px; }
@media (max-width: 800px) {
  .topbar { grid-template-columns: 1fr auto; min-height: 4.5rem; }
  .topbar > p, .wordmark__name { display: none; }
  .hero { min-height: calc(100svh - 4.5rem); }
  .hero__footer, .chapter__body, .experience { grid-template-columns: 1fr; gap: 2.5rem; }
  .proof { grid-template-columns: 1fr; }
  .proof div { display: flex; justify-content: space-between; }
  .proof dd { margin: 0; }
  .story-layout { display: block; }
  .chapter-nav { position: sticky; z-index: 5; top: 0; display: flex; width: 100%; height: auto; gap: 1.25rem; overflow-x: auto; padding: .8rem 1.25rem; border-right: 0; border-bottom: 1px solid var(--line); background: rgb(12 16 14 / 94%); backdrop-filter: blur(12px); }
  .chapter-nav p, .chapter-nav > a { display: none; }
  .chapter-nav ol { display: flex; gap: 1.25rem; margin: 0; }
  .chapter-nav ol a { white-space: nowrap; font-size: .8rem; }
  .chapter { min-height: auto; }
  .chapter__mast { grid-template-columns: 1fr; }
  .chapter h2 { font-size: clamp(4rem, 23vw, 7rem); }
  .chapter__summary { margin-top: 4rem; }
  .practice__grid { grid-template-columns: 1fr; }
  .practice article + article { padding-left: 0; border-top: 1px solid rgb(12 16 14 / 35%); border-left: 0; }
  .experience li { grid-template-columns: 5.5rem 1fr; }
  .footer span:nth-child(2) { display: none; }
}
@media (prefers-reduced-motion: reduce) { .chapter-nav { scroll-behavior: auto; } }
</style>
