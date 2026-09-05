<template>
  <article
    ref="card"
    data-motion-card
    data-project-card
    :data-project-tier="variant"
    class="project-card relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/30"
    @pointermove="tiltCard"
    @pointerleave="resetCard"
  >
    <component
      :is="project.url ? 'a' : 'div'"
      class="group block w-full rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-300"
      :class="{ 'lg:grid lg:grid-cols-[minmax(18rem,0.9fr)_minmax(0,1.1fr)]': variant === 'featured' }"
      :href="project.url || undefined"
      :target="project.url ? '_blank' : undefined"
      :rel="project.url ? 'noopener noreferrer' : undefined"
      :aria-label="project.url ? `${project.title} — open project in a new tab` : undefined"
    >
      <div
        class="relative aspect-video w-full overflow-hidden bg-black"
        :class="{ 'lg:aspect-auto lg:h-full': variant === 'featured' }"
      >
        <div
          ref="cardGlow"
          class="card-glow pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden="true"
        />
        <NuxtImg
          v-if="imageUrl"
          :src="imageUrl"
          :alt="`${project.title} project preview`"
          width="1200"
          height="675"
          sizes="100vw lg:50vw"
          loading="lazy"
          :class="[
            'relative h-full w-full transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.04]',
            project.mobile ? 'object-contain p-3' : 'object-cover',
          ]"
        />
      </div>
      <div
        class="relative z-10 flex flex-col px-6 pb-12 pt-8"
        :class="{ 'lg:min-h-80 lg:px-10 lg:py-12': variant === 'featured' }"
      >
        <h3
          class="font-bold leading-tight transition-[color,transform] duration-500 motion-safe:group-hover:translate-x-1 group-hover:text-indigo-300"
          :class="variant === 'featured' ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'"
        >
          {{ project.title }}
        </h3>
        <p
          class="mt-4 leading-relaxed text-slate-300"
          :class="variant === 'featured' ? 'text-base md:text-lg' : 'text-sm'"
        >
          {{ project.description }}
        </p>
        <span
          v-if="project.url"
          class="mt-8 inline-flex w-max items-center gap-2 text-sm font-semibold text-indigo-300 underline decoration-indigo-300/30 underline-offset-4 transition-colors group-hover:text-white group-hover:decoration-white"
        >
          View product <span aria-hidden="true">↗</span>
        </span>
        <span
          v-if="project.url"
          class="absolute bottom-4 right-4 grid h-9 w-9 place-items-center rounded-full border border-indigo-300/40 text-indigo-300 transition-[background-color,color,transform] duration-500 motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:translate-x-1 group-hover:bg-indigo-300 group-hover:text-black"
          aria-hidden="true"
        >↗</span>
      </div>
    </component>
  </article>
</template>

<script setup lang="ts">
import type { ProjectItem } from '~/types/portfolio'

const { project, variant = 'standard' } = defineProps<{
  project: ProjectItem
  variant?: 'featured' | 'standard'
}>()
const card = useTemplateRef<HTMLElement>('card')
const cardGlow = useTemplateRef<HTMLElement>('cardGlow')
const imageUrl = computed(() => sanityImage(project.image)?.width(1200).height(675).quality(82).url() || '')

function tiltCard(event: PointerEvent) {
  if (event.pointerType !== 'mouse' || !(event.currentTarget instanceof HTMLElement)) return
  const bounds = event.currentTarget.getBoundingClientRect()
  const relativeX = event.clientX - bounds.left
  const relativeY = event.clientY - bounds.top

  const tiltX = (0.5 - relativeY / bounds.height) * 5
  const tiltY = (relativeX / bounds.width - 0.5) * 6
  card.value?.style.setProperty('transform', `perspective(1000px) translateY(-8px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`)
  cardGlow.value?.style.setProperty('--card-glow-x', `${relativeX}px`)
  cardGlow.value?.style.setProperty('--card-glow-y', `${relativeY}px`)
}

function resetCard() {
  card.value?.style.removeProperty('transform')
}
</script>

<style scoped>
.project-card {
  transform-style: preserve-3d;
  will-change: transform;
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}

@media (hover: hover) and (prefers-reduced-motion: no-preference) {
  .project-card:hover {
    transform: translateY(-8px);
  }
}

.card-glow {
  background: radial-gradient(
    360px circle at var(--card-glow-x, 50%) var(--card-glow-y, 35%),
    rgb(165 180 252 / 25%),
    transparent 68%
  );
}
</style>
