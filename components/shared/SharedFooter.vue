<template>
  <section
    id="footer"
    class="flex min-h-dvh w-full flex-col bg-black pt-20 text-white"
    aria-labelledby="contact-heading"
  >
    <div class="grid grow grid-cols-1 gap-14 px-4 md:grid-cols-2 md:px-16 xl:px-40">
      <div class="flex h-full w-full flex-col items-center justify-center md:items-start">
        <div v-if="imageUrl" class="flex h-52 w-52 items-end justify-center overflow-hidden rounded-full bg-white">
          <NuxtImg
            class="ml-12 h-52 w-52 object-contain object-bottom"
            :src="imageUrl"
            alt="Portrait of Wesley Ukadike"
            width="208"
            height="208"
            sizes="208px"
            loading="lazy"
          />
        </div>
        <h2 id="contact-heading" class="mt-6 text-center text-3xl font-bold leading-tight md:text-left">
          {{ footer.title }}
        </h2>
        <p class="mb-6 mt-2 max-w-md text-center text-sm leading-relaxed text-slate-400 md:text-left">
          {{ footer.subtitle }}
        </p>
        <NuxtLink
          v-if="footer.cv"
          :to="`${footer.cv}?dl=`"
          external
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-full bg-white px-8 py-3 text-gray-800 ring-1 ring-white transition-colors hover:bg-transparent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-300"
        >
          Download CV
        </NuxtLink>
      </div>

      <div class="flex w-full flex-col items-center justify-center">
        <form class="w-full max-w-sm" @submit.prevent="submitContact">
          <FormsInput
            v-model="form.name"
            name="name"
            label="Full name"
            autocomplete="name"
            description="How should I address you?"
            :maxlength="100"
            required
            class="mb-6"
          />
          <FormsInput
            v-model="form.email"
            name="email"
            label="Email"
            type="email"
            autocomplete="email"
            description="I’ll only use this to reply to your message."
            :maxlength="254"
            required
            class="mb-6"
          />
          <FormsTextArea
            v-model="form.message"
            name="message"
            label="Message"
            description="Share a little context about what you would like to build."
            :maxlength="4000"
            required
            class="mb-6"
          />

          <div class="sr-only" aria-hidden="true">
            <label for="contact-website">Website</label>
            <input
              id="contact-website"
              v-model="form.website"
              name="website"
              type="text"
              tabindex="-1"
              autocomplete="off"
            >
          </div>

          <p class="mb-5 text-xs leading-relaxed text-slate-400">
            Your details are used only to respond to this enquiry. This form is protected by
            reCAPTCHA and subject to Google’s privacy policy and terms.
          </p>

          <p v-if="statusMessage" :class="statusClass" :role="submitError ? 'alert' : 'status'">
            {{ statusMessage }}
          </p>

          <button
            :disabled="isSubmitting"
            type="submit"
            class="mt-5 flex min-h-12 w-full max-w-sm items-center justify-center rounded-md bg-white px-8 py-3 text-gray-800 ring-1 ring-white transition-colors hover:bg-transparent hover:text-white disabled:cursor-wait disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-300"
          >
            <span>{{ isSubmitting ? 'Sending…' : 'Send message' }}</span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { FooterContent } from '~/types/portfolio'

const { footer } = defineProps<{ footer: FooterContent }>()
const { executeRecaptcha } = useRecaptcha()
const toast = useToast()
const isSubmitting = ref(false)
const statusMessage = ref('')
const submitError = ref(false)
const form = reactive({
  name: '',
  email: '',
  message: '',
  website: '',
})

const imageUrl = computed(() => sanityImage(footer.bannerImage)?.width(416).height(416).url() || '')
const statusClass = computed(() => submitError.value ? 'text-sm text-red-300' : 'text-sm text-emerald-300')

async function submitContact() {
  if (isSubmitting.value) return

  isSubmitting.value = true
  submitError.value = false
  statusMessage.value = 'Verifying and sending your message…'

  try {
    const recaptchaToken = await executeRecaptcha('contact')
    await $fetch('/api/contact', {
      method: 'POST',
      body: { ...form, recaptchaToken },
    })

    form.name = ''
    form.email = ''
    form.message = ''
    form.website = ''
    statusMessage.value = 'Thanks — your message has been sent.'
    toast.createSuccessNotification({
      title: 'Message sent',
      message: 'Thanks for reaching out. I’ll get back to you shortly.',
    })
  }
  catch (error) {
    submitError.value = true
    statusMessage.value = 'Your message could not be sent. Please try again later.'
    toast.createErrorNotification({
      message: error instanceof Error ? error.message : statusMessage.value,
    })
  }
  finally {
    isSubmitting.value = false
  }
}
</script>
