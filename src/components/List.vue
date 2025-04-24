<template>
  <div>
    <router-link to="/detail/0">
      <h5>{{ 블로그글[0].title }}</h5>
    </router-link>
    <p>{{ 블로그글[0].date }}</p>
  </div>
  <div>
    <router-link to="/detail/1">
      <h5>{{ 블로그글[1].title }}</h5>
    </router-link>
    <p>{{ 블로그글[1].date }}</p>
  </div>
  <div>
    <router-link to="/detail/2">
      <h5>{{ 블로그글[2].title }}</h5>
    </router-link>
    <p>{{ 블로그글[2].date }}</p>
  </div>
</template>

<script>
export default {
  props: {
    블로그글: Array,
  },
}
</script>

<style></style>
