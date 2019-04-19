<template>
    <div>
        <h1>Listagem de usuarios</h1>
        
        <table class="table table-striped table-bordered" >
            <thead>
                <tr>
                    <th scope="col"> ID</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Login</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="usuario in usuarios">
                    <td>{{ usuario.id }}</td>
                    <td>{{ usuario.nome }}</td>
                    <td>{{ usuario.login }}</td>
                    <td>{{ usuario.email }}</td>
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
            .get('http://localhost:8080/PDSCREST/api/users/')
            .then(res => res.json())
            .then(usuarios => this.usuarios = usuarios, 
            err => {
                console.log(err)
            });
        }
    }
</script>