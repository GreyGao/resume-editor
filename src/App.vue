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
      return {}
    },
    components: {Topbar, ResumeEditor, ResumePreview}
  }
</script>

<style>
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
    background: #EAEBEC;
  }
  .page > main {
    flex-grow: 1;
  }
  .page > main {
    min-width: 1024px;
    max-width: 1440px;
    margin-top: 16px;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    padding: 0 16px;
    width: 100%;
    align-self: center;
  }
  #resumeEditor {
    width: 35%;
    background: #444;
  }
  #resumePreview {
    width: 61.66667%;
    background: #777;
    flex-grow: 1;
    margin-left: 16px;
  }
</style>
