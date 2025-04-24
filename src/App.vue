<template>
  <!-- 오늘의 5분 숙제 : 
    
      App.vue를 블로그 메인페이지스럽게 대충 꾸며옵시다. -->
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <!-- <a class="navbar-brand" href="#"> -->
      <router-link to="/" class="navbar-brand">탱로그</router-link>
      <!-- </a> -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <!-- <a class="nav-link active" aria-current="page" href="#"> -->
          <router-link to="/list" class="nav-link active" aria-current="page">게시글</router-link>
          <!-- </a> -->
          <a class="nav-link" href="#">갤러리</a>
          <a class="nav-link" href="#">마이페이지</a>
        </div>
      </div>
    </div>
  </nav>

  <!-- <div class="container mt-4">
        <h5>개발 블로그 입니다.</h5>
        <p>- Vue로 만들었음 -</p>
    </div> -->

  <router-view :블로그글="블로그글"></router-view>

  <!-- <List :블로그글="블로그글" /> 가 보이게 됨-->
</template>

<script>
import { setBlockTracking } from 'vue'
import Detail from './components/Detail.vue'
import Home from './components/Home.vue'
import List from './components/List.vue'

import blog from './assets/blog'

export default {
  data() {
    return {
      블로그글: blog,
    }
  },
  components: {
    Home,
    List,
    Detail,
  },
}
</script>

<style></style>
