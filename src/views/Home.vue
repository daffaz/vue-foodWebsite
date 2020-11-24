<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <Hero />
      <div class="row mt-5 mb-4">
        <div class="col">
          <h2>Favorite <strong>menu</strong> today</h2>
        </div>
        <div class="col">
          <router-link to="/menu" class="btn btn-warning text-white float-right"
            ><b-icon-eye></b-icon-eye> View more</router-link
          >
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-lg-4 my-4" v-for="menu in menus" :key="menu.id">
          <CardMenu :menu="menu" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import CardMenu from "@/components/CardMenu.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    CardMenu,
  },
  data() {
    return {
      menus: [],
    };
  },
  methods: {
    setMenu(data) {
      this.menus = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/best-menu")
      .then((response) => {
        // handle success
        this.setMenu(response.data);
        console.log(response.data);
      })
      .catch(function(error) {
        // handle error
        console.log("Error", error);
      });
  },
};
</script>
