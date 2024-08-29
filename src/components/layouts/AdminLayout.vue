<script setup lang="ts">
import BarLogo from './BarLogo.vue';
// import { RouterLink } from 'vue-router'
import AuthNav from './AuthNav.vue';

</script>

<template>

    <header>
        <nav
            class="rounded-b border-b border-gray-300 select-none bg-white font-semibold flex justify-between w-full mb-4 p-4">
            <BarLogo />
            <AuthNav />
        </nav>
    </header>

</template>