<script lang="ts" setup>
import type { ErrorObject } from "@vuelidate/core";
import ErrorMessage from "@/components/ErrorMessage.vue";
// import { defineProps, defineEmits, useAttrs } from 'vue';

const props = defineProps<{
  formErrors?: ErrorObject[];
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
      <ErrorMessage :formErrors="props.formErrors"></ErrorMessage>
    </div>
    <input :id="id" :name :value="modelValue" @input="onInput" :class="{ error: props.formErrors.length }"
      class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
  </div>
</template>


<!-- <template>
  <div>
    <div class="flex flex-wrap items-center justify-between gap-2">
      <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
      <ErrorMessage :formErrors="props.formErrors"></ErrorMessage>
    </div>
    <input :class="{ error: props.formErrors.length }" v-model="registerInput.name" type="text" name="name" id="name"
      class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
  </div>
</template> -->