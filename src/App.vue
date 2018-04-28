<template>
  <div id="app">

    <Header />
    <router-view/>
    <Footer />

  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
  @import './assets/css/normalize.css';

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0 auto;
    background-color: #ff9999;
    font-family: 'Avenir Next', 'Arial', sans-serif;
  }
  
</style>
