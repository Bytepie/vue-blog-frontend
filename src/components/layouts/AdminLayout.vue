<script setup lang="ts">
import BarLogo from './BarLogo.vue';
// import { RouterLink } from 'vue-router'
import AuthNav from './AuthNav.vue';

</script>

<template>

    <div class="flex gap-2 w-full flex-col mb-2">
        <header>
            <nav
                class="rounded-b border-b border-blue-200 select-none bg-white font-semibold flex justify-between w-full mb-4 p-4">
                <BarLogo />
                <AuthNav />
            </nav>
        </header>
        <div class="p-2 md:p-4">
            <router-view></router-view>
        </div>

    </div>



</template>