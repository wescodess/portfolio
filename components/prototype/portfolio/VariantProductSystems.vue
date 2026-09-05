<script setup lang="ts">
const systems = [
  {
    id: 'SYS-01',
    name: 'Budds',
    type: 'AI learning workspace',
    ownership: 'Designed & built end to end',
    narrative: 'Turns source documents into cited study experiences and durable media artifacts.',
    stages: ['Documents', 'Retrieval', 'AI workflows', 'Study artifacts'],
    evidence: ['Revision-scoped retrieval', 'Private artifact delivery', 'Offline study sync', 'Automated coverage'],
    url: 'https://budds.pages.dev',
  },
  {
    id: 'SYS-02',
    name: 'CharterXE',
    type: 'Private aviation marketplace',
    ownership: 'Frontend codebase ownership',
    narrative: 'Connects traveller booking journeys to a purpose-built operations console.',
    stages: ['Trip request', 'Aircraft selection', 'Quote operations', 'Acceptance & payment'],
    evidence: ['Multi-leg journeys', 'Fleet inventory', 'Customer operations', 'Production iterations'],
    url: 'https://www.charterxe.com/en',
  },
  {
    id: 'SYS-03',
    name: 'WACS',
    type: 'Government credit management',
    ownership: 'Primary web contributor',
    narrative: 'Coordinates credit workflows across employees, lenders and IPPIS administrators.',
    stages: ['Loan discovery', 'Approval', 'Payroll validation', 'Warrants & reporting'],
    evidence: ['Role-aware workspaces', 'Batch validation', 'Audit trails', 'Expo mobile improvements'],
    url: 'https://wacs.ippis.gov.ng/',
  },
]

const capabilities = [
  { code: 'P-01', label: 'Product engineering', description: 'Translate ambiguous product intent into a coherent, shippable system.' },
  { code: 'A-02', label: 'Frontend architecture', description: 'Build maintainable interfaces around real workflows, permissions and failure states.' },
  { code: 'D-03', label: 'Delivery leadership', description: 'Keep quality, scope and operational reality visible from planning through production.' },
  { code: 'Q-04', label: 'Quality systems', description: 'Treat accessibility, testing, performance and observability as design inputs.' },
]
</script>

