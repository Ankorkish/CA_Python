let timerid;

timerid = setTimeout(() => {
    console.log("to jest komunikat, który nigdy się nie pojawi")
}, 1000);

clearTimeout(timerid);
