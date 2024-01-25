let object  = {
    imie : "Andrii",
    wiek : -12
}

moj_string =  JSON.stringify(object)

console.log(moj_string)

moj_objekt = JSON.parse(moj_string)

console.log(moj_objekt)