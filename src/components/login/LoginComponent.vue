<template>
  <body class="text-center">
    <form class="form-signin">
    <div id="login">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input v-model="user.email" type="email" id="email" class="form-control" placeholder="Email address" required="" autofocus="">
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="user.password" type="password" id="password" class="form-control" placeholder="Password" required="">
      <!-- <div v-if="typeof(message) != 'undefined'" class="alert alert-danger">{{ message }}</div> -->
      <button class="btn btn-lg btn-primary btn-block" type="submit" v-on:click="login">Sign in</button>
      <a v-bind:href="url.signUpUrl"> Sign Up </a>
    </div>
    </form>
  </body>
</template>
<script>
export default {
  data: function(){
    return{
      user:{
        email:'',
        password:'',
      },
      url: {
        signUpUrl: '/signUp'
      }
    }
  },
  methods:{
    login: function(){
      this.$http.post('http://localhost:4000/login', {
        user:this.user
      })
    },
    logout: function(){
      this.$http.post('http://localhost:4000/logout', {
        user:this.user
      })
    }
  }
}
</script>
<style scoped>
.form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
}
body {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px; 
}
.form-control{
  margin-bottom: 10px;
}
</style>