<template>
 <body>
    <form class="form-signin">
    <div id="SignUp">
      
      <h1 class="h3 mb-3 font-weight-normal"> Sign Up</h1>
      <label for="inputName">User Name</label>
      <input  v-model="user.name" type="text" id="inputName" class="form-control" placeholder="names" required="" autofocus="">
      <label for="inputEmail">Email address</label>
      <input v-model="user.id" type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
      <label for="inputPassword">Password</label>
      <input v-model="user.password" type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
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
        id: '',
        password: '',
        name: ''
      }
    }
  },
  methods:{
    signUp: function(){
      this.$http.post('/signUp', {
        user: this.user
      }).then((response) => {
        if(response.data.result === 0){
          alert('Error, try again');
        }
        if(response.data.response === 1){
          alert("회원가입이 완료되었습니다.");
          this.$router.push('/login');
        }
      })
      .catch(function(error){
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
    /* -ms-flex-align: center; */
    /* //align-items: center; */
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