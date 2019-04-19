<template>
  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado"></h2>

    <form @submit.prevent="gravar" ref="form">
      <div class="controle">
        <label for="nome">USUARIO</label>
        <input v-model.lazy="usuario.nome" id="nome" name="nome" autocomplete="off">
      </div>

      <div class="controle">
        <label for="senha">SENHA</label>
        <input v-model.lazy="usuario.senha" id="senha" name="senha" autocomplete="off">
      </div>

      <div class="centralizado">
        <input value="GRAVAR" type="submit"/>
      </div>

    </form>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      usuario: {
        nome: '',
        senha: ''
      }
    }
  },

  methods: {

    gravar() {
      let url = 'http://localhost:8080/PDSCREST/api/users/';

      this.$http
        .post(url, this.usuario)
        .then(() => {
          alert('Usuario cadastrado com sucesso')
          window.location.href = "http://localhost:8081/";
        }, 
        err => {
          console.log(err)
        });
    },

    /*
        const auth = {
            headers: {Authorization:'JWT ' + localStorage.getItem('token')} 
        }

        axios.get('http://yourapi.com',auth).then(result => { 
        console.log(result.data)
        })

        //in post request
        const auth = {
                headers: {Authorization:'JWT ' + localStorage.getItem('token')} 
            }
        //note:auth will be 3rd parameter in post request
        axios.post('http://yourapi.com',{somekey:'some value'},auth).then(result => { 
        console.log(result.data)
        })
    */
  }
}
</script>

<style scoped>

  .centralizado {
    text-align: center;
  }
  .controle {
    font-size: 1.2em;
    margin-bottom: 20px;

  }
  .controle label {
    display: block;
    font-weight: bold;
  }

 .controle label + input, .controle textarea {
    width: 100%;
    font-size: inherit;
    border-radius: 5px
  }

  .centralizado {
    text-align: center;
  }

</style>