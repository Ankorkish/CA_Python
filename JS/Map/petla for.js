let mapa = new Map();
mapa.set("klucz0", "wartość0");
mapa.set("klucz1", "wartość1");
mapa.set("klucz2", "wartość2");


for (let [klucz, wartosc] of mapa){
    console.log(klucz, wartosc)
}

console.log()

mapa.set("klucz2", "inna wartość wartość2");
for (let [klucz, wartosc] of mapa){
    console.log(klucz, wartosc)
}
