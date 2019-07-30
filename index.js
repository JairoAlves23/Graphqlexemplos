const { ApolloServer, gql } = require('apollo-server')

const usuarios = [
    {
        id:1,
        nome:'jairo'

    },
    {
        id:2,
        nome:'Jose'
    }
]

const typeDefs = gql `
    scalar Date

    type Usuario {
        id: Int
        nome:String!
        email:String!
        idade:Int
        salario:Float
        vip:Boolean
    }

    type Produto {
        nome:String!,
        preco:Float!,
        desconto:Float,
        precoComDesconto:Float
    }
    
    type Query  {
     ola:String,
     dataAtual: Date,
     usuarioLogado: Usuario,
     produtoEmDestaque:Produto,
     numeroMegaSena:[Int],
     usuarios:[Usuario]
     usuario(id: Int):Usuario
    }
`

const resolvers = {
    Produto: {
        precoComDesconto(produto) {
            return produto.preco * (1 - produto.desconto)
        }
    },
    Usuario: {
        salario(usuario) {
            return usuario.salario_real
        }
    },
    Query: {
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
        usuario(_,args) {
            const sels = usuarios.filter(u => u.id == args.id)
            return sels ? sels[0]:0 
        }
    }
}


const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => {
console.log(`Executando em ${url}`)
})


