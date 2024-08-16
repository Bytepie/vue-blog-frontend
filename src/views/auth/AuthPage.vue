<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="container">
        <div class="flex flex-row">
            <div class="flex-col">
                <router-link to="/login">Login</router-link>
                <router-link to="/register">Register</router-link>
            </div>
            <RouterView />
        </div>
    </div>
</template>
