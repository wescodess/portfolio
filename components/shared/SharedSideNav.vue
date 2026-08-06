<template>
  <div
    id="mobile-navigation"
    ref="dialog"
    role="dialog"
    aria-modal="true"
    aria-label="Mobile navigation"
    class="fixed inset-0 z-[200] flex min-h-dvh w-full bg-slate-950 text-white"
    @keydown="handleKeydown"
  >
    <button
      ref="closeButton"
      type="button"
      class="absolute right-4 top-4 flex min-h-11 min-w-11 items-center justify-center rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-300"
      aria-label="Close navigation menu"
      @click="close"
    >
      <span class="text-4xl font-light leading-none" aria-hidden="true">×</span>
    </button>

    <nav class="flex w-full items-center justify-center" aria-label="Mobile navigation links">
      <ul class="flex flex-col items-center gap-10 text-xl" role="list">
        <li><NuxtLink to="/#about" @click="close">About</NuxtLink></li>
        <li><NuxtLink to="/#projects" @click="close">Work</NuxtLink></li>
        <li><NuxtLink to="/#experience" @click="close">Experience</NuxtLink></li>
        <li><NuxtLink to="/#footer" @click="close">Get in touch</NuxtLink></li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{ close: [] }>()
const dialog = useTemplateRef<HTMLElement>('dialog')
const closeButton = useTemplateRef<HTMLButtonElement>('closeButton')

function close() {
  emit('close')
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    event.preventDefault()
    close()
    return
  }

  if (event.key !== 'Tab' || !dialog.value) return

  const focusable = Array.from(
    dialog.value.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  )

  const first = focusable[0]
  const last = focusable.at(-1)
  if (!first || !last) return

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last.focus()
  }
  else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first.focus()
  }
}

onMounted(() => closeButton.value?.focus())
</script>
