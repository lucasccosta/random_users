// Acessando ao nosso mongoose já conectado
const mongoose = require('mongoose')

// Criando um novo Schema para o nosso Produto
const UserSchema = new mongoose.Schema(
  {
    gender: {
      type: String,
      enum: ['male', 'female']
    },
    name: {
      title: String,
      first: String,
      last: String
    },
    location: {
      street: String,
      city: String,
      state: String,
      postcode: String,
      coordinates: {
        latitude: String,
        longitude: String
      },
      timezone: {
        offset: String,
        description: String
      }
    },
    email: String,
    login: {
      uuid: String,
      username: String,
      password: String,
      salt: String,
      md5: String,
      sha1: String,
      sha256: String
    },
    dob: {
      date: String,
      age: Number
    },
    registered: {
      date: String,
      age: Number
    },
    phone: String,
    cell: String,
    // id: {
    //   name: String,
    //   value: String
    // },
    picture: {
      large: String,
      medium: String,
      thumbnail: String
    },
    nat: String,
    imported_t: {
      type: Date,
      default:Date.now()
    },
    status: {
      type: String,
      enum: ['draft', 'trash', 'published']
    }
  }
);


// Criando um novo modelo baseado 'User' baseado no Schema do nosso User
const UserModel = mongoose.model('User', UserSchema);

// Exportando o nosso Modelo do User
module.exports = UserModel;