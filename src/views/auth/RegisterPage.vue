<script lang="ts" setup>
// import { defineEmits } from "vue";
import { onMounted, ref } from "vue";
import type { Ref } from "vue";
import type { RegisterCredentials } from "@/types/auth";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import InputField from '@/components/InputField.vue';

const emit = defineEmits<{ (event: "updateTitle", value: string): void }>();

const sendValue = () => {
    emit("updateTitle", "Register: Welcome to Our Blog!");
};

onMounted(() => {
    sendValue();
});

const rules = {
    name: { required, minLength: minLength(3) },
    email: { required, email },
    password: { required, minLength: minLength(6) },
};

const registerInput: Ref<RegisterCredentials> = ref({
    name: "",
    email: "",
    password: "",
});

const v$ = useVuelidate(rules, registerInput);

const registerUser = (): void => {
    const result = v$.value.$validate();
    if (!result) return;
};
</script>

<template>
    <div>
        {{ registerInput }}
        <form action="" class="mt-8 grid grid-cols-6 gap-6" @submit.prevent="registerUser()">
            <div class="col-span-6">
                <InputField label="Name" :form-errors="v$.name.$errors" v-model="registerInput.name" name="name"
                    id="name" type="text">
                </InputField>
            </div>
            <div class="col-span-6">
                <InputField label="Email" :form-errors="v$.email.$errors" v-model="registerInput.email" name="email"
                    id="email" type="text">
                </InputField>
            </div>
            <div class="col-span-6">
                <InputField label="Password" :form-errors="v$.password.$errors" v-model="registerInput.password"
                    name="password" id="password" type="password">
                </InputField>
            </div>

            <div class="col-span-6">
                <label for="MarketingAccept" class="flex gap-4">
                    <input type="checkbox" id="MarketingAccept" name="marketing_accept"
                        class="size-5 rounded-md border-gray-200 bg-white shadow-sm" />

                    <span class="text-sm text-gray-700">
                        I want to receive emails about events, product updates and company
                        announcements.
                    </span>
                </label>
            </div>

            <div class="col-span-6">
                <p class="text-sm text-gray-500">
                    By creating an account, you agree to our
                    <a href="#" class="text-gray-700 underline"> terms and conditions </a>
                    and
                    <a href="#" class="text-gray-700 underline">privacy policy</a>.
                </p>
            </div>

            <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button type="submit"
                    class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                    Create an account
                </button>

                <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?
                    <router-link to="/login" class="text-gray-700 underline">Log in</router-link>.
                </p>
            </div>
        </form>
    </div>
</template>
