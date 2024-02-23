const primerNumero = document.getElementById("primer_numero");
const segundoNumero = document.getElementById("segundo_numero");
const resultado = document.getElementById("resultado");

function sumarNumeros() {
    const num1 = parseInt(primerNumero.value);
    const num2 = parseInt(segundoNumero.value);

    if (isNaN(num1) || isNaN(num2)) {
        resultado.textContent = "Error: introduce números válidos";
        return;
    }

    const suma = num1 + num2;
    resultado.textContent = "La suma es: " + suma;
}

document.addEventListener("submit", (e) => {
    e.preventDefault();
    sumarNumeros();
});
