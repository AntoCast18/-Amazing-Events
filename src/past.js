const cardEvents = document.querySelector(".cardevents");
const events = data.events;
const  fecha =  data.currentDate;
const pasados = [];
let pasadoHtml = ""; 
let arrayCheck = []; //  checkbox seleccionados
let search = ''; 

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
mostrarPasados(pasados) 
cardEvents.innerHTML= pasadoHtml;
function categories() {//  
    let checkbox = document.getElementById('checkboxes-container');
    let templateCheckbox = '';
    let categories = data.events.map(event => event.category);
    let setCategories = new Set(categories);
    let arrayCategories = [...setCategories];

    arrayCategories.forEach((category, id) => {
        templateCheckbox += `   
                        <div class="form-check form-check-inline"> 
                            <input class="form-check-input" type="checkbox" id="${id}" value="${category}">
                            <label class="form-check-label" for="${id}">${category}</label>
                        </div> `
        checkbox.innerHTML = templateCheckbox;
       
    })
}
categories(); // trae las categoria a los chechbox (funciona)

function checkboxF() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (box) => {
            if (box.target.arrayCheck) {
                arrayCheck.push(box.target.value);
            } else {
                arrayCheck = arrayCheck.filter(uncheck => uncheck != box.target.value);
            }
            busqueda();
        });
    }); console.log(checkboxes) 
}
checkboxF(); // va a escuchar los eventos del checkbox (funciona)


function searchCat() {
    let input = document.getElementById('search');
    input.addEventListener('keyup', (events) => {
        search = events.target.value; 
        busqueda();
    }); console.log(search) 
} 
searchCat();// escucha desde el INPUT


function busqueda() {
    let filteredEvents = [];
    if (arrayCheck.length > 0 && search !== "") {
        arrayCheck.map(cat => {
            filteredEvents.push(...data.events.filter(event => 
                event.name.toLowerCase().includes(search.trim().toLowerCase()) && event.category == cat))
        })
        console.log(filteredEvents)
    } else if (arrayCheck.length > 0 && search === "") {
        arrayCheck.map(cat => {
            filteredEvents.push(...data.events.filter(event => event.category == cat))
        })
    } else if (arrayCheck.length == 0 && search !== "") {
        filteredEvents.push(...data.events.filter(event => 
            event.name.toLowerCase().includes(search.trim().toLowerCase())))
    } else {
        filteredEvents.push(...data.events);
    }
    console.log(filteredEvents) 
    mostrarPasados(filteredEvents);
}
busqueda();// BUSCAR POR INPUT Y CHECKBOX (no funciona)