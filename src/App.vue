<template>
  <div id="app">

    <header>
      <div class="wrapper">
        <h1>Bulletin Board</h1>
        <nav>
          <a href="/writesomething">Write</a>
          <a href="/readsomething">Read</a>
        </nav>
      </div>
    </header>

    <router-view/>
    
    <footer>
      <div class="wrapper">
        <p>Robert Schaap 2018</p>
      </div>
    </footer>

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
