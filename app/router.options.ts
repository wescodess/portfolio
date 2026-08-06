import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition

    const behavior = import.meta.client && window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'auto'
      : 'smooth'

    if (to.hash) {
      return {
        el: to.hash,
        top: 72,
        behavior,
      }
    }

    return { top: 0, behavior }
  },
}
