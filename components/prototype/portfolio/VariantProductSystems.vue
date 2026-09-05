<script setup lang="ts">
interface ProductRoute { label: string; detail: string }
interface SelectedProduct {
  number: string
  name: string
  domain: string
  statement: string
  ownership: string
  route: ProductRoute[]
  decisions: string[]
  url: string
}

const products: SelectedProduct[] = [
  {
    number: '01', name: 'Budds', domain: 'Independent product · AI learning',
    statement: 'A learner brings the source. The product keeps every study experience accountable to it.',
    ownership: 'I designed and built the full-stack product—from the learning model and retrieval boundaries to generated media, private delivery and offline study behaviour.',
    route: [
      { label: 'Bring material', detail: 'A learner adds the documents that define the subject.' },
      { label: 'Stay grounded', detail: 'Revision-scoped retrieval keeps answers tied to the right source.' },
      { label: 'Change the mode', detail: 'The same material becomes chat, quizzes, flashcards, courses or audio.' },
      { label: 'Keep learning', detail: 'Private delivery and offline sync make study artifacts dependable.' },
    ],
    decisions: ['Source accountability before novelty', 'Durable work outside the request cycle', 'Study continuity across online and offline states'],
    url: 'https://budds.pages.dev',
  },
  {
    number: '02', name: 'CharterXE', domain: 'Lead frontend ownership · Private aviation',
    statement: 'A complex trip moves from traveller intent to a quote an operations team can actually fulfil.',
    ownership: 'I owned the frontend codebase from initial setup through production iterations across both the traveller booking experience and the operations console.',
    route: [
      { label: 'Shape the trip', detail: 'One-way, return and multi-leg requests share one understandable journey.' },
      { label: 'Find the aircraft', detail: 'Traveller needs connect to curated and operational inventory.' },
      { label: 'Build the quote', detail: 'Operations turns a request into a detailed, reviewable offer.' },
      { label: 'Confirm the flight', detail: 'Acceptance and payment close the loop without losing context.' },
    ],
    decisions: ['One journey for several itinerary shapes', 'Operational detail without customer confusion', 'Shared product language across booking and fulfilment'],
    url: 'https://www.charterxe.com/en',
  },
  {
    number: '03', name: 'WACS', domain: 'Primary web contributor · Government credit',
    statement: 'A loan request crosses institutional boundaries without losing its permissions, history or accountability.',
    ownership: 'I was the primary contributor to the Vue web application and later improved the Expo mobile experience for its distinct employee, lender and administrator workflows.',
    route: [
      { label: 'Discover credit', detail: 'Federal employees compare eligible offers and start a request.' },
      { label: 'Review the case', detail: 'Lenders assess and progress applications in their own workspace.' },
      { label: 'Validate payroll', detail: 'IPPIS administrators coordinate deductions and batch checks.' },
      { label: 'Close the record', detail: 'Warrants, reporting and audit trails preserve what happened.' },
    ],
    decisions: ['Role-specific views of one shared process', 'Batch work for operational scale', 'Traceability across approval and payment states'],
    url: 'https://wacs.ippis.gov.ng/',
  },
]

const principles = [
  ['Start with the whole journey', 'I map the people, handoffs and failure states before polishing a local screen.'],
  ['Own the seams', 'Interface, application logic and operations are one product experience, even when the code is separated.'],
  ['Make confidence visible', 'Permissions, recovery, accessibility and testability are designed in—not added after launch.'],
]

const experience = [
  ['2023—Now', 'Lead Software Engineer', 'Falcon Aerospace Limited'],
  ['2021—2023', 'Lead Frontend Engineer', 'Blackcopper'],
  ['2020—2021', 'Frontend Engineer', 'Parkway'],
  ['2019—2020', 'Frontend Engineer', 'Kraksmedia'],
]
</script>

