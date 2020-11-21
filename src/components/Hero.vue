<template>
  <div class="row mt-4">
    <div class="col">
      <div class="d-flex flex-column h-100 justify-content-center">
        <h2>
          <strong>Tasty healthy foody,</strong> is now available in Bekasi
        </h2>
        <p>Let's get it now and enjoy the quality of our foods!</p>
        <router-link to="/menu" class="btn btn-warning" style="width: 10rem"
          ><b-icon-chevron-double-right></b-icon-chevron-double-right> I'm
          hungry!</router-link
        >
      </div>
    </div>
    <div class="col">
      <img src="../assets/img/bg_hero.png" width="100%" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style></style>
