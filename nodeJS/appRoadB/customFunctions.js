const fs = require ('fs');
let data = '';
let dataJson = '';
let num = 1;
let sum = 0;
let average = '';

// Functions
let functions = {
    // Lee archivos JSON
    readJson: archive => {
        dataJson = fs.readFileSync(archive);
        data = JSON.parse(dataJson);
        return data;
    },
    // Ordena alfabeticamente
    alphabetical: movies => {
        data = movies.map( movie => {
            return movie.title;
        });
        data = data.sort();
        return data;
    },
    // Rating >= 7
    mostRated: movies => {
        data = movies.filter( movie => {
            return movie.vote_average >= 7;
        });
        return data;
    },
    // Promedio
    average: movies => {
        num = 0, sum = 0;
        movies.forEach( movie => {
            sum += movie.vote_average;
            num++;
        });
        average = sum / num;
        average = Number(average).toFixed(2);
        return average;
    }
};

module.exports = functions;
