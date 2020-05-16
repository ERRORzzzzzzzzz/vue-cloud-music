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
            <img :src="creator.avatarUrl" alt="">
            <div>{{creator.nickname}}</div>
          </div>
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
    justify-content: space-between;
    margin: 0 20px;
    .detail-left {
      position: relative;
      width: 120px;
      height: 120px;
      .detail-img {
        z-index: -1;
        position: absolute;
        width: 100%;
        height: 100%;   
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

    }
  }
}

</style>