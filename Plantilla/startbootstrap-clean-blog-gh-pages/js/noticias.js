const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.get('tutorial') == 'true'){
    introJs().setOption('doneLabel', 'Ver noticia').start().oncomplete(function() {
        window.location.href = 'noticia.html?tutorial=true';
    });
}


