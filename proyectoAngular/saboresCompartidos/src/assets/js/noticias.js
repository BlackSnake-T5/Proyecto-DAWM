const queryStringNoticias = window.location.search;
const urlParamsNoticias = new URLSearchParams(queryStringNoticias);

if (urlParams.get('tutorial') == 'true'){
    introJs().setOption('doneLabel', 'Ver noticia').start().oncomplete(function() {
        window.location.href = 'noticia.html?tutorial=true';
    });
}


