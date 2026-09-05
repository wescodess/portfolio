<template>
  <main id="main-content" class="min-h-dvh bg-black text-white">
    <SharedNav :top="0" />

    <section class="px-4 py-16 md:px-16 md:py-28 xl:px-40" aria-labelledby="projects-heading">
      <motion.div
        data-motion-section="all-projects-copy"
        :variants="revealGroup"
        initial="hidden"
        animate="visible"
        class="max-w-4xl"
      >
        <motion.p :variants="popInBottom" class="text-sm uppercase tracking-widest text-slate-400">
          Selected work
        </motion.p>
        <motion.h1 id="projects-heading" :variants="popInBottom" class="mt-3 text-5xl font-bold leading-tight md:text-7xl">
          Product engineering across complex domains
        </motion.h1>
        <motion.p :variants="popInBottom" class="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
          AI learning, private aviation, public-sector lending, digital banking, and flexible workspaces—presented through the problem, my contribution, and the system delivered.
        </motion.p>
      </motion.div>

      <div v-if="error" class="mt-16 rounded-xl border border-red-400/50 p-8" role="alert">
        <h2 class="text-2xl font-bold">Projects are temporarily unavailable</h2>
        <button class="mt-5 rounded-full border border-white px-6 py-3" @click="() => refresh()">
          Try again
        </button>
      </div>

      <template v-else-if="projects.length">
        <section class="mt-24" aria-labelledby="featured-projects-heading">
          <div class="mb-10 max-w-2xl">
            <p class="text-sm uppercase tracking-widest text-indigo-300">Featured systems</p>
            <h2 id="featured-projects-heading" class="mt-3 text-3xl font-bold md:text-4xl">
              The strongest evidence of how I work
            </h2>
            <p class="mt-4 leading-relaxed text-slate-400">
              Recent product architecture and complex multi-sided platforms take priority here.
            </p>
          </div>

          <motion.div
            data-motion-section="featured-projects-list"
            :variants="revealGroup"
            initial="hidden"
            while-in-view="visible"
            :in-view-options="revealViewport"
            class="space-y-12"
          >
            <motion.div
              v-for="project in featuredProjects"
              :key="project._key"
              :variants="popInBottom"
            >
              <SharedProjectCard :project="project" variant="featured" />
            </motion.div>
          </motion.div>
        </section>

        <section
          v-if="selectedClientProjects.length"
          class="mt-28 border-t border-white/10 pt-20"
          aria-labelledby="selected-client-projects-heading"
        >
          <div class="mb-10 max-w-2xl">
            <p class="text-sm uppercase tracking-widest text-slate-500">Selected client work</p>
            <h2 id="selected-client-projects-heading" class="mt-3 text-3xl font-bold md:text-4xl">
              Earlier commercial delivery
            </h2>
            <p class="mt-4 leading-relaxed text-slate-400">
              Focused examples of financial-product and marketplace work, retained for their ownership and delivery evidence.
            </p>
          </div>

          <motion.div
            data-motion-section="selected-client-projects-list"
            :variants="revealGroup"
            initial="hidden"
            while-in-view="visible"
            :in-view-options="revealViewport"
            class="grid grid-cols-1 gap-10 lg:grid-cols-2"
          >
            <motion.div
              v-for="project in selectedClientProjects"
              :key="project._key"
              :variants="popInBottom"
            >
              <SharedProjectCard :project="project" />
            </motion.div>
          </motion.div>
        </section>
      </template>

      <p v-else class="mt-16 text-slate-300" role="status">No projects are available right now.</p>

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
const featuredProjects = computed(() => projects.value.slice(0, 3))
const selectedClientProjects = computed(() => projects.value.slice(3, 5))
const site = useSiteConfig()
const pageUrl = `${site.url}/projects`
const description = 'Selected product engineering work across AI learning, private aviation, public-sector lending, digital banking, and flexible workspaces.'
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
