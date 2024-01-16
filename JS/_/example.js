const liczby = [1, 2, 3, 4, 5, 6];
const parzyste = liczby.filter((liczba) => {
  return liczba % 2 == 0;
});

console.log(parzyste); // Wynik: [2, 4, 6]
