<template>
  <div>
    <div class="header">
      <img :src="detail.coverImgUrl" class="background-img">
      <div class="top">
        <div class="pre-page" @click="goBack">
          <svg t="1589636721338" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2389" width="32" height="32"><path d="M932.04 483.875H163.745l350.591-311.627c11.009-9.785 12-26.643 2.216-37.652-9.787-11.005-26.64-11.999-37.653-2.214L74.242 492.065a26.672 26.672 0 0 0 0 39.868L478.9 891.618a26.567 26.567 0 0 0 17.708 6.735c7.353 0 14.676-3.022 19.945-8.95 9.785-11.01 8.793-27.866-2.216-37.653L160.473 537.214H932.04c14.729 0 26.669-11.94 26.669-26.67 0-14.729-11.94-26.669-26.67-26.669z" p-id="2390" fill="#ffffff"></path></svg>      
        </div>
        <div>歌单</div>
      </div>
      <div class="detail">
        <div class="detail-left">
          <img :src="detail.coverImgUrl" class="detail-img">
          <div class="play-count">{{Math.floor(detail.playCount/10000)}}万</div>
        </div>
        <div class="detail-right">
          <div class="detail-title">{{detail.name}}</div>
          <div class="detail-creator">
            <img :src="detail.creator.avatarUrl" alt="">
            <div class="nickname">{{detail.creator.nickname}}</div>
          </div>
        </div>
      </div>
      <div class="touch-bar">
        <div class="bar">
          <div class="icon">
            <svg t="1589677506925" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7052" width="32" height="32"><path d="M843.257008 102.472859 180.741969 102.472859c-48.695049 0-88.308255 39.613206-88.308255 88.309278l0 441.672258c0 48.695049 39.613206 88.308255 88.308255 88.308255l366.223892 0 192.33347 192.265932c4.332678 4.328585 9.993608 6.495948 15.649422 6.495948 5.659907 0 11.320836-2.166339 15.581883-6.495948 8.593725-8.593725 8.593725-22.569018 0-31.231305L571.697125 683.10396c-4.120854-4.120854-9.709129-6.495948-15.57779-6.495948L180.741969 676.608012c-24.311709 0-44.154639-19.84293-44.154639-44.153616L136.58733 190.782138c0-24.38334 19.843954-44.155662 44.154639-44.155662l662.515039 0c24.311709 0 44.153616 19.843954 44.153616 44.155662l0 441.672258c0 24.311709-19.84293 44.153616-44.153616 44.153616l-88.096431 0c-12.227486 0-22.076808 9.849322-22.076808 22.076808 0 12.223393 9.849322 22.076808 22.076808 22.076808l88.096431 0c48.695049 0 88.308255-39.613206 88.308255-88.308255L931.565263 190.782138C931.565263 142.086066 891.952057 102.472859 843.257008 102.472859L843.257008 102.472859zM269.117762 411.618778c0 24.38334 19.769252 44.154639 44.154639 44.154639 24.38334 0 44.152593-19.771299 44.152593-44.154639s-19.769252-44.152593-44.152593-44.152593C288.888038 367.465163 269.117762 387.235438 269.117762 411.618778L269.117762 411.618778zM467.81108 411.618778c0 24.38334 19.769252 44.154639 44.154639 44.154639 24.378224 0 44.152593-19.771299 44.152593-44.154639s-19.774369-44.152593-44.152593-44.152593C487.581356 367.465163 467.81108 387.235438 467.81108 411.618778L467.81108 411.618778zM754.948753 411.618778c0-24.38334-19.770276-44.152593-44.153616-44.152593-24.379247 0-44.153616 19.769252-44.153616 44.152593s19.774369 44.154639 44.153616 44.154639C735.178477 455.773418 754.948753 436.002119 754.948753 411.618778L754.948753 411.618778zM754.948753 411.618778" p-id="7053" fill="#ffffff"></path></svg>          </div>
          <div>评论</div>
        </div>
        <div class="bar">
          <div class="icon">
            <svg t="1589677477567" class="icon" viewBox="0 0 1169 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5670" width="32" height="32"><path d="M1045.333 117.333C919.467-6.4 716.8-10.667 584.533 106.667 452.267-10.667 249.6-6.4 123.733 117.333c-128 128-130.133 337.067-2.133 467.2l4.267 4.267 384 384c40.533 40.533 106.666 42.667 149.333 2.133l2.133-2.133 384-384c128-128 130.134-337.067 4.267-465.067-2.133-4.266-2.133-4.266-4.267-6.4zM996.267 537.6L608 917.333c-14.933 14.934-36.267 14.934-49.067 0L172.8 537.6C70.4 437.333 68.267 273.067 170.667 170.667l2.133-2.134c100.267-98.133 258.133-100.266 362.667-6.4l46.933 40.534 46.933-40.534c104.534-93.866 262.4-89.6 362.667 8.534 104.533 100.266 106.667 264.533 4.267 366.933z" fill="#ffffff" p-id="5671"></path></svg>
          </div>
          <div>点赞</div>
        </div>
        <div class="bar">
          <div class="icon">
            <svg t="1589677536823" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7836" width="32" height="32"><path d="M 953.062 494.669 L 529.818 494.669 L 529.818 71.424 c 0 -10.5984 -8.60164 -19.2 -19.2 -19.2 s -19.2 8.60164 -19.2 19.2 l 0 423.245 L 68.173 494.669 c -10.5984 0 -19.2 8.60164 -19.2 19.2 s 8.60164 19.2 19.2 19.2 l 423.245 0 l 0 423.245 c 0 10.5984 8.60164 19.2 19.2 19.2 s 19.2 -8.60164 19.2 -19.2 L 529.818 533.069 l 423.245 0 c 10.5984 0 19.2 -8.60164 19.2 -19.2 S 963.661 494.669 953.062 494.669 Z" p-id="7837" fill="#ffffff"></path></svg>
          </div>
          <div>收藏</div>
        </div>
        <div class="bar">
          <div class="icon">
            <svg t="1589677555126" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8638" width="32" height="32"><path d="M511.428995 256.180614m-64.238047 0a62.775 62.775 0 1 0 128.476093 0 62.775 62.775 0 1 0-128.476093 0Z" p-id="8639" fill="#ffffff"></path><path d="M511.150656 511.745197m-63.960731 0a62.504 62.504 0 1 0 127.921461 0 62.504 62.504 0 1 0-127.921461 0Z" p-id="8640" fill="#ffffff"></path><path d="M511.706311 767.588119m-63.960731 0a62.504 62.504 0 1 0 127.921461 0 62.504 62.504 0 1 0-127.921461 0Z" p-id="8641" fill="#ffffff"></path></svg>
          </div>
          <div>更多</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "@/api";

