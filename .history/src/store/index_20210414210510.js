import { createStore } from 'vuex'

export default createStore({
  state: {
    // 搜索传递的歌曲名
    songsName:"123",
    // 获取点击歌曲时添加的歌曲列表
    musiclist: [
      {
        title: "讲真的",
        author: "曾惜",
        url: "http://music.163.com/song/media/outer/url?id=30987293.mp3",
        pic: "http://p1.music.126.net/cd9tDyVMq7zzYFbkr0gZcw==/2885118513459477.jpg?param=300x300",
        lrc:"[by:却连一句我爱你都不能说出口]\n[ti:讲真的]\n[ar:曾惜]\n[al:不要你为难]\n[by:冰城离殇]\n[00:00] 作曲 : 何诗蒙\n[00:01] 作词 : 黄然\n[00:18]今夜特别漫长\n[00:21]有个号码一直被存放\n[00:25]源自某种倔强\n[00:30]不舍删去又不敢想\n[00:33]明明对你念念不忘\n[00:37]思前想后愈发紧张\n[00:41]无法深藏\n[00:43]爱没爱过想听你讲\n[00:48]讲真的\n[00:51]会不会是我 被鬼迷心窍了\n[00:54]敷衍了太多 我怎么不难过\n[00:58]要你亲口说 别只剩沉默\n[01:03]或许你早就回答了我\n[01:06]讲真的\n[01:08]想得不可得 是最难割舍的\n[01:11]各自好好过 也好过一直拖\n[01:15]自作多情了 好吧我认了\n[01:19]至少能换来释怀洒脱\n[01:23]没丢失掉自我\n[01:42]今夜特别漫长\n[01:44]有个号码一直被存放\n[01:49]源自某种倔强\n[01:53]不舍删去又不敢想\n[01:57]明明对你念念不忘\n[02:01]思前想后愈发紧张\n[02:05]无法深藏\n[02:08]爱没爱过想听你讲\n[02:13]讲真的\n[02:15]会不会是我 被鬼迷心窍了\n[02:19]敷衍了太多 我怎么不难过\n[02:23]要你亲口说 别只剩沉默\n[02:27]或许你早就回答了我\n[02:30]讲真的\n[02:32]想得不可得 是最难割舍的\n[02:35]各自好好过 也好过一直拖\n[02:40]自作多情了 好吧我认了\n[02:44]至少能换来释怀洒脱\n[02:47]没丢失掉自我\n[03:04]讲真的\n[03:05]会不会是我 被鬼迷心窍了\n[03:09]敷衍了太多 我怎么不难过\n[03:14]要你亲口说 别只剩沉默\n[03:18]或许你早就回答了我\n[03:21]讲真的\n[03:22]想得不可得 是最难割舍的\n[03:26]各自好好过 也好过一直拖\n[03:30]自作多情了 好吧我认了\n[03:35]至少能换来释怀洒脱\n[03:38]没丢失掉自我\n"
     },
     {title: "",
      author: "Schweik.G",
      url: "",
      pic: "http://p4.music.126.net/SRZe0qt72bOgzTzG9uExdQ==/109951165670543466.jpg", lrc: "", …}
    ]
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
      let Value = JSON.parse(JSON.stringify(state.musiclist));
      state.musiclist = Value;
    }
  },
  actions: {
  },
  modules: {
  }
})
