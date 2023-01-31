const db = require('../database/models');
const Estoque = db.Estoque;

const estoqueController = {
  listar: (req, res) => {
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

  detalhar: (req, res) => {
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

  criar: (req, res) => {
    Estoque.create({
      numeracao: req.body.numeracao,
      quantidade: req.body.quantidade,
      codigoSku: req.body.codigoSku
    })
      .then(estoqueCriado => {
        res.json({ message: 'Estoque criado com sucesso', data: estoqueCriado });
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ message: 'Erro ao criar estoque', error });
      });
  },

  atualizar: async (req, res) => {
    const idEstoque = req.params.id
    const estoque = req.body
    try {
      await Estoque.update(estoque, { where: { idEstoque } })
      res.status(201).json({ msg: 'Produto alterado com sucesso!' })
    } catch (error) {
      res.status(400).json({ error: [err] })
      console.log(error);
      res.status(500).json({ message: 'Erro ao atualizar o produto', error })
    }
  },

  deletar: async (req, res) => {
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