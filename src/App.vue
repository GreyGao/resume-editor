<template>
  <div id="app" class="page">
    <header>
      <Topbar></Topbar>
    </header>
    <main>
      <ResumeEditor></ResumeEditor>
      <ResumePreview></ResumePreview>
    </main>
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
  .page {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .page > main {
    flex-grow: 1;
  }
  .page > main {
    min-width: 1024px;
    max-width: 1440px;
    margin: 0;
    display: flex;
    justify-content: space-around;
  }
  #resumeEditor {
    width: 35%;
    background: #444;
  }
  #resumePreview {
    width: 61.66667%;
    background: #777;
  }
</style>
