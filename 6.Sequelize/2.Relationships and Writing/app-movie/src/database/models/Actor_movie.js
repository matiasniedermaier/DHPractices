module.exports = (sequelize, dataTypes) => {
    const alias = 'Actor_movie';
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        actor_id: {
            type: dataTypes.INTEGER
        },
        movie_id: {
            type: dataTypes.INTEGER
        }
    };
    const config = {
        tableName: 'actor_movie',
        timestamps: false
    };

    const Actor_movie = sequelize.define(alias, cols, config);
    
    return Actor_movie;
};