const url = 'https://mindhub-xj03.onrender.com/api/amazing' //api
const contTarjeta = document.querySelector(".cardevents");//cards
const categorias = document.getElementById('checkboxes-container');//Checkbox
let categoriaSelect = [];
let datosAPI = {}

function createCards(event) {
    return `
    <div class="col1">
    <div class="card">
            <img src="${event.image}" class="card-img-top" alt="Images">
            <div class="card-body">
                <h5 class="card-title">${event.name}</h5>
                <P>Date: ${event.date}</p>
                <div class="card-bottom d-flex flex-column justify-content-between">
                    <p class="card-text">${event.description}</p>
                    <p>Price: $ ${event.price}</P>
                    <input type="button"  onclick="seeDetail('${event._id}')" value="See more" class="btn btn-primary">
                </div>
                </div>   
            </div>
        </div>`
}

function seeDetail(id) {
    window.location.href = `./details.html?id=${id}`
}
//Categorias
function cargarCategorias(arrayCat) {
    let categorias = "";
    for (let i = 0; i < arrayCat.length; i++) {
        categorias += checkBoxs(arrayCat[i], i);
    }
    return categorias
}

function checkBoxs(cat, i) {
    return `
    <div class="form-check form-check-inline m-0">
        <input class="form-check-input valoresCheck" type="checkbox" name="categorias" id="categoria${i}" value="${cat}"   />
        <label class="form-check-label" for="categoria${i}">${cat}</label>
    </div>`
}
function filtrarCheck(events, checkbox) {
    let eventfiltrados = [];
    if (checkbox.length > 0) {
        checkbox.forEach((categoria) => {
            events.forEach((event) => {
                if (event.category == categoria) {
                    eventfiltrados.push(event);
                }
            });
        });
    } else {
        eventfiltrados = events;
    }
    return eventfiltrados;
}

function buscar() {
    let eventosEncontrados = [];
    let eventCheckbox = filtrarCheck(datosAPI.events, categoriaSelect);
    eventosEncontrados = eventCheckbox.filter((event) => {
        return eventosFiltrados = (event.name.toLowerCase().includes(buscador.value.toLowerCase()));
    });
    return eventosEncontrados;
}

function deletCards(array) {
    let unicos = []
    for (let i = 0; i < array.length; i++) {
        if (!unicos.includes(array[i])) {
            unicos.push(array[i])
        }
    }
    return unicos
}
function modificarArrayCheck(e) {
    if (e.checked) {
        categoriaSelect.push(e.value);
    } else {
        categoriaSelect.splice(categoriaSelect.indexOf(e.value), 1);
    }
    let eventosEncontrados = buscar();
    contTarjeta.innerHTML = generarCards(eventosEncontrados);
}

//ASYNCHRONISM
fetch(url).then(response => response.json())
    .then(datosApi => {
        //Guardo los datos en una variable global
        datosAPI = datosApi
        //Cargo las tarjetas
        contTarjeta.innerHTML = generarCards(datosApi.events);
        //Cargo los checkbox
        let categoriasFiltradas = deletCards(datosApi.events.map((cat) => cat.category));
        categorias.innerHTML = cargarCategorias(categoriasFiltradas);
        //Implementaré un método de filtrado por checkbox
        let checks = document.querySelectorAll('.valoresCheck');
        checks.forEach((e) => {
            e.addEventListener('change', () => modificarArrayCheck(e));
        });
    }).catch(error => console.error(error.message))

//Buscador
let buscador = document.getElementById('search');
buscador.addEventListener('keyup', () => {
    let eventosEncontrados = buscar();
    contTarjeta.innerHTML = generarCards(eventosEncontrados);
});