/* Obtenenos los datos de los parametros de la URL */
let params = new URLSearchParams(document.location.search)
let id = params.get("id")

let evento = data.events.filter(events => events._id == id);//busca los datos por id

const cardEvents = document.querySelector(".cardevents");/* Renderizar profile */
let html = "";
html = `
        <div class="col">
            <div class="card" >
                    <img src="${evento[0].image}" class="img-fluid rounded-start" alt="foto de ${evento[0].nombre}">
                
                        <div class="card-body">
                            <h5 class="card-title">${evento[0].name} ${evento[0].date}</h5>
                            <p class="card-text">${evento[0].description}</p>
                            <p class="card-text"><small class="text-muted">${evento[0].price}</small></p>
                            <p class="card-text">${evento[0].category} ${evento[0].capacity} ${evento[0].assistanse}</p>
                            <input type="button" onclick="backk('${evento[0]._id}')" value="VOVLER" id="button" class="btn btn-outline-success">
                            </div>
                    </div>
               
        </div>`
        function backk(id) {
            window.location.href = `index.html?id=${id}`
        }
cardEvents.innerHTML = html;