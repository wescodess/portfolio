<template>
  <section aria-label="Engineering principles" class="overflow-hidden">
    <div class="marquee flex w-max hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
      <ul class="flex items-center" role="list">
        <li v-for="quote in quotes" :key="quote.text" class="whitespace-nowrap text-xl font-bold">
          {{ quote.text }} <span class="mx-8" aria-hidden="true">{{ quote.icon }}</span>
        </li>
      </ul>
      <ul class="flex items-center" role="list" aria-hidden="true">
        <li v-for="quote in quotes" :key="`duplicate-${quote.text}`" class="whitespace-nowrap text-xl font-bold">
          {{ quote.text }} <span class="mx-8">{{ quote.icon }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
const quotes = [
  { text: 'Code is poetry written in logic', icon: '💻' },
  { text: 'The best error message is the one that never appears', icon: '🚀' },
  { text: 'Solve the problem, then write the code', icon: '🎯' },
  { text: 'Simplicity is the ultimate sophistication', icon: '✨' },
] as const
</script>

<style scoped>
.marquee {
  animation: marquee 28s linear infinite;
}

@keyframes marquee {
  to {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee {
    width: 100%;
    animation: none;
    overflow-x: auto;
  }

  .marquee > ul[aria-hidden='true'] {
    display: none;
  }
}
</style>
