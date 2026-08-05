import type { Notification } from '~/composables/useToast'

export const useDark = () => useState('dark-navigation', () => true)
export const useSideNav = () => useState('side-navigation', () => false)
export const useNoti = () => useState<Notification[]>('notifications', () => [])
