<script setup lang="ts">
import type { ProjectItem } from '~/types/portfolio'

interface ProjectDefinition {
  name: string
  match: string
  context: string
  role: string
  summary: string
  work: string[]
  url: string
}

const projectDefinitions: ProjectDefinition[] = [
  {
    name: 'Budds',
    match: 'budd',
    context: 'Independent product · AI-assisted learning',
    role: 'Product design and full-stack engineering',
    summary:
      'A study workspace that turns a learner’s own documents into cited conversations, quizzes, flashcards, courses and audio overviews.',
    work: [
      'Designed the product and built it across Nuxt, Convex and Cloudflare.',
      'Kept generated answers tied to the correct source revision.',
      'Moved long-running media work out of the request cycle and made finished study material available privately and offline.',
    ],
    url: 'https://budds.pages.dev',
  },
  {
    name: 'CharterXE',
    match: 'charter',
    context: 'Private aviation · Production product',
    role: 'Lead frontend engineer',
    summary:
      'Customer booking and operations software for private-flight requests, from itinerary design to quote acceptance and payment.',
    work: [
      'Owned the frontend codebase from initial setup through production iterations.',
      'Built one-way, return and multi-leg booking journeys without splitting them into separate products.',
      'Delivered the accompanying operations workflows for aircraft, customers, offers and quote fulfilment.',
    ],
    url: 'https://www.charterxe.com/en',
  },
  {
    name: 'WACS',
    match: 'wacs',
    context: 'Public-sector lending · Multi-sided platform',
    role: 'Primary web contributor',
    summary:
      'Credit-management software connecting Nigerian federal employees, lenders and IPPIS administrators.',
    work: [
      'Built permission-aware workflows for loan requests, approvals and payroll-deduction validation.',
      'Supported operational work including batch validation, payment warrants, audit history and reporting.',
      'Later contributed to the Expo mobile application for the same product.',
    ],
    url: 'https://wacs.ippis.gov.ng/',
  },
]

const roles = [
  {
    period: '2023 — Present',
    role: 'Lead Software Engineer',
    company: 'Falcon Aerospace Limited',
    note: 'Product engineering for private-aviation software, including CharterXE’s customer and operations applications.',
  },
  {
    period: '2021 — 2023',
    role: 'Lead Frontend Engineer',
    company: 'Blackcopper',
    note: 'Frontend ownership across commercial banking products and public-facing web experiences.',
  },
  {
    period: '2020 — 2021',
    role: 'Frontend Engineer',
    company: 'Parkway',
    note: 'Production web applications for financial services.',
  },
  {
    period: '2019 — 2020',
    role: 'Frontend Engineer',
    company: 'Kraksmedia',
    note: 'Responsive product and publishing experiences.',
  },
]

const { data: content } = await usePortfolioContent()

function findProject(definition: ProjectDefinition): ProjectItem | undefined {
  return content.value?.projects?.find(project => project.title.toLowerCase().includes(definition.match))
}

const projects = computed(() => projectDefinitions.map((definition) => {
  const source = findProject(definition)

  return {
    ...definition,
    imageUrl: source?.image
      ? sanityImage(source.image)?.width(1600).height(1000).fit('crop').quality(88).url() || ''
      : '',
  }
}))

const linkedInUrl = computed(() => (
  content.value?.footer?.socials?.find(social => social.link.includes('linkedin'))?.link
  || 'https://www.linkedin.com/in/wesley-ukadike-3a9440180/'
))

const githubUrl = computed(() => (
  content.value?.footer?.socials?.find(social => social.link.includes('github'))?.link
  || 'https://github.com/wescodess'
))

const cvUrl = computed(() => content.value?.footer?.cv || '')
</script>

