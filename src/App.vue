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

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}
.box {
  width: vw(400);
  height: vh(300);
  font-size: vh(16);
  margin: vw(20);
  border: vh(2) solid red;
}
</style>
