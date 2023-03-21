function generarCards(arrayEvents) {
    let tarjetas = "";
    for (const event of arrayEvents) {
      if (Date.parse(event.date) < Date.parse(data.currentDate)) {
        tarjetas += createCards(event);
      }
    }
    return tarjetas;
  }