<template>
  <article class="w-full">
    <div class="grid w-full grid-cols-12 items-center gap-4">
      <NuxtImg
        v-if="logoUrl"
        class="col-span-3 h-16 w-16 object-contain md:col-span-2"
        :src="logoUrl"
        :alt="`${experience.company} logo`"
        width="96"
        height="96"
        sizes="64px md:96px"
        loading="lazy"
      />
      <div class="col-span-9 ml-2 md:col-span-7 md:ml-4 md:mr-12">
        <h3 class="text-lg">{{ experience.role }}</h3>
        <div class="md:hidden">
          <p class="text-sm">{{ experience.company }}</p>
          <p class="text-xs text-slate-400">{{ dateRange }}</p>
        </div>
      </div>
      <div class="col-span-3 hidden md:block">
        <p class="text-sm uppercase">{{ experience.company }}</p>
        <p class="text-xs font-light text-slate-400">{{ dateRange }}</p>
      </div>
    </div>
    <hr v-if="!isLast" class="mt-6 border-grey-700 md:mt-10" >
  </article>
</template>

<script setup lang="ts">
import type { ExperienceItem } from '~/types/portfolio'

const { experience, isLast = false } = defineProps<{
  experience: ExperienceItem
  isLast?: boolean
}>()

const dateRange = computed(() => `${experience.start} – ${experience.end || 'Present'}`)
const logoUrl = computed(() => sanityImage(experience.logo)?.width(192).height(192).url() || '')
</script>
