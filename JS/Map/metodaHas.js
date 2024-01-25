let mapa = new Map(); // Utworzenie nowego obiektu Map
mapa.set("klucz", "wartość1"); // Dodawanie pary klucz-wartość do mapy

if (mapa.has("klucz")){ // Sprawdzenie, czy mapa zawiera klucz "klucz"
    console.log("Mapa zawiera klucz") // Wyświetlenie wiadomości, jeśli klucz istnieje
} else{
    console.log("Mapa nie zawiera klucz") // Wyświetlenie wiadomości, jeśli klucz nie istnieje
}