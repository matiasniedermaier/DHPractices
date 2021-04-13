module.exports = (sequelize, dataTypes) => {
    const alias = 'Movies';
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: dataTypes.DECIMAL,
            allowNull: false
        },
        awards: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        release_date: {
            type: dataTypes.DATE,
            allowNull: false
        },
        length: {
            type: dataTypes.INTEGER
        },
        genre_id: {
            type: dataTypes.INTEGER,
            foreignKey: true
        }
    };
    const config = {
        tableName: 'movies',
        timestamps: false
    };

    const Movie = sequelize.define(alias, cols, config);

    Movie.associate = function(model) {
        Movie.belongsTo(model.Genres, {
            as: "genres",
            foreignKey: "genre_id"
        });
        Movie.belongsToMany(model.Actors, {
            as: "actors",
            through: "actor_movie",
            foreignKey: "movie_id",
            otherKey: "actor_id",
            timestamps: false
        });
    }
    
    return Movie;
};