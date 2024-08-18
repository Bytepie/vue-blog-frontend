<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import home from "@/views/home/home.vue";

</script>

<template>

  <div class="w-full h-screen">
    <header>
      <nav class="rounded-b border-b border-gray-300 select-none bg-gray-100 font-semibold flex justify-between w-full mb-4 p-4">
        <div class="flex gap-2 mr-4 items-center text-xl italic font-bold text-gray-700">
          <img alt="blog logo" class="" src="@/assets/logo.png" width="32" height="32" />
          <span>BLOGGING SPACE</span>
        </div>
       <div class="flex gap-4">
        <router-link to="/" class="p-2 overflow-hidden">Home</router-link>
        <router-link to="/login" class="p-2 overflow-hidden">Login</router-link>
        <router-link to="/register" class="p-2 overflow-hidden">Register</router-link>
       </div>
      </nav>
    </header>
   <div class="pb-8">
    <RouterView class="rounded overflow-hidden border border-gray-300" />
   </div>
  </div>


</template>


<!-- <header>

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
<!-- <RouterView /> -->