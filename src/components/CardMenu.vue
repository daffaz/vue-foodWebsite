<template>
  <div class="card shadow mb-4">
    <img :src="'/img/' + menu.gambar" class="card-img-top" />
    <div class="card-body text-center">
      <p class="text-danger font-weight-bold">Harga : Rp. {{ menu.harga }}</p>
      <h4>
        {{ menu.nama }}
      </h4>
      <router-link
        :to="'/menu/' + menu.id"
        class="mt-5 btn btn-outline-danger btn-lg btn-block"
        ><b-icon-cart3></b-icon-cart3> Order</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "CardMenu",
  props: ["menu"],
};
</script>
<style></style>
