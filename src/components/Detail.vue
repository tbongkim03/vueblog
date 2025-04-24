<template>
  <div class="mt-4">
    <h4>상세페이지</h4>
    <!-- {{ 블로그글 }} -->
    <h5>{{ 블로그글[$route.params.id].title }}</h5>
    <P>{{ 블로그글[$route.params.id].content }}</P>
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
