/*Metodo de conexao antiga vista no curso
const mongoose = require("mongoose")
//Configurando o Mongoose
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/aprendendo', {useNewUrlParser: true, useUnifiedTopology: true}).
then(()=> {console.log('MongoDB conectado')}).
catch((err)=> {console.log('Erro ao se conectar: ' + err)})*/
const mongoose = require('mongoose');

// URL de conexão com o MongoDB atual
const dbURL = 'mongodb://localhost:27017/aprendendo';
mongoose.Promise = global.Promise
// Conectando ao MongoDB usando Mongoose
mongoose.connect(dbURL)
  .then(() => console.log('Conectado ao banco de dados "aprendendo"'))
  .catch((error) => console.error('Erro ao conectar ao banco de dados:', error));
//Model - Usuarios
//Definindo o Model
  const UsuarioSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade:{
        type: Number,
        require: true
    },
    pais: {
        type: String
    }
  })
  //Definindo a Collection
  mongoose.model('usuarios', UsuarioSchema)
const Pedro = mongoose.model('usuarios')
//Inserindo usuario
new Pedro({
    nome: "John",
    sobrenome: "Costa",
    email: "jcosta@mail.com",
    idade: 27,
    pais: "Portugal"
}).save().then(()=>{
    console.log("Usuario criado com sucesso!");
    
  }).catch((err)=>{
    console.log("Houve um erro ao criar o usuario!"+err)
  })

  
  