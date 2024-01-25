function Samochod(marka, model, rok){
    this.marka = marka;
    this.model = model;
    this.rok = rok;

    this.wiekSamochodu = function(){
        return new Date().getFullYear() - this.rok;
    }
}

//new Date().getFullYear();

//Samochod.prototype.wyswietlijInfo = function(){
//        return `${this.marka} ${this.model} ${this.rok}`;
//}

let mojSamochod0 = new Samochod("KIA", "SEED", 2019)
let mojSamochod1 = new Samochod("Accent", "Hundai", 2012)


console.log(mojSamochod1.wiekSamochodu())