<template>
  <div class="portfolio">
    <a class="skip-link" href="#selected-work">Skip to selected work</a>

    <header class="site-header">
      <a class="identity" href="#top" aria-label="Wesley Ukadike, back to top">
        <strong>Wesley Ukadike</strong>
        <span>Senior software engineer</span>
      </a>

      <nav aria-label="Primary navigation">
        <a href="#selected-work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#about">About</a>
      </nav>

      <a :href="linkedInUrl" class="header-link" target="_blank" rel="noopener noreferrer">
        LinkedIn <span aria-hidden="true">↗</span>
      </a>
    </header>

    <main id="top">
      <section class="intro" aria-labelledby="portfolio-title">
        <p class="intro-label">Based in Toronto · Building software since 2019</p>
        <h1 id="portfolio-title">I build web products for complicated, real-world workflows.</h1>
        <div class="intro-copy">
          <p>
            I’m Wesley, a senior software engineer working across frontend architecture,
            full-stack implementation and product decisions. I currently lead engineering work
            in private aviation and independently build Budds, an AI-assisted learning product.
          </p>
          <div class="intro-links">
            <a href="#selected-work">Selected work <span aria-hidden="true">↓</span></a>
            <a v-if="cvUrl" :href="cvUrl" target="_blank" rel="noopener noreferrer">View CV <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section id="selected-work" class="selected-work" aria-labelledby="work-title">
        <header class="section-heading">
          <h2 id="work-title">Selected work</h2>
          <p>Three products that best represent the scope of my work and the decisions I owned.</p>
        </header>

        <div class="project-list">
          <article v-for="project in projects" :key="project.name" class="project">
            <div class="project-image">
              <NuxtImg
                v-if="project.imageUrl"
                :src="project.imageUrl"
                :alt="`${project.name} application`"
                width="1600"
                height="1000"
                sizes="100vw lg:58vw"
                loading="lazy"
              />
              <div v-else class="image-fallback" aria-hidden="true">
                <span>{{ project.name }}</span>
              </div>
            </div>

            <div class="project-copy">
              <p class="project-context">{{ project.context }}</p>
              <h3>{{ project.name }}</h3>
              <p class="project-summary">{{ project.summary }}</p>

              <dl>
                <div>
                  <dt>My role</dt>
                  <dd>{{ project.role }}</dd>
                </div>
                <div>
                  <dt>Selected engineering work</dt>
                  <dd>
                    <ul>
                      <li v-for="item in project.work" :key="item">{{ item }}</li>
                    </ul>
                  </dd>
                </div>
              </dl>

              <a :href="project.url" target="_blank" rel="noopener noreferrer">
                Visit {{ project.name }} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        </div>
      </section>

      <section id="experience" class="experience" aria-labelledby="experience-title">
        <header class="section-heading">
          <h2 id="experience-title">Experience</h2>
          <p>I’ve spent my career building and leading frontend-heavy product work.</p>
        </header>

        <ol>
          <li v-for="item in roles" :key="item.company">
            <time>{{ item.period }}</time>
            <div>
              <h3>{{ item.role }}</h3>
              <p>{{ item.company }}</p>
            </div>
            <p>{{ item.note }}</p>
          </li>
        </ol>
      </section>

      <section id="about" class="about" aria-labelledby="about-title">
        <h2 id="about-title">About my work</h2>
        <div>
          <p>
            I’m most useful when a product is larger than a set of screens: several kinds of users,
            operational handoffs, permissions, failure states, or a new technical capability that
            still needs to become understandable software.
          </p>
          <p>
            My background is strongest in Vue, Nuxt and TypeScript, but the job is broader than a
            framework. I work with design and product, make architecture decisions, build through
            the stack, and stay with the details required to ship reliably.
          </p>
        </div>
      </section>

      <section class="contact" aria-labelledby="contact-title">
        <div>
          <h2 id="contact-title">If this work is relevant to what you’re building, let’s talk.</h2>
          <p>LinkedIn is the easiest way to reach me.</p>
        </div>
        <div class="contact-links">
          <a :href="linkedInUrl" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          <a :href="githubUrl" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          <a v-if="cvUrl" :href="cvUrl" target="_blank" rel="noopener noreferrer">CV <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div>
        <NuxtImg src="/images/winkbit.png" width="44" height="59" alt="" aria-hidden="true" />
        <span>Wesley Ukadike</span>
      </div>
      <a href="#top">Back to top ↑</a>
    </footer>
  </div>
