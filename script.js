
document.getElementById("formPocion").addEventListener("submit", function(event) {
    event.preventDefault();

    let altura = Number(document.getElementById("altura").value);
    let pocion = Number(document.getElementById("pocion").value);
    let resultado = document.getElementById("resultadoPocion");

    if (altura <= 0 || pocion < 0 || pocion > 100) {
        resultado.textContent = "Ingresa valores válidos.";
        return;
    }

    let alturaFinal = altura - pocion * 2;

    if (alturaFinal <= 0) {
        resultado.textContent = "La altura calculada no es válida.";
    } else if (alturaFinal <= 120) {
        resultado.textContent = "Altura final: " + alturaFinal + " cm. ¡Alicia puede pasar por la puerta!";
    } else {
        resultado.textContent = "Altura final: " + alturaFinal + " cm. Alicia es demasiado alta para la puerta.";
    }
});


document.getElementById("formMerienda").addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let bebida = document.getElementById("bebida").value;
    let tazas = Number(document.getElementById("tazas").value);
    let precio = 0;
    let nombreBebida = "";
    let resultado = document.getElementById("resultadoMerienda");

    if (nombre === "" || bebida === "" || tazas < 1 || tazas > 20 || !Number.isInteger(tazas)) {
        resultado.textContent = "Completa todos los campos correctamente.";
        return;
    }

    switch (bebida) {
        case "te":
            precio = 5;
            nombreBebida = "té";
            break;
        case "cafe":
            precio = 7;
            nombreBebida = "café";
            break;
        case "chocolate":
            precio = 8;
            nombreBebida = "chocolate";
            break;
        case "jugo":
            precio = 6;
            nombreBebida = "jugo";
            break;
    }

    let total = precio * tazas;

    if (tazas >= 5) {
        total = total * 0.90;
        resultado.textContent = "Invitado: " + nombre +
            "\nBebida: " + nombreBebida +
            "\nTazas: " + tazas +
            "\nDescuento: 10%" +
            "\nTotal: Bs " + total.toFixed(2);
    } else {
        resultado.textContent = "Invitado: " + nombre +
            "\nBebida: " + nombreBebida +
            "\nTazas: " + tazas +
            "\nSin descuento" +
            "\nTotal: Bs " + total.toFixed(2);
    }
});


document.getElementById("formReina").addEventListener("submit", function(event) {
    event.preventDefault();

    let cantidad = Number(document.getElementById("cantidad").value);
    let resultado = document.getElementById("resultadoReina");

    if (!Number.isInteger(cantidad) || cantidad < 1 || cantidad > 100) {
        resultado.textContent = "Ingresa un número entero entre 1 y 100.";
        return;
    }

    let pares = 0;
    let impares = 0;
    let sumaPares = 0;
    let sumaImpares = 0;

    for (let i = 1; i <= cantidad; i++) {
        if (i % 2 === 0) {
            pares++;
            sumaPares += i;
        } else {
            impares++;
            sumaImpares += i;
        }
    }

    let mensaje = "Números del 1 al " + cantidad +
        "\nCantidad de pares: " + pares +
        "\nCantidad de impares: " + impares +
        "\nSuma de pares: " + sumaPares +
        "\nSuma de impares: " + sumaImpares;

    if (sumaPares > sumaImpares) {
        mensaje += "\nLa suma de los pares es mayor.";
    } else if (sumaImpares > sumaPares) {
        mensaje += "\nLa suma de los impares es mayor.";
    } else {
        mensaje += "\nLas dos sumas son iguales.";
    }

    resultado.textContent = mensaje;
});
