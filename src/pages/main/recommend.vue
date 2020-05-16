
<template>
  <div class="recommend-wrap">
    <div class="before"></div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(item, index) in bannerList" :key="index">
        <img :src="item.imageUrl" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="recommend-list">
      <div class="title">推荐歌单</div>
      <recommend-list :recommendList="recommendList" v-if="bannerList.length > 0"></recommend-list>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import RecommendList from "../../components/main/recommenderList";
import "swiper/css/swiper.css";
import request from "@/api";

export default {
  components: {
    Swiper,
    SwiperSlide,
    RecommendList
  },
  data() {
    return {
      bannerList: [],
      recommendList: [],
      loading: true,
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  mounted() {
    this.getBannerList();
    this.getRecommendList();
  },
  methods: {
    getBannerList() {
      request.get("/banner").then(r => {
        this.bannerList = r.banners;
        this.loading = false;
      });
    },
    getRecommendList() {
      request.get("/personalized").then(r=>{
        this.recommendList = r.result;
      })
    }
  }
};
</script>

<style lang="less" scoped>
.swiper {
  height: 160px;
  width: 367px;
  margin: 0 auto;
  border-radius: 6px;
  .swiper-slide {
    img {
      width: 367px;
      height: 160px;
    }
  }
  .swiper-pagination {
    --swiper-pagination-color: rgb(212, 68, 57);
  }
}
.before {
  content: "";
  width: 100%;
  height: 80px;
  background: rgb(212, 68, 57);
  position: absolute;
  z-index: -1;
}
.recommend-list {
  .title {
    font-weight: 700;
    padding-left: 6px;
    font-size: 14px;
    line-height: 60px;
  }
}
</style>