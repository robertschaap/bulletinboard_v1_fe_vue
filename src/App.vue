<template>
  <div id="app">

    <header>
      <div class="wrapper">
        <h1>Bulletin Board</h1>
        <nav>
          <a href="#">Write</a>
          <a href="#">Read</a>
        </nav>
      </div>
    </header>

    <Comments />
    
    <footer>
      <div class="wrapper">
        <p>Robert Schaap 2018</p>
      </div>
    </footer>

    <!-- <router-view/> -->
  </div>
</template>

<script>
import Comments from "./components/Comments"
export default {
  name: 'App',
  components: {
    Comments
  }
}
</script>

<style>

</style>
