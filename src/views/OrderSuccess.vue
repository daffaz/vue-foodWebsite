<template>
  <div>
    <Navbar />
    <div class="container">
      <div
        class="text-center mt-4"
        v-for="cart in carts.slice(-1)"
        :key="cart.id"
      >
        <img src="@/assets/img/barbec.svg" class="w-25 mb-5" />
        <h2><strong>Nice!!</strong> {{ cart.nama }}</h2>
        <h4>
          Your order is coming before you know it <br />Please wait while we
          cooked it
        </h4>
        <div class="float-right">
          <router-link class="nav-link" to="/"
            >Go back to home menu</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "OrderSuccess",
  data: function () {
    return {
      carts: {},
    };
  },
  components: {
    Navbar,
  },
  watch: {
    $route: {
      handler: (to) => {
        document.title = to.meta.title || "Vueood";
      },
      immediate: true,
    },
  },
  methods: {
    setData(data) {
      this.carts = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/pesanans")
      .then((response) => {
        this.setData(response.data);
        console.log("cart", this.carts.nama);
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>