<template>
  <div class="routebook">
    <a class="skip-link" href="#routebook-work">Skip to selected work</a>
    <header class="routebook-header">
      <NuxtLink to="#routebook-top" class="identity" aria-label="Wesley Ukadike, back to top">
        <span class="identity__mark" aria-hidden="true">WU</span>
        <span><strong>Wesley Ukadike</strong><small>Product-minded software engineer</small></span>
      </NuxtLink>
      <p class="header-note">Toronto · Building across product and engineering</p>
      <nav aria-label="Primary navigation">
        <NuxtLink to="#routebook-work">Work</NuxtLink>
        <NuxtLink to="#routebook-approach">Approach</NuxtLink>
        <NuxtLink to="#routebook-contact">Contact</NuxtLink>
      </nav>
    </header>

    <main id="routebook-top">
      <section class="routebook-hero" aria-labelledby="routebook-title">
        <div class="hero-copy">
          <p class="eyebrow">Senior software engineer · 7+ years</p>
          <h1 id="routebook-title">The interface makes a promise. I build what <em>keeps it.</em></h1>
          <p class="hero-lede">From private aviation to AI learning and financial infrastructure, I work beyond the screen—shaping the workflows, architecture and interfaces that make the whole product hold together.</p>
          <div class="hero-actions">
            <NuxtLink to="#routebook-work">See how the work moves <span aria-hidden="true">↓</span></NuxtLink>
            <NuxtLink to="#routebook-contact">Start a conversation</NuxtLink>
          </div>
        </div>
        <aside class="route-index" aria-label="Selected product routes">
          <div class="route-index__header"><p>Three products</p><span>One practice</span></div>
          <ol>
            <li><span>01</span><strong>Learn</strong><small>source → understanding</small><b>Budds</b></li>
            <li><span>02</span><strong>Move</strong><small>request → journey</small><b>CharterXE</b></li>
            <li><span>03</span><strong>Coordinate</strong><small>credit → accountability</small><b>WACS</b></li>
          </ol>
          <p class="route-index__caption">Different domains. The same responsibility: make a difficult system clear enough to use and strong enough to operate.</p>
        </aside>
      </section>

      <dl class="proof-line">
        <div><dt>Now</dt><dd>Lead Software Engineer</dd></div>
        <div><dt>Based</dt><dd>Toronto, Canada</dd></div>
        <div><dt>Range</dt><dd>Product · Frontend · Full stack</dd></div>
        <div><dt>Domains</dt><dd>AI · Aviation · Financial systems</dd></div>
      </dl>

      <section id="routebook-work" class="work" aria-labelledby="routebook-work-title">
        <header class="work-intro">
          <div><p class="section-number">01 / Selected work</p><span>Product routes, not project cards</span></div>
          <h2 id="routebook-work-title">The interface is only one part of the answer.</h2>
          <p>These are the workflows I helped make coherent, the boundaries I owned, and the engineering decisions that carried them into production.</p>
        </header>

        <article v-for="product in products" :key="product.name" class="product-route">
          <aside class="product-meta">
            <p>{{ product.number }}</p><h3>{{ product.name }}</h3><span>{{ product.domain }}</span>
            <NuxtLink :to="product.url" external target="_blank" rel="noopener noreferrer">View live <span aria-hidden="true">↗</span></NuxtLink>
          </aside>
          <div class="product-story">
            <p class="product-statement">{{ product.statement }}</p>
            <div class="ownership"><span>My responsibility</span><p>{{ product.ownership }}</p></div>
            <ol class="journey" :aria-label="`${product.name} product route`">
              <li v-for="(step, index) in product.route" :key="step.label">
                <span>{{ String(index + 1).padStart(2, '0') }}</span><strong>{{ step.label }}</strong><p>{{ step.detail }}</p>
              </li>
            </ol>
            <div class="decision-row">
              <p>Decisions that mattered</p><ul><li v-for="decision in product.decisions" :key="decision">{{ decision }}</li></ul>
            </div>
          </div>
        </article>
      </section>

      <section id="routebook-approach" class="approach" aria-labelledby="routebook-approach-title">
        <div class="approach-heading">
          <p class="section-number">02 / How I work</p>
          <h2 id="routebook-approach-title">My best work happens between the boxes.</h2>
          <p>That is where product intent meets technical reality—and where senior engineering earns its keep.</p>
        </div>
        <ol class="principles">
          <li v-for="(principle, index) in principles" :key="principle[0]">
            <span>0{{ index + 1 }}</span><h3>{{ principle[0] }}</h3><p>{{ principle[1] }}</p>
          </li>
        </ol>
      </section>

      <section class="experience" aria-labelledby="routebook-experience-title">
        <div class="experience-heading"><p class="section-number">03 / Experience</p><h2 id="routebook-experience-title">A practice shaped in production.</h2></div>
        <ol><li v-for="role in experience" :key="role[2]"><time>{{ role[0] }}</time><strong>{{ role[1] }}</strong><span>{{ role[2] }}</span></li></ol>
      </section>

      <section id="routebook-contact" class="contact" aria-labelledby="routebook-contact-title">
        <div class="contact-copy">
          <p class="section-number">04 / Start here</p><h2 id="routebook-contact-title">Bring me the product that is hard to explain.</h2>
          <p>I’m interested in senior engineering roles and product collaborations where clarity, ownership and technical depth matter.</p>
          <NuxtLink to="https://www.linkedin.com/in/wesley-ukadike-3a9440180/" external target="_blank" rel="noopener noreferrer">Connect on LinkedIn <span aria-hidden="true">↗</span></NuxtLink>
        </div>
        <figure class="signature">
          <NuxtImg src="/images/winkbit.png" width="138" height="186" alt="Bitmoji illustration of Wesley" />
          <figcaption><strong>Still human.</strong><span>Always curious.</span></figcaption>
        </figure>
      </section>
    </main>

    <footer class="routebook-footer">
      <span>Wesley Ukadike · Senior Software Engineer</span><span>Designed around the work, not the toolkit.</span><NuxtLink to="#routebook-top">Back to top ↑</NuxtLink>
    </footer>
  </div>
