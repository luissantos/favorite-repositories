<template>
  <div>
    <b-table striped hover :fields="fields" :items="repositories.items">
   
    <template #cell(favorite)="data">
      <a v-if="data.favorite" @click="setFavorite(data)" href="#">
        <b-icon-star-fill />
      </a>
        
      <a v-if="!data.favorite" @click="deleteFavorite(data)" href="#">
        <b-icon-star />
      </a>
      </template>

    </b-table>
  </div>
</template>

<script>
//import GitHubClient from '../api/GitHubClient'
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
        setFavorite: (item) => {
           this.$emit('favorited', item,"set")
        },
        deleteFavorite: (item) => {
          this.$emit('favorited', item,"deleted")
        }
      }
    }
}
</script>


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