<template>
  <div id="app">
    <b-button @click="refresh()" >Refresh</b-button>
    <RepositoryList @favorited="onFavorite" id="list" msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>

import RepositoryList from './components/RepositoryList.vue';
import RepositoryService from './services/RepositoryService'
import store from './store';
import GitHubClient from './api/GitHubClient'

export default {
  name: 'App',
  components: {
    RepositoryList
  },
  data: function() {
    return {
      onFavorite: (item,action)=>{
        console.log(item,action);
      },
      refresh : ()=> {

        const client = new GitHubClient();
        const service = new RepositoryService(client);
        service.getRepositories(1).then((d)=> {
          store.refresh(d);
        })
        
      }
    }
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 10px;
  text-align: left;
}

button {
  //float: left;
  margin-bottom: 10px;
}

#list {
  padding-top: 20px;
}
</style>