</template>

<style scoped>
.routebook {
  --night: #10171b; --paper: #ede9df; --ink: #161b1d; --muted: #7f8b90; --orange: #ef6840; --sky: #a8c4d2;
  min-height: 100dvh; overflow: hidden; color: #f3f0e9; background: var(--night); font-family: 'Aeonik', system-ui, sans-serif; line-height: 1.45;
}
.skip-link { position: fixed; top: 0; left: 1rem; z-index: 110; transform: translateY(-130%); padding: .75rem 1rem; color: var(--night); background: var(--paper); }
.skip-link:focus { transform: translateY(0); }
.routebook-header { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 2rem; min-height: 5.5rem; padding-inline: max(1.25rem, calc((100vw - 90rem) / 2)); border-bottom: 1px solid rgb(237 233 223 / 18%); }
.identity { display: flex; align-items: center; gap: .85rem; width: max-content; color: inherit; text-decoration: none; }
.identity__mark { display: grid; width: 2.75rem; aspect-ratio: 1; place-items: center; border-radius: 50%; color: var(--night); background: var(--orange); font-size: .7rem; font-weight: 700; }
.identity > span:last-child { display: flex; flex-direction: column; }
.identity strong { font-size: .82rem; }
.identity small { margin-top: .1rem; color: var(--muted); font-size: .66rem; }
.header-note { margin: 0; color: var(--sky); font-size: .69rem; }
.routebook-header nav { display: flex; justify-content: end; gap: clamp(1.25rem, 3vw, 2.5rem); font-size: .72rem; }
.routebook a { color: inherit; }
.routebook-header nav a { text-decoration: none; }

