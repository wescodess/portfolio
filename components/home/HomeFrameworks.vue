<template>
  <section
    v-if="frameworks.length"
    ref="frameworkStrip"
    data-motion-section="frameworks"
    class="w-full overflow-hidden border-y border-grey-700 text-white"
    aria-labelledby="frameworks-heading"
  >
    <h2 id="frameworks-heading" class="sr-only">Technologies and frameworks</h2>
    <motion.div
      :style="{ x: frameworkX }"
      class="-ml-12 grid w-[calc(100%+6rem)] grid-cols-2 md:grid-cols-4"
    >
      <article
        v-for="framework in frameworks"
        :key="framework._key"
        class="flex flex-col items-center justify-center border border-grey-700 py-8"
      >
        <NuxtImg
          v-if="iconUrl(framework.icon)"
          class="h-12 w-12 object-contain"
          :src="iconUrl(framework.icon)"
          alt=""
          width="48"
          height="48"
          loading="lazy"
        />
        <h3 class="mt-2 text-sm text-slate-400">{{ framework.title }}</h3>
      </article>
    </motion.div>
  </section>
</template>

<script setup lang="ts">
import { motion, useScroll, useTransform } from 'motion-v'
import type { FrameworkItem, SanityImage } from '~/types/portfolio'

defineProps<{ frameworks: FrameworkItem[] }>()

const frameworkStrip = useTemplateRef<HTMLElement>('frameworkStrip')
const { scrollYProgress } = useScroll({
  target: frameworkStrip,
  offset: ['start end', 'end start'],
})
const frameworkX = useTransform(scrollYProgress, [0, 1], ['-3rem', '3rem'])

function iconUrl(image: SanityImage | null): string {
  return sanityImage(image)?.width(96).height(96).url() || ''
}
</script>
