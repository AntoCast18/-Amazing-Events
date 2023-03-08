const cardEvents = document.querySelector(".cardevents");
const events = data.events;
const  fecha =  data.currentDate;
const futuros = [];
let futurosHtml = ""; 
function eventosFututros(events, fecha) {
    for (const event of events) {
        if(event.date >  fecha){            
            futuros.push(event)
        }
    }
}
eventosFututros (events,  fecha)
function mostrarFuturos(events) {
    for (const event of events) {
        futurosHtml += `
        <div class="col">
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
mostrarFuturos(futuros) 
cardEvents.innerHTML= futurosHtml;