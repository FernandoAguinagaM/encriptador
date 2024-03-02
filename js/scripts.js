function encriptar() {
    let textoOriginal = document.querySelector('.contenedor-1 .textbox').value;

    document.querySelector('.contenedor-2 .img-box').src = '';
    document.querySelector('.contenedor-2 .textbox').value = '';

    if (textoOriginal === '') {
        mensajeError('No has introducido un texto');
        return;
    }

    if (/[^a-z]/.test(textoOriginal)) {
        mensajeError('No se pueden ingresar mayúsculas y acentos');
        return;
    }


    let textoEncriptado = textoOriginal
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    
    document.querySelector('.contenedor-2 .img-box').style.display = 'none';
    document.querySelector('.contenedor-2 .textbox').value = textoEncriptado;
}

function mensajeError(mensaje) {
    const imgBox = document.querySelector('.contenedor-2 .img-box');
    const textbox = document.querySelector('.contenedor-2 .textbox');

    imgBox.src = '../img/escribir.webp';
    imgBox.style.width = '15rem';
    imgBox.style.height = '15rem';
    imgBox.style.margin = '10px';
    imgBox.style.display = 'block';
    imgBox.style.margin = 'auto';

    textbox.value = mensaje;
    textbox.style.textAlign = 'center';
    
}

function desencriptar() {
    let textoEncriptado = document.querySelector('.contenedor-2 .textbox').value;

    if (textoEncriptado === '') {
        mensajeError('No has introducido un texto encriptado');
        return;
    }

    let textoDesencriptado = textoEncriptado
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    document.querySelector('.contenedor-2 .textbox').value = textoDesencriptado;
}

function copiar() {
    var texto = document.querySelector('.contenedor-2 .textbox').value;
    if (texto.trim() === '') {
        alert('No hay texto qué copiar');
        return;
    }
    navigator.clipboard.writeText(texto);
    alert('Texto copiado al portapapeles');
}