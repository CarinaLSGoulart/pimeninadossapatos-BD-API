const db = require('../database/models');
const Login = db.Login;

const LoginController = {
    listar: async (req, res) => {
        try {
            const logins = await Login.findAll({
                include: [
                    { model: db.Perfil, as: "perfil" }
                ]
            });
            res.render('login', { logins });
        } catch (err) {
            res.status(400).json({ error: [...err] }),
                console.log(err)
        }
    },

    criar: async (req, res) => {
        try {
            const { email, senha } = req.body;
            const novoLogin = await Login.create({ email, senha });
            res.redirect('/login/cadastro');
        } catch (err) {
            res.status(400).json({ error: [...err] }),
                console.log(err)
        }
    },

    atualizar: async (req, res) => {
        try {
            const { idLogin, email, senha } = req.body;
            const loginAtualizado = await Login.update({ email, senha }, { where: { idLogin } });
            res.redirect('/login');
        } catch (err) {
            res.status(400).json({ error: [...err] }),
                console.log(err)
        }
    },

    deletar: async (req, res) => {
        try {
            const { idLogin } = req.params;
            await Login.destroy({ where: { idLogin } });
            res.redirect('/login');
        } catch (err) {
            res.status(400).json({ error: [...err] }),
                console.log(err)
        }
    }
}

module.exports = LoginController;
