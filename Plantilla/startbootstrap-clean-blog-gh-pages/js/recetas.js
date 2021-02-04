const queryStringRecetas = window.location.search;
const urlParams = new URLSearchParams(queryStringRecetas);
if (urlParams.get('tutorial') == 'true'){
  introJs().setOption('doneLabel', 'Ver receta').start().oncomplete(function() {
      window.location.href = 'receta.html?tutorial=true';
  });
}
