<template>
  <div
    :class="['relative max-w-sm rounded-md border px-5 py-4 pr-12 text-white shadow-xl', toastClass]"
    :role="type === 'error' ? 'alert' : 'status'"
  >
    <p class="font-semibold">{{ title }}</p>
    <p class="mt-1 text-sm">{{ message }}</p>
    <button
      type="button"
      class="absolute right-2 top-2 flex min-h-9 min-w-9 items-center justify-center rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
      aria-label="Dismiss notification"
      @click="close"
    >
      <span aria-hidden="true">×</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { NotificationType } from '~/composables/useToast'

const props = withDefaults(defineProps<{
  autoClose?: boolean
  duration?: number
  message: string
  title: string
  type?: NotificationType
}>(), {
  autoClose: true,
  duration: 5,
  type: 'info',
})

const emit = defineEmits<{ close: [] }>()
let timer: ReturnType<typeof setTimeout> | undefined

const toastClass = computed(() => ({
  error: 'border-red-300 bg-red-700',
  warning: 'border-amber-200 bg-amber-700',
  success: 'border-emerald-200 bg-emerald-700',
  info: 'border-blue-200 bg-blue-700',
})[props.type])

function close() {
  if (timer) clearTimeout(timer)
  emit('close')
}

onMounted(() => {
  if (props.autoClose) timer = setTimeout(close, props.duration * 1000)
})

onBeforeUnmount(() => {
  if (timer) clearTimeout(timer)
})
</script>
