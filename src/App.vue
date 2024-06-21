<template>
  <div id="app">
    <div class="box">8888</div>
    <p>a:{{ a }}-b:{{ b }}</p>
    <p>a:{{ fitChartFont(16) }}</p>
    <p>b:{{ fitChartFont(20) }}</p>
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
    this.a = this.fitChartFont(16)
    this.b = this.fitChartFont(20)
    window.addEventListener('resize', () => {
      this.a = this.fitChartFont(16)
      this.b = this.fitChartFont(20)
    })
  },
}
</script>

<style scoped lang="scss">
.box {
  width: vw(400);
  height: vh(300);
  font-size: vh(16);
  margin: vw(20);
  border: vh(2) solid red;
}
</style>
