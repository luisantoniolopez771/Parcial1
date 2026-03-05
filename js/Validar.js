function validarFormulario() {
    var nombre = document.forms["APIForm"]["nombre"].value;
    var correo = document.forms["APIForm"]["correo"].value;
    var empresa = document.forms["APIForm"]["empresa"].value;
    var interes = document.forms["APIForm"]["interes"].value;
    var motivo = document.forms["APIForm"]["motivo"].value;

    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/.test(nombre)) {
        alert("El nombre solo debe llevar letras");
        return false;
    }

    if (nombre.length < 6) {
        alert("Debe ingresar su nombre completo");
        return false;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo)) {
        alert("Debe ingresar un correo electrónico válido");
        return false;
    }

    if (empresa.trim() === "") {
        alert("Debe ingresar el nombre de su empresa o institución");
        return false;
    }

    if (interes === "") {
        alert("Debe seleccionar un tema de interés");
        return false;
    }

    if (motivo.length < 10) {
        alert("El motivo de su consulta debe tener al menos 10 caracteres");
        return false;
    }

    alert("Formulario validado con éxito");
    return true;
}