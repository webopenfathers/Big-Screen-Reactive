<template>
  <div id="app">
    <div class="screen" id="screen">
      <div style="font-size: 20px">88888</div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // 初始化自适应  ----在刚显示的时候就开始适配一次
    this.handleScreenAuto()
    // 绑定自适应函数 ---防止浏览器栏变化后不再适配
    window.addEventListener('resize', this.handleScreenAuto)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleScreenAuto)
  },
  methods: {
    // 数据大屏自适应函数
    handleScreenAuto() {
      const designDraftWidth = 1920 //设计稿的宽度
      const designDraftHeight = 960 //设计稿的高度
      // 根据屏幕的变化适配的比例
      const scale =
        document.documentElement.clientWidth /
          document.documentElement.clientHeight <
        designDraftWidth / designDraftHeight
          ? document.documentElement.clientWidth / designDraftWidth
          : document.documentElement.clientHeight / designDraftHeight
      // 缩放比例
      document.querySelector(
        '#screen'
      ).style.transform = `scale(${scale}) translate(-50%, -50%)`
    },
  },
}
</script>

<style>
.screen {
  display: inline-block;
  background: pink;
  /* 设计稿的宽度 */
  width: 1920px;
  /* 设计稿的高度 */
  height: 960px;
  transform-origin: 0 0;
  position: absolute;
  left: 50%;
  top: 50%;
}
</style>
