<script lang="ts" setup>
import { defineEmits } from "vue";
import { onMounted, ref } from "vue";
import type { Ref } from "vue";
import type { LoginCredentials } from "@/types/auth";
const emit = defineEmits<{ (event: "updateTitle", value: string): void }>();
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import InputField from "@/components/InputField.vue";

const sendValue = () => {
  emit("updateTitle", "Login: Welcome Back!");
};

onMounted(() => {
  sendValue();
});


const loginInput: Ref<LoginCredentials> = ref({
  email: "",
  password: "",
});

const rules = {
  email: { required, email },
  password: { required, minLength: minLength(6) },
};

const v$ = useVuelidate(rules, loginInput);

const LoginUser = (): void => {
  const result = v$.value.$validate();
  if (!result) return;
};

</script>

<template>
  <!-- {{ loginInput }} -->
  <form action="" @submit.prevent="LoginUser" class="mt-8 grid grid-cols-6 gap-6">
    <div class="col-span-6">
      <InputField label="Email" :form-errors="v$.email.$errors" v-model="loginInput.email" name="email" id="email"
        type="text">
      </InputField>
    </div>
    <div class="col-span-6">
      <InputField label="Password" :form-errors="v$.password.$errors" v-model="loginInput.password" name="password"
        id="password" type="password">
      </InputField>
    </div>

    <div class="col-span-6 w-full">
      <label for="MarketingAccept" class="flex gap-4">
        <input type="checkbox" id="MarketingAccept" name="marketing_accept"
          class="size-5 rounded-md border-gray-200 bg-white shadow-sm" />

        <span class="text-sm text-gray-700"> Remember me </span>
      </label>
    </div>

    <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
      <button type="submit"
        class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
        Login
      </button>

      <p class="mt-4 text-sm text-gray-500 sm:mt-0">
        Don't have an account?
        <router-link to="/register" class="text-gray-700 underline">Sign up here</router-link>
      </p>
    </div>
  </form>
</template>
