function testVar() {
  console.log(a); // undefined, ale nie błąd
  var a = 5;
  console.log(a); // 5
}

function testLet() {
  // console.log(b); // Błąd: b is not defined
  let b = 10;
  console.log(b); // 10
}


function testZakres() {
  if (10 > 5) {
    let a = 5;
    
  }

  console.log(a);
  console.log(b);
}

testZakres()