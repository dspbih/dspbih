function prikaziVrijeme() {

    const sada = new Date();

    const dani = [
        "Nedjelja",
        "Ponedjeljak",
        "Utorak",
        "Srijeda",
        "Četvrtak",
        "Petak",
        "Subota"
    ];

    const dan = dani[sada.getDay()];

    const datum = sada.toLocaleDateString("bs-BA");

    const vrijeme = sada.toLocaleTimeString("bs-BA", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    document.getElementById("dan").innerHTML = dan;
    document.getElementById("datum").innerHTML = datum;
    document.getElementById("vrijeme").innerHTML = vrijeme;
}

prikaziVrijeme();
setInterval(prikaziVrijeme, 1000);