<template>
  <div class="systems-shell">
    <a class="skip-link" href="#systems-main">Skip to content</a>
    <header class="systems-header">
      <NuxtLink to="#systems-top" class="system-brand" aria-label="Wesley Ukadike, back to top">
        <span class="brand-mark" aria-hidden="true">WU</span>
        <span><strong>Wesley Ukadike</strong><small>Senior Software Engineer</small></span>
      </NuxtLink>
      <div class="system-status" aria-label="Professional focus">
        <span aria-hidden="true" /> Senior product engineering
      </div>
      <nav aria-label="Primary navigation">
        <NuxtLink to="#systems">Systems</NuxtLink>
        <NuxtLink to="#capabilities">Capabilities</NuxtLink>
        <NuxtLink to="#systems-contact">Contact</NuxtLink>
      </nav>
    </header>

    <main id="systems-main">
      <section id="systems-top" class="systems-hero" aria-labelledby="systems-title">
        <div class="hero-axis" aria-hidden="true">
          <span>PRODUCT</span><i /><span>SYSTEMS</span><i /><span>DELIVERY</span>
        </div>
        <div class="hero-core">
          <p class="system-label">Engineering brief / 2026</p>
          <h1 id="systems-title">I build product systems where interface, logic and delivery meet.</h1>
          <p class="hero-brief">
            Senior software engineer working across product architecture, frontend systems and
            full-stack delivery. I turn complex operational workflows into clear, reliable software.
          </p>
          <div class="hero-actions">
            <NuxtLink to="#systems" class="primary-action">Inspect selected systems <span aria-hidden="true">↓</span></NuxtLink>
            <NuxtLink to="#systems-contact" class="secondary-action">Discuss a role</NuxtLink>
          </div>
        </div>
        <dl class="hero-readout">
          <div><dt>Current role</dt><dd>Lead Software Engineer</dd></div>
          <div><dt>Primary mode</dt><dd>Product + engineering</dd></div>
          <div><dt>Domain range</dt><dd>AI / Aviation / Fintech</dd></div>
          <div><dt>Based in</dt><dd>Toronto, Canada</dd></div>
        </dl>
      </section>

      <section class="operating-model" aria-labelledby="operating-title">
        <div class="section-code">
          <span>00</span>
          <p>Operating model</p>
        </div>
        <div class="operating-content">
          <h2 id="operating-title">One connected engineering surface.</h2>
          <div class="architecture-line" role="list" aria-label="Engineering concerns">
            <div role="listitem"><span>01</span><strong>Product intent</strong><small>Outcomes · Constraints</small></div>
            <i aria-hidden="true">→</i>
            <div role="listitem"><span>02</span><strong>Experience</strong><small>Flows · Accessibility</small></div>
            <i aria-hidden="true">→</i>
            <div role="listitem"><span>03</span><strong>Application</strong><small>State · Data · Auth</small></div>
            <i aria-hidden="true">→</i>
            <div role="listitem"><span>04</span><strong>Delivery</strong><small>Tests · Runtime · Ops</small></div>
          </div>
        </div>
      </section>

      <section id="systems" class="systems-section" aria-labelledby="selected-systems-title">
        <div class="section-code">
          <span>01</span>
          <p>Selected systems</p>
        </div>
        <div class="systems-content">
          <div class="systems-heading">
            <h2 id="selected-systems-title">Evidence over spectacle.</h2>
            <p>Each project is presented as a product system: who it serves, what moves through it, and where I owned the outcome.</p>
          </div>

          <article v-for="system in systems" :key="system.id" class="system-record">
            <header>
              <span class="record-id">{{ system.id }}</span>
              <div><h3>{{ system.name }}</h3><p>{{ system.type }}</p></div>
              <p class="ownership">{{ system.ownership }}</p>
              <NuxtLink
                :to="system.url"
                external
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`Open ${system.name} in a new tab`"
              >
                Open ↗
              </NuxtLink>
            </header>
            <p class="system-narrative">{{ system.narrative }}</p>
            <div class="flow" role="list" :aria-label="`${system.name} system flow`">
              <template v-for="(stage, index) in system.stages" :key="stage">
                <div role="listitem"><span>{{ String(index + 1).padStart(2, '0') }}</span>{{ stage }}</div>
                <i v-if="index < system.stages.length - 1" aria-hidden="true">→</i>
              </template>
            </div>
            <ul class="evidence-list" aria-label="Engineering evidence">
              <li v-for="item in system.evidence" :key="item"><span aria-hidden="true">+</span>{{ item }}</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="capabilities" class="capabilities-section" aria-labelledby="capabilities-title">
        <div class="section-code">
          <span>02</span>
          <p>Capabilities</p>
        </div>
        <div class="capabilities-content">
          <div class="capability-intro">
            <h2 id="capabilities-title">Depth at the seams.</h2>
            <p>The most consequential product work happens between disciplines. That is where I’m most useful.</p>
          </div>
          <ol>
            <li v-for="capability in capabilities" :key="capability.code">
              <span>{{ capability.code }}</span>
              <strong>{{ capability.label }}</strong>
              <p>{{ capability.description }}</p>
            </li>
          </ol>
        </div>
      </section>

      <section class="experience-strip" aria-labelledby="systems-experience-title">
        <div class="section-code">
          <span>03</span>
          <p>Experience signal</p>
        </div>
        <div>
          <h2 id="systems-experience-title">From hands-on frontend delivery to lead engineering ownership.</h2>
          <div class="career-track">
            <div><span>2017</span><strong>Web development</strong><small>Teksight Edge</small></div>
            <div><span>2020</span><strong>Frontend engineering</strong><small>Parkway</small></div>
            <div><span>2021</span><strong>Lead frontend</strong><small>Blackcopper</small></div>
            <div><span>2023 — Now</span><strong>Lead software engineering</strong><small>Falcon Aerospace</small></div>
          </div>
        </div>
      </section>

      <section id="systems-contact" class="systems-contact" aria-labelledby="systems-contact-title">
        <div>
          <p class="system-label">End of brief / Start of conversation</p>
          <h2 id="systems-contact-title">Need someone who can see the product and the system?</h2>
        </div>
        <div class="contact-panel">
          <p>For senior engineering roles and ambitious product collaborations.</p>
          <NuxtLink
            to="https://www.linkedin.com/in/wesley-ukadike-3a9440180/"
            external
            target="_blank"
            rel="noopener noreferrer"
          >Connect on LinkedIn <span aria-hidden="true">↗</span></NuxtLink>
        </div>
      </section>
    </main>

    <footer class="systems-footer">
      <span>© Wesley Ukadike</span>
      <span>Product systems / Toronto</span>
      <NuxtLink to="#systems-top">Return to origin ↑</NuxtLink>
    </footer>
  </div>
