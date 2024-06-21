<template>
  <div id="app">
    <div class="box">8888</div>
    <p>a:{{ a }}-b:{{ b }}</p>
    <p>a:{{ fitChartSize(16) }}</p>
    <p>b:{{ fitChartSize(20) }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      a: 0,
      b: 0,
    }
  },
  mounted() {
    this.a = this.fitChartSize(16)
    this.b = this.fitChartSize(20)
    window.addEventListener('resize', () => {
      this.a = this.fitChartSize(16)
      this.b = this.fitChartSize(20)
    })
  },
}
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}
.box {
  .px2vw(width, 300);
  .px2vh(height, 100);
  .px2font(16);
  .px2vw(margin-left, 300);
  .px2vh(margin-top, 100);
  .px2vw(border-width, 1);
  border-style: solid;
  border-color: red;
}
</style>
