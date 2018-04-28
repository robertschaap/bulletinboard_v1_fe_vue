<template>
    <main>
      <section id="comments">
        <h2>Read Something</h2>
        <select id="sortbtn">
            <option value="desc">Newest First</option>
            <option value="asc">Oldest First</option>
        </select>

        <Comment
          v-for="entry in comments"
          :key=entry.id
          :title=entry.title
          :name=entry.name
          :body=entry.body
          :avatar=entry.avatar />

      </section>

      <section>
        <button
          v-on:click="loadData"
          id="loadcomments"
          class="wrapper">
          Load More Comments
        </button>
      </section>
    </main>
</template>

<script>
  import Comment from "@/components/Comment"

  export default {
    name: "Comments",
    components: {
      Comment
    },
    data() {
      return {
        comments: [],
        sortDirection: "desc",
        offset: 0
      };
    },
    created() {
      this.loadData();
    },
    methods: {
      loadData() {
        let { offset, sortDirection } = this;

        fetch(`/api/comment?offset=${offset}&sort=${sortDirection}`)
        .then(res => res.json())
        .then(data => {
          this.comments = [
            ...this.comments,
            ...data
          ]
          this.offset += 4;
        });
      }
    }
  }
</script>

<style scoped>
  main {
    background-color: #33cc8f;
    padding: 2rem 0rem;
  }
  
  h2 {
    text-align: center;
    font-weight: 200;
    font-size: 2rem;
    margin-top: 0;
  }

  .wrapper {
    margin: 0 auto;
    width: 75%;
  }

  button, select {
    font-family: 'Avenir Next', 'Arial', sans-serif;
    display: block;
    border: none;
  }

  button {
    border: none;
    padding: 0.5rem;
    margin-top: 0.5rem;
    background-color: #fff;
    border-radius: 5px;
  }

  #sortbtn {
    margin: 1rem auto;
    width: 25%;
    text-align: center;
  }
</style>
