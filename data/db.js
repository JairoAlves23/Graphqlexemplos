const usuarios = [
    { id:1,nome:'jairo',  perfil_id:1, status:'ATIVO'},
    { id:2,nome:'Jose',   perfil_id:2, status:'INATIVO'},
    { id:3,nome:'Carlos', perfil_id:1, status:'ATIVO'}
]

const perfis = [
    {id:1,nome:'Comum'},
    {id:2,nome:'Administrador'}
]

module.exports = {
    usuarios, 
    perfis
}