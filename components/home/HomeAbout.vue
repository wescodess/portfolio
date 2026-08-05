<template>
  <div class="grid grid-cols-1 bg-grey-200 text-black md:grid-cols-2">
    <div class="flex min-h-96 w-full flex-col items-center justify-center">
      <div class="flex max-w-md flex-col justify-center px-4 py-20 md:px-0">
        <h2 id="about-heading" class="mb-6 text-5xl font-bold">{{ about.title }}</h2>
        <p class="leading-relaxed">{{ about.subtitle }}</p>
      </div>
    </div>
    <div class="min-h-96 w-full">
      <NuxtImg
        v-if="imageUrl"
        class="h-full w-full object-cover"
        :src="imageUrl"
        alt="Portrait of Wesley Ukadike"
        width="1200"
        height="1200"
        sizes="100vw md:50vw"
        loading="lazy"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AboutContent } from '~/types/portfolio'

const { about } = defineProps<{ about: AboutContent }>()
const imageUrl = computed(() => sanityImage(about.image)?.width(1200).height(1200).quality(82).url() || '')
</script>
