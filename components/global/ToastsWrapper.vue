<template>
  <TransitionGroup
    name="toast-notification"
    tag="div"
    class="fixed right-4 top-20 z-[100] flex flex-col-reverse gap-3 md:right-12"
    aria-label="Notifications"
    aria-live="polite"
  >
    <Toast
      v-for="item in notifications"
      :key="item.id"
      :type="item.type"
      :title="item.title"
      :message="item.message"
      :auto-close="item.autoClose"
      :duration="item.duration"
      @close="removeNotifications(item.id)"
    />
  </TransitionGroup>
</template>

<script setup lang="ts">
const { notifications, removeNotifications } = useToast()
</script>

<style scoped>
.toast-notification-enter-active,
.toast-notification-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.toast-notification-enter-from,
.toast-notification-leave-to {
  opacity: 0;
  transform: translateY(-0.75rem);
}

@media (prefers-reduced-motion: reduce) {
  .toast-notification-enter-active,
  .toast-notification-leave-active {
    transition: none;
  }
}
</style>
