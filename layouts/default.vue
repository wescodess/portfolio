<template>
  <div class="layout-root noisebg font-allrox">
      <a
        class="skip-link"
        href="#main-content"
      >
        Skip to main content
      </a>

      <NuxtLoadingIndicator color="#a5b4fc" :height="3" />

      <Transition name="intro-fade">
        <div
          v-if="showIntro"
          class="intro-overlay noisebg"
          aria-hidden="true"
        >
          <div class="intro-mark">
            <svg class="intro-hexagon" viewBox="0 0 200 200" aria-hidden="true">
              <path
                class="intro-hexagon-path"
                d="m100,26 60,38.75v77.5L100,181l-60-38.75v-77.5L100,26z"
                pathLength="1"
              />
            </svg>
            <NuxtImg
              class="intro-logo"
              src="/images/winkbit.png"
              alt=""
              width="72"
              height="72"
              loading="eager"
            />
          </div>
        </div>
      </Transition>

      <Transition name="side-navigation">
        <SharedSideNav
          v-if="showSideNav"
          @close="closeSideNav"
        />
      </Transition>

      <div
        :aria-hidden="showSideNav ? 'true' : undefined"
        :inert="showSideNav"
      >
        <ToastsWrapper />
        <slot />
        <SmallFooter />
      </div>
  </div>
</template>

<script setup lang="ts">
const showSideNav = useSideNav()
const showIntro = ref(true)
let introTimer: number | undefined

function closeSideNav() {
  showSideNav.value = false
}

onNuxtReady(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    showIntro.value = false
    return
  }

  introTimer = window.setTimeout(() => {
    showIntro.value = false
  }, 900)
})

onBeforeUnmount(() => {
  if (introTimer) window.clearTimeout(introTimer)
})

useHead(() => ({
  bodyAttrs: {
    class: showSideNav.value ? 'menu-open' : undefined,
  },
}))
</script>

<style scoped>
.layout-root {
  min-height: 100dvh;
  width: 100%;
  color: #fff;
}

.skip-link {
  position: fixed;
  top: 0.75rem;
  left: 0.75rem;
  z-index: 1000;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  background: #fff;
  color: #111827;
  transform: translateY(-200%);
  transition: transform 0.2s ease;
}

.skip-link:focus {
  transform: translateY(0);
}

.intro-overlay {
  position: fixed;
  inset: 0;
  z-index: 500;
  display: grid;
  place-items: center;
  pointer-events: none;
}

.intro-overlay::after {
  position: absolute;
  inset: 0;
  content: '';
  background: rgb(0 0 0 / 88%);
  backdrop-filter: blur(2px);
}

.intro-mark {
  position: relative;
  z-index: 1;
  width: 11.25rem;
  height: 11.25rem;
}

.intro-hexagon {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.intro-hexagon-path {
  fill: transparent;
  stroke: #a5b4fc;
  stroke-width: 6px;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  animation: intro-trace 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  filter: drop-shadow(0 0 16px rgb(165 180 252 / 45%));
}

.intro-logo {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4.5rem;
  height: 4.5rem;
  object-fit: contain;
  transform: translate(-50%, -50%);
  animation: intro-pulse 0.85s ease-in-out forwards;
}

.intro-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.intro-fade-leave-to {
  opacity: 0;
  transform: scale(1.02);
}

.side-navigation-enter-active,
.side-navigation-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.side-navigation-enter-from,
.side-navigation-leave-to {
  opacity: 0;
  transform: translateX(2rem);
}

@keyframes intro-trace {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes intro-pulse {
  0%,
  100% {
    opacity: 0.82;
    transform: translate(-50%, -50%) scale(1);
  }

  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.06);
  }
}

@media (prefers-reduced-motion: reduce) {
  .skip-link,
  .intro-fade-leave-active,
  .side-navigation-enter-active,
  .side-navigation-leave-active {
    transition: none;
  }

  .intro-hexagon-path,
  .intro-logo {
    animation: none;
  }
}
</style>
