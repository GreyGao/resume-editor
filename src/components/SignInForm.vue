<template>
  <div>
    <form @submit.prevent="signIn">
      <div class="row">
        <label>用户名</label>
        <input type="text" required v-model="formData.username">
      </div>
      <div class="row">
        <label>密码</label>
        <input type="password" required v-model="formData.password">
      </div>
      <div class="actions">
        <input type="submit" value="提交">
        <span>{{errorMessage}}</span>
      </div>
    </form>
  </div>
</template>

<script>
  import getErrorMessage from '../vendors/getErrorMessage'
  import getAVUser from '../vendors/getAVUser'
  import AV from '../vendors/leanCloud'

  export default {
    name: 'SignInForm',
    data () {
      return {
        formData: {
          username: '',
          password: ''
        },
        errorMessage: ''
      }
    },
    methods: {
      signIn () {
        let {username, password} = this.formData
        AV.User.logIn(username, password).then(() => {
         this.$emit('success', getAVUser())
        }, (error) => {
          this.errorMessage = getErrorMessage(error)
        })
      }
    }
  }
</script>
