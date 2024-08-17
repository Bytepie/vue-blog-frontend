<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import AuthPage from "@/views/auth/AuthPage.vue";

</script>

<template>
    <!-- <AuthPage /> -->
    <h1>Welcome to My site</h1>
    <router-link to="authpage">Go to Auth</router-link>
    <router-view></router-view>
</template>
