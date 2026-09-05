<template>
  <footer class="grid w-full grid-cols-12 border-t border-grey-700 bg-black px-4 py-10 text-sm text-white md:gap-8 md:py-0">
    <div class="col-span-12 flex flex-wrap items-center justify-center md:col-span-5 md:justify-end md:py-10">
      <span>Reach me via</span>
      <span class="mx-4 text-indigo-300" aria-hidden="true">→</span>
      <span>social media</span>
    </div>

    <ul
      v-if="socials.length"
      class="col-span-12 mt-6 flex items-center justify-center gap-8 text-lg md:col-span-7 md:mt-0 md:justify-start md:border-l md:border-grey-700 md:pl-10"
      role="list"
    >
      <li v-for="item in socials" :key="item._key">
        <NuxtLink
          :to="item.link"
          external
          target="_blank"
          rel="noopener noreferrer"
          class="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/15 px-3 text-slate-300 transition-colors hover:border-indigo-300 hover:text-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-300"
          :aria-label="`${item.label} profile — opens in a new tab`"
        >
          <span
            data-social-icon
            class="social-icon"
            :style="{ '--social-icon-url': `url(${socialIconPath(item.icon, item.label)})` }"
            aria-hidden="true"
          />
        </NuxtLink>
      </li>
    </ul>
  </footer>
</template>

<script setup lang="ts">
const { data: socials } = await useSocialLinks()

const socialIcons: Record<string, string> = {
  'fa-brands:github-alt': '/social-github.svg',
  'fa-brands:instagram': '/social-instagram.svg',
  'fa-brands:twitter': '/social-twitter.svg',
  'fa6-brands:linkedin-in': '/social-linkedin.svg',
}

function socialIconPath(icon: string, label: string) {
  if (socialIcons[icon]) return socialIcons[icon]

  const normalizedLabel = label.toLowerCase()
  if (normalizedLabel.includes('linkedin')) return '/social-linkedin.svg'
  if (normalizedLabel.includes('github')) return '/social-github.svg'
  if (normalizedLabel.includes('instagram')) return '/social-instagram.svg'
  return '/social-twitter.svg'
}
</script>

<style scoped>
.social-icon {
  width: 1.35rem;
  height: 1.35rem;
  background: currentColor;
  mask: var(--social-icon-url) center / contain no-repeat;
  -webkit-mask: var(--social-icon-url) center / contain no-repeat;
}
</style>
