<script setup lang="ts">
interface ProjectBrief {
  number: string
  title: string
  category: string
  summary: string
  ownership: string
  signals: string[]
  href: string
}

interface Capability {
  title: string
  description: string
}

interface ExperienceItem {
  period: string
  role: string
  company: string
}

const projects: ProjectBrief[] = [
  {
    number: '01',
    title: 'Budds',
    category: 'AI learning workspace',
    summary:
      'Turns a student’s own documents into cited conversations, quizzes, flashcards, structured courses and two-host audio overviews.',
    ownership:
      'Designed and built the full-stack product, including revision-scoped retrieval, durable media generation, private artifact delivery and offline study sync.',
    signals: ['Nuxt', 'Convex', 'Cloudflare', 'Active development'],
    href: 'https://budds.pages.dev',
  },
  {
    number: '02',
    title: 'CharterXE',
    category: 'Private aviation marketplace',
    summary:
      'A booking experience and operations console supporting multi-leg requests, aircraft selection, quote review, acceptance and payment.',
    ownership:
      'Owned the frontend codebase from initial setup through production iterations, translating complex traveller and operations workflows into two coherent Nuxt applications.',
    signals: ['Frontend ownership', 'Booking workflows', 'Operations tooling'],
    href: 'https://www.charterxe.com/en',
  },
  {
    number: '03',
    title: 'WACS',
    category: 'Government credit management',
    summary:
      'Connects Nigerian federal employees, lenders and IPPIS administrators across loan requests, approvals, payroll deductions and reporting.',
    ownership:
      'Served as the primary contributor to the Vue web application and later improved the Expo mobile experience, including permission-aware workspaces and audit trails.',
    signals: ['Multi-sided platform', 'Vue', 'Expo', 'Workflow design'],
    href: 'https://wacs.ippis.gov.ng/',
  },
]

const capabilities: Capability[] = [
  {
    title: 'Product and systems thinking',
    description: 'Turning ambiguous requirements into clear workflows, delivery slices and maintainable system boundaries.',
  },
  {
    title: 'Frontend architecture',
    description: 'Building responsive, accessible interfaces that make complex products feel considered and understandable.',
  },
  {
    title: 'Full-stack delivery',
    description: 'Taking web products from data model and application logic through production UI and operational concerns.',
  },
  {
    title: 'Engineering quality',
    description: 'Using automated coverage, measured performance work and explicit failure states to build confidence over time.',
  },
]

const experience: ExperienceItem[] = [
  {
    period: '2023 — Present',
    role: 'Lead Software Engineer',
    company: 'Falcon Aerospace Limited',
  },
  {
    period: '2021 — 2023',
    role: 'Lead Frontend Engineer',
    company: 'Blackcopper',
  },
  {
    period: '2020 — 2021',
    role: 'Frontend Engineer',
    company: 'Parkway',
  },
  {
    period: '2019 — 2020',
    role: 'Frontend Engineer',
    company: 'Kraksmedia',
  },
]
</script>

