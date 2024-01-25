const podwoj = (liczba) => liczba * liczba; // Funkcja podwajająca wartość liczby

const liczby = [1, 2, 3, 4, 5]; // Tablica zawierająca liczby od 1 do 5

const podwojeLiczby = liczby.map(podwoj); // Użycie funkcji map do zastosowania funkcji podwoj na każdym elemencie tablicy liczby

console.log(podwojeLiczby); // Wyświetlenie tablicy z podwojonymi wartościami

const imiona = ["Anna", "Tomasz", "Marta", "Marcin"]; // Tablica zawierająca imiona

const imionaDuzymiLiterami = imina.map(imie => imie.toUpperCase()); // Użycie funkcji map do zamiany każdego imienia na wersję z dużymi literami

console.log(imionaDuzymiLiterami); // Wyświetlenie tablicy imion napisanych dużymi literami