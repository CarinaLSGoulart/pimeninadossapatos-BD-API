const { sequelize, DataTypes, INTEGER } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Login = sequelize.define(
        "Login",
        {
            idLogin: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
        },
        {
            tableName: 'login',
            timestamps: false,
            underscored: true,
        }

    )

    Login.associate = function(models) {
        Login.belongsTo(models.Perfil, {
            as: "perfil_login",
            foreignKey: "id_login"
        })
    }
    return Login;
    }