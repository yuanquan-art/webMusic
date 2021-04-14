import { createStore } from 'vuex'

export default createStore({
  state: {
    songsName:"123"
  },
  mutations: {
    updateSongsName(state,State){
      state.songsName = State;
    }
    
  },
  actions: {
  },
  modules: {
  }
})
