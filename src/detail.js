/* Obtenenos los datos de los parametros de la URL */

let params = new URLSearchParams(document.location.search)
let id = params.get("id")
 let html = "";

let evento = data.events.find(events => events._id == id);//busca los datos por id

const cardEvents = document.getElementById(".cardevents");/* Renderizar profile */   
function detalle(event){    
    html.innerHTML =`
        <div class="card2">
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src="${evento.image}" class="img-fluid rounded-start" alt="foto de ${evento.nombre}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${evento.name} ${evento.date}</h5>
                            <p class="card-text">${evento.description}</p>
                            <p class="card-text"><small class="text-muted">${evento.price}</small></p>
                            <p class="card-text">${evento.category} ${evento.capacity} ${evento.assistanse}</p>
                            <a href="/index.html" class="btn btn-outline-success">VOLVER</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    
}
console.log(evento)
detalle();