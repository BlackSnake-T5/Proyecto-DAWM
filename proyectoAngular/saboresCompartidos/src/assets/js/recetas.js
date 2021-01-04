const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if (urlParams.get('tutorial') == 'true'){
  introJs().setOption('doneLabel', 'Ver receta').start().oncomplete(function() {
      window.location.href = 'receta.html?tutorial=true';
  });
}