</template>

<style scoped>
.portfolio {
  --page: #f6f5f1;
  --paper: #ffffff;
  --ink: #171717;
  --muted: #686868;
  --line: #d8d6cf;
  --link: #1f4fd1;
  min-height: 100dvh;
  overflow: hidden;
  color: var(--ink);
  background: var(--page);
  font-family: 'Aeonik', Arial, sans-serif;
  line-height: 1.5;
}

.portfolio a { color: inherit; text-decoration-thickness: 1px; text-underline-offset: .24em; }
.portfolio a:hover { color: var(--link); }
.portfolio a:focus-visible { outline: 2px solid var(--link); outline-offset: 5px; }
.skip-link { position: fixed; top: 0; left: 1rem; z-index: 120; transform: translateY(-130%); padding: .75rem 1rem; background: var(--paper); }
.skip-link:focus { transform: translateY(0); }
.site-header, .intro, .selected-work, .experience, .about, .contact, .site-footer { width: min(calc(100% - 3rem), 76rem); margin-inline: auto; }
.site-header { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; min-height: 5rem; border-bottom: 1px solid var(--line); }
.identity { display: flex; flex-direction: column; width: max-content; text-decoration: none; }
.identity strong { font-size: .88rem; letter-spacing: -.01em; }
.identity span { color: var(--muted); font-size: .72rem; }
.site-header nav { display: flex; gap: 2rem; font-size: .8rem; }
.site-header nav a, .header-link { text-decoration: none; }
.header-link { justify-self: end; font-size: .8rem; }
.intro { padding-block: clamp(5rem, 8vw, 7.5rem) clamp(6rem, 9vw, 8.5rem); }
.intro-label, .project-context { margin: 0; color: var(--muted); font-size: .76rem; }
.intro h1 { max-width: 17ch; margin: 1.4rem 0 0; font-size: clamp(3rem, 5.2vw, 4.7rem); font-weight: 500; letter-spacing: -.055em; line-height: 1; }
.intro-copy { display: grid; grid-template-columns: minmax(0, 42rem) auto; justify-content: space-between; gap: 3rem; margin-top: clamp(2.5rem, 4vw, 3.75rem); }
.intro-copy > p { margin: 0; color: #3f3f3f; font-size: clamp(1.05rem, 1.6vw, 1.3rem); line-height: 1.65; }
.intro-links { display: flex; flex-direction: column; align-items: flex-start; gap: .7rem; min-width: 9rem; font-size: .85rem; }
.selected-work, .experience, .about, .contact { border-top: 1px solid var(--line); }
.selected-work { padding-block: 5rem 8rem; }
.section-heading { display: grid; grid-template-columns: 1fr minmax(18rem, 1fr); gap: 3rem; margin-bottom: 4rem; }
.section-heading h2, .about h2 { margin: 0; font-size: clamp(1.8rem, 3vw, 2.6rem); font-weight: 500; letter-spacing: -.04em; }
.section-heading > p { max-width: 31rem; margin: .4rem 0 0; color: var(--muted); }
.project-list { display: grid; gap: 8rem; }
.project { display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(19rem, .75fr); gap: clamp(2rem, 5vw, 5rem); align-items: start; }
.project-image { overflow: hidden; aspect-ratio: 8 / 5; border: 1px solid #cbc9c2; background: #e8e6df; box-shadow: 0 1.5rem 4rem rgb(30 30 25 / 8%); }
.project-image img { width: 100%; height: 100%; object-fit: cover; object-position: top center; }
.image-fallback { display: grid; width: 100%; height: 100%; place-items: center; color: #77746c; font-size: 1rem; }
.project-copy { padding-top: .2rem; }
.project-copy h3 { margin: .8rem 0 0; font-size: clamp(2.2rem, 4vw, 3.7rem); font-weight: 500; letter-spacing: -.055em; line-height: 1; }
.project-summary { margin: 1.4rem 0 0; color: #353535; font-size: 1.03rem; line-height: 1.65; }
.project dl { margin: 2.2rem 0; border-top: 1px solid var(--line); }
.project dl > div { display: grid; grid-template-columns: 6.5rem 1fr; gap: 1rem; padding-block: 1rem; border-bottom: 1px solid var(--line); }
.project dt { color: var(--muted); font-size: .68rem; line-height: 1.4; text-transform: uppercase; }
.project dd { margin: 0; font-size: .86rem; line-height: 1.55; }
.project ul { display: grid; gap: .6rem; margin: 0; padding-left: 1rem; }
.project-copy > a { font-size: .85rem; font-weight: 600; }
.experience { padding-block: 5rem 7rem; }
.experience ol { margin: 0; padding: 0; border-top: 1px solid var(--line); list-style: none; }
.experience li { display: grid; grid-template-columns: 10rem minmax(15rem, .8fr) 1fr; gap: 2rem; padding-block: 1.5rem; border-bottom: 1px solid var(--line); }
.experience time, .experience li > p, .experience li div p { color: var(--muted); }
.experience time { font-size: .78rem; }
.experience h3 { margin: 0; font-size: .95rem; font-weight: 600; }
.experience li div p, .experience li > p { margin: .2rem 0 0; font-size: .8rem; line-height: 1.55; }
.about { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; padding-block: 5rem 7rem; }
.about > div { max-width: 38rem; }
.about p { margin: 0; color: #3c3c3c; font-size: 1.05rem; line-height: 1.7; }
.about p + p { margin-top: 1.4rem; }
.contact { display: grid; grid-template-columns: 1fr auto; align-items: end; gap: 3rem; padding-block: 5rem 6rem; }
.contact h2 { max-width: 20ch; margin: 0; font-size: clamp(2rem, 4vw, 3.7rem); font-weight: 500; letter-spacing: -.05em; line-height: 1.05; }
.contact p { margin: 1rem 0 0; color: var(--muted); }
.contact-links { display: flex; gap: 1.25rem; padding-bottom: .35rem; font-size: .85rem; }
.site-footer { display: flex; align-items: end; justify-content: space-between; min-height: 6rem; border-top: 1px solid var(--line); font-size: .75rem; }
.site-footer > div { display: flex; align-items: end; gap: .7rem; }
.site-footer img { width: 2rem; height: auto; filter: saturate(.72); }

@media (max-width: 880px) {
  .site-header, .intro, .selected-work, .experience, .about, .contact, .site-footer { width: min(calc(100% - 2.25rem), 76rem); }
  .site-header { grid-template-columns: 1fr auto; }
  .site-header nav { display: none; }
  .intro-copy, .section-heading, .project, .about, .contact { grid-template-columns: 1fr; }
  .intro-copy, .section-heading, .about, .contact { gap: 2rem; }
  .intro-links { flex-direction: row; gap: 1.25rem; }
  .project-list { gap: 6rem; }
  .project { gap: 2rem; }
  .project-copy { max-width: 40rem; }
  .experience li { grid-template-columns: 8rem 1fr; }
  .experience li > p { grid-column: 2; }
  .contact-links { padding: 0; }
}

@media (max-width: 560px) {
  .identity span { display: none; }
  .intro { padding-block: 4rem 5.5rem; }
  .intro h1 { font-size: clamp(2.65rem, 11.5vw, 3.3rem); }
  .selected-work, .experience, .about, .contact { padding-block: 4rem 5rem; }
  .section-heading { margin-bottom: 3rem; }
  .project-list { gap: 5rem; }
  .project-image { width: calc(100% + 2.25rem); margin-left: -1.125rem; border-inline: 0; box-shadow: none; }
  .project dl > div { grid-template-columns: 1fr; gap: .55rem; }
  .experience li { grid-template-columns: 1fr; gap: .75rem; }
  .experience li > p { grid-column: auto; margin-top: 0; }
  .contact-links { flex-wrap: wrap; }
  .site-footer { min-height: 5.5rem; }
}
</style>
