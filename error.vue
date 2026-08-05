<template>
  <main id="main-content" class="noisebg flex min-h-dvh items-center justify-center px-4 text-white">
    <div class="max-w-xl text-center">
      <p class="text-sm uppercase tracking-[0.3em] text-indigo-300">{{ error.statusCode || 500 }}</p>
      <h1 class="mt-4 text-5xl font-bold">{{ title }}</h1>
      <p class="mt-5 leading-relaxed text-slate-300">{{ message }}</p>
      <button
        type="button"
        class="mt-8 rounded-full bg-white px-8 py-3 text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-300"
        @click="handleError"
      >
        Return home
      </button>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const { error } = defineProps<{ error: NuxtError }>()
const title = computed(() => error.statusCode === 404 ? 'Page not found' : 'Something went wrong')
const message = computed(() => error.statusCode === 404
  ? 'The page you requested does not exist or may have moved.'
  : 'The application could not complete your request. Please try again.')

function handleError() {
  clearError({ redirect: '/' })
}

useSeoMeta({
  title: title.value,
  robots: 'noindex, nofollow',
})
</script>
