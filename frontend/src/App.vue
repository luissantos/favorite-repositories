<template>
  <div id="app">
    <b-button @click="changePage(1)">Refresh List</b-button>
    <Pagination id="pagination" @changed="changePage" />
    <RepositoryList id="list" @favorited="onFavorite" />
  </div>
</template>

<script>
import RepositoryList from "./components/RepositoryList.vue";
import Pagination from "./components/Pagination.vue";
import RepositoryService from "./services/repository.service";
import store from "./store";
import GitHubClient from "./api/github.client";
import BackendClient from "./api/backend.client";

const ghClient = new GitHubClient();
const beClient = new BackendClient();
const service = new RepositoryService(ghClient, beClient);

export default {
  name: "App",
  components: {
    RepositoryList,
    Pagination,
  },
  mounted() {
    this.changePage(1);
  },
  data: function () {
    return {
      changePage: (page) => {
        service.getRepositories(page).then((d) => {
          store.refresh(d);
          store.setPage(page);
        });
      },
      onFavorite: (item) => {
        const toggleFavorite = item.favorite
          ? beClient.deleteFavorite
          : beClient.addFavorite;
        

        toggleFavorite(1, item.id).then(() => {
          store.setFavorite(item.id, !item.favorite);
        });
      },
    };
  },
};
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

#pagination {
  float: right;
}

#list {
  padding-top: 20px;
}
</style>
