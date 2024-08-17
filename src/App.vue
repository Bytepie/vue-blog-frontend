<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import home from "@/views/home/home.vue";

</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <!-- <RouterView /> -->
  <div class="container">
    <div class="flex flex-row">
      <div class="flex-col">
        <router-link to="/">Home</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
      </div>
    </div>
    <RouterView />
  </div>


</template>
