<template>
  <main>
    <section id="commentform">
      <h2>Write Something</h2>

      <form v-on:submit.prevent="handleSubmit" id="postcomment" class="wrapper">
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
        console.log("handlesubmit", this.form)
      }
    }
  }
</script>
