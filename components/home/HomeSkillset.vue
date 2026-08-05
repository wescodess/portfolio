<template>
  <section
    class="relative z-10 grid grid-cols-1 px-4 py-14 text-white md:px-16 md:py-32 lg:grid-cols-2 xl:px-40"
    aria-labelledby="skillset-heading"
  >
    <motion.div
      data-motion-section="skillset-copy"
      :variants="revealGroup"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="revealViewport"
    >
      <motion.h2 id="skillset-heading" :variants="popInBottom" class="mb-4 text-5xl font-bold">
        {{ skillset.title }}
      </motion.h2>
      <motion.p :variants="popInBottom" class="max-w-sm text-sm font-light leading-relaxed text-slate-400">
        {{ skillset.subtitle }}
      </motion.p>
    </motion.div>

    <motion.div
      data-motion-section="skillset-list"
      :variants="revealGroup"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="revealViewport"
      class="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:mt-0"
    >
      <motion.article v-for="skill in skillset.skills" :key="skill._key" :variants="popInBottom">
        <NuxtImg
          v-if="iconUrl(skill.icon)"
          class="h-20 w-20 object-contain"
          :src="iconUrl(skill.icon)"
          alt=""
          width="80"
          height="80"
          loading="lazy"
        />
        <h3 class="my-2 text-lg">{{ skill.title }}</h3>
        <p class="text-sm font-light leading-relaxed text-slate-400">{{ skill.description }}</p>
      </motion.article>
    </motion.div>
  </section>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'
import type { SanityImage, SkillsetContent } from '~/types/portfolio'
import { popInBottom, revealGroup, revealViewport } from '~/utils/motion'

defineProps<{ skillset: SkillsetContent }>()


function iconUrl(image: SanityImage | null): string {
  return sanityImage(image)?.width(160).height(160).url() || ''
}
</script>
