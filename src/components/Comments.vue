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
        <button v-on:click="loadData" id="loadcomments" class="wrapper">Load More Comments</button>
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