<template>
  <div class="studio">
    <NuxtLink class="studio__skip" to="#quiet-main">
      Skip to content
    </NuxtLink>

    <header class="studio__header">
      <NuxtLink to="/" class="studio__identity" aria-label="Wesley Ukadike, home">
        <span class="studio__mark" aria-hidden="true">WU</span>
        <span>
          <strong>Wesley Ukadike</strong>
          <small>Senior Software Engineer</small>
        </span>
      </NuxtLink>

      <nav class="studio__nav" aria-label="Quiet studio navigation">
        <NuxtLink to="#quiet-work">Selected work</NuxtLink>
        <NuxtLink to="#quiet-capabilities">Capabilities</NuxtLink>
        <NuxtLink to="#quiet-experience">Experience</NuxtLink>
      </nav>

      <NuxtLink class="studio__header-cta" to="#quiet-contact">
        Start a conversation
        <span aria-hidden="true">↗</span>
      </NuxtLink>
    </header>

    <main id="quiet-main">
      <section class="studio-hero" aria-labelledby="quiet-title">
        <div class="studio-hero__intro">
          <p class="studio__eyebrow">
            Independent perspective · Senior execution
          </p>
          <h1 id="quiet-title">
            Complex products,
            <em>made clear.</em>
          </h1>
        </div>

        <div class="studio-hero__aside">
          <p class="studio-hero__lede">
            I design and build dependable digital products where product thinking,
            engineering depth and user experience need to work as one.
          </p>
          <dl class="studio-hero__facts">
            <div>
              <dt>Based</dt>
              <dd>Ontario, Canada</dd>
            </div>
            <div>
              <dt>Currently</dt>
              <dd>Lead Software Engineer</dd>
            </div>
            <div>
              <dt>Practice</dt>
              <dd>Building production software since 2017</dd>
            </div>
          </dl>
        </div>

        <div class="studio-hero__signature" aria-hidden="true">
          <span class="studio-hero__orbit" />
          <NuxtImg
            src="/images/winkbit.png"
            alt=""
            width="255"
            height="325"
            loading="eager"
          />
          <span class="studio-hero__note">Hello from the studio</span>
        </div>
      </section>

      <section id="quiet-work" class="studio-section studio-work" aria-labelledby="quiet-work-title">
        <header class="studio-section__header">
          <div>
            <p class="studio__eyebrow">Selected work</p>
            <h2 id="quiet-work-title">Three products. Three kinds of complexity.</h2>
          </div>
          <p>
            A focused selection showing product range, ownership and engineering judgement.
          </p>
        </header>

        <div class="studio-work__list">
          <article v-for="project in projects" :key="project.number" class="studio-project">
            <p class="studio-project__number" aria-hidden="true">{{ project.number }}</p>

            <div class="studio-project__title">
              <p>{{ project.category }}</p>
              <h3>{{ project.title }}</h3>
            </div>

            <div class="studio-project__story">
              <p>{{ project.summary }}</p>
              <p><strong>My contribution:</strong> {{ project.ownership }}</p>
              <ul aria-label="Project characteristics">
                <li v-for="signal in project.signals" :key="signal">{{ signal }}</li>
              </ul>
            </div>

            <NuxtLink
              class="studio-project__link"
              :to="project.href"
              external
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`Visit ${project.title} in a new tab`"
            >
              Visit product
              <span aria-hidden="true">↗</span>
            </NuxtLink>
          </article>
        </div>

        <NuxtLink class="studio__text-link" to="/projects">
          Explore all selected work
          <span aria-hidden="true">→</span>
        </NuxtLink>
      </section>

      <section
        id="quiet-capabilities"
        class="studio-section studio-capabilities"
        aria-labelledby="quiet-capabilities-title"
      >
        <div class="studio-capabilities__heading">
          <p class="studio__eyebrow">How I contribute</p>
          <h2 id="quiet-capabilities-title">
            Useful across the product,
            <em>accountable for the details.</em>
          </h2>
          <p>
            My strongest work sits between product direction, interface craft and reliable
            implementation—not inside a single framework box.
          </p>
        </div>

        <ol class="studio-capabilities__list">
          <li v-for="(capability, index) in capabilities" :key="capability.title">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <div>
              <h3>{{ capability.title }}</h3>
              <p>{{ capability.description }}</p>
            </div>
          </li>
        </ol>
      </section>

      <section
        id="quiet-experience"
        class="studio-section studio-experience"
        aria-labelledby="quiet-experience-title"
      >
        <header class="studio-section__header">
          <div>
            <p class="studio__eyebrow">Experience</p>
            <h2 id="quiet-experience-title">A practice built in production.</h2>
          </div>
          <p>
            Progressive responsibility across aviation, financial technology and digital products.
          </p>
        </header>

        <ol class="studio-experience__list">
          <li v-for="item in experience" :key="`${item.company}-${item.period}`">
            <p>{{ item.period }}</p>
            <h3>{{ item.role }}</h3>
            <p>{{ item.company }}</p>
          </li>
        </ol>

        <p class="studio-experience__earlier">
          Earlier: Web Developer Intern at Teksight Edge, 2017
        </p>
      </section>

      <section id="quiet-contact" class="studio-contact" aria-labelledby="quiet-contact-title">
        <div>
          <p class="studio__eyebrow">A considered next step</p>
          <h2 id="quiet-contact-title">
            Have a difficult product problem worth solving?
          </h2>
        </div>

        <div class="studio-contact__action">
          <p>
            Share the context, the constraints and what success should look like. I’ll meet you
            at the level of the problem.
          </p>
          <div>
            <NuxtLink class="studio-contact__primary" to="/#footer">
              Send a message
              <span aria-hidden="true">↗</span>
            </NuxtLink>
            <NuxtLink
              class="studio-contact__secondary"
              to="https://www.linkedin.com/in/wesley-ukadike-3a9440180/"
              external
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </NuxtLink>
          </div>
        </div>
      </section>
    </main>

    <footer class="studio__footer">
      <p>Wesley Ukadike · Senior Software Engineer</p>
      <p>Ontario, Canada</p>
      <NuxtLink to="#quiet-main">Back to top ↑</NuxtLink>
    </footer>
  </div>
