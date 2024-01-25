function mojaFunkcja() {
    let zmiennaLokalna = "Jestem dostępna tylko w tej funkcji";
    console.log(zmiennaLokalna); // działa
  }
  
  mojaFunkcja(); // wyświetla "Jestem dostępna tylko w tej funkcji"
  console.log(zmiennaLokalna); // błąd, zmiennaLokalna nie jest zdefiniowana poza funkcją
  