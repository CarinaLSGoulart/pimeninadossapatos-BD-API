const db = require('../database/models');
const Produto = db.Produto;

const produtoController = {
    list: (req, res) => {
        Produto.findAll({
            include: [
                { model: db.Estoque, as: "estoque" }
            ]
        })
            .then(produtos => {
                res.status(200).json(produtos)
            })
            .catch(err => {
                res.status(500).json(err); // 500 - Internal error
                console.log(err)
            })
    },
    detail: (req, res) => {
        Produto.findByPk(req.params.id)
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
    create: async (req, res) => {
        const produto = req.body
        try {
          await Produto.create(produto)
          res.status(201).json({ msg: 'Produto criado com sucesso!' })
        } catch (err) {
          res.status(400).json({ error: [err] })
          console.log(err)
        }
      },
  
      update: async (req, res) => {
        const idProduto = req.params.id
        const produto = req.body
        try {
          await Produto.update(produto, { where: { idProduto } })
          res.status(201).json({ msg: 'Produto alterado com sucesso!' })
        } catch (err) {
          res.status(400).json({ error: [err] })
          console.log(err)
        }
      },
  
      delete: async (req, res) => {
        const idProduto = req.params.id
        try {
          await Produto.destroy({ where: { idProduto } })
          res.status(200).json({ msg: 'Produto excluído com sucesso!' })
        } catch (err) {
          res.status(400).json({ error: [err] }),
          console.log(err)
        }
      }
}

module.exports = produtoController;