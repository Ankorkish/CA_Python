let mapa = new Map();
mapa.set("klucz", "wartość1");

mapa.delete("klucz")

if (mapa.has("klucz")){
    console.log("Mapa zawiera klucz")
} else{
    console.log("Mapa nie zawiera klucz")
}
