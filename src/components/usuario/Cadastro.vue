<template>
  <div>
    <h1 class="centralizado">Cadastro de usuario</h1>
    <h2 class="centralizado"></h2>

    <form @submit.prevent="gravar" ref="form">
      <div class="form-group">
        <label for="nome">Nome</label>
        <input type="text" class="form-control" v-model.lazy="usuario.nome" id="nome" autocomplete="new-password">
      </div>

      <div class="form-group">
        <label for="login">Login</label>
        <input type="text" class="form-control" v-model.lazy="usuario.login" id="login" autocomplete="off">
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" v-model.lazy="usuario.email" id="email" autocomplete="new-password">
      </div>

      <div class="form-group">
        <label for="senha">Senha</label>
        <input type="password" class="form-control" v-model.lazy="usuario.senha" id="senha" autocomplete="new-password">
      </div>

      <div class="centralizado">
         <button type="submit" class="btn btn-primary">Cadastrar</button>
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

      gravar() {
        let url = 'http://localhost:8080/PDSCREST/api/users/';

        this.$http
          .post(url, this.usuario)
          .then(() => {
            alert('Usuario cadastrado com sucesso');
            this.$router.push('ListagemUsuario');
          }, 
          err => {
            console.log(err)
          });
      },
    }
  }
</script>