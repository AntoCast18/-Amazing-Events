const cardEvents = document.querySelector(".cardevents");
const events = data.events;
let arrayCheck = []; //  para los checkbox seleccionados
let search = ''; 
let eventosHtml = "";

function mostrarEvents(events){
    for (const event of events){
        eventosHtml += `
        <div class="col1">
            <div class="card h-100">
            <img src=${event.image} class="card-img-top" alt="cinema">
                    <h5 class="card-title">${event.name}</h5>
                    <div class="card-body">
                        <p class="card-text">${event.description}</p>
                        <p class="m-0">Price: $${event.price}</p>
                        <a href="details.html?id=${event._id}" class="btn btn-outline-success">Details</a>
                    </div>
            </div>
        </div>`
    }
  
}
 mostrarEvents(events)  
cardEvents.innerHTML= eventosHtml;

function seeDetail(id) {
    window.location.href = `./details.html?id=${id}`
}

//crear Checkbox
function crearCheckbox(cat,i){
    return `
    <div class="form-check form-check-inline m-0">
        <input class="form-check-input valoresCheck" type="checkbox" name="categorias" id="categoria${i}" value="${cat}"   />
        <label class="form-check-label" for="categoria${i}">${cat}</label>
    </div>`
  }

//Categorias
function cargarCategorias(arrayCat){
    let categorias = "";
    for (let i=0;i<arrayCat.length;i++){
        categorias +=  crearCheckbox(arrayCat[i],i);
    }
    return categorias;
  }

  //filtrar Checkbox 
  function filtrarCheckbox(events,checkbox){
    let eventfiltrados = [];
    if(checkbox.length > 0){
        checkbox.forEach((categoria)=>{
            events.forEach((event)=>{
                if(event.category==categoria){
                    eventfiltrados.push(event);
                }
            });        
        });
    }else{
        eventfiltrados = events;
    }
    return eventfiltrados;
  }

  function buscar(){
    let eventosEncontrados = [];
    let eventCheckbox = filtrarCheckbox(events, categoriaSelect);
    eventosEncontrados = eventCheckbox.filter((event)=>{
        return eventosFiltrados = (event.name.toLowerCase().includes(buscador.value.toLowerCase()));
    });
    return eventosEncontrados;
  }

// sacar los duplicados del array
function eliminarDuplicados (array){
    let unicos = []
    for(let i = 0 ; i< array.length; i++){
        if (!unicos.includes(array[i])){
            unicos.push(array[i])
        }
    }
    return unicos
  }
  
  let categoriaSelect = []

//Checkbox
// checkbox de cada categoria
const categorias = document.getElementById('checkboxes-container')
// array de categorias
let categoriasFiltradas = eliminarDuplicados(events.map((cat)=> cat.category));
let catGeneradas = cargarCategorias(categoriasFiltradas);
categorias.innerHTML = catGeneradas;

//filtrado por checkbox
let checks = document.querySelectorAll('.valoresCheck');
checks.forEach((e)=>{//escucha los eventos de cada checkbox
  e.addEventListener('change', ()=>{
      if (e.checked){//agrego elemento a la lista o lo saco
          categoriaSelect.push(e.value);
      }else{
          categoriaSelect.splice(categoriaSelect.indexOf(e.value),1);
      }
      let eventosEncontrados = buscar();
      cardEvents.innerHTML = mostrarEvents(eventosEncontrados);
  });
});

//Buscador
let buscador = document.getElementById('search');
buscador.addEventListener('keyup',()=> { 
  let eventosEncontrados = buscar();
  cardEvents.innerHTML =mostrarEvents(eventosEncontrados);
});