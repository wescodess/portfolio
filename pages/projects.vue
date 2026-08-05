<template>
  <main id="main-content" class="min-h-dvh bg-black text-white">
    <SharedNav :top="0" />

    <section class="px-4 py-16 md:px-16 md:py-28 xl:px-40" aria-labelledby="projects-heading">
      <motion.div
        data-motion-section="all-projects-copy"
        :variants="revealGroup"
        initial="hidden"
        animate="visible"
        class="mb-14 max-w-3xl"
      >
        <motion.p :variants="popInBottom" class="text-sm uppercase tracking-widest text-slate-400">
          Selected work
        </motion.p>
        <motion.h1 id="projects-heading" :variants="popInBottom" class="mt-3 text-5xl font-bold leading-tight md:text-7xl">
          Work I’ve done over the years
        </motion.h1>
      </motion.div>

      <div v-if="error" class="rounded-xl border border-red-400/50 p-8" role="alert">
        <h2 class="text-2xl font-bold">Projects are temporarily unavailable</h2>
        <button class="mt-5 rounded-full border border-white px-6 py-3" @click="() => refresh()">
          Try again
        </button>
      </div>

      <motion.div
        v-else-if="projects.length"
        data-motion-section="all-projects-list"
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

      <p v-else class="text-slate-300" role="status">No projects are available right now.</p>

      <NuxtLink
        to="/#projects"
        class="mt-16 inline-flex rounded-full border border-indigo-300 px-8 py-3 uppercase transition-colors hover:bg-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-300"
      >
        Back to home
      </NuxtLink>
    </section>
  </main>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'
import { popInBottom, revealGroup, revealViewport } from '~/utils/motion'

const { data: projects, error, refresh } = await useProjectsContent()
const site = useSiteConfig()
const pageUrl = `${site.url}/projects`
const description = 'A selection of web applications, platforms, and product experiences built by Wesley Ukadike.'
const socialImage = `${site.url}/og-image.png`

useSeoMeta({
  title: 'Selected Projects',
  description,
  ogTitle: 'Selected Projects — Wesley Ukadike',
  ogDescription: description,
  ogImage: socialImage,
  ogType: 'website',
  ogUrl: pageUrl,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Selected Projects — Wesley Ukadike',
  twitterDescription: description,
  twitterImage: socialImage,
})

useHead({
  link: [{ rel: 'canonical', href: pageUrl }],
})

useSchemaOrg([
  defineWebPage({
    name: 'Selected Projects — Wesley Ukadike',
    description,
  }),
  defineBreadcrumb({
    itemListElement: [
      { name: 'Home', item: site.url },
      { name: 'Projects', item: pageUrl },
    ],
  }),
])
</script>
