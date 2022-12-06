const db = require('../database/models');
const Produto = db.Produto;

const produtoController = {
    list: (req, res) => {
        Produto.findAll({
            include: [
                { model: db.Produto, as: "produto" }
            ]
        })
            .then(produtos => {
                res.status(200).json(produtos)
            })
            .catch(err => {
                res.status(500).json(err); // 500 - Internal error
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
    }
}

module.exports = produtoController;