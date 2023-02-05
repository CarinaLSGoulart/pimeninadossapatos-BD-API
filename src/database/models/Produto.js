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
            nome: DataTypes.STRING,
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
        Produto.belongsToMany(models.Estoque, {
            as: "estoque",
            through: "produto_has_estoque",
            foreignKey: "estoque_id_estoque",
            otherKey: "produto_id_produto",
            timestamps: false,
        })
    }
    return Produto;
}