.routebook-hero { display: grid; grid-template-columns: minmax(0, 1.35fr) minmax(20rem, .65fr); gap: clamp(4rem, 9vw, 9rem); width: min(100% - 2.5rem, 90rem); min-height: calc(100svh - 5.5rem); margin-inline: auto; padding-block: clamp(5rem, 10vw, 9rem); }
.hero-copy { align-self: center; }
.eyebrow, .section-number { margin: 0; color: var(--orange); font-size: .69rem; font-weight: 700; letter-spacing: .13em; text-transform: uppercase; }
.hero-copy h1 { max-width: 12ch; margin: 1.5rem 0 0; font-size: clamp(3.75rem, 6.4vw, 7rem); font-weight: 500; letter-spacing: -.07em; line-height: .86; }
.hero-copy h1 em { color: var(--orange); font-family: inherit; font-style: normal; font-weight: 500; }
.hero-lede { max-width: 45rem; margin: 2.6rem 0 0; color: #b9c1c3; font-size: clamp(1.05rem, 1.5vw, 1.3rem); line-height: 1.6; }
.hero-actions { display: flex; align-items: center; gap: 1.5rem; margin-top: 2.5rem; }
.hero-actions a:first-child { display: flex; justify-content: space-between; gap: 3rem; min-width: 18rem; padding: .95rem 1rem; color: var(--night); background: var(--orange); text-decoration: none; font-size: .76rem; font-weight: 700; }
.hero-actions a:last-child { padding-block: .65rem; border-bottom: 1px solid #7f8b90; text-decoration: none; font-size: .76rem; }
.route-index { align-self: end; color: var(--ink); background: var(--paper); }
.route-index__header { display: flex; justify-content: space-between; gap: 1rem; padding: 1rem 1.2rem; border-bottom: 1px solid rgb(22 27 29 / 30%); font-size: .68rem; text-transform: uppercase; }
.route-index__header p { margin: 0; font-weight: 700; }
.route-index__header span { color: #6d716f; }
.route-index ol { margin: 0; padding: 0 1.2rem; list-style: none; }
.route-index li { display: grid; grid-template-columns: 2rem .8fr 1.2fr auto; gap: .75rem; align-items: center; padding: 1.1rem 0; border-bottom: 1px solid rgb(22 27 29 / 20%); }
.route-index li span { color: var(--orange); font-size: .62rem; }
.route-index li strong { font-size: .78rem; }
.route-index li small { color: #686e6f; font-size: .67rem; }
.route-index li b { font-size: .68rem; font-weight: 400; }
.route-index__caption { margin: 0; padding: 1.2rem; color: #565d5f; font-size: .78rem; line-height: 1.55; }
.proof-line { display: grid; grid-template-columns: repeat(4, 1fr); margin: 0; padding: 0 max(1.25rem, calc((100vw - 90rem) / 2)); border-block: 1px solid rgb(237 233 223 / 18%); }
.proof-line div { padding: 1.35rem 1rem 1.35rem 0; }
.proof-line div + div { padding-left: 1rem; border-left: 1px solid rgb(237 233 223 / 18%); }
.proof-line dt { color: var(--muted); font-size: .6rem; letter-spacing: .1em; text-transform: uppercase; }
.proof-line dd { margin: .4rem 0 0; font-size: .76rem; }

.work { color: var(--ink); background: var(--paper); }
.work-intro { display: grid; grid-template-columns: .65fr 1.3fr .7fr; gap: clamp(2rem, 7vw, 7rem); padding: clamp(5rem, 9vw, 9rem) max(1.25rem, calc((100vw - 90rem) / 2)); border-bottom: 1px solid rgb(22 27 29 / 35%); }
.work-intro > div span { display: block; margin-top: .65rem; color: #747875; font-size: .7rem; }
.work-intro h2, .approach h2, .experience h2, .contact h2 { margin: 0; font-size: clamp(2.75rem, 5.3vw, 5.3rem); font-weight: 500; letter-spacing: -.06em; line-height: .94; }
.work-intro > p { max-width: 28rem; margin: 0; color: #5f6667; line-height: 1.65; }
.product-route { display: grid; grid-template-columns: minmax(13rem, .32fr) minmax(0, 1fr); gap: clamp(3rem, 8vw, 9rem); padding: clamp(4rem, 8vw, 7rem) max(1.25rem, calc((100vw - 90rem) / 2)); border-bottom: 1px solid rgb(22 27 29 / 35%); }
.product-meta { align-self: start; position: sticky; top: 2rem; }
.product-meta > p { margin: 0; color: var(--orange); font-size: .72rem; font-weight: 700; }
.product-meta h3 { margin: 1.2rem 0 .35rem; font-size: clamp(2.5rem, 4.5vw, 4.5rem); font-weight: 500; letter-spacing: -.06em; line-height: .9; }
.product-meta > span { display: block; max-width: 15rem; color: #666d6e; font-size: .75rem; }
.product-meta a { display: inline-block; margin-top: 2rem; padding-bottom: .25rem; border-bottom: 1px solid var(--ink); font-size: .72rem; font-weight: 700; text-decoration: none; text-transform: uppercase; }
.product-statement { max-width: 22ch; margin: 0; font-size: clamp(2rem, 4vw, 4rem); letter-spacing: -.045em; line-height: 1.02; }
.ownership { display: grid; grid-template-columns: 10rem 1fr; gap: 2rem; margin-top: 3.5rem; padding: 1.25rem 0; border-block: 1px solid rgb(22 27 29 / 35%); }
.ownership span, .decision-row > p { color: #6d7373; font-size: .64rem; letter-spacing: .1em; text-transform: uppercase; }
.ownership p { max-width: 50rem; margin: 0; line-height: 1.6; }
.journey { display: grid; grid-template-columns: repeat(4, 1fr); margin: 3.5rem 0 0; padding: 0; list-style: none; }
.journey li { min-height: 14rem; padding: 1rem 1.4rem 1rem 0; border-top: 2px solid var(--ink); }
.journey li + li { padding-left: 1.4rem; border-left: 1px solid rgb(22 27 29 / 25%); }
.journey li span { display: block; margin-bottom: 4rem; color: var(--orange); font-size: .65rem; }
.journey li strong { display: block; font-size: .9rem; }
.journey li p { margin: .7rem 0 0; color: #687071; font-size: .78rem; line-height: 1.5; }
.decision-row { display: grid; grid-template-columns: 10rem 1fr; gap: 2rem; margin-top: 2rem; }
.decision-row > p { margin: .2rem 0 0; }
.decision-row ul { display: flex; flex-wrap: wrap; gap: .6rem; margin: 0; padding: 0; list-style: none; }
.decision-row li { padding: .55rem .75rem; border: 1px solid rgb(22 27 29 / 35%); font-size: .72rem; }

.approach { display: grid; grid-template-columns: .8fr 1fr; gap: clamp(4rem, 10vw, 10rem); padding: clamp(6rem, 10vw, 10rem) max(1.25rem, calc((100vw - 90rem) / 2)); background: var(--sky); color: var(--ink); }
.approach-heading h2 { max-width: 12ch; margin-top: 1.5rem; }
.approach-heading > p:last-child { max-width: 30rem; margin-top: 2rem; color: #48565b; line-height: 1.65; }
.principles { margin: 0; padding: 0; border-top: 1px solid rgb(22 27 29 / 45%); list-style: none; }
.principles li { display: grid; grid-template-columns: 3rem 1fr; gap: .5rem 1rem; padding: 1.5rem 0; border-bottom: 1px solid rgb(22 27 29 / 45%); }
.principles span { grid-row: span 2; color: #5d747e; font-size: .65rem; }
.principles h3 { margin: 0; font-size: 1.05rem; }
.principles p { margin: 0; color: #48565b; line-height: 1.55; }

.experience { display: grid; grid-template-columns: .8fr 1fr; gap: clamp(4rem, 10vw, 10rem); padding: clamp(6rem, 10vw, 10rem) max(1.25rem, calc((100vw - 90rem) / 2)); }
.experience-heading h2 { max-width: 12ch; margin-top: 1.5rem; }
.experience ol { margin: 0; padding: 0; border-top: 1px solid rgb(237 233 223 / 25%); list-style: none; }
.experience li { display: grid; grid-template-columns: 6.5rem 1fr 1fr; gap: 1rem; padding: 1.25rem 0; border-bottom: 1px solid rgb(237 233 223 / 25%); }
.experience time { color: var(--orange); font-size: .7rem; }
.experience strong { font-size: .82rem; }
.experience li span { color: var(--muted); font-size: .78rem; }

.contact { display: grid; grid-template-columns: 1fr minmax(14rem, .35fr); align-items: end; gap: clamp(4rem, 12vw, 12rem); padding: clamp(6rem, 11vw, 11rem) max(1.25rem, calc((100vw - 90rem) / 2)); color: var(--ink); background: var(--orange); }
.contact h2 { max-width: 12ch; margin-top: 1.5rem; }
.contact-copy > p:not(.section-number) { max-width: 42rem; margin-top: 2rem; font-size: 1.05rem; line-height: 1.6; }
.contact-copy > a { display: flex; justify-content: space-between; width: min(100%, 31rem); margin-top: 2.5rem; padding: 1rem 0; border-block: 1px solid var(--ink); font-size: .75rem; font-weight: 700; text-decoration: none; text-transform: uppercase; }
.contact .section-number { color: #5b2617; }
.signature { display: flex; align-items: end; gap: 1rem; margin: 0; padding-top: 1.5rem; border-top: 1px solid rgb(22 27 29 / 45%); }
.signature img { width: 5rem; height: auto; filter: saturate(.75); }
.signature figcaption { display: flex; flex-direction: column; padding-bottom: .35rem; }
.signature strong { font-size: .8rem; }
.signature span { color: #6d2d1a; font-family: Georgia, serif; font-size: .75rem; font-style: italic; }
.routebook-footer { display: flex; justify-content: space-between; gap: 1rem; padding: 1.35rem max(1.25rem, calc((100vw - 90rem) / 2)); color: var(--muted); font-size: .64rem; }
.routebook-footer a { text-decoration: none; }
.routebook a:focus-visible { outline: 3px solid var(--orange); outline-offset: 5px; }
.contact a:focus-visible { outline-color: var(--ink); }
@media (prefers-reduced-motion: no-preference) { .routebook a { transition: opacity 180ms ease; } .routebook a:hover { opacity: .72; } }
@media (max-width: 960px) {
  .routebook-header { grid-template-columns: 1fr auto; } .header-note { display: none; }
  .routebook-hero { grid-template-columns: 1fr; } .route-index { width: min(100%, 42rem); }
  .work-intro { grid-template-columns: .5fr 1.2fr; } .work-intro > p { grid-column: 2; }
  .product-route { grid-template-columns: 12rem 1fr; gap: 3rem; }
  .journey { grid-template-columns: 1fr 1fr; } .journey li:nth-child(3) { border-left: 0; }
  .approach, .experience { gap: 4rem; }
}
@media (max-width: 700px) {
  .routebook-header nav a:nth-child(2) { display: none; } .routebook-header nav { gap: 1.1rem; } .identity small { display: none; }
  .routebook-hero { min-height: auto; padding-block: 6rem 4rem; } .hero-copy h1 { font-size: clamp(3.5rem, 17vw, 5.4rem); }
  .hero-actions { align-items: stretch; flex-direction: column; } .hero-actions a:first-child { min-width: 0; }
  .route-index li { grid-template-columns: 2rem .8fr 1.2fr; } .route-index li b { display: none; }
  .proof-line { grid-template-columns: 1fr 1fr; } .proof-line div:nth-child(3) { border-left: 0; border-top: 1px solid rgb(237 233 223 / 18%); } .proof-line div:nth-child(4) { border-top: 1px solid rgb(237 233 223 / 18%); }
  .work-intro, .product-route, .approach, .experience, .contact { grid-template-columns: 1fr; } .work-intro > p { grid-column: auto; }
  .product-meta { position: static; } .product-meta h3 { font-size: 3.4rem; } .product-story { min-width: 0; }
  .ownership, .decision-row { grid-template-columns: 1fr; gap: .75rem; }
  .journey { grid-template-columns: 1fr; } .journey li, .journey li + li { min-height: 0; padding: 1.2rem 0; border-top: 1px solid rgb(22 27 29 / 35%); border-left: 0; } .journey li span { margin-bottom: 1.25rem; }
  .approach, .experience { gap: 3rem; } .experience li { grid-template-columns: 5.5rem 1fr; } .experience li span { grid-column: 2; }
  .signature { width: max-content; } .routebook-footer span:nth-child(2) { display: none; }
}
@media (max-width: 430px) {
  .routebook-header nav a:first-child { display: none; } .route-index li small { text-align: right; }
  .hero-copy h1 { font-size: clamp(3.25rem, 16vw, 4.3rem); } .product-statement { font-size: 2.25rem; }
}
</style>
