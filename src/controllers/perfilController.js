const db = require('../database/models');
const Perfil = db.Perfil;


const perfilController = {
    listar: (req, res) => {
    Perfil.findAll({
      include: [
          { model: db.Login, as: "perfil_login" }
      ]
  })
      .then(perfil => {
        res.status(200).json(perfil)
      })
      .catch(err => {
        console.log(err)
        res.status(500).json(err); // 500 - Internal error
        //console.log(err)
      })
  },
    detalhar: (req, res) => {
        Perfil.findByPk(req.params.idPerfil)
          .then(perfil => {
            if (!perfil) {
              res.status(404).json(perfil) //404 - Not found
            } else {
              res.status(200).json(perfil)
            }
          })
          .catch(err => {
            res.status(404).json(err)
          })
      },

    criar: (req, res) => {
        Perfil.create(req.body).then(perfil => {
            res.stauts(200).json(perfil)
        })
        .catch(error => {
            res.status(500).json(error)
        })
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
