<template>
  <div alt="" class="com_wrap wrapper">
    <div class="com_info">
      <img :src="'../static/'+ avatar + '.png'" width="100%" />
    </div>
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

<style lang="scss" scoped>
  .wrapper {
    margin: 0 auto;
    width: 75%;
  }

  .com_wrap {
    margin-bottom: 1rem;
    background-color: rgba(230,255,245,0.5);

    &:after {
      content: '';
      display: table;
      clear: both;
    }
  }

  .com_info {
    width: 120px;
    float: left;
    padding: 1rem;

    img {
      border-radius: 50%;
    }
  }

  .com_body {
    width: calc(100% - 120px);
    float: right;
    padding: 1rem;
    border-radius: 5px;

    h3 {
      margin: 0;
      font-weight: 400;
    }
    h4 {
      margin: 0;
      font-weight: 400;
      border-bottom: 1px solid #003399;
    }
  }
  
</style>
