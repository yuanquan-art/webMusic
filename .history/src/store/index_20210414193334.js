import { createStore } from 'vuex'

export default createStore({
  state: {
    // 搜索传递的歌曲名
    songsName:"123",
    // 获取点击歌曲时添加的歌曲
    
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
