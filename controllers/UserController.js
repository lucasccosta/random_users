// Requisitando o modelo do nosso Produto, com já acesso ao banco de dados
const userModel = require('../models/user');

// Classe de Controller do Produto, com os controllers utilizados nas rotas
class UserController{

  // teste post
  async post(req, res){
      const {name, value} = req.body.id_user
      console.log(name, value)
      if(!name && !value){
        try{
          const body = req.body;
          console.log(body)
          const user = await userModel.create(body)
          // const user = await userModel.create(req.body)
          res.json(user)
        } catch(error){
          console.log(error)
          res.status(400).json(error)
        }
      } else{
        console.log('Error: id existente')
      }
  }


  
  async getDefault (req, res) {
    res.json({msg: "REST Back-end Challenge 20201209 Running"})
  }

  // Pega o parâmetro id da requisição get
  // Procura um Produto no nosso banco de dados com o id passado a função
  // Retorna o Produto como json para quem requisitou
  async getId(req, res){
    const { id } = req.params;
    const user = await userModel.findById(id);
    res.json(user);
  }

  async getAll(req, res){
    const user = await userModel.find()
    res.json(user)
  }

  // Essa função retorna todos os produtos que derem um match com o body passado
  // pela requisição
  async getFiltered(req, res){
    const body = req.body;
    const users = await userModel.find(body);
    res.json(users);
  }

  // Rota para atualização de algum produto, baseado no id
  // Utiliza o id passado como parâmetro de rota
  // Pesquisa um produto por id e atualiza todo os seus valores pelo novo req.body
  async put(req, res){
    const { id } = req.params;
    const body = req.body;
    const user = await userModel.findByIdAndUpdate(id, body, {new: true});
    res.json(user);
  }

  // async update(req,res){
  //   const { _id, nome_produto, descricao_produto, preco_produto,qtd_produto } = req.body;
  //   const data = {nome_produto,descricao_produto,preco_produto,qtd_produto};
  //   const product = await Produto.findOneAndUpdate({_id},data,{new:true});
  //   res.json(product);
  // }

  // Remove um elemento do banco de dados, baseado no id passado
  async delete(req, res){
    const { id } = req.params;
    const user = await userModel.findByIdAndDelete(id);
    res.json({msg: "Esse usuário foi deletetado"});
  }

}

// Exporta uma nova instância do produto
module.exports = new UserController();