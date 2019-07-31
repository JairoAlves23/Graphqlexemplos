const { usuarios, perfis } = require('../data/db')

module.exports = {
    ola() {
        return "Ola"
    },
    dataAtual() {
        return new Date()
    },
    usuarioLogado() {
        return {
            id:1,
            nome:'Jairo',
            email:'jairo@teste.com',
            idade:38,
            salario_real:200,
            vip:true
        }
    },
    produtoEmDestaque() {
        return {
            nome: 'Computador',
            preco:29.90,
            desconto:0.15
        }
    },
    numeroMegaSena() {
        const crescente = (a,b) => a - b
        return  Array(6).fill(0).map(n => parseInt(Math.random() * 60 + 1)).sort(crescente)       
    },
    usuarios() {
        return usuarios
    },
    usuario(_,{ id }) {
        const sels = usuarios.filter(u => u.id == id)
        return sels ? sels[0]:0 
    },
    perfis() {
        return perfis
    },
    perfil(_ , { id }) {
        const sels = perfis.filter(p=> p.id == id)
        return sels ? sels[0]:null
    }

}