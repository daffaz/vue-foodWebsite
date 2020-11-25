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
                Menu order ({{ menu.nama }})
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <!-- Content -->
      <div class="row mt-2">
        <div class="col-lg-6">
          <img
            :src="'../img/' + menu.gambar"
            class="img-fluid shadow rounded"
          />
        </div>
        <div class="col-lg-6">
          <h2>
            <strong>{{ menu.nama }}</strong>
          </h2>
          <hr />
          <h4>
            Price: <strong class="text-danger">Rp. {{ menu.harga }}</strong>
          </h4>
          <p class="text-secondary mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, vero! Earum placeat non deserunt autem?
          </p>
          <form action="">
            <div class="form-group">
              <label for="pesanan">Quantity</label>
              <input
                type="number"
                class="form-control w-50"
                id="pesanan"
                placeholder="1"
              />
            </div>
            <div class="form-group">
              <label for="keterangan">Add some notes here</label>
              <textarea
                class="form-control"
                id="keterangan"
                placeholder='example "make it spicy" '
              ></textarea>
            </div>
            <button type="submit" class="btn btn-danger">
              <b-icon-cart-check-fill></b-icon-cart-check-fill> Order
            </button>
          </form>
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