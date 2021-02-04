let cargarDatos = () => {

  
    fetch('https://saborescompartidos.herokuapp.com/api/v1/contact-users')
    .then( (resultado) => {
      return resultado.text() 
    })
    .then( (str) => {
      
      let json = JSON.parse(str);


      var tablebody = document.getElementById("tablebody");   
      


  
      for (var i = 0; i < json.length; i++) {

        tr = tablebody.insertRow();
        var tabCell1 = tr.insertCell();
        tabCell1.innerHTML = json[i]["first_name"]+ " "+json[i]["last_name"];
        var tabCell2 = tr.insertCell();
        tabCell2.innerHTML = json[i]["country"];
        var tabCell3 = tr.insertCell();
        tabCell3.innerHTML = json[i]["email"];
        var tabCell4 = tr.insertCell();
        tabCell4.innerHTML = json[i]["message"];
        var tabCell4 = tr.insertCell();
        tabCell4.innerHTML = json[i]["creation_date"].split("T")[0];
    }
    $('#dataTable').DataTable();
    }).catch( (error) => {
      console.log("Error ",error)
    })
  
  }
  document.addEventListener('DOMContentLoaded', function() {
    cargarDatos();
    
  })
  
  