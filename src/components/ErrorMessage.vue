<script lang="ts" setup>
import type { ErrorObject } from "@vuelidate/core";

const props = defineProps<{
  formErrors: ErrorObject[] | undefined;
}>();
</script>

<template>
  <div class="text-red-600 text-xs font-semibold float-right" v-for="error of props.formErrors" :key="error.$uid">
    <div class="error-msg">{{ error.$message }}</div>
  </div>
</template>
