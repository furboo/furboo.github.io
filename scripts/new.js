function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function myFunction() {
    var hola = "hello word";
    for (var i = 0; i <= 10; i++) {
        await sleep(500);
        document.getElementById("demo").innerHTML = hola[i];
    }
}