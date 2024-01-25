let mapa = new Map(); // Inicjalizacja nowej mapy
mapa.set("klucz0", "wartość0"); // Dodanie pary klucz/wartość do mapy
mapa.set("klucz1", "wartość1"); // Dodanie kolejnej pary klucz/wartość
mapa.set("klucz2", "wartość2"); // I kolejnej

console.log(mapa)


for (let [klucz, wartosc] of mapa){
    console.log(klucz, wartosc) // Wypisanie wszystkich par klucz/wartość z mapy
}

console.log() // Wypisanie pustego wiersza dla lepszej czytelności

mapa.set("klucz2", "inna wartość wartość2"); // Zmiana wartości dla klucza 'klucz2'
for (let [klucz, wartosc] of mapa){
    console.log(klucz, wartosc) // Ponowne wypisanie wszystkich par klucz/wartość po zmianie
}