</template>

<style scoped>
.systems-shell {
  --base: #070b0d;
  --panel: #0c1215;
  --line: #243037;
  --muted: #829099;
  --text: #e8eeec;
  --signal: #b9f95a;
  min-height: 100dvh;
  overflow: hidden;
  color: var(--text);
  background:
    linear-gradient(rgb(255 255 255 / 2%) 1px, transparent 1px),
    linear-gradient(90deg, rgb(255 255 255 / 2%) 1px, transparent 1px),
    var(--base);
  background-size: 44px 44px;
  font-family: 'Aeonik', system-ui, sans-serif;
}

.skip-link { position: fixed; top: 0; left: 1rem; z-index: 100; transform: translateY(-120%); padding: 0.75rem 1rem; color: #071006; background: var(--signal); }
.skip-link:focus { transform: translateY(0); }
.systems-header { position: relative; z-index: 10; display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 1.5rem; min-height: 5rem; padding-inline: max(1.25rem, calc((100vw - 92rem) / 2)); border-bottom: 1px solid var(--line); background: rgb(7 11 13 / 88%); backdrop-filter: blur(16px); }
.system-brand { display: flex; align-items: center; gap: 0.75rem; width: max-content; }
.system-brand > span:last-child { display: flex; flex-direction: column; gap: 0.16rem; }
.system-brand strong { font-size: 0.78rem; letter-spacing: 0.04em; }
.system-brand small { color: var(--muted); font-size: 0.62rem; letter-spacing: 0.08em; text-transform: uppercase; }
.brand-mark { display: grid; width: 2.4rem; height: 2.4rem; place-items: center; border: 1px solid var(--line); color: var(--signal); font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 0.7rem; }
.system-status { display: flex; align-items: center; gap: 0.65rem; color: #b4c0c5; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 0.65rem; letter-spacing: 0.04em; text-transform: uppercase; }
.system-status span { width: 0.45rem; height: 0.45rem; border-radius: 50%; background: var(--signal); box-shadow: 0 0 1rem rgb(185 249 90 / 55%); }
.systems-header nav { display: flex; justify-content: end; gap: 2rem; color: #aeb9bd; font-size: 0.72rem; }
.systems-header a { transition: color 180ms ease; }
.systems-header a:hover { color: var(--signal); }

.systems-hero { display: grid; grid-template-columns: 5rem minmax(0, 1fr) minmax(14rem, 0.36fr); gap: clamp(2rem, 6vw, 6rem); width: min(100% - 2.5rem, 92rem); min-height: calc(100dvh - 5rem); margin-inline: auto; padding-block: clamp(4rem, 10vw, 9rem); }
.hero-axis { display: flex; align-items: center; justify-content: center; gap: 1rem; writing-mode: vertical-rl; color: #536168; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 0.58rem; letter-spacing: 0.2em; }
.hero-axis i { width: 1px; height: 3.5rem; background: var(--line); }
.hero-core { align-self: center; }
.system-label { color: var(--signal); font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 0.65rem; letter-spacing: 0.14em; text-transform: uppercase; }
.hero-core h1 { max-width: 14ch; margin: 1.7rem 0 0; font-size: clamp(3.6rem, 7.7vw, 8rem); font-weight: 500; letter-spacing: -0.065em; line-height: 0.91; }
.hero-brief { max-width: 44rem; margin: 2.5rem 0 0; color: #9da9ae; font-size: clamp(1rem, 1.45vw, 1.25rem); line-height: 1.65; }
.hero-actions { display: flex; align-items: center; gap: 1.5rem; margin-top: 2.5rem; }
.primary-action { display: flex; justify-content: space-between; gap: 3rem; min-width: 18rem; padding: 0.9rem 1rem; color: #081007; background: var(--signal); font-size: 0.75rem; font-weight: 700; }
.secondary-action { padding-block: 0.6rem; border-bottom: 1px solid var(--muted); color: #c4cccf; font-size: 0.75rem; }
.hero-readout { align-self: end; margin: 0; border-top: 1px solid var(--line); }
.hero-readout div { padding-block: 1rem; border-bottom: 1px solid var(--line); }
.hero-readout dt { color: #66757c; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 0.56rem; letter-spacing: 0.12em; text-transform: uppercase; }
.hero-readout dd { margin: 0.45rem 0 0; font-size: 0.8rem; }

.operating-model, .systems-section, .capabilities-section, .experience-strip { display: grid; grid-template-columns: minmax(9rem, 0.23fr) minmax(0, 1fr); gap: clamp(2rem, 7vw, 8rem); padding: clamp(5rem, 9vw, 8rem) max(1.25rem, calc((100vw - 92rem) / 2)); border-top: 1px solid var(--line); background: rgb(7 11 13 / 94%); }
.section-code { display: flex; gap: 1.25rem; align-items: start; color: #69777d; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
.section-code span { color: var(--signal); font-size: 0.65rem; }
.section-code p { margin: 0; font-size: 0.62rem; letter-spacing: 0.12em; text-transform: uppercase; }
.operating-content h2, .systems-heading h2, .capability-intro h2, .experience-strip h2, .systems-contact h2 { margin: 0; font-size: clamp(2.3rem, 5vw, 5rem); font-weight: 500; letter-spacing: -0.055em; line-height: 0.96; }
.architecture-line { display: grid; grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr; align-items: center; gap: 1rem; margin-top: 4rem; }
.architecture-line div { min-height: 9rem; padding: 1rem; border: 1px solid var(--line); background: var(--panel); }
.architecture-line div span { display: block; margin-bottom: 2.6rem; color: #58666c; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 0.62rem; }
.architecture-line strong, .architecture-line small { display: block; }
.architecture-line strong { font-size: 0.83rem; }
.architecture-line small { margin-top: 0.35rem; color: var(--muted); font-size: 0.65rem; }
.architecture-line i { color: var(--signal); font-style: normal; }

.systems-section { background: #0a0f12; }
.systems-heading { display: flex; align-items: end; justify-content: space-between; gap: 2rem; padding-bottom: 4rem; }
.systems-heading p { max-width: 31rem; margin: 0; color: var(--muted); line-height: 1.6; }
.system-record { padding-block: 2.5rem; border-top: 1px solid #344047; }
.system-record header { display: grid; grid-template-columns: 5.5rem 1fr 0.75fr auto; gap: 1.5rem; align-items: start; }
.record-id, .system-record header > a { color: var(--signal); font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 0.63rem; letter-spacing: 0.06em; }
.system-record h3 { margin: 0; font-size: clamp(2rem, 4vw, 3.6rem); font-weight: 500; letter-spacing: -0.04em; line-height: 0.9; }
.system-record header div p { margin: 0.65rem 0 0; color: var(--muted); font-size: 0.72rem; }
.ownership { margin: 0; color: #bcc6ca; font-size: 0.74rem; }
.system-narrative { max-width: 54rem; margin: 2.75rem 0 1.5rem 7rem; color: #d4dcdd; font-size: 1.08rem; line-height: 1.55; }
.flow { display: grid; grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr; align-items: center; gap: 0.75rem; margin-left: 7rem; }
.flow div { display: flex; flex-direction: column; gap: 1.25rem; min-height: 6.75rem; padding: 0.85rem; border: 1px solid var(--line); color: #dbe2e2; font-size: 0.75rem; }
.flow div span { color: #5e6b71; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 0.55rem; }
.flow i { color: var(--signal); font-style: normal; }
.evidence-list { display: flex; flex-wrap: wrap; gap: 0.5rem 1.75rem; margin: 1.5rem 0 0 7rem; padding: 0; color: #839198; font-size: 0.7rem; list-style: none; }
.evidence-list li { display: flex; gap: 0.45rem; }
.evidence-list span { color: var(--signal); }

.capabilities-section { background: #070b0d; }
.capabilities-content { display: grid; grid-template-columns: 0.7fr 1fr; gap: 5rem; }
.capability-intro p { max-width: 26rem; color: var(--muted); line-height: 1.6; }
.capabilities-content ol { margin: 0; padding: 0; border-top: 1px solid var(--line); list-style: none; }
.capabilities-content li { display: grid; grid-template-columns: 4rem 0.7fr 1fr; gap: 1rem; padding: 1.4rem 0; border-bottom: 1px solid var(--line); }
.capabilities-content li span { color: var(--signal); font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 0.6rem; }
.capabilities-content li strong { font-size: 0.78rem; }
.capabilities-content li p { margin: 0; color: var(--muted); font-size: 0.75rem; line-height: 1.55; }

.experience-strip { background: #0a0f12; }
.experience-strip h2 { max-width: 18ch; }
.career-track { display: grid; grid-template-columns: repeat(4, 1fr); margin-top: 4rem; border-top: 1px solid var(--line); }
.career-track div { position: relative; display: flex; flex-direction: column; min-height: 9rem; padding: 1.5rem 1rem 1rem 0; border-right: 1px solid var(--line); }
.career-track div::before { position: absolute; top: -0.3rem; left: 0; width: 0.55rem; height: 0.55rem; border-radius: 50%; background: var(--signal); content: ''; }
.career-track span { margin-bottom: auto; color: var(--signal); font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 0.58rem; }
.career-track strong { font-size: 0.76rem; }
.career-track small { margin-top: 0.35rem; color: var(--muted); font-size: 0.65rem; }

.systems-contact { display: grid; grid-template-columns: minmax(0, 1fr) minmax(18rem, 0.45fr); align-items: end; gap: clamp(3rem, 10vw, 10rem); padding: clamp(6rem, 12vw, 11rem) max(1.25rem, calc((100vw - 92rem) / 2)); border-top: 1px solid var(--line); background: var(--signal); color: #071006; }
.systems-contact .system-label { color: #34510e; }
.systems-contact h2 { max-width: 15ch; margin-top: 1.4rem; }
.contact-panel { border-top: 1px solid rgb(7 16 6 / 40%); }
.contact-panel p { color: #263719; line-height: 1.55; }
.contact-panel a { display: flex; justify-content: space-between; gap: 2rem; margin-top: 2rem; padding: 1rem; border: 1px solid #071006; font-size: 0.78rem; font-weight: 700; }
.systems-footer { display: flex; justify-content: space-between; gap: 1rem; padding: 1.2rem max(1.25rem, calc((100vw - 92rem) / 2)); color: #65737a; background: #070b0d; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 0.58rem; letter-spacing: 0.1em; text-transform: uppercase; }

a:focus-visible { outline: 2px solid var(--signal); outline-offset: 5px; }
.systems-contact a:focus-visible { outline-color: #071006; }

@media (max-width: 960px) {
  .systems-header { grid-template-columns: 1fr auto; }
  .system-status { display: none; }
  .systems-hero { grid-template-columns: 3rem minmax(0, 1fr); }
  .hero-readout { grid-column: 2; display: grid; grid-template-columns: repeat(2, 1fr); align-self: auto; }
  .hero-readout div:nth-child(odd) { border-right: 1px solid var(--line); }
  .capabilities-content { grid-template-columns: 1fr; gap: 3rem; }
  .systems-contact { grid-template-columns: 1fr; }
}

@media (max-width: 720px) {
  .systems-header nav a:not(:last-child) { display: none; }
  .system-brand small { display: none; }
  .systems-hero { grid-template-columns: 1fr; min-height: auto; padding-block: 4rem; }
  .hero-axis { display: none; }
  .hero-readout { grid-column: 1; margin-top: 2rem; }
  .hero-actions { align-items: stretch; flex-direction: column; }
  .primary-action { min-width: 0; }
  .operating-model, .systems-section, .capabilities-section, .experience-strip { grid-template-columns: 1fr; }
  .architecture-line, .flow { grid-template-columns: 1fr; }
  .architecture-line i, .flow i { transform: rotate(90deg); justify-self: center; }
  .systems-heading { align-items: start; flex-direction: column; }
  .system-record header { grid-template-columns: 3.75rem 1fr auto; }
  .ownership { grid-column: 2 / -1; }
  .system-narrative, .flow, .evidence-list { margin-left: 0; }
  .capabilities-content li { grid-template-columns: 3.25rem 1fr; }
  .capabilities-content li p { grid-column: 2; }
  .career-track { grid-template-columns: repeat(2, 1fr); }
  .career-track div:nth-child(2) { border-right: 0; }
  .systems-footer span:nth-child(2) { display: none; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { scroll-behavior: auto !important; }
}
</style>
