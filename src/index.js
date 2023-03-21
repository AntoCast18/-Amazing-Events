function generarCards(arrayEvents) {
    let tarjetas = "";
    for (const event of arrayEvents) {
        tarjetas += createCards(event);
    }
    return tarjetas
}