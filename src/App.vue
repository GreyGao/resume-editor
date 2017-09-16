<template>
  <div id="app">
    <p>{{text}}</p>
    <Topbar></Topbar>
    <ResumeEditor></ResumeEditor>
    <ResumePreview></ResumePreview>
  </div>
</template>

<script>


    import Topbar from './components/Topbar.vue'
    import ResumeEditor from './components/ResumeEditor.vue'
    import ResumePreview from './components/ResumePreview.vue'

    export default {
        name: 'app',
        data () {
            return {
                text: '你好，这里是indexAPP页面'
            }
        },
        components:{Topbar,ResumeEditor,ResumePreview}
    }
</script>

<style scoped>
  @import "assets/reset.css";
  @import "vendors/normalize.css";
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
  p{ color:red;}
</style>
