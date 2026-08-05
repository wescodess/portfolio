<template>
  <section
    id="experience"
    class="relative z-10 grid grid-cols-1 gap-10 px-4 py-32 text-white md:px-16 lg:grid-cols-2 xl:px-40"
    aria-labelledby="experience-heading"
  >
    <motion.div
      data-motion-section="experience-copy"
      :variants="revealGroup"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="revealViewport"
    >
      <motion.p :variants="popInBottom" class="text-sm uppercase tracking-widest text-slate-400">
        Experience
      </motion.p>
      <motion.h2 id="experience-heading" :variants="popInBottom" class="my-4 max-w-md text-5xl font-bold">
        {{ experience.title }}
      </motion.h2>
      <motion.p :variants="popInBottom" class="max-w-md text-sm leading-relaxed text-slate-400">
        {{ experience.subtitle }}
      </motion.p>
    </motion.div>

    <motion.div
      data-motion-section="experience-list"
      :variants="revealGroup"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="revealViewport"
    >
      <motion.div
        v-for="(item, index) in experience.experiences"
        :key="item._key"
        :variants="popInBottom"
        class="mt-6 first:mt-0 md:mt-10"
      >
        <SharedExperience
          :experience="item"
          :is-last="index === experience.experiences.length - 1"
        />
      </motion.div>
    </motion.div>
  </section>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'
import type { ExperienceContent } from '~/types/portfolio'
import { popInBottom, revealGroup, revealViewport } from '~/utils/motion'

defineProps<{ experience: ExperienceContent }>()

</script>
