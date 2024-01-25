function Pojazd(typ) {
    this.typ = typ;
}

Pojazd.prototype.pokazTyp = function () {
    console.log("Typ pojazdu to: " + this.typ);
};

function Samochod(marka, model) {
    Pojazd.call(this, 'Samochod'); // Wywołanie konstruktora Pojazd
    this.marka = marka;
    this.model = model;
}

// Dziedziczenie prototypu Pojazd
Samochod.prototype = Object.create(Pojazd.prototype);
Samochod.prototype.constructor = Samochod;

// Dodanie metody specyficznej dla Samochod
Samochod.prototype.pokazModel = function () {
    console.log("Marka: " + this.marka + ", Model: " + this.model);
};
