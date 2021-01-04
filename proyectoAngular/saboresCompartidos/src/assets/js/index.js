const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if (urlParams.get('tutorial') == 'true'){
  introJs().setOption('doneLabel', 'Ir a noticias').start().oncomplete(function() {
      window.location.href = 'noticias.html?tutorial=true';
  });
}
