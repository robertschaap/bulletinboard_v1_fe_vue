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
        <button id="loadcomments" class="wrapper">Load More Comments</button>
      </section>
    </main>
</template>

<script>
  import Comment from "./Comment"
  export default {
    name: "Comments",
    components: {
      Comment
    },
    data() {
      return {
        comments: [
          { 
            title: "Test",
            name: "Robert",
            body: "Mmtest",
            avatar: "logo"
          }, { 
            title: "Test",
            name: "Robert",
            body: "Mmtest",
            avatar: "logo"
          },
        ]
      }
    }
  }
</script>
