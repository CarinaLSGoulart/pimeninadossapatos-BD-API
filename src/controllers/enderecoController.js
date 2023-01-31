const db = require('../database/models');
const Endereco = db.Endereco;

const enderecoController = {
    store: async (req, res) => {
        try {
            const endereco = await Endereco.create(req.body);
            return res.json(endereco);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    index: async (req, res) => {
        try {
            const enderecos = await Endereco.findAll({
                include: [
                    { model: db.Perfil, as: "perfil" }
                ]
            });
            return res.json(enderecos);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    show: async (req, res) => {
        try {
            const endereco = await Endereco.findByPk(req.params.id);
            return res.json(endereco);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    update: async (req, res) => {
        try {
            const endereco = await Endereco.update(req.body, { where: { idEndereco: req.params.id } });
            return res.json({ message: "Endereço atualizado com sucesso", data: endereco });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    delete: async (req, res) => {
        try {
            const endereco = await Endereco.destroy({ where: { idEndereco: req.params.id } });
            return res.json({ message: "Endereço excluído com sucesso", data: endereco });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}

module.exports = enderecoController;
