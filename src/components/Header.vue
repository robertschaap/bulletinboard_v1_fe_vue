<template>
  <header>
    <div class="wrapper">
      <h1>Bulletin Board</h1>
      <nav>
        <a href="/writesomething">Write</a>
        <a href="/readsomething">Read</a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
  header {
    color: #fff;
    background: linear-gradient(to bottom, #336600 0%, #003399 100%);
    padding: 2rem 0rem;
    margin-bottom: 1rem;
    position: relative;
  }

  h1 {
    margin: 0;
    font-weight: 200;
    font-size: 3.5rem
  }

  nav {
    a {
      background-color: #ff9999;
      border-bottom: 2px solid #ff9999;
      padding: 0rem 0.5rem;
      text-decoration: none;
      color: #fff;

      &:hover {
        border-bottom: 2px solid #fff;
      }
    }
  }

  .wrapper {
    margin: 0 auto;
    width: 75%;
  }
</style>
