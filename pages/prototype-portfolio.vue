<!-- PROTOTYPE: Five structurally different professional portfolio directions, switchable via ?variant=A...E. -->
<template>
  <main id="main-content" class="min-h-dvh">
    <p class="fixed left-3 top-24 z-[100] rounded-full border border-black/10 bg-white/90 px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-slate-900 shadow-sm backdrop-blur">
      Prototype · not production
    </p>

    <component :is="activeVariant.component" />

    <PrototypeSwitcher
      v-if="showSwitcher"
      :current="activeVariant"
      :variants="variants"
      @previous="cycleVariant(-1)"
      @next="cycleVariant(1)"
      @select="setVariant"
    />
  </main>
</template>

<script setup lang="ts">
import { markRaw } from 'vue'
import VariantCaseStudyImmersive from '~/components/prototype/portfolio/VariantCaseStudyImmersive.vue'
import VariantExecutiveEditorial from '~/components/prototype/portfolio/VariantExecutiveEditorial.vue'
import VariantProductSystems from '~/components/prototype/portfolio/VariantProductSystems.vue'
import VariantQuietStudio from '~/components/prototype/portfolio/VariantQuietStudio.vue'
import VariantSwissResume from '~/components/prototype/portfolio/VariantSwissResume.vue'

definePageMeta({ layout: false })

const route = useRoute()
const router = useRouter()
const showSwitcher = import.meta.dev

const variants = [
  { key: 'A', name: 'Executive Editorial', component: markRaw(VariantExecutiveEditorial) },
  { key: 'B', name: 'Product Systems', component: markRaw(VariantProductSystems) },
  { key: 'C', name: 'Case-study Immersive', component: markRaw(VariantCaseStudyImmersive) },
  { key: 'D', name: 'Swiss Résumé', component: markRaw(VariantSwissResume) },
  { key: 'E', name: 'Quiet Studio', component: markRaw(VariantQuietStudio) },
] as const

const requestedKey = computed(() => String(route.query.variant || 'A').toUpperCase())
const activeIndex = computed(() => {
  const index = variants.findIndex(variant => variant.key === requestedKey.value)
  return index >= 0 ? index : 0
})
const activeVariant = computed(() => variants[activeIndex.value]!)

async function setVariant(key: string) {
  await router.replace({ query: { ...route.query, variant: key } })
}

async function cycleVariant(direction: -1 | 1) {
  const nextIndex = (activeIndex.value + direction + variants.length) % variants.length
  await setVariant(variants[nextIndex]!.key)
}

function handleArrowKeys(event: KeyboardEvent) {
  const target = event.target as HTMLElement | null
  if (target?.matches('input, textarea, [contenteditable="true"]')) return
  if (event.key === 'ArrowLeft') void cycleVariant(-1)
  if (event.key === 'ArrowRight') void cycleVariant(1)
}

onMounted(() => window.addEventListener('keydown', handleArrowKeys))
onBeforeUnmount(() => window.removeEventListener('keydown', handleArrowKeys))

useSeoMeta({
  title: 'Professional portfolio directions — prototype',
  robots: 'noindex, nofollow',
})
</script>
