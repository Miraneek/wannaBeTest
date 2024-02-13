let pismena = document.querySelector("#pismena")

document.addEventListener('keydown', function (event) {
    pismena.textContent += event.key
});