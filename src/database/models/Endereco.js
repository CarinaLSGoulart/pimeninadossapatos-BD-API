const { sequelize, DataTypes, INTEGER } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Endereco = sequelize.define(
        "Endereco",
        {
            idEndereco: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                notNull: true,
                autoIncrement: true,
            },
            cep: DataTypes.STRING,
            rua: DataTypes.STRING,
            numer: DataTypes.STRING,
            cidade: DataTypes.STRING,
            estado: DataTypes.STRING,

        },
        {
            tableName: 'endereco',
            timestamps: false,
            underscored: true,
        })

        Endereco.associate = function(models) {
            Endereco.belongsToMany(models.Perfil, {
                as: "perfil",
                through: "endereco_has_perfil",
                foreignKey: "perfil_id_perfil",
                otherKey:"endereco_id_endereco",
                timestamps: false
            })
        }
    return Endereco;
}