<template>
  <div class="container" style="text-align: center;">
    <h1>CRUD Local com Vue 3</h1>
    <UserList />
  </div>
</template>

<script setup>
import UserList from "./components/UserList.vue";
</script>

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>