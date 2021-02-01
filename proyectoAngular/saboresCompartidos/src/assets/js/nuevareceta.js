var stepper1Node = document.querySelector('#stepper1')
  var stepper1 = new Stepper(document.querySelector('#stepper1'))

  stepper1Node.addEventListener('show.bs-stepper', function (event) {
    console.warn('show.bs-stepper', event)
  })
  stepper1Node.addEventListener('shown.bs-stepper', function (event) {
    console.warn('shown.bs-stepper', event)
  })

  var stepper2 = new Stepper(document.querySelector('#stepper2'), {
    linear: false,
    animation: true
  })
  var stepper3 = new Stepper(document.querySelector('#stepper3'), {
    animation: true
  })
  var stepper4 = new Stepper(document.querySelector('#stepper4'))

  function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
    
        reader.onload = function (e) {
            $('#noticiaimg')
                .attr('src', e.target.result)
                .width(300)
                .height(300);
        };
    
        reader.readAsDataURL(input.files[0]);
    }
}


function f(idInput, idOutput) {
    var t = document.getElementById(idInput).value;
    document.getElementById(idOutput).innerHTML = t;
 }


 