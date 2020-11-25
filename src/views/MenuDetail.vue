<template>
  <div>
    <Navbar />
    <h1>Menu detail {{ $route.params.id }}</h1>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "MenuDetail",
  components: {
    Navbar,
  },
};
</script>

<style>
</style>