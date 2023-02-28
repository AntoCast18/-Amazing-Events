const cardEvents = document.querySelector(".cardevents");
const events = data.events;
const  fecha =  data.currentDate;
const pasados = [];
let pasadoHtml = ""; 
function eventosPasados(events, fecha) {
    for (const event of events) {
        if(event.date < fecha){            
            pasados.push(event)
        }
    }
}
eventosPasados (events,  fecha)
function mostrarPasados(events) {
    for (const event of events) {
        pasadoHtml += `
        <div class="col">
            <div class="card h-100">
            <img src=${event.image} class="card-img-top" alt="cinema">
                    <h5 class="card-title">${event.name}</h5>
                    <div class="card-body">
                        <p class="card-text">${event.description}</p>
                        <p class="m-0">Price: $${event.price}</p>
                        <a href="#" class="btn btn-outline-success">Details</a>
                    </div>
            </div>
        </div>`
    }
}
mostrarPasados(pasados) 
cardEvents.innerHTML= pasadoHtml;