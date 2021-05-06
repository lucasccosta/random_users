const routes = require('express').Router()
const UserController = require('./controllers/UserController');
const AxiosController = require('./axios')

// teste do post
routes.post('/teste/user', UserController.post)
// teste do post com axios
routes.post('/teste/axios', AxiosController.post)


// Rotas User Genérico
routes.get('/', UserController.getDefault)
// Obter a informação somente de um user da base de dados
routes.get('/users/:id', UserController.getId)
// Listar todos os usuários da base de dados
routes.get('/users', UserController.getAll)
// Será responsável por receber atualizações realizadas
routes.put('/users/:id', UserController.put)
// Remover o user da base
routes.delete('/users/:id', UserController.delete)

module.exports = routes;