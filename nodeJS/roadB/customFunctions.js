const movies = require('./data/movies.json');
const faqs = require('./data/faqs.json');
const theaters = require('./data/theaters.json');

let CustomFunctions = {
    moviesList: () => {
        let moviesList = movies.movies;
        moviesList = moviesList.map( movie => {
            return movie.title;
        });
        return moviesList = moviesList.sort();
    },
    mostAverage: () => {
        let mostAverage = movies.movies;
        return mostAverage = mostAverage.filter( movie => {
            return movie.vote_average >= 7;
        });
    },
    average: () => {
        let mostAverage = movies.movies;
        mostAverage = mostAverage.filter( movie => {
            return movie.vote_average >= 7;
        });
        let average = mostAverage.map( movie => {
            return movie.vote_average
        });
        average = average.reduce( (x, average) => {
            return x + average;
        });
        return average = (average/mostAverage.length).toFixed(1);
    }
};

module.exports = CustomFunctions;