export default {
  data() {
    return {
      detail: {
        coverImgUrl: '',
        subscribedCount: '',
        name: '',
        creator: {
          avatarUrl: '',
          nickname: ''
        },
        playCount: ''
      },
      songList: []
    }
  },
  methods: {
    getDetail() {
      request.get("/playlist/detail", {
        params: {
          id: this.$route.params.id
        }
      }).then(r => {
        this.detail = r.playlist
        this.songList = this.detail.tracks;
      });
    },
    goBack() {
      this.$router.push('/home/recommend')
    }
  },
  mounted() {
    this.getDetail();
  }
}
</script>

<style lang="less" scoped>
.header {
  position: relative;
  width: 375px;
  height: 275px;
  .background-img {
    filter: blur(20px);
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;  
  }
  .top {
    height: 45px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: rgb(241, 241, 241);
    padding: 0px 10px 5px;
    font-size: 16px;
    font-weight: 700;
    .pre-page{
      margin-right: 5px;
    }
  }
  .detail {
    display: flex;
    flex-direction: row;
    margin: 0 20px;
    .detail-left {
      position: relative;
      width: 120px;
      height: 120px;
      .detail-img {
        z-index: -1;
        position: absolute;
        width: 120px;
        height: 120px;  
      }
      .play-count {
          z-index: 1;
          position: absolute;
          right: 2px;
          top: 2px;
          font-size: 12px;
          line-height: 15px;
          color: rgb(241, 241, 241);
      }
    }
    .detail-right {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding-left: 10px;
      .detail-title {
        height: 24px;
        font-size: 16px;
        color: rgb(241, 241, 241);
        font-weight: 700;
      }
      .detail-creator {
        display: flex;
        flex-direction: row;
        height: 20px;  
        img {
          width: 20px;
          height: 20px;  
          border-radius: 50%;
        }
        .nickname {
          line-height: 20px;
          font-size: 14px;
          color: rgb(187, 168, 168);
        }
      }
    }
  }
  .touch-bar {
    font-size: 12px;
    color: rgb(241, 241, 241);
    font-weight: 500;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0px 30px 20px;
    margin-top: 20px;
    .icon {
      width: 24px;
      height: 20px;
    }
  }
}

</style>