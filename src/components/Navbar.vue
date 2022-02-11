<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <router-link to="/" class="navbar-brand" @click.prevent
      >BLOG VUE</router-link
    >

    <div class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link to="/home" class="nav-link">
          <font-awesome-icon icon="home" />
          <span class="d-none d-sm-inline">Home</span>
        </router-link>
      </li>
    </div>

    <div class="navbar-nav ml-auto">
      <li class="nav-item">
        <router-link to="/register" class="nav-link" v-if="!user">
          <font-awesome-icon icon="user-plus" /> Sign Up
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/login" class="nav-link" v-if="!user">
          <font-awesome-icon icon="sign-in-alt" /> Login
        </router-link>
      </li>
    </div>

    <div class="navbar-nav ml-auto" v-if="user">
      <div class="nav-item">
        <router-link to="/login" class="nav-link">
          <font-awesome-icon icon="sign-in-alt" />
          <span class="d-none d-sm-inline">Logout</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    user() {
      return this.$store.state.account.user;
    },
  },
};
</script>

<style></style>
