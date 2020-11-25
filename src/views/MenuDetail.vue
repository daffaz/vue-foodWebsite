<template>
  <div class="menu-detail">
    <Navbar />
    <div class="container">
      <div class="row mt-5">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-transparent p-0">
              <li class="breadcrumb-item">
                <router-link to="/menu" class="text-dark">Menu</router-link>
              </li>
              <li
                class="breadcrumb-item active font-weight-bold text-dark"
                aria-current="page"
              >
                Menu order
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <!-- Content -->
      <div class="row">
        <div class="col-lg-6">
          <img :src="'../img/' + menu.gambar" />
        </div>
        <div class="col-lg-6 text-center">
          <h2>
            <strong>{{ menu.nama }}</strong>
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "MenuDetail",
  components: {
    Navbar,
  },
  data() {
    return {
      menu: {},
    };
  },
  methods: {
    setMenu(data) {
      this.menu = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/menus/" + this.$route.params.id)
      .then((response) => {
        // handle success
        this.setMenu(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log("Error", error);
      });
  },
};
</script>

<style>
</style>