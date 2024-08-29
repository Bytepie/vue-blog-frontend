<script setup lang="ts">
import BarLogo from './BarLogo.vue';
// import { RouterLink, RouterView } from 'vue-router'
import GuestNav from './GuestNav.vue';

</script>

<template>
    <header>
        <nav
            class="rounded-b border-b border-gray-300 select-none bg-white font-semibold flex justify-between w-full mb-4 p-4">
            <BarLogo />
            <GuestNav />
        </nav>
    </header>
    <!-- <div class="mb-8 rounded overflow-hidden border border-gray-300"> -->
    <!-- <router-view v-slot="{ Component }" class="rounded overflow-hidden border border-gray-300">
        <transition name="fade-slide" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view> -->
    <!-- <router-view /> -->
    <!-- </div> -->
</template>