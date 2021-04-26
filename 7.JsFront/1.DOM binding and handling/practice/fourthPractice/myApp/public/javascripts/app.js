window.onload = function() {
    let start = confirm('Quieres iniciar el proceso?');
    if( start ) {
        let totalFamily = prompt('Cuantos familiares son?');
        totalFamily = Number(totalFamily);
        if( totalFamily && totalFamily > 2 ) {
            let family = [];
            let totalExpense = 0;
            let mostExpense = { name: '', expense: 0 };
            let lowerExpense = { name: '', expense: 1000000000000000 };
            for( let i = 0; i < totalFamily; i++) {
                let name = '';
                let expense = 0;
                do {
                    name = prompt('Nombre del familiar');
                } while( name.length == 0 )
                do {
                    expense = prompt('Gastos que tuvo');
                    expense = Number(expense);
                } while( !expense )
                family[i] = {
                    name: name,
                    expense: expense
                };
                totalExpense += expense;
                if( mostExpense.expense < expense ) {
                    mostExpense.expense = expense;
                    mostExpense.name = name;
                }
                if( lowerExpense.expense > expense ) {
                    lowerExpense.expense = expense;
                    lowerExpense.name = name;
                }
            }
            console.log(family);
            document.querySelector('.mostExpense').innerText += ` ${mostExpense.name} con gastos de ${mostExpense.expense}`; 
            document.querySelector('.lowerExpense').innerText += ` ${lowerExpense.name} con gastos de ${lowerExpense.expense}`;
            document.querySelector('.totalExpense').innerText += totalExpense;
        } else {
            alert('Debes ingresar un número y que sea mayor a 2');
            location.reload();
        }
    } else {
        alert('Gracias por haber venido');
        window.location.href = 'http://netflix.com'
    }
};