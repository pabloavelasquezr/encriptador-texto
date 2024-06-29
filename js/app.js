function encriptar() {
    if (validarVacio() === false) { return; }
    const mensaje = document.querySelector("#text").value;
    const clave = 3;
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    let mensajeEncriptado = '';
    for (let i = 0; i < mensaje.length; i++) {
        let caracter = mensaje[i].toLowerCase();
        let indice = alfabeto.indexOf(caracter);

        if (indice !== -1) {
            let nuevoIndice = (indice + clave) % alfabeto.length;
            mensajeEncriptado += alfabeto[nuevoIndice];
        } else {
            mensajeEncriptado += caracter; 
        }
    }
    document.querySelector("#resultado").innerText = mensajeEncriptado;
}

function desencriptar() {
    if (validarVacio() === false) { return; }
    const mensaje = document.querySelector("#text").value;
    const clave = 3;
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    let mensajeDesencriptado = '';

    for (let i = 0; i < mensaje.length; i++) {
        let caracter = mensaje[i].toLowerCase();
        let indice = alfabeto.indexOf(caracter);

        if (indice !== -1) {
            let nuevoIndice = (indice - clave + alfabeto.length) % alfabeto.length;
            mensajeDesencriptado += alfabeto[nuevoIndice];
        } else {
            mensajeDesencriptado += caracter; 
        }
    }
    document.querySelector("#resultado").innerText = mensajeDesencriptado;
}

function copiar() {
    let estadoBoton = document.getElementById("btn").disabled;
    let mensaje = document.querySelector("#resultado").innerText;

    document.querySelector("#text").value = mensaje;
    navigator.clipboard.writeText(mensaje);
    document.querySelector("#resultado").innerText = "";
    document.querySelector(".main__result_resultado").style.display = "none";
    if (estadoBoton === false) {
        document.getElementById("btn2").removeAttribute('disabled')
        document.getElementById("btn").setAttribute('disabled', "true");
    }else{
        document.getElementById("btn").removeAttribute('disabled')
        document.getElementById("btn2").setAttribute('disabled', "true");
        document.querySelector("#text").focus();
    }

}

function validarVacio() {
    let texto = document.querySelector("#text").value;
    if (texto === "") {
        document.querySelector(".main__result_resultado").style.display = "none";
        document.querySelector(".main__result__error").style.display = "flex";
        document.getElementById("btn").removeAttribute('disabled')
        document.getElementById("btn2").setAttribute('disabled', "true");
        document.querySelector("#text").focus();
        return false;
    }else {
        document.querySelector(".main__result__error").style.display = "none";
        document.querySelector(".main__result_resultado").style.display = "flex";
        return true;
    }
}