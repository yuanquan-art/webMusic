import { createStore } from 'vuex'

export default createStore({
  state: {
    songsName:"123"
  },
  mutations: {
    updateSongsName(state,State){
      store._state.data.songsName = State;
    }
    
  },
  actions: {
  },
  modules: {
  }
})
