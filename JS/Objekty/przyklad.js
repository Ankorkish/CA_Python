let osoba = {
    imie: "Andrii",
    nazwisko: "Korkishko",
    wiek: 30,
    przedstaSie: function(){
        return `Nazywam się ${this.imie}, ${this.nazwisko} i mam ${this.wiek}`
    }
}

osoba.narodowosc = "Polska";
osoba.wiek = 31; 

delete osoba.nazwisko;

console.log(osoba.przedstaSie())
