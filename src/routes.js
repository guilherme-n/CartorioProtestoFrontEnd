import Home from './components/home/Home.vue';
import CadastroUsuario from './components/usuario/Cadastro.vue';
import ListagemUsuario from './components/usuario/Listagem.vue';
import Login from './components/usuario/Login.vue';

export const routes = [
    {path: '/', component: Home, titulo: 'Home'},
    {path: '/login', component: Login, titulo: 'Login'},
    {path: '/cadastroUsuario', component: CadastroUsuario, titulo: 'Cadastro usuario'},
    {path: '/listagemUsuario', component: ListagemUsuario, titulo: 'Listar usuarios'}
];