const db = require('../database/models');
const Estoque = db.Estoque;

const estoqueController = {
    list: (req, res) => {
        Estoque.findAll({
            include: [
                { model: db.Produto, as: "produto" }
            ]
        })
            .then(estoques => {
                res.status(200).json(estoques)
            })
            .catch(err => {
                res.status(500).json(err);
            })
    }
}

module.exports = estoqueController;