<template>
  <div class="cart">
    <Navbar :updateKeranjang="carts" />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-transparent p-0">
              <li class="breadcrumb-item">
                <router-link to="/menu" class="text-dark">Menu</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/menu" class="text-dark"
                  >Menu order</router-link
                >
              </li>
              <li
                class="breadcrumb-item active font-weight-bold text-dark"
                aria-current="page"
              >
                Cart
                <!--({{ menu.nama }}) -->
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h2><strong>Cart</strong></h2>
          <div class="table-responsive mt-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Food</th>
                  <th scope="col">Food name</th>
                  <th scope="col">Notes</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Total price</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(cart, index) in carts" :key="index">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>
                    <img
                      :src="'img/' + cart.menu.gambar"
                      class="img-fluid shadow rounded"
                      width="250px"
                    />
                  </td>
                  <td>
                    <strong>{{ cart.menu.nama }}</strong>
                  </td>
                  <td>{{ cart.notes ? cart.notes : "-" }}</td>
                  <!-- <td v-if="cart.notes">{{ cart.notes }}</td>
                  <td v-else>No notes!</td> -->
                  <td>{{ cart.howMany }}</td>
                  <td>Rp. {{ cart.menu.harga }}</td>
                  <td>
                    <strong>Rp. {{ cart.menu.harga * cart.howMany }}</strong>
                  </td>
                  <td class="text-center text-danger">
                    <b-icon-trash
                      @click="deleteCart(cart.id)"
                      style="cursor: pointer"
                    ></b-icon-trash>
                  </td>
                </tr>
                <tr class="">
                  <td colspan="5" class="text-right">
                    <strong>Total harga:</strong>
                  </td>
                  <td colspan="3" class="text-center">
                    <strong>Rp. {{ countTotalPrice }}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- FORM Checkout -->
      <div class="row justify-content-end">
        <div class="col-lg-4">
          <form @submit.prevent>
            <div class="form-group">
              <label for="nama">Nama: </label>
              <input
                type="text"
                class="form-control"
                id="nama"
                v-model="order.nama"
              />
            </div>
            <div class="form-group">
              <label for="no-meja">Table number</label>
              <input
                type="number"
                class="form-control"
                id="no-meja"
                min="1"
                placeholder="-"
                v-model="order.nomorMeja"
              />
            </div>
            <button
              type="submit"
              class="btn btn-danger float-right"
              @click="checkout"
            >
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
  name: "Cart",
  watch: {
    $route: {
      handler: (to) => {
        document.title = to.meta.title || "Vueood";
      },
      immediate: true,
    },
  },
  components: {
    Navbar,
  },
  data: function () {
    return {
      carts: [],
      order: {},
    };
  },
  methods: {
    checkout() {
      if (this.order.nama && this.order.nomorMeja) {
        this.order.carts = this.carts;
        axios
          .post("http://localhost:3000/pesanans", this.order)
          .then(() => {
            // Proses delete isi keranjang setelah checkout
            this.carts.map((cart) => {
              axios
                .delete("http://localhost:3000/keranjangs/" + cart.id)
                // .then(confirm("You sure want to delete food?"))
                .catch((error) => console.log(error));
            });

            this.$router.push({ path: "/order-success" });
            console.log("ORDER", this.order);
            this.$toast.success("Your order udah sukses", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissable: true,
            });
          })
          .catch((error) => console.log(error));
      } else {
        this.$toast.error("Name and table number must be filled.", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissable: true,
        });
      }
      // console.log("pesan", this.order);
    },
    setCart(data) {
      this.carts = data;
    },
    deleteCart(id) {
      axios
        .delete("http://localhost:3000/keranjangs/" + id)
        // .then(confirm("You sure want to delete food?"))
        .then(() => {
          this.$toast.warning("Food deleted.", {
            type: "warning",
            position: "top-right",
            duration: 3000,
            dismissable: true,
          });
          // UPDATE DATA KERANJANG
          axios
            .get("http://localhost:3000/keranjangs")
            .then((response) => this.setCart(response.data))
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    },
  },
  mounted: function () {
    axios
      .get("http://localhost:3000/keranjangs")
      .then((response) => {
        this.setCart(response.data);
      })
      .catch((error) => console.log(error));
  },
  computed: {
    countTotalPrice() {
      return this.carts.reduce((sum, val) => {
        return sum + val.menu.harga * val.howMany;
      }, 0);
    },
  },
};
</script>

<style>
</style>