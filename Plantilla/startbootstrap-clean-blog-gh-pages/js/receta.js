const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if (urlParams.get('tutorial') == 'true'){
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