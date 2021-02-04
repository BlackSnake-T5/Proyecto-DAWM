const queryStringRecetas = window.location.search;
const urlParamsRecetas = new URLSearchParams(queryStringRecetas);
if (urlParamsRecetas.get('tutorial') == 'true'){
  introJs().setOption('doneLabel', 'Ver receta').start().oncomplete(function() {
      window.location.href = 'receta.html?tutorial=true';
  });
}
