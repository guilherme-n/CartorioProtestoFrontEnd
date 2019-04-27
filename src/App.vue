<template>
  <div>
    <nav class="navbar navbar-light navbar-expand-lg" style="background-color: #e3f2fd;">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="#">Hidden brand</a>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item" v-for="route in routes">
            <router-link :to="route.path" class="nav-link">{{ route.titulo }}</router-link>
          </li>
        </ul>
        <form>
          <button v-on:click="deslogar" type="button" class="btn btn-outline-primary" aria-label="Left Align">
            <span class="glyphicon glyphicon-play" aria-hidden="true"></span>Sair
          </button>
        </form>
      </div>
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import { routes } from './routes';

  export default{
    data(){
      return {
        routes
      }
    },

    methods: {
      deslogar: function(event){
        window.localStorage.setItem("token", "");
        this.$router.push("Login");
      }
    }
  }
</script>