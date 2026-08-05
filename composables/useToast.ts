export type NotificationType = 'error' | 'info' | 'success' | 'warning'

export interface Notification {
  autoClose: boolean
  duration: number
  id: string
  message: string
  title: string
  type: NotificationType
}

export interface CreateNotificationOptions {
  autoClose?: boolean
  duration?: number
  message?: string
  title?: string
  type?: NotificationType
}

const defaults: Omit<Notification, 'id'> = {
  autoClose: true,
  duration: 5,
  message: 'A notification was received.',
  title: 'Notification',
  type: 'info',
}

function notificationId(): string {
  return globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.round(Math.random() * 1_000_000)}`
}

export default function useNotifications() {
  const notifications = useNoti()

  function createNotification(options: CreateNotificationOptions = {}): void {
    notifications.value.push({
      ...defaults,
      ...options,
      id: notificationId(),
    })
  }

  function createErrorNotification(options: CreateNotificationOptions = {}): void {
    createNotification({
      title: 'Something went wrong',
      duration: 8,
      ...options,
      type: 'error',
    })
  }

  function createSuccessNotification(options: CreateNotificationOptions = {}): void {
    createNotification({ title: 'Success', ...options, type: 'success' })
  }

  function createWarningNotification(options: CreateNotificationOptions = {}): void {
    createNotification({ title: 'Please note', duration: 8, ...options, type: 'warning' })
  }

  function removeNotifications(id: string): void {
    notifications.value = notifications.value.filter(notification => notification.id !== id)
  }

  return {
    notifications: readonly(notifications),
    createNotification,
    createSuccessNotification,
    createErrorNotification,
    createWarningNotification,
    removeNotifications,
  }
}
