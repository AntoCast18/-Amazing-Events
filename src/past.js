function generarTarjetas(arrayEvents) {
    let tarjetas = "";
    for (const event of arrayEvents) {
      if (Date.parse(event.date) < Date.parse(data.currentDate)) {
        tarjetas += crearTarjeta(event);
      }
    }
    return tarjetas;
  }
  
  let categoriaSelect = []
  
  const contTarjeta = document.querySelector(".cardevents");
  let tarjetasGeneradas = generarTarjetas(data.events);
  contTarjeta.innerHTML = tarjetasGeneradas;
  
  const categorias = document.getElementById('checkboxes-container')

  let categoriasFiltradas = eliminarDuplicados(data.events.map((cat)=> cat.category));
  let catGeneradas = cargarCategorias(categoriasFiltradas);
  categorias.innerHTML = catGeneradas;
  

  let checks = document.querySelectorAll('.valoresCheck');

  checks.forEach((e)=>{
    e.addEventListener('change', ()=>{
        if (e.checked){
            categoriaSelect.push(e.value);
        }else{
            categoriaSelect.splice(categoriaSelect.indexOf(e.value),1);
        }
        let eventosEncontrados = buscar();
        contTarjeta.innerHTML = generarTarjetas(eventosEncontrados);
    });
  });
  

  let buscador = document.getElementById('search');
  buscador.addEventListener('keyup',()=> { 
    let eventosEncontrados = buscar();
    contTarjeta.innerHTML = generarTarjetas(eventosEncontrados);
  });