</template>

<style scoped>
.studio {
  --paper: #f3f0e8;
  --paper-deep: #e9e4d8;
  --ink: #191a17;
  --muted: #65665e;
  --line: rgb(25 26 23 / 18%);
  --pine: #24493d;
  --acid: #d9ef69;
  min-height: 100dvh;
  overflow: hidden;
  color: var(--ink);
  background:
    radial-gradient(circle at 84% 7%, rgb(217 239 105 / 22%), transparent 18rem),
    var(--paper);
  font-family: 'Aeonik', system-ui, sans-serif;
}

.studio::before {
  position: fixed;
  inset: 0;
  z-index: 20;
  pointer-events: none;
  content: '';
  opacity: 0.18;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.16'/%3E%3C/svg%3E");
}

.studio__skip {
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 50;
  padding: 0.75rem 1rem;
  color: white;
  background: var(--pine);
  transform: translateY(-200%);
}

.studio__skip:focus {
  transform: translateY(0);
}

.studio__header,
.studio-hero,
.studio-section,
.studio__footer {
  width: min(100% - 2rem, 90rem);
  margin-inline: auto;
}

.studio__header {
  display: grid;
  grid-template-columns: minmax(15rem, 1fr) auto minmax(15rem, 1fr);
  align-items: center;
  min-height: 6.5rem;
  border-bottom: 1px solid var(--line);
}

.studio__identity {
  display: inline-flex;
  gap: 0.75rem;
  align-items: center;
  width: max-content;
  color: inherit;
  text-decoration: none;
}

.studio__identity > span:last-child {
  display: grid;
  line-height: 1.1;
}

.studio__identity strong {
  font-size: 0.86rem;
  letter-spacing: -0.01em;
}

.studio__identity small {
  margin-top: 0.25rem;
  color: var(--muted);
  font-size: 0.7rem;
}

.studio__mark {
  display: grid;
  width: 2.5rem;
  aspect-ratio: 1;
  place-items: center;
  border-radius: 50%;
  color: white;
  background: var(--pine);
  font-size: 0.68rem;
  letter-spacing: 0.06em;
}

.studio__nav {
  display: flex;
  gap: clamp(1.25rem, 3vw, 3rem);
  align-items: center;
  font-size: 0.75rem;
}

.studio__nav a,
.studio__header-cta,
.studio__footer a {
  color: inherit;
  text-decoration: none;
}

.studio__nav a {
  position: relative;
  padding-block: 0.5rem;
}

.studio__nav a::after {
  position: absolute;
  right: 0;
  bottom: 0.15rem;
  left: 0;
  height: 1px;
  content: '';
  background: currentColor;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 250ms ease;
}

.studio__nav a:hover::after,
.studio__nav a:focus-visible::after {
  transform: scaleX(1);
  transform-origin: left;
}

.studio__header-cta {
  display: inline-flex;
  gap: 0.75rem;
  align-items: center;
  justify-self: end;
  padding: 0.7rem 1rem;
  border: 1px solid var(--ink);
  border-radius: 999px;
  font-size: 0.75rem;
  transition: color 200ms ease, background 200ms ease;
}

