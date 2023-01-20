function guardarDatosFormulario(nombreElemento) {
    let valor = document.querySelector(`#${nombreElemento}`).value;
    if (valor === "") {
        valor = "Valor No Ingresado";
    }
    document.querySelector(`#mostrar_${nombreElemento}`).innerHTML = valor;
}

document.querySelector("#enviar").addEventListener("click", () => {
    let valoresFormularioHTML = ["nombre", "segundoNombre", "apellido", "segundoApellido", "documento", "identificacion", "fechaNacimiento", "correo", "genero", "claseLibreta", "numeroLibreta", "distritoMilitar", "nacionalidad", "estadoCivil", "pertenenciaEtnica", "paisNacimiento", "departamentoNacimiento", "municipioCuidadNacimiento", "discapacidad", "zona", "nombrePaisResidencia", "departamento", "municipio", "tipoZona", "direccionResidencia", "barrio", "indicativoResidencia", "telefonoResidencia", "telefonoCelular", "indicativoOficina", "telefonoOficina", "correoPrincipal", "correoOficina", "redSocial"]
    for (valor in valoresFormularioHTML) {
        guardarDatosFormulario(valoresFormularioHTML[valor])
    }
    document.querySelector("#datos").style.display = "block";
});