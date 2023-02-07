const { sequelize, DataTypes, INTEGER } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Perfil = sequelize.define(
        "Perfil",
        {
            idPerfil: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                notNull: true,
                autoIncrement: true,
            },
            nome: DataTypes.STRING,
            sobrenome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
        },
        {
            tableName: 'perfil',
            timestamps: false,
            underscored: true,
        })

        Perfil.associate = function(models) {
            Perfil.belongsToMany(models.Endereco, {
                as: "perfil",
                through: "endereco_has_perfil",
                foreignKey: "endereco_id_endereco",
                otherKey:"perfil_id_perfil",
                timestamps: false
            })
        }

        Perfil.associate = function(models) {
            Perfil.belongsTo(models.Login, {
                as: "perfil",
                foreignKey: "id_perfil"
            })
        }

    return Perfil;
}