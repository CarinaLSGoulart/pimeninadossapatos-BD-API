const db = require('../database/models');
const Pedido = db.Pedido;

const pedidoController = {
    listar: (req, res) => {
        Pedido.findAll()
            .then(pedidos => {
                res.status(200).json(pedidos)
            })
            .catch(err => {
                res.status(500).json(err);
            })
    },

    criar: (req, res) => {

    },

    atualizar: (req, res) => {

    },

    deletar: (req, res) => {

    },
}


module.exports = pedidoController;