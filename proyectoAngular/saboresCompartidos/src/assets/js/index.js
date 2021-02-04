const queryStringIndex = window.location.search;
const urlParamsIndex = new URLSearchParams(queryStringIndex);
if (urlParamsIndex.get('tutorial') == 'true'){
  introJs().setOption('doneLabel', 'Ir a noticias').start().oncomplete(function() {
      window.location.href = 'noticias.html?tutorial=true';
  });
}
