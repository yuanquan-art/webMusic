import { createStore } from 'vuex'

export default createStore({
  state: {
    // 搜索传递的歌曲名
    songsName:"123",
    // 获取点击歌曲时添加的歌曲列表
    musiclist: [],
    //用户信息
    loginForm :{
      phone: "15223683554",
      password: "yuanquan115337",
      avatarUrl: 'https://p3.music.126.net/NJLV-aUlIkti5SRqxjFDcA==/109951165859625179.jpg',
      nickname: '怨只怨人在风中-聚散不由我'
    },
  },
  mutations: {
    updateSongsName(state,State){
      state.songsName = State;
    },
    // 追加播放音乐
    addMusic(state,singleMusic){
      // for(let i=0;i<state.musiclist.length-1;i++){
      //   if(state.musiclist[i].name == singleMusic[i].name){
      //     return;
      //   }
      // }
      state.musiclist.push(singleMusic);
      let Value = JSON.parse(JSON.stringify(state.musiclist));
      state.musiclist = Value;
    }
  },
  actions: {
  },
  modules: {
  }
})
