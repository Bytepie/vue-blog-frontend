<script lang="ts" setup>
import type { ErrorObject } from "@vuelidate/core";
import ErrorMessage from "@/components/ErrorMessage.vue";
// import { defineProps, defineEmits, useAttrs } from 'vue';

const props = defineProps<{
  formErrors?: ErrorObject[] | any;
  modelValue: string | number;
  label?: string;
  id?: string;
  type?: string;
  placeholder?: string;
  name?: string;
  diabled?: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void;
}>();

// const attrs = useAttrs(); // Passing down the attributes to input element

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
}

</script>


<template>
  <div>
    <div class="flex flex-wrap items-center justify-between gap-2">
      <label v-if="label" :for="id" class="block text-sm font-medium text-gray-700">{{ label }}</label>
      <ErrorMessage v-if="props.formErrors" :formErrors="props.formErrors"></ErrorMessage>
    </div>
    <input :id :type :name :value="modelValue" @input="onInput" :class="{ error: props.formErrors.length }"
      class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
  </div>
</template>
