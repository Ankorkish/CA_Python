function obsluzZapytanie(typ, dane) {
  switch (typ) {
      case 'czytaj':
          // kod do czytania danychss
          console.log(`Czytam dane: ${dane}`);
          break;
      case 'zapisz':
          // kod do zapisywania danych
          console.log(`Zapisuję dane: ${dane}`);
          break;
      case 'aktualizuj':
          // kod do aktualizowania danych
          console.log(`Aktualizuję dane: ${dane}`);
          break;
      case 'usun':
          // kod do usuwania danych
          console.log(`Usuwanie danych: ${dane}`);
          break;
      default:
          console.log(`Nieznany typ zapytania: ${typ}`);
  }
}

// Przykładowe wywołania funkcji
obsluzZapytanie('czytaj', 'dokument1');
obsluzZapytanie('zapisz', 'dokument2');
obsluzZapytanie('aktualizuj', 'dokument3');
obsluzZapytanie('usun', 'dokument4');
