if( document.readyState !== 'loading' ) {
    cargarLugares()
} else {
    document.addEventListener('DOMContentLoaded', function () {
        cargarLugares()
    });
}

let cargarLugares= () =>{
    fetch('https://data.nasa.gov/api/views/yqhp-cuk8/rows.json?accessType=DOWNLOAD')
    .then( (resultado) => {
      return resultado.json()
    }).then( (json) =>{
        let select = document.getElementById('lugar')
        for (let pais of json.data){
            let option = document.createElement('option')
            option.value = pais[8]
            option.textContent = pais[8]
            select.appendChild(option)
        }
    }).catch( (error) => {
      console.log("Error ",error)
    })
}