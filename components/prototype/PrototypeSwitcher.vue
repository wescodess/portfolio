<template>
  <aside
    class="fixed inset-x-0 bottom-5 z-[100] mx-auto flex w-[min(94vw,46rem)] items-center gap-2 rounded-2xl border border-white/15 bg-slate-950/95 p-2 text-white shadow-2xl shadow-black/40 backdrop-blur"
    aria-label="Portfolio prototype switcher"
  >
    <button
      type="button"
      class="grid size-11 shrink-0 place-items-center rounded-xl border border-white/10 text-lg transition hover:border-white/30 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      aria-label="Previous design direction"
      @click="$emit('previous')"
    >
      ←
    </button>

    <div class="min-w-0 flex-1 px-2 text-center" aria-live="polite">
      <p class="truncate text-[0.65rem] font-bold uppercase tracking-[0.22em] text-cyan-300">
        Prototype {{ current.key }} of {{ variants.length }}
      </p>
      <p class="truncate text-sm font-semibold text-white">
        {{ current.name }}
      </p>
    </div>

    <div class="hidden items-center gap-1 sm:flex" aria-label="Choose a design direction">
      <button
        v-for="variant in variants"
        :key="variant.key"
        type="button"
        class="grid size-8 place-items-center rounded-lg text-xs font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        :class="variant.key === current.key ? 'bg-white text-slate-950' : 'text-slate-400 hover:bg-white/10 hover:text-white'"
        :aria-label="`Show ${variant.name}`"
        :aria-current="variant.key === current.key ? 'true' : undefined"
        @click="$emit('select', variant.key)"
      >
        {{ variant.key }}
      </button>
    </div>

    <button
      type="button"
      class="grid size-11 shrink-0 place-items-center rounded-xl border border-white/10 text-lg transition hover:border-white/30 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      aria-label="Next design direction"
      @click="$emit('next')"
    >
      →
    </button>
  </aside>
</template>

<script setup lang="ts">
interface PrototypeVariant {
  key: string
  name: string
}

defineProps<{
  current: PrototypeVariant
  variants: readonly PrototypeVariant[]
}>()

defineEmits<{
  previous: []
  next: []
  select: [key: string]
}>()
</script>
