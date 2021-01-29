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
import GitHubClient from './api/github.client'
import BackendClient from './api/backend.client'

const ghClient = new GitHubClient();
const beClient = new BackendClient();
const service = new RepositoryService(ghClient,beClient);



export default {
  name: 'App',
  components: {
    RepositoryList
  },
  data: function() {
    return {
      onFavorite: (item)=>{
        
        if(item.favorite){
          beClient.deleteFavorite(1,item.id).then( ()=> {
            store.setFavorite(item.id,!item.favorite);
          })
        }else{
          beClient.addFavorite(1,item.id).then(()=> {
            store.setFavorite(item.id,!item.favorite);
          });
        }

        
      },
      refresh : ()=> {
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
  margin-bottom: 10px;
}

#list {
  padding-top: 20px;
}
</style>
