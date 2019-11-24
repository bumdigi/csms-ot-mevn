<template>
 <body>
    <form class="form-signin">
    <div id="SignUp">
      
      <h1 class="h3 mb-3 font-weight-normal"> Sign Up</h1>
      <label for="inputName">User Name</label>
      <input  v-model="user.name" type="text" id="name" class="form-control" placeholder="names" required="" autofocus="">
      <label for="inputEmail">Email address</label>
      <input v-model="user.email" type="email" id="email" class="form-control" placeholder="Email address" required="" autofocus="">
      <label for="inputPassword">Password</label>
      <input v-model="user.password" type="password" id="password" class="form-control" placeholder="Password" required="">
      <!-- <div v-if="typeof(message) != 'undefined'" class="alert alert-danger">{{ message }}</div> -->
      <button class="btn btn-lg btn-primary btn-block" type="submit" v-on:click="signUp">Sign Up</button>
    </div>
    </form>
  </body>
</template>

<script>
export default {
  data: function(){
    return {
      user:{
        email: '',
        password: '',
        name: ''
      }
    }
  },
  methods:{
    signUp: function(){
      this.$http.post('http://localhost:4000/signUp', {
        user: this.user
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
    padding-top: 40px;
    padding-bottom: 40px;
}
.font-weight-normal{
  text-align: center;
}
.form-control{
  margin-bottom: 10px;
}
</style>