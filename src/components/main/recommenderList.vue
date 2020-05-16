<template>
  <div class="list-wrap">
    <div
      class="list-item"
      v-for="(item, index) in recommendList"
      :key="index"
      @click="enterDetail(item.id)"
    >
      <div class="img-wrap">
        <!-- 背景图 -->
        <img :src="item.picUrl" alt />
        <!-- 播放量 -->
        <span class="play-count">{{Math.floor(item.playCount/10000)}}万</span>
      </div>
      <div class="name">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["recommendList"],
  data() {
    return {};
  },
  mounted() {},
  methods: {
    enterDetail(id) {
      this.$router.push(`/songlist/${id}`);
    }
  }
};
</script>

<style lang="less" scoped>
.list-wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 5px;
  margin-right: 5px;
  .list-item {
    width: 120px;
    height: 172px;
    .img-wrap {
      position: relative;
      img {
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
    .name {
      margin-top: 2px;
      // height: 50px;
      font-size: 12px;
      color: rgb(46, 48, 48);
      padding: 0px 2px;
      display: -webkit-box; /*  display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示  */
      -webkit-box-orient: vertical; /*  -webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式  */
      -webkit-line-clamp: 2; /*  -webkit-line-clamp用来限制在一个块元素显示的文本的行数 */
      overflow: hidden;
    }
  }
}
</style>