<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="transparent">
      <div class="container">
        <b-navbar-brand href="/" class="bg-warning text-white rounded px-1"
          ><strong>Logo</strong></b-navbar-brand
        >

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item
              ><router-link class="nav-link" to="/"
                >Home</router-link
              ></b-nav-item
            >
            <b-nav-item
              ><router-link class="nav-link" to="/menu"
                >Menu</router-link
              ></b-nav-item
            >
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <router-link class="nav-link" to="/cart">
              Cart <b-icon-cart></b-icon-cart>
              <span class="badge badge-warning ml-2 text-white">{{
                updateKeranjang ? updateKeranjang.length : counter.length
              }}</span>
            </router-link>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Navbar",
  props: ["updateKeranjang"],
  data() {
    return {
      counter: [],
    };
  },
  methods: {
    setCounter(data) {
      this.counter = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/keranjangs/")
      .then((response) => {
        // SAAT SUKSES / BERHASIL
        this.setCounter(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // SAAT GAGAL / ERROR
        console.log("Error", error);
      });
  },
};
</script>

<style></style>
