<template>
  <div class="hero">
    <!-- Desktop -->
    <section class="d-none d-lg-block">
      <div class="row mt-4">
        <div class="col-12 col-lg-6">
          <div class="d-flex flex-column h-100 justify-content-center">
            <h2>
              <strong>{{ strongTitle }}</strong
              >{{ sideTitle }}
            </h2>
            <p>Let's get it now and enjoy the quality of our foods!</p>
            <router-link
              to="/menu"
              class="btn btn-warning text-white"
              style="width: 10rem"
              ><b-icon-chevron-double-right></b-icon-chevron-double-right> I'm
              hungry!</router-link
            >
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <img src="@/assets/img/bg_hero.png" width="100%" />
        </div>
      </div>
    </section>
    <!-- Mobile -->
    <section class="d-lg-none d-sm-block">
      <div class="row mt-4">
        <div class="col-12 col-lg-6">
          <img src="@/assets/img/bg_hero.png" width="100%" />
        </div>
        <div class="col-12 col-lg-6">
          <div
            class="d-flex flex-column h-100 justify-content-center align-items-center mt-4"
          >
            <h2 class="text-center">
              <strong>{{ strongTitle }}</strong
              >{{ sideTitle }}
            </h2>
            <p class="text-center">
              Let's get it now and enjoy the quality of our foods!
            </p>
            <router-link
              to="/menu"
              class="btn btn-warning text-white"
              style="width: 10rem"
              ><b-icon-chevron-double-right></b-icon-chevron-double-right> I'm
              hungry!</router-link
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      strongTitle: "Tasty healthy foody,",
      sideTitle: "is now available in Bekasi",
    };
  },
};
</script>

<style></style>
