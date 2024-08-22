<script lang="ts">
import type { ErrorObject } from "@vuelidate/core";
import ErrorMessage from "@/components/ErrorMessage.vue";
const props = defineProps<{
  formErrors?: ErrorObject[];
  label: string;
  name: string;
  id: string;
  

}>();
</script>

<template>
  <div>
    <div class="flex flex-wrap items-center justify-between gap-2">
      <label for="name" class="block text-sm font-medium text-gray-700"
        >Name</label
      >
      <ErrorMessage :formErrors="props.formErrors"></ErrorMessage>
    </div>
    <input
      :class="{ error: props.formErrors.length }"
      v-model="registerInput.name"
      type="text"
      name="name"
      id="name"
      class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
    />
  </div>
</template>
