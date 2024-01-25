/*
function Samochod(imie, nazwisko, rokUrodzenia){
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.rokUrodzenia = rokUrodzenia;

    this.pelnoletność = function(){
        if (new Date().getFullYear() - rokUrodzenia > 18){
            return true
        }
        return false
    }
}

//new Date().getFullYear();

//Samochod.prototype.wyswietlijInfo = function(){
//        return `${this.marka} ${this.model} ${this.rok}`;
//}

let mojSamochod0 = new Samochod("KIA", "SEED", 2019)
let mojSamochod1 = new Samochod("Accent", "Hundai", 2012)


console.log(mojSamochod1.wiekSamochodu())
*/

function Osoba(imie, nazwisko, rokUrodzenia) {
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.rokUrodzenia = rokUrodzenia;

    this.pelnoletnosc = function(){
        wiek = new Date().getFullYear() - this.rokUrodzenia;

        if (wiek >= 18) {
            return `${this.imie} ${this.nazwisko} jest pelnoletni/a`
        } else {
            return `${this.imie} ${this.nazwisko} jest niepelnoletni/a`
        }
       
    }
}

let osoba1 = new Osoba("Wiktoria", "Czapla", 2007)
let osoba2 = new Osoba("Antoni", "Kowalski", 1998)

console.log(osoba1.pelnoletnosc());
console.log(osoba2.pelnoletnosc());


