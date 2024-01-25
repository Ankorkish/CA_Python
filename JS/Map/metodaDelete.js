let moja_mapa = new Map(); // Utworzenie nowej mapy
moja_mapa.set("klucz", "wartość1"); // Dodanie wartości do mapy

moja_mapa.delete("klucz") // Usunięcie klucza z mapy

if (moja_mapa.has("klucz")){
    console.log("Mapa zawiera klucz") // Wyświetlenie, jeśli klucz istnieje
} else{
    console.log("Mapa nie zawiera klucz") // Wyświetlenie, jeśli klucz nie istnieje
}