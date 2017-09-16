import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from 'object-path'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selected: 'profile',
    resume: {
      config: [
        {field: 'profile', icon: 'id'},
        {field: 'workHistory', icon: 'work'},
        {field: 'education', icon: 'book'},
        {field: 'projects', icon: 'heart'},
        {field: 'awards', icon: 'cup'},
        {field: 'contacts', icon: 'phone'}
      ],
      profile: {
        name: '',
        city: '',
        title: ''
      },
      workHistory: [
        {company: '', content: ''},
        {company: '', content: ''}
      ],
      education: [
        {school: '', content: ''},
        {school: '', content: ''}
      ],
      projects: [
        {name: '', content: ''},
        {name: '', content: ''}
      ],
      awards: [
        {name: '', content: ''},
        {name: '', content: ''}
      ],
      contacts: [
        {contact: '', content: ''},
        {contact: '', content: ''}
      ]
    }
  },
  mutations: {
    initState (state, payload) {
      Object.assign(state, payload)
    },
    switchTab (state, payload) {
      state.selected = payload
      localStorage.setItem('state', JSON.stringify(state))
    },
    updateResume (state, {path, value}) {
      objectPath.set(state.resume, path, value)
      localStorage.setItem('state', JSON.stringify(state))
    }
  }
})
