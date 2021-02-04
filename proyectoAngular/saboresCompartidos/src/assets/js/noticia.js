const queryStringNoticia = window.location.search;
const urlParamsNoticia = new URLSearchParams(queryStringNoticia);
if (urlParamsNoticia.get('tutorial') == 'true'){
    introJs().setOption('doneLabel', 'Ir a recetas').start().oncomplete(function() {
        window.location.href = 'recetas.html?tutorial=true';
    });
}


