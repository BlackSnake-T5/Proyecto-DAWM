const queryStringReceta = window.location.search;
const urlParamsReceta = new URLSearchParams(queryStringReceta);
if (urlParamsReceta.get('tutorial') == 'true'){
  introJs().setOption('doneLabel', 'Finalizar tutorial').start().oncomplete(function() {
      window.location.href = 'index.html';
  });
}



// Reply box popup JS
$(document).ready(function(){
  $(".reply-popup").click(function(){
    $(".reply-box").toggle();
  });
});