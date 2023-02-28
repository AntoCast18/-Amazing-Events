const cardEvents = document.querySelector(".cardevents");
const events = data.events;
let eventosHtml = "";
function mostrarEvents(events){
    for (const event of events){
        eventosHtml += `
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
mostrarEvents(events) 
cardEvents.innerHTML= eventosHtml;