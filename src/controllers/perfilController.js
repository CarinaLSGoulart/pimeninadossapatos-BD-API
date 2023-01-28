const db = require('../database/models');
const Perfil = db.Perfil;


const perfilController = {
    detail: (req, res) => {
        Perfil.findByPk(req.params.id)
            .then(user => res.render('user', { user }))
            .catch(error => res.status(404).json({ success: false }));
    }
};

module.exports = perfilController;