

export default {
  state: {
    repositories: {
        items: [
            //{ name: "react-tetris", login_name: 'chvin', repository_size: 4319, favorite: false },
        ]
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