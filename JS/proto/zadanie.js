function Pies(imie){
    this.imie = imie
}

Pies.prototype.szczekaj = function(){
    console.log(`${this.imie} szczeka: Hau! hau!`);
}

function Owczarek(imie){
    Pies.call(this, imie)
}

Owczarek.prototype = Object.create(Pies.prototype)
Owczarek.prototype.constructore = Owczarek

Owczarek.prototype.pilnuj = function(){
    console.log(`${this.imie} Pilnuje terenu!`)
}

let azor = new Owczarek("Azor");

azor.szczekaj();
azor.pilnuj();
