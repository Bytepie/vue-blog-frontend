<script lang="ts" setup>
import { defineEmits } from 'vue';
import { onMounted } from 'vue';

const emit = defineEmits<{ (event: 'updateTitle', value: string): void }>();
const sendValue = () => {
    emit('updateTitle', 'Register: Welcome to Our Blog!');
};

onMounted(() => {
    sendValue();
});

</script>

<template>
    <form action="" class="mt-8 grid grid-cols-6 gap-6">
        <div class="col-span-6">
            <label for="" class="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" name="name" id=""
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm">
        </div>
        <div class="col-span-6">
            <label for="" class="block text-sm font-medium text-gray-700">Email</label>
            <input type="text" name="email" id=""
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm">
        </div>
        <div class="col-span-6">
            <label for="" class="block text-sm font-medium text-gray-700">Password</label>
            <input type="text" name="password" id=""
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm">
        </div>

        <div class="col-span-6">
            <label for="MarketingAccept" class="flex gap-4">
                <input type="checkbox" id="MarketingAccept" name="marketing_accept"
                    class="size-5 rounded-md border-gray-200 bg-white shadow-sm" />

                <span class="text-sm text-gray-700">
                    I want to receive emails about events, product updates and company announcements.
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
            <button
                class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                Create an account
            </button>

            <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                Already have an account?
                <a href="#" class="text-gray-700 underline">Log in</a>.
            </p>
        </div>
    </form>
</template>