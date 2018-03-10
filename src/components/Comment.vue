<template>
  <div alt="" class="com_wrap wrapper">
    <div class="com_info"><img :src="'../static/'+ avatar + '.png'" width="100%" /></div>
    <div class="com_body">
      <h3>{{ title }}</h3>
      <h4>{{ name }}</h4>
      <p>{{ body }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Comment",
    props: [
      'title',
      'name',
      'body',
      'avatar'
    ]
  }
</script>
