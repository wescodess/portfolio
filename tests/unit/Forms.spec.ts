import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import Input from '~/components/global/Forms/Input.vue'
import TextArea from '~/components/global/Forms/TextArea.vue'

describe('contact form controls', () => {
  beforeEach(() => {
    let id = 0
    vi.stubGlobal('useId', () => `test-control-${++id}`)
  })

  it('connects the input label, description, name, and model', async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: '',
        name: 'email',
        label: 'Email',
        description: 'Used only to reply.',
        type: 'email' as const,
        required: true,
        'onUpdate:modelValue': (value: string) => wrapper.setProps({ modelValue: value }),
      },
    })

    const input = wrapper.get('input')
    const label = wrapper.get('label')
    const description = wrapper.get('p')

    expect(label.attributes('for')).toBe(input.attributes('id'))
    expect(input.attributes('aria-describedby')).toBe(description.attributes('id'))
    expect(input.attributes()).toMatchObject({ name: 'email', type: 'email', required: '' })

    await input.setValue('hello@example.com')
    expect(wrapper.props('modelValue')).toBe('hello@example.com')
  })

  it('renders an accessible multiline message control', async () => {
    const wrapper = mount(TextArea, {
      props: {
        modelValue: 'A useful project brief',
        name: 'message',
        label: 'Message',
        description: 'Tell me about the work.',
        maxlength: 4000,
      },
    })

    const textarea = wrapper.get('textarea')
    expect(wrapper.get('label').attributes('for')).toBe(textarea.attributes('id'))
    expect(textarea.attributes('maxlength')).toBe('4000')
    expect(textarea.element.value).toBe('A useful project brief')
  })
})
