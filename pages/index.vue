<template>
  <div class="bg-black">
    <div class="relative">
      <div ref="bannerRef" class="home-hero sticky top-0 z-0 noisebg">
        <div class="layout relative">
          <LazySharedBanner class="home-hero__banner" :opacity="heroOpacity" />
        </div>
      </div>

      <div class="home-content relative z-10 bg-black fullH">
        <div class="noisebg fullH">
          <div class="layout fullH max-w-full">
            <div ref="navRef" class="sticky top-0 z-40">
              <LazySharedNav
                :opacity="heroOpacity"
                :top="top"
                id="navRef"
                class="z-40"
              />
            </div>
            <LazyHomeExperience />
            <LazyHomePhilosophy v-setnav="'light'" />
            <LazyHomeSkillset />
            <div class="w-full max-w-full overflow-hidden">
              <LazyHomeFrameworks class="overflow-hidden" />
            </div>
            <LazyHomeProjects
              id="projects"
              v-setnav="'light'"
              class="w-full text-white bg-black"
            />
            <LazyHomeQuote
              class="text-white w-full py-7 bg-[#0f0f0f] border-y border-grey-700"
            />
            <div id="about" class="sticky top-0 py-24 md:py-52 noisebg">
              <LazyHomeAbout />
            </div>

            <LazySharedFooter class="sticky top-0 z-10" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useElementBounding } from '@vueuse/core'
import { vSetnav } from '~~/directives/setNavtheme'

const navRef = ref<HTMLElement | null>(null)
const bannerRef = ref<HTMLElement | null>(null)

const { top } = useElementBounding(navRef)
const { height: bannerHeight } = useElementBounding(bannerRef)

const heroOpacity = computed(() => {
  if (bannerHeight.value <= 0) return 1

  return Math.min(Math.max(top.value / bannerHeight.value, 0), 1)
})
</script>
