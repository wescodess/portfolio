<template>
  <section
    ref="hero"
    :style="{ opacity }"
    class="relative z-0 overflow-hidden px-4 py-20 text-left text-white md:px-16 md:py-32 xl:px-40"
    aria-labelledby="hero-heading"
    @pointermove="moveGlow"
    @pointerleave="resetGlow"
  >
    <div
      ref="glow"
      data-ambient-glow
      class="ambient-glow pointer-events-none absolute inset-0 z-0 opacity-80"
      aria-hidden="true"
    />

    <motion.h1
      id="hero-heading"
      data-motion-item="hero-title"
      :aria-label="title"
      :variants="heroWordGroup"
      initial="hidden"
      animate="visible"
      class="relative z-10 mx-auto max-w-5xl text-left text-5xl font-extrabold leading-normal md:text-7xl"
    >
      <span
        v-for="(word, index) in titleWords"
        :key="`${word}-${index}`"
        class="mr-[0.22em] inline-block overflow-hidden align-bottom"
        aria-hidden="true"
      >
        <motion.span :variants="heroWord" class="inline-block">
          {{ word }}
        </motion.span>
      </span>
    </motion.h1>

    <motion.div
      v-if="imageUrl"
      data-motion-item="hero-portrait"
      :initial="popInBottom.hidden"
      :animate="popInBottom.visible"
      :transition="{ delay: 0.16 }"
      class="absolute -bottom-14 right-20 hidden h-56 w-56 items-center justify-center rounded-full bg-white md:flex"
    >
      <NuxtImg
        class="mb-28 mr-6"
        :src="imageUrl"
        :alt="banner?.title ? `Portrait of Wesley Ukadike — ${banner.title}` : 'Portrait of Wesley Ukadike'"
        width="224"
        height="224"
        sizes="224px"
        loading="eager"
        fetchpriority="high"
        format="webp"
      />
    </motion.div>
  </section>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'
import type { BannerContent } from '~/types/portfolio'
import { popInBottom } from '~/utils/motion'

const { banner, opacity = 1 } = defineProps<{
  banner: BannerContent | null
  opacity?: number
}>()

const hero = useTemplateRef<HTMLElement>('hero')
const glow = useTemplateRef<HTMLElement>('glow')
const title = computed(() => banner?.title || 'Senior software engineer building useful digital products.')
const titleWords = computed(() => title.value.trim().split(/\s+/))
const imageUrl = computed(() => sanityImage(banner?.bannerImage)?.width(448).height(448).url() || '')

const heroWordGroup = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.055,
    },
  },
}

const heroWord = {
  hidden: { opacity: 0, y: '108%', rotate: 2 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
}

function moveGlow(event: PointerEvent) {
  if (event.pointerType !== 'mouse') return
  const bounds = event.currentTarget instanceof HTMLElement
    ? event.currentTarget.getBoundingClientRect()
    : hero.value?.getBoundingClientRect()
  if (!bounds) return

  glow.value?.style.setProperty('--glow-x', `${event.clientX - bounds.left}px`)
  glow.value?.style.setProperty('--glow-y', `${event.clientY - bounds.top}px`)
}

function resetGlow() {
  glow.value?.style.setProperty('--glow-x', '55%')
  glow.value?.style.setProperty('--glow-y', '45%')
}
</script>

<style scoped>
.ambient-glow {
  background: radial-gradient(
    440px circle at var(--glow-x, 55%) var(--glow-y, 45%),
    rgb(129 140 248 / 18%),
    transparent 72%
  );
}
</style>
