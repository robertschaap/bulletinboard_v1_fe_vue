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

    <main>
      <section id="comments">
        <h2>Read Something</h2>
        <select id="sortbtn">
            <option value="desc">Newest First</option>
            <option value="asc">Oldest First</option>
        </select>

        <div alt="" class="com_wrap wrapper">
          <div class="com_info"><img src="./assets/logo.png" width="100%" /></div>
          <div class="com_body">
            <h3>Title</h3>
            <h4>Name</h4>
            <p>Body</p>
          </div>
        </div>
        
      </section>

      <section>
        <button id="loadcomments" class="wrapper" onClick={this.loadMoreComments}>Load More Comments</button>
      </section>
    </main>

    <footer>
      <div class="wrapper">
        <p>Robert Schaap 2018</p>
      </div>
    </footer>

    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
