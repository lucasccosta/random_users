require('dotenv').config()

const express = require('express');
const app = express();

const routes = require('./routes');

app.use(express.json());

app.use(routes);


app.listen(process.env.PORT || 3000, function(){
  console.log('Server rodando na porta 3000')
})