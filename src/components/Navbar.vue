<template>
  <div class="router">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Auth</a>
      <!-- <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor02"
        aria-controls="navbarColor02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>-->

      <div class="navbar-collapse nav-list" id="navbarColor02">
        <ul class="navbar-nav">
          <li class="nav-item" v-bind:class="{ active: boughtby == 'home' }">
            <router-link class="nav-link" to="/">
              Home
            </router-link>
          </li>
          <li class="nav-item" v-bind:class="{ active: boughtby == 'login' }">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item" v-bind:class="{ active: boughtby == 'signup' }">
            <router-link class="nav-link" to="/signup">Signup</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
  props: {
    boughtby: String,
  }
};
</script>

<style scoped>
@media screen and (max-width: 600px) {
  .nav-list {
    flex-direction: row;
    flex-wrap: nowrap;
  }
}
</style>