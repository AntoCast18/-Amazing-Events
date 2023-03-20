function crearTarjeta(event) {
    return `
    <div class="col1">
    <div class="card h-100">
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
function generarTarjetas(arrayEvents) {
    let tarjetas = "";
    for (const event of arrayEvents) {
        tarjetas += crearTarjeta(event);
    }
    return tarjetas
}

let categoriaSelect = []

const contTarjeta = document.querySelector(".cardevents");
let tarjetasGeneradas = generarTarjetas(data.events);
contTarjeta.innerHTML = tarjetasGeneradas;

const categorias = document.getElementById("checkboxes-container")

let categoriasFiltradas = eliminarDuplicados(data.events.map((cat) => cat.category));
let catGeneradas = cargarCategorias(categoriasFiltradas);
categorias.innerHTML = catGeneradas;

let checks = document.querySelectorAll('.valoresCheck');

checks.forEach((e) => {
    e.addEventListener('change', () => {
        if (e.checked) {
            categoriaSelect.push(e.value);
        } else {
            categoriaSelect.splice(categoriaSelect.indexOf(e.value), 1);
        }
        let eventosEncontrados = buscar();
        contTarjeta.innerHTML = generarTarjetas(eventosEncontrados);
    });
});

let buscador = document.getElementById('search');
buscador.addEventListener('keyup', () => {
    let eventosEncontrados = buscar();
    contTarjeta.innerHTML = generarTarjetas(eventosEncontrados);
});