.studio__header-cta:hover {
  color: white;
  background: var(--pine);
}

.studio-hero {
  position: relative;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  min-height: min(52rem, calc(100dvh - 6.5rem));
  padding-block: clamp(5rem, 10vw, 9rem) 4rem;
}

.studio-hero__intro {
  z-index: 2;
  grid-column: 1 / span 9;
  align-self: start;
}

.studio__eyebrow {
  color: var(--muted);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.studio-hero h1 {
  max-width: 13ch;
  margin-top: 1.5rem;
  font-size: clamp(4rem, 9vw, 8.5rem);
  font-weight: 400;
  line-height: 0.86;
  letter-spacing: -0.07em;
}

.studio-hero h1 em,
.studio-capabilities__heading h2 em {
  display: block;
  color: var(--pine);
  font-family: Georgia, 'Times New Roman', serif;
  font-weight: 400;
  letter-spacing: -0.045em;
}

.studio-hero__aside {
  z-index: 2;
  grid-column: 8 / -1;
  align-self: end;
  max-width: 35rem;
  margin-left: auto;
}

.studio-hero__lede {
  max-width: 30rem;
  font-size: clamp(1.15rem, 2vw, 1.55rem);
  line-height: 1.45;
  letter-spacing: -0.025em;
}

.studio-hero__facts {
  display: grid;
  grid-template-columns: 0.85fr 1.2fr 1.6fr;
  gap: 1.5rem;
  margin-top: 2.75rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--line);
}

.studio-hero__facts div {
  display: grid;
  gap: 0.35rem;
}

.studio-hero__facts dt {
  color: var(--muted);
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.studio-hero__facts dd {
  font-size: 0.77rem;
  line-height: 1.35;
}

.studio-hero__signature {
  position: absolute;
  top: 13%;
  right: 3%;
  width: clamp(8rem, 15vw, 13rem);
  aspect-ratio: 1;
  border: 1px solid var(--line);
  border-radius: 50%;
  background: var(--paper-deep);
  transform: rotate(5deg);
}

.studio-hero__signature img {
  position: absolute;
  right: 11%;
  bottom: 7%;
  width: 74%;
  height: 88%;
  object-fit: contain;
  object-position: bottom;
  filter: saturate(0.82);
}

.studio-hero__orbit {
  position: absolute;
  inset: -0.55rem;
  border: 1px dashed rgb(36 73 61 / 34%);
  border-radius: inherit;
}

.studio-hero__note {
  position: absolute;
  right: 72%;
  bottom: 7%;
  width: max-content;
  padding: 0.45rem 0.7rem;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--paper);
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 0.73rem;
  font-style: italic;
}

.studio-section {
  padding-block: clamp(5.5rem, 9vw, 9rem);
  border-top: 1px solid var(--line);
}

.studio-section__header {
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(16rem, 0.55fr);
  gap: 3rem;
  align-items: end;
  margin-bottom: clamp(3.5rem, 6vw, 6rem);
}

.studio-section__header h2,
.studio-contact h2 {
  max-width: 15ch;
  margin-top: 1.15rem;
  font-size: clamp(2.4rem, 5vw, 5rem);
  font-weight: 400;
  line-height: 0.98;
  letter-spacing: -0.055em;
}

.studio-section__header > p,
.studio-capabilities__heading > p:last-child,
.studio-contact__action > p {
  color: var(--muted);
  font-size: 0.94rem;
  line-height: 1.65;
}

.studio-work__list {
  border-bottom: 1px solid var(--line);
}

.studio-project {
  display: grid;
  grid-template-columns: 4rem minmax(12rem, 0.72fr) minmax(20rem, 1fr) auto;
  gap: clamp(1.25rem, 3vw, 3.5rem);
  align-items: start;
  padding-block: 2.75rem;
  border-top: 1px solid var(--line);
}

.studio-project__number {
  color: var(--muted);
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 0.85rem;
  font-style: italic;
}

