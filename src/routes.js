import Home from './components/home/Home.vue';
import CadastroUsuario from './components/usuario/Cadastro.vue';

export const routes = [
    {path: '/', component: Home, titulo: 'Home'},
    {path: '/cadastroUsuario', component: CadastroUsuario, titulo: 'Cadastro'}
];