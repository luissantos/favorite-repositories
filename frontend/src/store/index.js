

export default {
  state: {
    repositories: {
        items: [],
        page: 1
    }

  },
  refresh(items){
   this.state.repositories.items = items;
  },
  
  setFavorite(id,val){
    this.state.repositories.items.forEach( (item) => {
        if(item.id === id){
            item.favorite = val;
        }
    })
  },
  setPage(page){
    this.state.repositories.page = page;
  }
};