.studio-project__title > p {
  margin-bottom: 0.75rem;
  color: var(--muted);
  font-size: 0.7rem;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.studio-project__title h3 {
  font-size: clamp(1.8rem, 3vw, 3rem);
  font-weight: 400;
  letter-spacing: -0.045em;
}

.studio-project__story {
  max-width: 41rem;
}

.studio-project__story > p {
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.6;
}

.studio-project__story > p + p {
  margin-top: 0.85rem;
}

.studio-project__story strong {
  color: var(--ink);
  font-weight: 700;
}

.studio-project__story ul {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 1.5rem;
  padding: 0;
  list-style: none;
}

.studio-project__story li {
  padding: 0.38rem 0.65rem;
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--muted);
  font-size: 0.65rem;
}

.studio-project__link,
.studio__text-link {
  display: inline-flex;
  gap: 0.6rem;
  align-items: center;
  width: max-content;
  color: inherit;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-decoration: none;
}

.studio-project__link {
  padding-bottom: 0.4rem;
  border-bottom: 1px solid currentColor;
}

.studio-project__link span,
.studio__text-link span,
.studio-contact__primary span {
  transition: transform 220ms ease;
}

.studio-project__link:hover span,
.studio__text-link:hover span,
.studio-contact__primary:hover span {
  transform: translate(0.18rem, -0.18rem);
}

.studio__text-link {
  margin-top: 2rem;
  margin-left: 4rem;
  font-size: 0.8rem;
}

.studio-capabilities {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(24rem, 1.15fr);
  gap: clamp(4rem, 9vw, 10rem);
}

.studio-capabilities__heading {
  align-self: start;
}

.studio-capabilities__heading h2 {
  margin-top: 1.15rem;
  font-size: clamp(2.6rem, 5vw, 5.2rem);
  font-weight: 400;
  line-height: 0.97;
  letter-spacing: -0.055em;
}

.studio-capabilities__heading > p:last-child {
  max-width: 30rem;
  margin-top: 2rem;
}

.studio-capabilities__list {
  padding: 0;
  border-bottom: 1px solid var(--line);
  list-style: none;
}

.studio-capabilities__list li {
  display: grid;
  grid-template-columns: 3rem 1fr;
  gap: 1.5rem;
  padding-block: 1.75rem;
  border-top: 1px solid var(--line);
}

.studio-capabilities__list li > span {
  color: var(--muted);
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 0.8rem;
  font-style: italic;
}

.studio-capabilities__list h3 {
  margin-bottom: 0.45rem;
  font-size: 1.1rem;
  font-weight: 700;
}

.studio-capabilities__list p {
  max-width: 34rem;
  color: var(--muted);
  font-size: 0.85rem;
  line-height: 1.55;
}

.studio-experience__list {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  padding: 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  list-style: none;
}

.studio-experience__list li {
  min-height: 15rem;
  padding: 1.5rem;
  border-left: 1px solid var(--line);
}

.studio-experience__list li:first-child {
  border-left: 0;
}

.studio-experience__list p {
  color: var(--muted);
  font-size: 0.72rem;
  line-height: 1.4;
}

.studio-experience__list h3 {
  max-width: 12rem;
  margin-block: 4.5rem 0.75rem;
  font-size: 1.15rem;
  font-weight: 400;
  line-height: 1.25;
}

.studio-experience__earlier {
  margin-top: 1.25rem;
  color: var(--muted);
  font-size: 0.72rem;
}

.studio-contact {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(20rem, 0.8fr);
  gap: clamp(3rem, 8vw, 9rem);
  width: min(100% - 2rem, 90rem);
  margin-inline: auto;
  padding: clamp(4rem, 8vw, 8rem);
  color: white;
  background: var(--pine);
}

.studio-contact .studio__eyebrow {
  color: rgb(255 255 255 / 60%);
}

.studio-contact h2 {
  max-width: 12ch;
}

.studio-contact__action {
  align-self: end;
}

.studio-contact__action > p {
  color: rgb(255 255 255 / 68%);
}

.studio-contact__action > div {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: center;
  margin-top: 2rem;
}

.studio-contact__primary,
.studio-contact__secondary {
  display: inline-flex;
  gap: 0.75rem;
  align-items: center;
  justify-content: center;
  min-height: 3.25rem;
  color: white;
  font-size: 0.78rem;
  text-decoration: none;
}

