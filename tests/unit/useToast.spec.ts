import { readonly, ref } from 'vue'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import useNotifications from '~/composables/useToast'

describe('notification state', () => {
  const state = ref<ReturnType<typeof useNotifications>['notifications']['value']>([])

  beforeEach(() => {
    state.value = []
    vi.stubGlobal('useNoti', () => state)
    vi.stubGlobal('readonly', readonly)
  })

  it('creates typed notifications and removes them by id', () => {
    const toast = useNotifications()

    toast.createSuccessNotification({ message: 'Delivered' })
    toast.createErrorNotification({ message: 'Failed' })

    expect(toast.notifications.value).toHaveLength(2)
    expect(toast.notifications.value.map(item => item.type)).toEqual(['success', 'error'])

    toast.removeNotifications(toast.notifications.value[0]!.id)
    expect(toast.notifications.value).toHaveLength(1)
    expect(toast.notifications.value[0]!.message).toBe('Failed')
  })
})
