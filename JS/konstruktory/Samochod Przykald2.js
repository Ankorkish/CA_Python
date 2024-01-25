function Samochod(marka, model) {
    if (!new.target) {
      throw 'Samochod() musi być wywołany z new';
    }
    this.marka = marka;
    this.model = model;

    return "Wijat, Swiat!"
  }
  
  var auto = new Samochod("Toyota", "Corolla"); // działa normalnie
  console.log(auto)
  //var auto2 = Samochod("Toyota", "Corolla");    // rzuca błąd
  