<template>
  <div class="layout-root noisebg ">
    <NuxtLoadingIndicator color="#8a4af3" :height="5" />

    <transition name="loader-fade">
      <div
        v-if="showInitialLoader"
        class="loader-overlay noisebg"
        role="status"
        aria-live="polite"
        aria-label="Loading portfolio"
      >
        <div class="loader-shell">
          <svg class="loader-hexagon" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              class="loader-hexagon-path"
              d="m100,26l60,38.75v77.5l-60,38.75-60-38.75V64.75L100,26z"
              stroke-linejoin="round"
              stroke-linecap="round"
              pathLength="1"
            />
          </svg>
          <img
            :src="winkbitLogo"
            alt="Winkbit logo"
            width="72"
            height="72"
            class="loader-logo"
          />
        </div>
      </div>
    </transition>

    <div :class="containerClass">
      <transition name="slide">
        <SharedSideNav v-if="showSideNav" :toggleSideNav="toggleSideNav" />
      </transition>

      <ToastsWrapper />
      <slot />
      <SmallFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeUnmount } from 'vue'
import { onNuxtReady } from '#app'
import winkbitLogo from '~/assets/imgs/winkbit.png'

const showSideNav = useSideNav()
const toggleSideNav = () => {
  showSideNav.value = !showSideNav.value
}

const showInitialLoader = ref(true)
let hideLoaderTimer: number | undefined

const containerClass = computed(() => [
  'layout-main',
  showInitialLoader.value ? 'layout-main--hidden' : null,
])

onNuxtReady(() => {
  window.requestAnimationFrame(() => {
    hideLoaderTimer = window.setTimeout(() => {
      showInitialLoader.value = false
    }, 1400)
  })
})

onBeforeUnmount(() => {
  if (hideLoaderTimer) {
    window.clearTimeout(hideLoaderTimer)
  }
})
</script>

<style scoped>
.layout-root {
  position: relative;
  min-height: 100vh;
  width: 100vw;
  color: #fff;
  overflow: visible;
}

.layout-main {
  min-height: 100vh;
  width: 100%;
  position: relative;
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.layout-main--hidden {
  opacity: 0;
  transform: translateY(12px);
  pointer-events: none;
}

.loader-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 60;
  pointer-events: none;
}

.loader-overlay::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.72);
  backdrop-filter: blur(2px);
}

.loader-shell {
  position: relative;
  width: 180px;
  height: 180px;
  z-index: 1;
}

.loader-hexagon {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  /* animation: loader-spin 1.4s ease-in-out; */
}

.loader-hexagon-path {
  fill: transparent;
  stroke: #8a4af3;
  stroke-width: 6px;
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  animation: loader-trace 1.2s ease-in-out forwards;
  filter: drop-shadow(0 0 16px rgba(138, 74, 243, 0.45));
}

.loader-logo {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 72px;
  height: 72px;
  transform: translate(-50%, -50%);
  object-fit: contain;
  animation: loader-pulse 1.4s ease-in-out;
}

.loader-fade-enter-active,
.loader-fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.loader-fade-enter-from,
.loader-fade-leave-to {
  opacity: 0;
  transform: scale(0.98);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(500px);
}

@keyframes loader-trace {
  0% {
    stroke-dashoffset: 1;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes loader-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes loader-pulse {
  0%,
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.85;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.05);
    opacity: 1;
  }
}
</style>
