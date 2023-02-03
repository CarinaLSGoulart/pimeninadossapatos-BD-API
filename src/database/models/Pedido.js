const { sequelize, DataTypes, INTEGER } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Pedido = sequelize.define(
        "Pedido",
        {
            idPedido: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                notNull: true,
                autoIncrement: true,
            },
            codigoSku: DataTypes.STRING,
            quantidade: DataTypes.STRING,
            numero: DataTypes.STRING,
        },
        {
            tableName: 'pedido',
            timestamps: false,
            underscored: true,
        }

    )
    return Pedido;
}