const db = require('../database/models');
const Login = db.Login;

    const LoginController = {
        list: async (req, res) => {
            try {
                const logins = await Login.findAll();
                res.render('login', { logins });
            } catch (err) {
                res.status(400).json({ error: [...err] }),
                console.log(err)
              }
        },
       
        create: async (req, res) => {
            try {
                const { email, senha } = req.body;
                const novoLogin = await Login.create({ email, senha });
                res.redirect('/login');
            }catch (err) {
                res.status(400).json({ error: [...err] }),
                console.log(err)
              }
        },
        
        update: async (req, res) => {
            try {
                const { idLogin, email, senha } = req.body;
                const loginAtualizado = await Login.update({ email, senha }, { where: { idLogin } });
                res.redirect('/login');
            } catch (err) {
                res.status(400).json({ error: [...err] }),
                console.log(err)
              }
        },
        
        delete: async (req, res) => {
            try {
                const { idLogin } = req.params;
                await Login.destroy({ where: { idLogin } });
                res.redirect('/login');
            } catch (err) {
                res.status(400).json({ error: [...err] }),
                console.log(err)
              }
        }}

    module.exports = LoginController;
