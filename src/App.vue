<template>
    <!-- 오늘의 5분 숙제 : 
    
      App.vue를 블로그 메인페이지스럽게 대충 꾸며옵시다. -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">탱로그</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="#">게시글</a>
                    <a class="nav-link" href="#">갤러리</a>
                    <a class="nav-link" href="#">마이페이지</a>
                </div>
            </div>
        </div>
    </nav>

    <div class="container mt-4">
        <h5>개발 블로그 입니다.</h5>
        <p>- Vue로 만들었음 -</p>
    </div>

    <List :블로그글="블로그글" />

</template>

<script>

import List from './List.vue';
import blog from './assets/blog';

export default {
    name: 'App',
    data() {
      return {
        블로그글 : blog,
      }
    },
    components: {
      List,
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smooting: antialiased;
    -moz-osx-font-smooting: grayscale;
    text-align: center;
    color: 2c3e50;
}
</style>