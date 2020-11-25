<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2><strong>Menus</strong></h2>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Search that delicious food in our menu..."
              aria-label="Search your favorite foods"
              aria-describedby="basic-addon1"
              @keyup="searchFood"
            />
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1"
                ><b-icon-search></b-icon-search
              ></span>
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-lg-4" v-for="menu in foods" :key="menu.id">
          <CardMenu :menu="menu" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import CardMenu from "@/components/CardMenu.vue";
import axios from "axios";

export default {
  name: "Menu",
  components: {
    Navbar,
    CardMenu,
  },
  data() {
    return {
      foods: [],
      search: "",
      cart: 0,
    };
  },
  methods: {
    setMenu(data) {
      this.foods = data;
    },
    searchFood() {
      axios
        .get("http://localhost:3000/menus?q=" + this.search)
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
  },
  mounted() {
    axios
      .get("http://localhost:3000/menus")
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

<style></style>
