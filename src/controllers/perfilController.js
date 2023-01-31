const db = require('../database/models');
const Perfil = db.Perfil;


const perfilController = {
    detalhar: async (req, res) => {
        try {
            const user = await Perfil.findByPk(req.params.id);
            if (!user) {
                return res.status(404).json({ success: false, error: 'Usuário não encontrado' });
            }
            return res.render('user', { user });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ success: false, error: 'Erro ao buscar usuário' });
        }
    },

    criar: async (req, res) => {
        try {
            const { nome, sobrenome, email, senha } = req.params;
            await Perfil.create({ nome, sobrenome, email, senha });
            return res.json({ success: true });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ success: false, error: 'Erro ao criar usuário' });
        }
    },

    atualizar: (req, res) => {
        Perfil.update({
            nome: req.params.name,
            sobrenome: req.params.lastname,
            email: req.params.email,
            senha: req.params.password
        }, {
            where: { id: req.params.id }
        })
        .then(user => res.status(200).json({ success: true }))
        .catch(error => res.status(400).json({ success: false }));
    },

    deletar: (req, res) => {
        Perfil.destroy({
            where: { id: req.params.id }
        })
        .then(() => res.status(200).json({ success: true }))
        .catch(error => res.status(400).json({ success: false }));
    },
};

module.exports = perfilController;
