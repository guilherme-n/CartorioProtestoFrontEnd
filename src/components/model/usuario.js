export default class Usuario {

    constructor(id = '', nome='', senha='', login = '', email = '') {
        this.id = id;
        this.nome = nome;
        this.senha = senha;
        this.login = login;
        this.email = email;
    }
}