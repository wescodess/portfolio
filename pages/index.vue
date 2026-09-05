<template>
  <main id="main-content" class="bg-black">
    <div class="relative">
      <div ref="banner" class="home-hero sticky top-0 z-0 noisebg">
        <div class="layout relative">
          <SharedBanner
            class="home-hero__banner"
            :banner="content?.banner || null"
            :opacity="heroOpacity"
          />
        </div>
      </div>

      <div class="relative z-10 min-h-dvh bg-black">
        <div class="noisebg min-h-dvh">
          <div class="layout min-h-dvh max-w-full">
            <div ref="navigation" class="sticky top-0 z-40">
              <SharedNav :top="navigationTop" />
            </div>

            <div
              v-if="error"
              class="mx-auto max-w-2xl px-4 py-32 text-center text-white"
              role="alert"
            >
              <h2 class="text-3xl font-bold">Content is temporarily unavailable</h2>
              <p class="mt-4 text-slate-300">
                Please refresh the page or try again in a few minutes.
              </p>
              <button class="mt-8 rounded-full border border-white px-6 py-3" @click="() => refresh()">
                Try again
              </button>
            </div>

            <template v-else-if="content">
              <HomeExperience
                v-if="content.experience"
                :experience="content.experience"
              />
              <HomePhilosophy
                v-if="content.philosophy"
                :philosophy="content.philosophy"
              />
              <HomeSkillset
                v-if="content.skillset"
                :skillset="content.skillset"
              />
              <div class="w-full max-w-full overflow-hidden">
                <HomeFrameworks :frameworks="content.frameworks" />
              </div>
              <HomeProjects
                id="projects"
                class="w-full bg-black text-white"
                :projects="content.projects.slice(0, 3)"
              />
              <HomeQuote
                class="w-full border-y border-grey-700 bg-[#0f0f0f] py-7 text-white"
              />
              <section
                v-if="content.about"
                id="about"
                data-sticky-about
                class="noisebg sticky top-0 z-0 min-h-dvh py-24 md:py-52"
                aria-labelledby="about-heading"
              >
                <HomeAbout :about="content.about" />
              </section>
              <SharedFooter
                v-if="content.footer"
                class="relative z-10"
                :footer="content.footer"
              />
            </template>

            <div v-else class="px-4 py-32 text-center text-white" role="status">
              Loading portfolio content…
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useElementBounding } from '@vueuse/core'

const { data: content, error, refresh } = await usePortfolioContent()
const banner = useTemplateRef<HTMLElement>('banner')
const navigation = useTemplateRef<HTMLElement>('navigation')
const { height: bannerHeight } = useElementBounding(banner)
const { top: navigationTop } = useElementBounding(navigation)

const heroOpacity = computed(() => {
  if (bannerHeight.value <= 0) return 1
  return Math.min(Math.max(navigationTop.value / bannerHeight.value, 0), 1)
})

const site = useSiteConfig()
const description = 'Senior software engineer building thoughtful, accessible, and performant digital products.'
const socialImage = `${site.url}/og-image.png`

useSeoMeta({
  title: 'Senior Software Engineer',
  description,
  ogTitle: 'Wesley Ukadike — Senior Software Engineer',
  ogDescription: description,
  ogImage: socialImage,
  ogType: 'website',
  ogUrl: site.url,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Wesley Ukadike — Senior Software Engineer',
  twitterDescription: description,
  twitterImage: socialImage,
})

useHead({
  link: [{ rel: 'canonical', href: site.url }],
})

useSchemaOrg([
  defineWebPage({
    name: 'Wesley Ukadike — Senior Software Engineer',
    description,
  }),
])
</script>
