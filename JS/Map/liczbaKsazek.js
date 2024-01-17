let liczbaKsiazek = new Map();

liczbaKsiazek.set("Tolkien", 5);
liczbaKsiazek.set("Rowling", 7);
liczbaKsiazek.set("Lem", 9);

console.log(liczbaKsiazek.get("Tolkien"))

if (liczbaKsiazek.has("Rowling")){
    console.log("Mamy ksążki Rowling")
}

for (let [autor, ksiazki] of liczbaKsiazek){
    console.log(`${autor} ma ${ksiazki} książek`)
}