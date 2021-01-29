<template>
  <div>
    <b-table striped hover :fields="fields" :items="repositories.items">
   
    <template #cell(favorite)="data">
      <b-link v-if="data.item.favorite" @click="toggle(data)" href="#">
        <b-icon-star-fill />
      </b-link>
      <b-link v-else @click="toggle(data)" href="#">
        <b-icon-star />
      </b-link>
      </template>

    </b-table>
  </div>
</template>

<script>
import store from '../store'
export default {
  name: 'RepositoryList',
  props: {
    msg: String
  },
  data() {
      return {
        fields: [ "name","login_name","repository_size","favorite" ],
        repositories: store.state.repositories,
        toggle: (row) => {
          this.$emit('favorited', row.item);
        }
      }
    }
}
</script>


<style scoped>
a {
  color: #42b983;
}
</style>