.studio-contact__primary {
  padding-inline: 1.4rem;
  border-radius: 999px;
  color: var(--ink);
  background: var(--acid);
  font-weight: 700;
}

.studio-contact__secondary {
  border-bottom: 1px solid rgb(255 255 255 / 70%);
}

.studio__footer {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  min-height: 7rem;
  color: var(--muted);
  font-size: 0.68rem;
}

.studio__footer p:nth-child(2) {
  justify-self: center;
}

.studio__footer a {
  justify-self: end;
}

.studio a:focus-visible {
  border-radius: 0.2rem;
  outline: 2px solid var(--pine);
  outline-offset: 4px;
}

.studio-contact a:focus-visible {
  outline-color: var(--acid);
}

@media (max-width: 64rem) {
  .studio__header {
    grid-template-columns: 1fr auto;
  }

  .studio__nav {
    display: none;
  }

  .studio-hero__intro {
    grid-column: 1 / span 10;
  }

  .studio-hero__aside {
    grid-column: 5 / -1;
  }

  .studio-project {
    grid-template-columns: 3rem minmax(10rem, 0.65fr) minmax(18rem, 1fr);
  }

  .studio-project__link {
    grid-column: 3;
  }

  .studio-capabilities {
    gap: 4rem;
  }

  .studio-experience__list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .studio-experience__list li:nth-child(3) {
    border-left: 0;
  }

  .studio-experience__list li:nth-child(n + 3) {
    border-top: 1px solid var(--line);
  }
}

@media (max-width: 48rem) {
  .studio__header,
  .studio-hero,
  .studio-section,
  .studio-contact,
  .studio__footer {
    width: min(100% - 2rem, 42rem);
  }

  .studio__header {
    min-height: 5.5rem;
  }

  .studio__header-cta {
    width: 2.75rem;
    height: 2.75rem;
    padding: 0;
    justify-content: center;
    overflow: hidden;
    color: transparent;
  }

  .studio__header-cta span {
    color: var(--ink);
  }

  .studio-hero {
    display: block;
    min-height: auto;
    padding-block: 4.5rem 5rem;
  }

  .studio-hero h1 {
    font-size: clamp(3.5rem, 18vw, 6rem);
  }

  .studio-hero__aside {
    margin-top: 10rem;
  }

  .studio-hero__facts {
    grid-template-columns: 1fr 1fr;
  }

  .studio-hero__facts div:last-child {
    grid-column: 1 / -1;
  }

  .studio-hero__signature {
    top: 36%;
    right: 3%;
    width: 8.5rem;
  }

  .studio-section__header,
  .studio-capabilities,
  .studio-contact {
    grid-template-columns: 1fr;
  }

  .studio-section__header {
    gap: 1.5rem;
  }

  .studio-project {
    grid-template-columns: 2rem 1fr;
    gap: 1rem;
  }

  .studio-project__title,
  .studio-project__story,
  .studio-project__link {
    grid-column: 2;
  }

  .studio-project__title {
    grid-row: 1;
  }

  .studio-project__story {
    margin-top: 0.5rem;
  }

  .studio__text-link {
    margin-left: 3rem;
  }

  .studio-capabilities {
    gap: 3rem;
  }

  .studio-contact {
    gap: 4rem;
    padding: 3rem 1.5rem;
  }

  .studio__footer {
    grid-template-columns: 1fr auto;
    gap: 0.5rem;
  }

  .studio__footer p:nth-child(2) {
    display: none;
  }
}

@media (max-width: 32rem) {
  .studio__identity small {
    display: none;
  }

  .studio-experience__list {
    grid-template-columns: 1fr;
  }

  .studio-experience__list li,
  .studio-experience__list li:nth-child(3) {
    min-height: 10rem;
    border-top: 1px solid var(--line);
    border-left: 0;
  }

  .studio-experience__list li:first-child {
    border-top: 0;
  }

  .studio-experience__list h3 {
    margin-top: 2rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .studio *,
  .studio *::before,
  .studio *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
