<template>
  <section class="grid w-full grid-cols-1 bg-stone-200 text-black md:grid-cols-2" aria-labelledby="philosophy-heading">
    <div class="min-h-80 w-full">
      <NuxtImg
        v-if="imageUrl"
        class="h-full w-full object-cover"
        :src="imageUrl"
        alt="Wesley Ukadike working through a product problem"
        width="1200"
        height="900"
        sizes="100vw md:50vw"
        loading="lazy"
      />
    </div>
    <div class="px-4 py-16 md:px-12 md:py-36">
      <h2 id="philosophy-heading" class="mb-4 text-3xl font-bold md:text-5xl">
        {{ philosophy.title }}
      </h2>
      <p class="max-w-md text-sm font-light leading-relaxed">{{ philosophy.subtitle }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { PhilosophyContent } from '~/types/portfolio'

const { philosophy } = defineProps<{ philosophy: PhilosophyContent }>()
const imageUrl = computed(() => sanityImage(philosophy.image)?.width(1200).height(900).url() || '')
</script>
