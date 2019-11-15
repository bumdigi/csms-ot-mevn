<template>
  <body class="text-center">
    <form class="form-signin">
    <div id="login">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input v-model="user.id" type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="user.password" type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
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
        id:'',
        password:'',
      },
      url: {
        signUpUrl: '/login/signUp'
      }
    }
  },
  methods:{
    login: function(){
      this.$http.post('http://localhost:4000/login/checkLogin', {
        user:this.user
      })
      .then(
        (response)=>{
          alert('success login' + response);
        },
        (error)=>{
          alert(error.response.data.error);
        }
      )
      .catch(error=>{
        alert(error);
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