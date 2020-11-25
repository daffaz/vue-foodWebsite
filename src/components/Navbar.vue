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
                <span class="badge badge-warning ml-2">0</span>
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
export default {
  name: "Navbar",
};
</script>

<style></style>
