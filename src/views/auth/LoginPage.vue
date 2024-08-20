<script lang="ts" setup>
import { defineEmits } from "vue";
import { onMounted, ref } from "vue";
import type { Ref } from "vue";
import type { LoginCredentials } from "@/types/auth";
const emit = defineEmits<{ (event: "updateTitle", value: string): void }>();
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
</script>

<template>
  <!-- {{ loginInput }} -->
  <form action="" class="mt-8 grid grid-cols-6 gap-6">
    <div class="col-span-6">
      <label for="" class="block text-sm font-medium text-gray-700"
        >Email</label
      >
      <input
        v-model="loginInput.email"
        type="email"
        name="email"
        id="email"
        class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
      />
    </div>
    <div class="col-span-6">
      <label for="" class="block text-sm font-medium text-gray-700"
        >Password</label
      >
      <input
        v-model="loginInput.password"
        type="password"
        name="password"
        id="password"
        class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
      />
    </div>

    <div class="col-span-6 w-full">
      <label for="MarketingAccept" class="flex gap-4">
        <input
          type="checkbox"
          id="MarketingAccept"
          name="marketing_accept"
          class="size-5 rounded-md border-gray-200 bg-white shadow-sm"
        />

        <span class="text-sm text-gray-700"> Remember me </span>
      </label>
    </div>

    <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
      <button
        type="submit"
        class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
      >
        Login
      </button>

      <p class="mt-4 text-sm text-gray-500 sm:mt-0">
        Don't have an account?
        <router-link to="/register" class="text-gray-700 underline"
          >Sign up here</router-link
        >
      </p>
    </div>
  </form>
</template>
