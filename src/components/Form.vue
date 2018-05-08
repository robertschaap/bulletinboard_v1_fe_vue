<template>
  <main>
    <section id="commentform">
      <h2>Write Something</h2>

      <form
        v-on:submit.prevent="handleSubmit"
        id="postcomment"
        class="wrapper">
        <label>What's your name?:</label>
        <input type="text" v-model="form.name" />

        <label>Write a title (max 100 char):</label>
        <input type="text" v-model="form.title" />

        <label>Share your message:</label>
        <textarea type="text" v-model="form.body" />

        <label>Select an avatar:</label>
        <select v-model="form.avatar">
          <option value="bunny">A cute bunny</option>
          <option value="elephant">A fierce elephant</option>
          <option value="hippo">A loud hippo</option>
          <option value="hyena">A laughing hyena</option>
          <option value="kitty">A rofl-ing kitty</option>
          <option value="puppy">A bashful puppy</option>
          <option value="sheep">The master race</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </section>
  </main>
</template>

<script>
  export default {
    name: "Form",
    data() {
      return {
        form: {
          name: '',
          title: '',
          body: '',
          avatar: "bunny"
        }
      }
    },
    methods: {
      handleSubmit: function() {
        fetch(`/api/comment/new`, {
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(this.form)
        })
        .then(this.$router.push("/"))
      }
    }
  }
</script>

<style scoped>
  main {
    background-color: #33cc8f;
    padding: 2rem 0rem;
  }

  .wrapper {
    margin: 0 auto;
    width: 75%;
  }

  h2 {
    text-align: center;
    font-weight: 200;
    font-size: 2rem;
    margin-top: 0;
  }

  #postcomment {
    background-color: #e6e6ff;
    padding: 1rem;
    border-radius: 5px;
  }

  label, input, textarea, button, select {
    font-family: 'Avenir Next', 'Arial', sans-serif;
    display: block;
    border: none;
  }

  input, textarea, select {
    width: 100%;
    border-radius: 5px;
    margin-bottom: 0.5rem;
  }

  textarea {
    height: 150px;
    resize: none;
  }

  button {
    border: none;
    padding: 0.5rem;
    margin-top: 0.5rem;
    background-color: #fff;
    border-radius: 5px;
  }

</style>
