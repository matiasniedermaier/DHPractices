module.exports = (sequelize, dataTypes) => {
    const alias = 'Genres';
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
        ranking: {
            type: dataTypes.INTEGER,
            allowNull: true
        },
        active: {
            type: dataTypes.INTEGER,
            allowNull: true
        }
    };
    const config = {
        tableName: 'genres',
        timestamps: false
    };

    const Genre = sequelize.define(alias, cols, config);

    Genre.associate = function(model) {
        Genre.hasMany(model.Movies, {
            as: "movies",
            foreignKey: "genre_id"
        });
    }
    
    return Genre;
};