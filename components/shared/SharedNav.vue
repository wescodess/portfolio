<template>
  <header class="sticky top-0 z-40 flex w-full justify-center">
    <nav
      aria-label="Primary navigation"
      :data-nav-state="isStuck ? 'menu' : 'details'"
      :class="[
        'nav-shell relative flex w-full items-center overflow-hidden text-sm text-white',
        isStuck
          ? 'border-b border-white/15 bg-black/80 px-4 py-2 shadow-lg shadow-black/30 backdrop-blur-xl md:px-16 xl:px-40'
          : 'border-y border-grey-700 bg-black/40 px-4 py-3 md:px-16 xl:px-40',
      ]"
    >
      <NuxtLink
        to="/"
        class="flex items-center rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-300"
        aria-label="Wesley Ukadike, home"
      >
        <NuxtImg
          class="mr-2 h-10 w-10 transition-transform duration-500 motion-safe:hover:rotate-[360deg]"
          src="/images/winkbit.png"
          alt=""
          width="40"
          height="40"
          loading="eager"
        />
        <span class="font-bold leading-tight">
          WESLEY<br >UKADIKE
        </span>
      </NuxtLink>

      <Transition name="nav-swap" mode="out-in">
        <div
          v-if="!isStuck"
          key="details"
          data-nav-panel="details"
          class="ml-auto hidden items-center text-[0.7rem] uppercase leading-tight tracking-[0.12em] text-slate-300 lg:flex"
        >
          <p>
            Based in Ontario<br >
            <span class="text-white">Canada, CA</span>
          </p>
          <p class="ml-12 border-l border-white/15 pl-12">
            Currently Lead Software Engineer<br >
            <span class="text-white">FalconAero</span>
          </p>
          <button
            type="button"
            class="ml-10 flex min-h-11 min-w-11 items-center justify-center rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
            aria-controls="mobile-navigation"
            :aria-expanded="showSideNav"
            aria-label="Open navigation menu"
            @click="openSideNav"
          >
            <span class="menu-mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>

        <div
          v-else
          key="menu"
          data-nav-panel="menu"
          class="ml-auto hidden items-center gap-6 lg:flex"
        >
          <ul class="flex items-center gap-6" role="list">
            <li><NuxtLink class="nav-link" to="/#about">About</NuxtLink></li>
            <li><NuxtLink class="nav-link" to="/#projects">Work</NuxtLink></li>
            <li><NuxtLink class="nav-link" to="/#experience">Experience</NuxtLink></li>
          </ul>
          <NuxtLink
            to="/#footer"
            class="rounded-full bg-white px-6 py-2.5 text-gray-800 ring-1 ring-white transition-[background-color,color,transform] duration-300 hover:-translate-y-0.5 hover:bg-transparent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-300"
          >
            Get in touch
          </NuxtLink>
        </div>
      </Transition>

      <button
        ref="mobileMenuButton"
        type="button"
        class="ml-auto flex min-h-11 min-w-11 items-center justify-center rounded-md lg:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
        aria-controls="mobile-navigation"
        :aria-expanded="showSideNav"
        aria-label="Open navigation menu"
        @click="openSideNav"
      >
        <span class="menu-mark" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

    </nav>
  </header>
</template>

<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

const { top = 1 } = defineProps<{ top?: number }>()
const route = useRoute()
const showSideNav = useSideNav()
const mobileMenuButton = useTemplateRef<HTMLButtonElement>('mobileMenuButton')
const activeMenuTrigger = shallowRef<HTMLButtonElement | null>(null)
const { y: windowY } = useWindowScroll()
const isStuck = computed(() => route.path !== '/' || (windowY.value > 0 && top <= 0))

function openSideNav(event: MouseEvent) {
  activeMenuTrigger.value = event.currentTarget instanceof HTMLButtonElement
    ? event.currentTarget
    : mobileMenuButton.value
  showSideNav.value = true
}

watch(showSideNav, (isOpen) => {
  if (!isOpen) nextTick(() => activeMenuTrigger.value?.focus())
})
</script>

<style scoped>
.nav-shell {
  min-height: 4rem;
  will-change: background-color;
  transition:
    background-color 0.45s ease,
    border-color 0.45s ease,
    box-shadow 0.45s ease,
    padding 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}

.nav-swap-enter-active,
.nav-swap-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}

.nav-swap-enter-from {
  opacity: 0;
  transform: translateX(1rem);
}

.nav-swap-leave-to {
  opacity: 0;
  transform: translateX(-1rem);
}

.nav-link {
  position: relative;
  border-radius: 0.125rem;
  text-transform: uppercase;
  transition: color 0.2s ease;
}

.nav-link::after {
  position: absolute;
  right: 0;
  bottom: -0.35rem;
  left: 0;
  height: 1px;
  content: '';
  background: #a5b4fc;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.nav-link:hover {
  color: #a5b4fc;
}

.nav-link:hover::after,
.nav-link:focus-visible::after {
  transform: scaleX(1);
  transform-origin: left;
}

.nav-link:focus-visible {
  outline: 2px solid #a5b4fc;
  outline-offset: 4px;
}

.menu-mark {
  display: grid;
  width: 1.5rem;
  gap: 0.3rem;
}

.menu-mark span {
  height: 2px;
  border-radius: 999px;
  background: currentColor;
}

.menu-mark span:nth-child(2) {
  width: 75%;
  margin-left: auto;
}
</style>
