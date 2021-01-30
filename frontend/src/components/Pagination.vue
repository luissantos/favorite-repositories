<template>
  <div>
    <b-button @click="change(repositories.page - 1)" v-if="repositories.page > 1" >&lt;</b-button>
    <b-button @click="change(repositories.page - 1)" v-else disabled >&lt;</b-button>
    <b-button @click="change(repositories.page + 1)" >&gt;</b-button>
  </div>
</template>

<script>
import store from '../store'
export default {
  name: 'Pagination',
  props: {
    
  },
  data() {
      return {
        repositories: store.state.repositories,
        change : (page) => {
            this.$emit('changed', page);
        }
      }
    }
}
</script>


<style scoped>
button {
  margin: 0 5px 0 5px;
}
</style>