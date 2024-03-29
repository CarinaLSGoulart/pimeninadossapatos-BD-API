const db = require('../database/models');
const Produto = db.Produto;

const produtoController = {
  listar: (req, res) => {
    Produto.findAll({
      include: [
        { model: db.Estoque, as: "estoque" }
      ]
    })
      .then(produtos => {
        res.status(200).json(produtos)
      })
      .catch(err => {
        console.log(err)
        res.status(500).json(err); // 500 - Internal error
        //console.log(err)
      })
  },

  detalhar: (req, res) => {
    Produto.findByPk(req.params.idProduto)
      .then(produto => {
        if (!produto) {
          res.status(404).json(produto) //404 - Not found
        } else {
          res.status(200).json(produto)
        }
      })
      .catch(err => {
        res.status(404).json(err)
      })
  },

  criar: async (req, res) => {
    const produto = req.body
    try {
      await Produto.create(produto)
      res.status(201).json({ msg: 'Produto criado com sucesso!' })
    } catch (err) {
      res.status(400).json({ error: [...err] })
      console.log(err)
    }
  },

  atualizar: async (req, res) => {
    const idProduto = req.params.idProduto
    const produto = req.body
    try {
      await Produto.update(produto, { where: { idProduto } })
      res.status(201).json({ msg: 'Produto alterado com sucesso!' })
    } catch (err) {
      res.status(304).json({ error: [...err] }) //304 = Not Modified
      console.log(err)
    }
  },

  deletar: async (req, res) => {
    const idProduto = req.params.idProduto
    try {
      await Produto.destroy({ where: { idProduto } })
      res.status(200).json({ msg: 'Produto excluído com sucesso!' })
    } catch (err) {
      res.status(400).json({ error: [...err] }),
        console.log(err)
    }
  }
}

module.exports = produtoController;