import { createStore } from 'vuex'

export default createStore({
  state: {
    // 搜索传递的歌曲名
    songsName:"123",
    // 获取点击歌曲时添加的歌曲列表
    musiclist: []
  },
  mutations: {
    updateSongsName(state,State){
      state.songsName = State;
    },
    // 追加播放音乐
    addMusic(state,singleMusic){
      for(let i=0;i<state.musiclist.length-1;i++){
        if(state.musiclist[i].name == singleMusic[i].name){
          return;
        }
      }
      state.musiclist.push(singleMusic);
    }
  },
  actions: {
  },
  modules: {
  }
})
