<template>
  <div>
    <h1 class="centralizado">Logar</h1>
    <h2 class="centralizado"></h2>

    <form @submit.prevent="logar" ref="form">

      <div class="form-group">
        <label for="login">Login</label>
        <input type="text" class="form-control" v-model.lazy="usuario.login" id="login" autocomplete="off">
      </div>

      <div class="form-group">
        <label for="senha">Senha</label>
        <input type="password" class="form-control" v-model.lazy="usuario.senha" id="senha" autocomplete="off">
      </div>

      <div class="centralizado">
         <button type="submit" class="btn btn-primary">Entrar</button>
      </div>

    </form>
  </div>
</template>

<script>
  import Usuario from "../model/Usuario";

  export default {
    name: 'app',
    data () {
      return {
        usuario: new Usuario()
      }
    },

    methods: {
      
      logar() {
        this.$http
          .post('http://localhost:8080/PDSCREST/api/users/login', this.usuario)
          .then(response => {
            console.log(response.headers.get('Authorization'));
          }, 
          err => {
            console.log(err);
          });
      },
     /* logarComAuth() {
        this.$auth.login(){
          params: {auth: this.usuario},
        }
        this.$http
          .post('http://localhost:8080/PDSCREST/api/users/login', this.usuario)
          .then(response => {
            this.$auth.
            console.log(response.headers.get('Authorization'));
          }, 
          err => {
            console.log(err);
          });
      },*/
    }
  }
</script>