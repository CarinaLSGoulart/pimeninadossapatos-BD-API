const db = require('../database/models');
const Login = db.Login;

const LoginController = {
    listar: (req, res) => {
        Login.findAll({
            include: [
                { model: db.Perfil, as: "perfil_login" }
            ]
        })
            .then(login => {
                res.status(200).json(login)
            })
            .catch(err => {
                console.error(err)
                res.status(500).json({ error: 'Ocorreu um erro interno ao buscar logins' });
            })
    },

    detalhar: (req, res) => {
        Login.findByPk(req.params.idLogin)
            .then(login => {
                if (!login) {
                    res.status(404).json({ error: 'Login não encontrado' })
                } else {
                    res.status(200).json(login)
                }
            })
            .catch(err => {
                console.error(err)
                res.status(500).json({ error: 'Ocorreu um erro interno ao buscar login' });
            })
    },

    logar: (req, res) => {
        Login.findOne({
            where: {
                email: req.body.email,
                senha: req.body.password
            }
        })
            .then(login => {
                if (!login) {
                    res.status(401).json({ error: 'E-mail ou senha inválidos' });
                } else {
                    res.status(200).json({ success: true, login });
                }
            })
            .catch(error => {
                console.error(error)
                res.status(500).json({ error: 'Ocorreu um erro interno ao logar!' })
            })
    },

    criar: (req, res) => {
        Login.create(req.body).then(login => {
            res.status(201).json(login)
        })
            .catch(error => {
                console.error(error)
                res.status(500).json({ error: 'Ocorreu um erro interno ao criar login' });
            })
    },

    atualizar: (req, res) => {
        Login.update({
            email: req.body.email,
            senha: req.body.password
        }, {
            where: { id: req.params.id }
        })
            .then(() => res.status(200).json({ success: true }))
            .catch(error => {
                console.error(error)
                res.status(400).json({ error: 'Ocorreu um erro ao atualizar login' });
            });
    },

    deletar: (req, res) => {
        Login.destroy({
            where: { id: req.params.id }
        })
            .then(() => res.status(200).json({ success: true }))
            .catch(error => {
                console.error(error)
                res.status(400).json({ error: 'Ocorreu um erro ao deletar login' });
            });
    }
}


module.exports = LoginController;
