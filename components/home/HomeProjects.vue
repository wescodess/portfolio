<template>
  <section class="px-4 py-24 md:px-16 md:py-32 xl:px-40" aria-labelledby="home-projects-heading">
    <motion.div
      data-motion-section="projects-copy"
      :variants="revealGroup"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="revealViewport"
      class="mb-14 max-w-3xl"
    >
      <motion.p :variants="popInBottom" class="text-sm uppercase tracking-widest text-slate-400">
        My projects
      </motion.p>
      <motion.h2 id="home-projects-heading" :variants="popInBottom" class="mt-3 text-5xl font-bold leading-tight">
        Work I’ve done over the years
      </motion.h2>
    </motion.div>

    <motion.div
      v-if="projects.length"
      data-motion-section="project-list"
      :variants="revealGroup"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="revealViewport"
      class="grid grid-cols-1 gap-10 lg:grid-cols-2"
    >
      <motion.div
        v-for="project in projects"
        :key="project._key"
        :variants="popInBottom"
      >
        <SharedProjectCard :project="project" />
      </motion.div>
    </motion.div>

    <p v-else class="text-slate-300">Project details are being updated.</p>

    <NuxtLink
      to="/projects"
      class="mx-auto mt-16 flex w-max rounded-full border border-indigo-300 px-8 py-3 uppercase transition-colors hover:bg-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-300"
    >
      View all projects
    </NuxtLink>
  </section>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'
import type { ProjectItem } from '~/types/portfolio'
import { popInBottom, revealGroup, revealViewport } from '~/utils/motion'

defineProps<{ projects: ProjectItem[] }>()

</script>
