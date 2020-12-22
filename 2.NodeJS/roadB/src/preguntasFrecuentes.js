const faqs = require('../data/faqs.json');

let preguntasFrecuentes = (req, res) => {
    // Título
    res.write('Preguntas Frecuentes\n\n\n');
    // Total de preguntas
    res.write('Total de preguntas: ' + faqs.total_faqs + '\n\n\n');
    // Listado de preguntas
    let faqsList = faqs.faqs;
    faqsList.forEach( (faq) => {
        res.write(faq.faq_title + '\n');
        res.write(faq.faq_answer + '\n\n');
    });
    return res.end();
};

module.exports = preguntasFrecuentes;