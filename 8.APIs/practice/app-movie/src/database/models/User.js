module.exports = (sequelize, dataTypes) => {
    const alias = 'Users';
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
        },
        remember_token: {
            type: dataTypes.STRING,
            allowNull: false
        }
    };
    const config = {
        tableName: 'users',
        timestamps: false
    };

    const User = sequelize.define(alias, cols, config);
    
    return User;
};