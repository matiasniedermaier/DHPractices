module.exports = (sequelize, dataTypes) => {
    const alias = 'Actors';
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        first_name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: dataTypes.DECIMAL
        },
        favorite_movie_id: {
            type: dataTypes.INTEGER,
            foreignKey: true  
        }
    };
    const config = {
        tableName: 'actors',
        timestamps: false
    };

    const Actor = sequelize.define(alias, cols, config);
    
    return Actor;
};