const functions = require ('../customFunctions');
const faqs = functions.readJson('./data/faqs.json');
let faq = '';
let question = '';
let answer = '';

// Título Preguntas Frecuentes
faq = 'Preguntas Frecuentes\n\n';

// Total de preguntas
faqs.forEach( questions => {
    faq = faq.concat(questions.faq_title + '\n');
});

// Listado de preguntas
faq = faq.concat('\n\nListado de Preguntas\n\n')
faqs.forEach( questions => {
    question = questions.faq_title;
    answer = questions.faq_answer;
    faq = faq.concat(question + '\n' + answer + '\n\n');
});

module.exports = faq;