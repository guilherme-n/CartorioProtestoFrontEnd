<template>
    <div>
        <h1>Listagem de usuarios</h1>
        
        <table class="table table-striped table-bordered" >
            <thead>
                <tr>
                    <th class="col-3">ID</th>
                    <th class="col-4">Nome</th>
                    <th class="col-2">Login</th>
                    <th class="col-2">Email</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="usuario in usuarios" v-bind:key="usuario.id">
                    <td class="col-3">{{ usuario.id }}</td>
                    <td class="col-4">{{ usuario.nome }}</td>
                    <td class="col-2">{{ usuario.login }}</td>
                    <td class="col-2">{{ usuario.email }}</td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script>

    export default{
        data(){
            return {
                usuarios: []
            }
        },

        created(){
            this.$http
            .get('http://localhost:8080/PDSCREST/api/users/', {headers: {"Authorization" : window.localStorage.getItem('token')}})
            .then(res => res.json())
            .then(usuarios => this.usuarios = usuarios, 
            err => {
                console.log(err)
            });
        }
    }
</script>