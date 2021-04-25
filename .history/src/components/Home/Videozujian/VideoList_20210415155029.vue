<template>
  <div>
    <div class="gedanParent">
      <div>
        <!-- 热门歌单分类 -->
        <div id="remenMusicListGategory">
          <div>
            <!-- Tabs标签切换 -->
             <!-- 网友精选碟展示 -->
                <div class="tjmusic">
                  <div
                    class="musicList"
                    v-for="(item,index) in spanData.datas"
                    :key="index"
                  >
                    <img :src="item.coverUrl" alt="" />
                    <span>{{ item.name }}</span>
                  </div>
                </div>
            <span></span>
          </div>
        </div>
      </div>

 <!-- 分页 -->
        <div class="fenye">
             <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="netFriengdsSpecilMusicPages.total">
    </el-pagination>
        </div>

    </div>
  
    <br>
    <br>
     <br>
      <br>
       <br>
        <br>
         <br>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Tabs激活默认
      activeName: "华语",
      // 热门歌单分类列表
      hotMusicListGategroy: [],
      // 获取网友精选碟
      netFriengdsSpecilMusic: [],
      // 网友精选碟分页对象
      netFriengdsSpecilMusicPages: {
        page: 10,
        pageSize: 100,
        total: 1000,
        offset: 1
      },
       //获取视频标签/分类下的视频
      spanData: {
        msg: "发现了更多新内容",
        code: 200,
        hasmore: true,
        datas: [
          {
            type: 1,
            displayed: false,
            alg: "onlineHotGroup",
            extAlg: null,
            data: {
              alg: "onlineHotGroup",
              scm:
                "1.music-video-timeline.video_timeline.video.181017.-295043608",
              threadId: "R_VI_62_47F679DC65E3A14652AEA4EB6124D84A",
              coverUrl:
                "https://p2.music.126.net/Xb0oOa5yqb-X19IenlalLg==/109951164003278526.jpg",
              height: 1080,
              width: 1920,
              title: "神级歌手现场合体！国家队表示一个能打的都没有（一）",
              description:
                "《飞云之下》林俊杰 韩红\n《雨蝶》张靓颖 邓紫棋\n《大鱼》周深 郭沁",
              commentCount: 842,
              shareCount: 468,
              resolutions: [
                { resolution: 240, size: 25226172 },
                { resolution: 480, size: 39730310 },
                { resolution: 720, size: 58282681 },
                { resolution: 1080, size: 90898180 },
              ],
              creator: {
                defaultAvatar: false,
                province: 370000,
                authStatus: 0,
                followed: false,
                avatarUrl:
                  "http://p1.music.126.net/jBz7B-02ek-mUo_Isb0pdw==/109951163164971525.jpg",
                accountStatus: 0,
                gender: 1,
                city: 371100,
                birthday: 661881600000,
                userId: 64983824,
                userType: 0,
                nickname: "尤村村长",
                signature: "我就是海滩下 的那尤克里里",
                description: "",
                detailDescription: "",
                avatarImgId: 109951163164971520,
                backgroundImgId: 2002210674180198,
                backgroundUrl:
                  "http://p1.music.126.net/i0qi6mibX8gq2SaLF1bYbA==/2002210674180198.jpg",
                authority: 0,
                mutual: false,
                expertTags: null,
                experts: { "1": "音乐原创视频达人" },
                djStatus: 0,
                vipType: 11,
                remarkName: null,
                avatarImgIdStr: "109951163164971525",
                backgroundImgIdStr: "2002210674180198",
              },
              urlInfo: null,
              videoGroup: [
                { id: -8005, name: "#收藏榜#", alg: "groupTagRank" },
                { id: 102112, name: "综艺剪辑", alg: "groupTagRank" },
                { id: 150122, name: "邓紫棋", alg: "groupTagRank" },
                { id: 77102, name: "内地综艺", alg: "groupTagRank" },
                { id: 11110, name: "林俊杰", alg: "groupTagRank" },
                { id: 3101, name: "综艺", alg: "groupTagRank" },
                { id: 4101, name: "娱乐", alg: "groupTagRank" },
                { id: 58100, name: "现场", alg: "groupTagRank" },
                { id: 5100, name: "音乐", alg: "groupTagRank" },
              ],
              previewUrl:
                "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/preview_2445276221_GB0v4vS5.webp?wsSecret=cdbdcf6cc5d4807cba8097b319a5ac75&wsTime=1618465494",
              previewDurationms: 4000,
              hasRelatedGameAd: false,
              markTypes: null,
              relateSong: [],
              relatedInfo: null,
              videoUserLiveInfo: null,
              vid: "47F679DC65E3A14652AEA4EB6124D84A",
              durationms: 206040,
              playTime: 3698397,
              praisedCount: 16384,
              praised: false,
              subscribed: false,
            },
          },
          {
            type: 1,
            displayed: false,
            alg: "onlineHotGroup",
            extAlg: null,
            data: {
              alg: "onlineHotGroup",
              scm:
                "1.music-video-timeline.video_timeline.video.181017.-295043608",
              threadId: "R_VI_62_8B7384F441862B4350005DA6CCD34BAE",
              coverUrl:
                "https://p2.music.126.net/gddA3yQGpJJVO2QKt2Mqfg==/109951163733276305.jpg",
              height: 1080,
              width: 1920,
              title: "赵传改编许巍金曲《曾经的你》,唱哭五百位大众评审,",
              description: "",
              commentCount: 1329,
              shareCount: 3730,
              resolutions: [
                { resolution: 240, size: 52262382 },
                { resolution: 480, size: 88708227 },
                { resolution: 720, size: 133452195 },
                { resolution: 1080, size: 213147549 },
              ],
              creator: {
                defaultAvatar: false,
                province: 230000,
                authStatus: 0,
                followed: false,
                avatarUrl:
                  "http://p1.music.126.net/-iDzYkdA4vLyZvSZWFzC_Q==/109951163708981508.jpg",
                accountStatus: 0,
                gender: 2,
                city: 230100,
                birthday: 828288000000,
                userId: 587194274,
                userType: 0,
                nickname: "私人音乐空间",
                signature: "新浪微博@耳朵都听怀孕了",
                description: "",
                detailDescription: "",
                avatarImgId: 109951163708981500,
                backgroundImgId: 109951162868128400,
                backgroundUrl:
                  "http://p1.music.126.net/2zSNIqTcpHL2jIvU6hG0EA==/109951162868128395.jpg",
                authority: 0,
                mutual: false,
                expertTags: null,
                experts: { "1": "视频达人(华语、音乐现场)" },
                djStatus: 0,
                vipType: 0,
                remarkName: null,
                avatarImgIdStr: "109951163708981508",
                backgroundImgIdStr: "109951162868128395",
              },
              urlInfo: null,
              videoGroup: [
                { id: -8004, name: "#评论榜#", alg: "groupTagRank" },
                { id: 59101, name: "华语现场", alg: "groupTagRank" },
                { id: 57108, name: "流行现场", alg: "groupTagRank" },
                { id: 1100, name: "音乐现场", alg: "groupTagRank" },
                { id: 58100, name: "现场", alg: "groupTagRank" },
                { id: 5100, name: "音乐", alg: "groupTagRank" },
              ],
              previewUrl:
                "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/preview_2195010263_azVUyReV.webp?wsSecret=15d9b76c3d61049159a6f18ab16d1d57&wsTime=1618465494",
              previewDurationms: 4000,
              hasRelatedGameAd: false,
              markTypes: null,
              relateSong: [
                {
                  name: "曾经的你 (Live)",
                  id: 408277948,
                  pst: 0,
                  t: 0,
                  ar: [{ id: 6463, name: "赵传", tns: [], alias: [] }],
                  alia: ["原唱：许巍"],
                  pop: 100,
                  st: 0,
                  rt: null,
                  fee: 8,
                  v: 15,
                  crbt: null,
                  cf: "",
                  al: {
                    id: 34589726,
                    name: "我是歌手第四季 第12期",
                    picUrl:
                      "http://p4.music.126.net/QXaISOoIt53f1nJFav_WEQ==/3312828537194189.jpg",
                    tns: [],
                    pic: 3312828537194189,
                  },
                  dt: 326186,
                  h: { br: 320000, fid: 0, size: 13049773, vd: -10200 },
                  m: { br: 192000, fid: 0, size: 7829881, vd: -7799 },
                  l: { br: 128000, fid: 0, size: 5219935, vd: -6200 },
                  a: null,
                  cd: "1",
                  no: 3,
                  rtUrl: null,
                  ftype: 0,
                  rtUrls: [],
                  djId: 0,
                  copyright: 2,
                  s_id: 0,
                  rtype: 0,
                  rurl: null,
                  mst: 9,
                  cp: 404023,
                  mv: 0,
                  publishTime: 1459521079266,
                  privilege: {
                    id: 408277948,
                    fee: 8,
                    payed: 0,
                    st: 0,
                    pl: 128000,
                    dl: 0,
                    sp: 7,
                    cp: 1,
                    subp: 1,
                    cs: false,
                    maxbr: 999000,
                    fl: 128000,
                    toast: false,
                    flag: 0,
                    preSell: false,
                  },
                },
              ],
              relatedInfo: null,
              videoUserLiveInfo: null,
              vid: "8B7384F441862B4350005DA6CCD34BAE",
              durationms: 355103,
              playTime: 3578317,
              praisedCount: 14979,
              praised: false,
              subscribed: false,
            },
          },
          {
            type: 1,
            displayed: false,
            alg: "onlineHotGroup",
            extAlg: null,
            data: {
              alg: "onlineHotGroup",
              scm:
                "1.music-video-timeline.video_timeline.video.181017.-295043608",
              threadId: "R_VI_62_72F294EF89F693169FC146CB8A77702F",
              coverUrl:
                "https://p2.music.126.net/HZTPz2YvHsq0NZOJhudvbw==/109951163796167252.jpg",
              height: 1080,
              width: 1920,
              title: "太厉害了, 当评委转身之后才发现原来只有一个人演唱!",
              description:
                "\n太厉害了, 当评委转身之后才发现原来只有一个人演唱!",
              commentCount: 1634,
              shareCount: 1775,
              resolutions: [
                { resolution: 240, size: 10776770 },
                { resolution: 480, size: 19044353 },
                { resolution: 720, size: 28239078 },
                { resolution: 1080, size: 47996122 },
              ],
              creator: {
                defaultAvatar: false,
                province: 350000,
                authStatus: 0,
                followed: false,
                avatarUrl:
                  "http://p1.music.126.net/oz4IlAZQfUuG7nI2XAFGGQ==/109951164295807253.jpg",
                accountStatus: 0,
                gender: 2,
                city: 350200,
                birthday: 675273600000,
                userId: 133976543,
                userType: 0,
                nickname: "FancyMusic-",
                signature: "何以为乐？FancyMusic！",
                description: "",
                detailDescription: "",
                avatarImgId: 109951164295807250,
                backgroundImgId: 109951162934898400,
                backgroundUrl:
                  "http://p1.music.126.net/iZ1nzZ2Gy9nTY-Y2f5Cfvw==/109951162934898406.jpg",
                authority: 0,
                mutual: false,
                expertTags: null,
                experts: { "1": "音乐视频达人" },
                djStatus: 0,
                vipType: 11,
                remarkName: null,
                avatarImgIdStr: "109951164295807253",
                backgroundImgIdStr: "109951162934898406",
              },
              urlInfo: null,
              videoGroup: [
                { id: -8004, name: "#评论榜#", alg: "groupTagRank" },
                { id: 142123, name: "Cardi B", alg: "groupTagRank" },
                { id: 3101, name: "综艺", alg: "groupTagRank" },
                { id: 4101, name: "娱乐", alg: "groupTagRank" },
                { id: 57106, name: "欧美现场", alg: "groupTagRank" },
                { id: 57108, name: "流行现场", alg: "groupTagRank" },
                { id: 1100, name: "音乐现场", alg: "groupTagRank" },
                { id: 58100, name: "现场", alg: "groupTagRank" },
                { id: 5100, name: "音乐", alg: "groupTagRank" },
              ],
              previewUrl:
                "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/preview_2254318070_N7Yj0IGQ.webp?wsSecret=6dea42ecb37f8fbdad8d081ac6ecdd61&wsTime=1618465494",
              previewDurationms: 4000,
              hasRelatedGameAd: false,
              markTypes: null,
              relateSong: [],
              relatedInfo: null,
              videoUserLiveInfo: null,
              vid: "72F294EF89F693169FC146CB8A77702F",
              durationms: 99555,
              playTime: 7476643,
              praisedCount: 36534,
              praised: false,
              subscribed: false,
            },
          },
          {
            type: 1,
            displayed: false,
            alg: "onlineHotGroup",
            extAlg: null,
            data: {
              alg: "onlineHotGroup",
              scm:
                "1.music-video-timeline.video_timeline.video.181017.-295043608",
              threadId: "R_VI_62_59737AFCE8B7947FB00C09DC01E1DE9F",
              coverUrl:
                "https://p2.music.126.net/mQ_C8eqQ96QFWqBWX5IA2Q==/109951163368953318.jpg",
              height: 1080,
              width: 1920,
              title: "4万多人现场纪念Avicii！很多人都流泪了",
              description:
                "[流泪]今天是A神去世2个月整，RIP。World Club Dome是世界大型电音节，六月初在开幕式上举行了纪念Avicii活动，今天WCD官方发出了纪念视频，很多人都流泪了[流泪][流泪]",
              commentCount: 2233,
              shareCount: 4279,
              resolutions: [
                { resolution: 240, size: 34040660 },
                { resolution: 480, size: 61062030 },
                { resolution: 720, size: 93103025 },
                { resolution: 1080, size: 178072731 },
              ],
              creator: {
                defaultAvatar: false,
                province: 510000,
                authStatus: 0,
                followed: false,
                avatarUrl:
                  "http://p1.music.126.net/I7lICvVbJDjnpQv_YUzI5g==/109951163305390629.jpg",
                accountStatus: 0,
                gender: 2,
                city: 510100,
                birthday: 713030400000,
                userId: 3442152,
                userType: 204,
                nickname: "迷因爱音乐",
                signature:
                  "你想，在春天，怀你温暖的梦，不踏草青，不恋花红，大步走到秋，不闻蝉鸣，不识落英，然后戴上你的耳机，听到月睁眼，你再闭眼·····",
                description: "",
                detailDescription: "",
                avatarImgId: 109951163305390620,
                backgroundImgId: 109951162879621170,
                backgroundUrl:
                  "http://p1.music.126.net/DqN9xFjy6fJYN47Hzy4lHg==/109951162879621175.jpg",
                authority: 0,
                mutual: false,
                expertTags: null,
                experts: { "1": "音乐视频达人", "2": "电子资讯达人" },
                djStatus: 10,
                vipType: 0,
                remarkName: null,
                avatarImgIdStr: "109951163305390629",
                backgroundImgIdStr: "109951162879621175",
              },
              urlInfo: null,
              videoGroup: [
                { id: -8002, name: "#热门榜#", alg: "groupTagRank" },
                { id: 16218, name: "Avicii", alg: "groupTagRank" },
                { id: 58104, name: "音乐节", alg: "groupTagRank" },
                { id: 57106, name: "欧美现场", alg: "groupTagRank" },
                { id: 1100, name: "音乐现场", alg: "groupTagRank" },
                { id: 58100, name: "现场", alg: "groupTagRank" },
                { id: 5100, name: "音乐", alg: "groupTagRank" },
              ],
              previewUrl:
                "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/preview_1706933040_vmHmqzl2.webp?wsSecret=e9dac55b7eb163341a8673f4c2130a50&wsTime=1618465494",
              previewDurationms: 4000,
              hasRelatedGameAd: false,
              markTypes: [109],
              relateSong: [],
              relatedInfo: null,
              videoUserLiveInfo: null,
              vid: "59737AFCE8B7947FB00C09DC01E1DE9F",
              durationms: 256426,
              playTime: 1963598,
              praisedCount: 18007,
              praised: false,
              subscribed: false,
            },
          },
          {
            type: 1,
            displayed: false,
            alg: "onlineHotGroup",
            extAlg: null,
            data: {
              alg: "onlineHotGroup",
              scm:
                "1.music-video-timeline.video_timeline.video.181017.-295043608",
              threadId: "R_VI_62_047CD5F4DA639C4697542A46BCD2EC34",
              coverUrl:
                "https://p2.music.126.net/shAJeiCRqgR7KnbDbWfSyQ==/109951164420560872.jpg",
              height: 540,
              width: 952,
              title: "【Queendom】穗珍超绝椅子舞《Senorita》，是珍的辣！！",
              description:
                "【Queendom】穗珍超绝椅子舞《Senorita》，是珍的辣！！",
              commentCount: 320,
              shareCount: 2075,
              resolutions: [
                { resolution: 240, size: 9466668 },
                { resolution: 480, size: 13603649 },
              ],
              creator: {
                defaultAvatar: false,
                province: 310000,
                authStatus: 0,
                followed: false,
                avatarUrl:
                  "http://p1.music.126.net/vYHGILLfWWof6ogz1HwxKQ==/109951164491145822.jpg",
                accountStatus: 0,
                gender: 2,
                city: 310101,
                birthday: 1262275200000,
                userId: 1335061865,
                userType: 204,
                nickname: "仙宫频道",
                signature: "",
                description: "",
                detailDescription: "",
                avatarImgId: 109951164491145820,
                backgroundImgId: 109951164829202080,
                backgroundUrl:
                  "http://p1.music.126.net/PNGXsjXd_IYT0vvkXeoonQ==/109951164829202086.jpg",
                authority: 0,
                mutual: false,
                expertTags: null,
                experts: { "1": "音乐视频达人", "2": "音乐图文达人" },
                djStatus: 10,
                vipType: 11,
                remarkName: null,
                avatarImgIdStr: "109951164491145822",
                backgroundImgIdStr: "109951164829202086",
              },
              urlInfo: null,
              videoGroup: [
                { id: 1101, name: "舞蹈", alg: "groupTagRank" },
                { id: 1100, name: "音乐现场", alg: "groupTagRank" },
                { id: 58100, name: "现场", alg: "groupTagRank" },
                { id: 5100, name: "音乐", alg: "groupTagRank" },
              ],
              previewUrl:
                "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/preview_2732659965_y1Iq3j0O.webp?wsSecret=57dc121a57d76b590b7a21efe204c19a&wsTime=1618465494",
              previewDurationms: 4000,
              hasRelatedGameAd: false,
              markTypes: null,
              relateSong: [],
              relatedInfo: null,
              videoUserLiveInfo: null,
              vid: "047CD5F4DA639C4697542A46BCD2EC34",
              durationms: 91668,
              playTime: 1856964,
              praisedCount: 11817,
              praised: false,
              subscribed: false,
            },
          },
          {
            type: 1,
            displayed: false,
            alg: "onlineHotGroup",
            extAlg: null,
            data: {
              alg: "onlineHotGroup",
              scm:
                "1.music-video-timeline.video_timeline.video.181017.-295043608",
              threadId: "R_VI_62_8901018A23226994AF5050AAD6C7B75A",
              coverUrl:
                "https://p2.music.126.net/FTU9aYTuEzzLXo_Uu9K4mQ==/109951163702117208.jpg",
              height: 1080,
              width: 1920,
              title: "2018MMA BLACKPINK",
              description: "#2018MMA##BLACKPINK#   #敏雅音乐#  ",
              commentCount: 1237,
              shareCount: 983,
              resolutions: [
                { resolution: 240, size: 66502537 },
                { resolution: 480, size: 119597265 },
                { resolution: 720, size: 184701179 },
                { resolution: 1080, size: 247465485 },
              ],
              creator: {
                defaultAvatar: false,
                province: 440000,
                authStatus: 0,
                followed: false,
                avatarUrl:
                  "http://p1.music.126.net/v_uPFw3cUZxPvqHIilB0cA==/109951164872559335.jpg",
                accountStatus: 0,
                gender: 1,
                city: 440300,
                birthday: -2209017600000,
                userId: 1345182969,
                userType: 204,
                nickname: "敏雅可乐官方",
                signature:
                  "敏雅韩舞专攻班欢迎您！微博/公众号/meipai  ：敏雅可乐 微信: ID33741658",
                description: "",
                detailDescription: "",
                avatarImgId: 109951164872559330,
                backgroundImgId: 109951165458525600,
                backgroundUrl:
                  "http://p1.music.126.net/K7UCBYTumIoteWPh03DfKg==/109951165458525598.jpg",
                authority: 0,
                mutual: false,
                expertTags: null,
                experts: { "1": "舞蹈视频达人" },
                djStatus: 0,
                vipType: 11,
                remarkName: null,
                avatarImgIdStr: "109951164872559335",
                backgroundImgIdStr: "109951165458525598",
              },
              urlInfo: null,
              videoGroup: [
                { id: -8012, name: "#999+收藏#", alg: "groupTagRank" },
                { id: 92105, name: "BLACKPINK", alg: "groupTagRank" },
                { id: 57107, name: "韩语现场", alg: "groupTagRank" },
                { id: 57110, name: "饭拍现场", alg: "groupTagRank" },
                { id: 57108, name: "流行现场", alg: "groupTagRank" },
                { id: 1101, name: "舞蹈", alg: "groupTagRank" },
                { id: 1100, name: "音乐现场", alg: "groupTagRank" },
                { id: 58100, name: "现场", alg: "groupTagRank" },
                { id: 5100, name: "音乐", alg: "groupTagRank" },
              ],
              previewUrl:
                "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/preview_2161163863_93YKKPk1.webp?wsSecret=b203d3a27465991942c39bd170229471&wsTime=1618465494",
              previewDurationms: 4000,
              hasRelatedGameAd: false,
              markTypes: [110],
              relateSong: [],
              relatedInfo: null,
              videoUserLiveInfo: null,
              vid: "8901018A23226994AF5050AAD6C7B75A",
              durationms: 284422,
              playTime: 1914452,
              praisedCount: 14190,
              praised: false,
              subscribed: false,
            },
          },
          {
            type: 1,
            displayed: false,
            alg: "onlineHotGroup",
            extAlg: null,
            data: {
              alg: "onlineHotGroup",
              scm:
                "1.music-video-timeline.video_timeline.video.181017.-295043608",
              threadId: "R_VI_62_8DC0E8F0B3956EBD54E6A4C6C4E1E215",
              coverUrl:
                "https://p2.music.126.net/GoXgTqFfoz9HzVLmN_Y8SQ==/109951163574276799.jpg",
              height: 720,
              width: 1280,
              title: "结石姐Jessie J现场演唱的《Domino 》，这气场也是没谁了",
              description:
                "#在云村看现场# 结石姐Jessie J在英国格拉斯哥TRNSMT音乐节神级现场，震撼演唱热单《Domino》，真的是行走的CD没得说，超燃气氛引爆观众大合唱！\n",
              commentCount: 512,
              shareCount: 951,
              resolutions: [
                { resolution: 240, size: 43079465 },
                { resolution: 480, size: 73228604 },
                { resolution: 720, size: 96442524 },
              ],
              creator: {
                defaultAvatar: false,
                province: 110000,
                authStatus: 1,
                followed: false,
                avatarUrl:
                  "http://p1.music.126.net/w9sQfaK_Xissw1pmu9LcXw==/109951163536090163.jpg",
                accountStatus: 0,
                gender: 2,
                city: 110101,
                birthday: -2209017600000,
                userId: 1539973165,
                userType: 10,
                nickname: "在云村看现场",
                signature:
                  "网易云音乐是6亿人都在使用的音乐平台，致力于帮助音乐爱好者发现音乐惊喜，帮助音乐人实现梦想。\n在云村看现场独家策划专题每周周末更新，欢迎各位村民私信或者@优质音乐现场内容！\n如果仍然不能解决您的问题，请邮件我们：\n用户：ncm5990@163.com\n音乐人：yyr599@163.com",
                description: "在云村看现场官方",
                detailDescription: "在云村看现场官方",
                avatarImgId: 109951163536090160,
                backgroundImgId: 109951162868126480,
                backgroundUrl:
                  "http://p1.music.126.net/_f8R60U9mZ42sSNvdPn2sQ==/109951162868126486.jpg",
                authority: 0,
                mutual: false,
                expertTags: null,
                experts: null,
                djStatus: 0,
                vipType: 0,
                remarkName: null,
                avatarImgIdStr: "109951163536090163",
                backgroundImgIdStr: "109951162868126486",
              },
              urlInfo: null,
              videoGroup: [
                { id: -8003, name: "#点赞榜#", alg: "groupTagRank" },
                { id: 57106, name: "欧美现场", alg: "groupTagRank" },
                { id: 57108, name: "流行现场", alg: "groupTagRank" },
                { id: 1100, name: "音乐现场", alg: "groupTagRank" },
                { id: 58100, name: "现场", alg: "groupTagRank" },
                { id: 5100, name: "音乐", alg: "groupTagRank" },
              ],
              previewUrl:
                "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/preview_1943452002_V2WCk5uM.webp?wsSecret=ac4dafea538944045a64537659d6b39c&wsTime=1618465494",
              previewDurationms: 4000,
              hasRelatedGameAd: false,
              markTypes: [101, 111],
              relateSong: [
                {
                  name: "Domino",
                  id: 2867202,
                  pst: 0,
                  t: 0,
                  ar: [{ id: 62662, name: "Jessie J", tns: [], alias: [] }],
                  alia: [],
                  pop: 100,
                  st: 0,
                  rt: "",
                  fee: 8,
                  v: 16,
                  crbt: null,
                  cf: "",
                  al: {
                    id: 289489,
                    name: "Domino",
                    picUrl:
                      "http://p4.music.126.net/bM_2w1edGyDR1Bl2w2rHEg==/109951163087330546.jpg",
                    tns: [],
                    pic_str: "109951163087330546",
                    pic: 109951163087330540,
                  },
                  dt: 228000,
                  h: { br: 320000, fid: 0, size: 9147252, vd: -20200 },
                  m: { br: 192000, fid: 0, size: 5488438, vd: -17500 },
                  l: { br: 128000, fid: 0, size: 3659030, vd: -16100 },
                  a: null,
                  cd: "1",
                  no: 1,
                  rtUrl: null,
                  ftype: 0,
                  rtUrls: [],
                  djId: 0,
                  copyright: 1,
                  s_id: 0,
                  rtype: 0,
                  rurl: null,
                  mst: 9,
                  cp: 7003,
                  mv: 261,
                  publishTime: 1314547200007,
                  privilege: {
                    id: 2867202,
                    fee: 8,
                    payed: 0,
                    st: 0,
                    pl: 128000,
                    dl: 0,
                    sp: 7,
                    cp: 1,
                    subp: 1,
                    cs: false,
                    maxbr: 320000,
                    fl: 128000,
                    toast: false,
                    flag: 4,
                    preSell: false,
                  },
                },
              ],
              relatedInfo: null,
              videoUserLiveInfo: null,
              vid: "8DC0E8F0B3956EBD54E6A4C6C4E1E215",
              durationms: 263012,
              playTime: 2189830,
              praisedCount: 8977,
              praised: false,
              subscribed: false,
            },
          },
          {
            type: 1,
            displayed: false,
            alg: "onlineHotGroup",
            extAlg: null,
            data: {
              alg: "onlineHotGroup",
              scm:
                "1.music-video-timeline.video_timeline.video.181017.-295043608",
              threadId: "R_VI_62_D95470CC99536B14794136EABAF104C8",
              coverUrl:
                "https://p2.music.126.net/gVyCyRaWhZgFu3rEx_1yjw==/109951163801950999.jpg",
              height: 1080,
              width: 1920,
              title: "《夜空中最亮的星》全场大合唱，掩面哭泣的男孩让人心疼",
              description:
                "《夜空中最亮的星》全场大合唱，掩面哭泣的男孩让人心疼",
              commentCount: 2160,
              shareCount: 6286,
              resolutions: [
                { resolution: 240, size: 25637973 },
                { resolution: 480, size: 44348790 },
                { resolution: 720, size: 64943381 },
                { resolution: 1080, size: 134929905 },
              ],
              creator: {
                defaultAvatar: false,
                province: 430000,
                authStatus: 0,
                followed: false,
                avatarUrl:
                  "http://p1.music.126.net/o-oARyYFo1CfCWA8_AiYTg==/6656443395329561.jpg",
                accountStatus: 0,
                gender: 0,
                city: 430100,
                birthday: 749491200000,
                userId: 38176827,
                userType: 0,
                nickname: "枫笛音乐",
                signature: "有趣的灵魂会在音乐里相遇",
                description: "",
                detailDescription: "",
                avatarImgId: 6656443395329561,
                backgroundImgId: 2002210674180204,
                backgroundUrl:
                  "http://p1.music.126.net/5L9yqWa_UnlHtlp7li5PAg==/2002210674180204.jpg",
                authority: 0,
                mutual: false,
                expertTags: null,
                experts: null,
                djStatus: 0,
                vipType: 0,
                remarkName: null,
                avatarImgIdStr: "6656443395329561",
                backgroundImgIdStr: "2002210674180204",
              },
              urlInfo: null,
              videoGroup: [
                { id: -8004, name: "#评论榜#", alg: "groupTagRank" },
                { id: 59101, name: "华语现场", alg: "groupTagRank" },
                { id: 57108, name: "流行现场", alg: "groupTagRank" },
                { id: 1100, name: "音乐现场", alg: "groupTagRank" },
                { id: 58100, name: "现场", alg: "groupTagRank" },
                { id: 5100, name: "音乐", alg: "groupTagRank" },
              ],
              previewUrl:
                "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/preview_2260197046_GK0PtGac.webp?wsSecret=7dd3e0bc00e7f5fe16eea07022475edf&wsTime=1618465494",
              previewDurationms: 4000,
              hasRelatedGameAd: false,
              markTypes: null,
              relateSong: [
                {
                  name: "夜空中最亮的星",
                  id: 25706282,
                  pst: 0,
                  t: 0,
                  ar: [{ id: 12977, name: "逃跑计划", tns: [], alias: [] }],
                  alia: [],
                  pop: 100,
                  st: 0,
                  rt: "600902000009535440",
                  fee: 8,
                  v: 125,
                  crbt: null,
                  cf: "",
                  al: {
                    id: 2285010,
                    name: "世界",
                    picUrl:
                      "http://p4.music.126.net/Eef2K2KV9dT3XUA6_Ve-Rw==/109951165543196748.jpg",
                    tns: [],
                    pic_str: "109951165543196748",
                    pic: 109951165543196750,
                  },
                  dt: 252000,
                  h: { br: 320000, fid: 0, size: 10091667, vd: -3700 },
                  m: { br: 192000, fid: 0, size: 6055017, vd: -1200 },
                  l: { br: 128000, fid: 0, size: 4036692, vd: -2 },
                  a: null,
                  cd: "1",
                  no: 7,
                  rtUrl: null,
                  ftype: 0,
                  rtUrls: [],
                  djId: 0,
                  copyright: 1,
                  s_id: 0,
                  rtype: 0,
                  rurl: null,
                  mst: 9,
                  cp: 22036,
                  mv: 382555,
                  publishTime: 1325347200007,
                  privilege: {
                    id: 25706282,
                    fee: 8,
                    payed: 0,
                    st: 0,
                    pl: 128000,
                    dl: 0,
                    sp: 7,
                    cp: 1,
                    subp: 1,
                    cs: false,
                    maxbr: 999000,
                    fl: 128000,
                    toast: false,
                    flag: 260,
                    preSell: false,
                  },
                },
              ],
              relatedInfo: null,
              videoUserLiveInfo: null,
              vid: "D95470CC99536B14794136EABAF104C8",
              durationms: 209752,
              playTime: 8480728,
              praisedCount: 47212,
              praised: false,
              subscribed: false,
            },
          },
        ],
        rcmdLimit: 8,
      },
    };
  },
  created() {
    this.getHotMusicListGategroy();
    this.getNetFriengdsSpecilMusic();
  },
  methods: {
    // 获取热门歌单分类
    async getHotMusicListGategroy() {
      const { data: res } = await this.$axios.get("http://localhost:3000/playlist/hot");
      this.hotMusicListGategroy = res.tags;
    },
    // 获取网友精选碟
    async getNetFriengdsSpecilMusic() {
      const { data: res } = await this.$axios.get("http://localhost:3000/top/playlist?cat="+this.activeName+"&limit=1000&offset="+ this.netFriengdsSpecilMusicPages.offset);
      this.netFriengdsSpecilMusic = res.playlists;
    },
     handleSizeChange(val) {
        // console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        // console.log(`当前页: ${val}`);
        this.netFriengdsSpecilMusicPages.offset = `${val}`; 
        this.getNetFriengdsSpecilMusic();
      }
   
  }
};
</script>

<style lang="less" scoped>
.gedanParent {
  margin: 0 auto 50px auto;
  width: 1100px;
  #remenMusicListGategory {
    .tjmusic{
        display: flex;
        flex-wrap: wrap;
        // 音乐推荐
      .musicList {
      width: 200px;
      height: 200px;
      margin-top: 10px;
      margin-right: 20px;
      margin-bottom: 60px;
      img {
        width: 200px;
        height: 200px;
        margin-bottom: 5px;
      }
    }
      }
    
  }
  .fenye{
    margin-top: 100px;
    .el-pagination{
      margin-left: 175px;
    }
  }
}

</style>
