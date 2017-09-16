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
  import icons from './assets/icons'

  import store from './store/index.js'

  export default {
    name: 'app',
    store,
    data () {
      return {}
    },
    components: {Topbar, ResumeEditor, ResumePreview},
    created () {
      document.body.insertAdjacentHTML('afterbegin', icons)
      let state = localStorage.getItem('state')
      if (state) {
        state = JSON.parse(state)
      }
      this.$store.commit('initState', state)
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
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
    > main {
    flex-grow: 1;
    }
    > main {
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
  svg.icon {
    height: 1em;
    width: 1em;
    fill: currentColor;
    vertical-align: -0.1em;
    font-size: 16px;
    cursor: pointer;
  }
</style>
