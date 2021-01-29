<template>
    <b-table striped hover :items="items"></b-table>
</template>

<script>
export default {
  name: 'RepositoryList',
  props: {
    msg: String
  },
  data() {
      return {
        items: [
          { name: "react-tetris", login_name: 'chvin', repository_size: 4319, favorite: false },
        ]
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>