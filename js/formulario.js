let valoresFormularioHTML = []
const inputsHTML = document.querySelectorAll("input"); 
for (let i = 0; i < inputsHTML.length - 2; i++) {
    valoresFormularioHTML.push(inputsHTML[i].id)
}

function guardarDatosFormulario(nombreElemento) { 
    let valor = document.querySelector(`#${nombreElemento}`).value;
    document.querySelector(`#mostrar_${nombreElemento}`).innerHTML = valor;
}

document.querySelector("#enviar").addEventListener("click", () => {
    for (valor in valoresFormularioHTML) { 
        guardarDatosFormulario(valoresFormularioHTML[valor]) 
    }
    document.querySelector("#datos").style.display = "block";
});