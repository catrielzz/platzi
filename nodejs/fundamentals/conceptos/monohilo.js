console.log("Primera Instruccion.")

let i = 0;
setInterval( function () {
    if ( i === 0){
        console.log('Segunda Instruccion.')
    }
    console.log(i);
    i++;
    console.log("Sigo activo.");

    if (i === 5) {
        var a = 3+4;
    }
}, 1000);

console.log('Tercer Instruccion.');