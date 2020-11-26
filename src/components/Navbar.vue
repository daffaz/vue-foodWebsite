<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <a class="navbar-brand" href="/">
          <div class="logo bg-warning font-weight-bold p-2 px-3 rounded-pill">
            Logo
          </div>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/menu">Menu</router-link>
            </li>
          </ul>

          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/keranjang">
                Cart <b-icon-cart></b-icon-cart>
                <span class="badge badge-warning ml-2 text-white">{{
                  counter.length
                }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <!-- End of container -->
    </nav>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Navbar",
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
