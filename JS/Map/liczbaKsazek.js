let liczbaKsiazek = new Map(); // Utwórz mapę do przechowywania liczby książek związanych z autorami

liczbaKsiazek.set("Tolkien", 5); // Ustaw liczbę książek Tolkiena
liczbaKsiazek.set("Rowling", 7); // Ustaw liczbę książek Rowling
liczbaKsiazek.set("Lem", 9); // Ustaw liczbę książek Lema

console.log(liczbaKsiazek.get("Tolkien")) // Wyświetl liczbę książek Tolkiena

if (liczbaKsiazek.has("Rowling")){ // Sprawdź, czy mamy książki Rowling
    console.log("Mamy ksążki Rowling") // Pokaż komunikat, jeśli mamy książki Rowling
}

for (let [autor, ksiazki] of liczbaKsiazek){ // Przeiteruj przez parę autor-liczba książek w mapie
    console.log(`${autor} ma ${ksiazki} książek`) // Wyświetl komunikat z nazwiskiem autora i liczbie jego książek
}