<template>
  <div>
    <label :for="inputId" class="mb-2 block text-sm font-medium text-white">
      {{ label }}
    </label>
    <textarea
      :id="inputId"
      v-model="model"
      :name="name"
      :required="required"
      :maxlength="maxlength"
      :rows="rows"
      :aria-describedby="description ? descriptionId : undefined"
      class="w-full rounded-md border border-slate-600 bg-slate-950 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-300/30"
    />
    <p v-if="description" :id="descriptionId" class="mt-2 text-xs text-slate-400">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
const model = defineModel<string>({ required: true })
const inputId = useId()

const {
  description = '',
  label,
  maxlength = undefined,
  name,
  required = false,
  rows = 6,
} = defineProps<{
  description?: string
  label: string
  maxlength?: number
  name: string
  required?: boolean
  rows?: number
}>()

const descriptionId = `${inputId}-description`
</script>
