const { sequelize, DataTypes, INTEGER } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define(
        "Produto",
        {
            idProduto: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                notNull: true,
                autoIncrement: true,
            },
            codigoSku: DataTypes.INTEGER,
            genero: DataTypes.STRING,
            descricao: DataTypes.STRING,
            preco: DataTypes.INTEGER,
            cor: DataTypes.STRING,
            imagem: DataTypes.STRING,
        },
        {
            tableName: 'produto',
            timestamps: false,
            underscored: true,
        })

    Produto.associate = function (models) {
        Produto.belongsTo(models.Estoque, {
            as: "estoque",
            foreignKey: "estoque_id_estoque"
        })
    }
    return Produto;
}