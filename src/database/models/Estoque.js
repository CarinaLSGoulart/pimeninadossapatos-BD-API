const { sequelize, DataTypes, INTEGER } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Estoque = sequelize.define(
        "Estoque",
        {
            idEstoque: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            notNull: true,
            autoIncrement: true,
        },
        numeracao: DataTypes.TINYINT,
        quantidade: DataTypes.TINYINT,
        codigoSku: DataTypes.STRING,
        },
        {
            tableName: 'estoque',
            timestamps: false,
            underscored: true,
        })

        Estoque.associate = function(models) {
            Estoque.belongsToMany(models.Produto, {
                as: "Produto",
                through: "produto_has_estoque",
                foreignKey: "estoque_id_estoque",
                otherKey: "produto_id_produto",
                timestamps: false,
            })
        }
        
    return Estoque;
}