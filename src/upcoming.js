function generarTarjetas(arrayEvents) {
    let tarjetas = "";
    for (const event of arrayEvents) {
      if (Date.parse(event.date) > Date.parse(data.currentDate)) {
        tarjetas += crearTarjeta(event);
      }
    }
    return tarjetas;
  }
  
  let categoriaSelect = []
  
  //se cargan las tarjetas de los eventos
  const contTarjeta = document.querySelector(".cardevents");
  let tarjetasGeneradas = generarTarjetas(data.events);
  contTarjeta.innerHTML = tarjetasGeneradas;
  
  // se cargan los checkbox de cada categoria
  const categorias = document.getElementById('checkboxes-container')
  //voy obtener un array de categorias
  let categoriasFiltradas = eliminarDuplicados(data.events.map((cat)=> cat.category));
  let catGeneradas = cargarCategorias(categoriasFiltradas);
  categorias.innerHTML = catGeneradas;
  
  // filtrado por checkbox
  let checks = document.querySelectorAll('.valoresCheck');

  //escucho los eventos de cada uno de los checkbox
  checks.forEach((e)=>{
    e.addEventListener('change', ()=>{
        if (e.checked){//agrego elemento a la lista o lo saco
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