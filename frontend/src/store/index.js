

export default {
  state: {
    repositories: {
        items: {}
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
  }


};