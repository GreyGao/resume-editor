<template>
  <div id="app">
    <p>{{text}}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      text: '你好'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
p{ color:red;}
</style>
