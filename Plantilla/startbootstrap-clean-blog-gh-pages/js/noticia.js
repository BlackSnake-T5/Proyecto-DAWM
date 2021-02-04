const queryStringNoticia = window.location.search;
const urlParams = new URLSearchParams(queryStringNoticia);
if (urlParams.get('tutorial') == 'true'){
    introJs().setOption('doneLabel', 'Ir a recetas').start().oncomplete(function() {
        window.location.href = 'recetas.html?tutorial=true';
    });
}


