<template>
  <div class="cart">
    <Navbar />
    <div class="container">
      <div class="row">
        <div class="col">
          <h2><strong>Cart</strong></h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Cart",
  components: {
    Navbar,
  },
};
</script>

<style>
</style>