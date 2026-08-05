

export default {
  async scrollBehavior(to, from, savedPosition) {
    const findEl = async (hash, x) => {
      return (
        document.querySelector(hash) ||
        new Promise((resolve) => {
          if (x > 50) {
            return resolve()
          }
          setTimeout(() => {
            resolve(findEl(hash, ++x || 1))
          }, 100)
        })
      )
    }

    if (savedPosition) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(savedPosition)
        }, 1000)
      })
    }

    if (to.hash) {
      const el = await findEl(to.hash)
      if (!el) {
        return { top: 0, left: 0, behavior: 'smooth' }
      }

      const header = document.querySelector('nav')
      const headerOffset = header?.getBoundingClientRect().height || 0
      const elementTop =
        el.getBoundingClientRect().top +
        (window.pageYOffset || document.documentElement.scrollTop || 0)
      const target = Math.max(elementTop - headerOffset, 0)

      return { top: target, left: 0, behavior: 'smooth' }
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          top: 0,
          left: 0,
          behavior: 'smooth',
        })
      }, 1000)
    })
  },
}
