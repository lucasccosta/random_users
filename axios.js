const axios = require('axios');
const UserModel = require('./models/user')

// a estrutura de paginação ?results=x é para fazer o numero de requisições

class AxiosController {

    async post(req, res){
        const data = await axios.get('https://randomuser.me/api/?exc=id')
        let info = data.data.results
        const body = info
        const teste = await UserModel.create(body);
        res.json(teste)
    }
}

module.exports = new AxiosController
