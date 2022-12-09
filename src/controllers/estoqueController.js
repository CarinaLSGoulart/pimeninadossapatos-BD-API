const db = require('../database/models');
const Estoque = db.Estoque;

const estoqueController = {
    list: (req, res) => {
        Estoque.findAll({
            include: [
                { model: db.Produto, as: "produto" }
            ]
        })
            .then(estoque => {
                res.status(200).json(estoque)
            })
            .catch(err => {
                res.status(500).json(err);
                console.log(err)
            })
    },
    detail: (req, res) => {
        Estoque.findByPk(req.params.id)
            .then(estoque => {
                if (!estoque) {
                    res.status(404).json(estoque) //404 - Not found
                } else {
                    res.status(200).json(estoque)
                }
            })
            .catch(err => {
                res.status(404).json(err)
            })
    },
    create: async (req, res) => {
        const estoque = req.body
        try {
          await Estoque.create(estoque)
          res.status(201).json({ msg: 'Produto adicionado com sucesso!' })
        } catch (err) {
          res.status(400).json({ error: [err] })
          console.log(err)
        }
      },
  
      update: async (req, res) => {
        const idEstoque = req.params.id
        const estoque = req.body
        try {
          await Estoque.update(estoque, { where: { idEstoque } })
          res.status(201).json({ msg: 'Produto alterado com sucesso!' })
        } catch (err) {
          res.status(400).json({ error: [err] })
          console.log(err)
        }
      },
  
      delete: async (req, res) => {
        const idEstoque = req.params.id
        try {
          await Estoque.destroy({ where: { idEstoque } })
          res.status(200).json({ msg: 'Produto excluído com sucesso!' })
        } catch (err) {
          res.status(400).json({ error: [err] }),
          console.log(err)
        }
      }
}

module.exports = estoqueController;