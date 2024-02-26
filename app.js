/* 
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

/**/

function activarEtiqueta(nom_clase)
{
    let etiqueta = document.getElementsByClassName(nom_clase);
    etiqueta.removeAttribute('disabled');
}

function adquirirTexto(nom_id_o_clase)
{
    let texto = document.querySelector(nom_id_o_clase).value;
    return texto;
}

function escribirTexto(texto, id)
{
    //let id = '.texto-desencriptado';
    //let id = '.texto-encriptador';
    document.querySelector(id). value = texto;
    //document.getElementsByClassName('texto-desencriptado')[0].value = texto;
}

function encriptarTexto(texto)
{
    let clave_incriptacion = {'a': 'ai', 'e': 'enter', 'i': 'imes', 'o': 'ober', 'u': 'ufat'};   
    
    Object.entries(clave_incriptacion).forEach(([key, value]) => { // Object.entries(objeto): devuelve un objeto iterable lista con los elementos de este guia: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
        texto = texto.replaceAll(key,value);
    });
    
    return texto;
}

function desencriptarTexto(texto)
{
    let clave_desencriptado = {'u': 'ufat', 'o': 'ober', 'i': 'imes', 'e': 'enter', 'a': 'ai'}

    Object.entries(clave_desencriptado).forEach(([key, value]) => {  // iterable.forEach() nos permite ejercer una funcion o centencia en susecion con cada elemento de un iterable.  guia: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
        texto = texto.replaceAll(value, key);                   
    });
    return texto;
}

function botonEncriptar()
{
    let texto = adquirirTexto('.texto-encriptador');
    texto = encriptarTexto(texto);

    //falta convertir en funcion
    document.getElementsByClassName('imagen-decodificador')[0].style.display = "none";  // getElementsByClassName devuelve una lista de objetos
    document.getElementsByClassName('mensaje-codificador-estado')[0].style.display = "none";
    document.getElementsByClassName('mensaje-codificador-ayuda')[0].style.display = "none";
    document.getElementsByClassName('caje-texto-mensaje-encriptado')[0].style.display = "none";
    document.getElementsByClassName('caja-interna-codificador')[0].style.display = "none";
    document.getElementsByClassName('button-copiar')[0].style.display = "block";

    
    //document.getElementsByClassName('texto-desencriptado')[0].textContent = texto;
    //document.getElementsByClassName('texto-desencriptado')[0].value = texto;
    escribirTexto(texto, '.texto-desencriptado')
    cambio = true;
    console.log(cambio);
}

function botonDesencriptar()
{
    let texto = adquirirTexto('.texto-encriptador');
    texto = desencriptarTexto(texto);

    //falta convertir en funcion
    document.getElementsByClassName('imagen-decodificador')[0].style.display = "none";  // getElementsByClassName devuelve una lista de objetos
    document.getElementsByClassName('mensaje-codificador-estado')[0].style.display = "none";
    document.getElementsByClassName('mensaje-codificador-ayuda')[0].style.display = "none";
    document.getElementsByClassName('caje-texto-mensaje-encriptado')[0].style.display = "none";
    document.getElementsByClassName('caja-interna-codificador')[0].style.display = "none";
    document.getElementsByClassName('button-copiar')[0].style.display = "block";
    //document.getElementsByClassName('texto-desencriptado')[0].style.background = "#FFFFFF";
    //document.getElementsByClassName('texto-desencriptado')[0].style.removeProperty("background-image")

    
    //document.getElementsByClassName('texto-desencriptado')[0].textContent = texto;
    //document.getElementsByClassName('texto-desencriptado')[0].value = texto;
    escribirTexto(texto, '.texto-desencriptado')
    cambio = true;
    console.log(cambio);
}

function copy() 
{
    texto = adquirirTexto('.texto-desencriptado');
    console.log(texto);
    const copyContent = async () => {
        try {
            await navigator.clipboard.writeText(texto);
            console.log('Content copied to clipboard');
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }
    copyContent();

}


const mediumBp = matchMedia('(max-width:768px)');
const changeSize = mql => {
    (mql.matches && cambio) ? document.getElementsByClassName('texto-desencriptado')[0].style.background = "#FFFFFF" : console.log('')
    //: document.getElementsByClassName('texto-desencriptado')[0].style.background = "#0a3871"
}



let cambio = false;
console.log(cambio)
mediumBp.addListener(changeSize);  // buscar forma actualisada


//mediumBp.addEventListener(changeSize);


/*
const clave = new Map();
clave.set('a','ai');
clave.set('e', 'enter');
clave.set('i', 'imes');
clave.set('o', 'ober');
clave.set('u', 'ufat'); 
*/
//let texto = texto

//texto = 'a e i o u';

//let clave_incriptacion = {'a': 'ai', 'e': 'enter', 'i': 'imes', 'o': 'ober', 'u': 'ufat'};
//let clave_desencriptado = {'u': 'ufat', 'o': 'ober', 'i': 'imes', 'e': 'enter', 'a': 'ai'}


//alert(codigo_incriptacion);
//alert(clave_incriptacion);

/*
Object.entries(clave_incriptacion).forEach(([key, value]) => {
    texto = texto.replaceAll(key,value);
});
*/
//texto = encriptarTexto(texto);

//console.log(texto);
/*
Object.entries(clave_desencriptado).forEach(([key, value]) => {
    texto = texto.replaceAll(value, key);
});
*/

//texto = desencriptarTexto(texto);

//console.log(texto);

//escribirTexto(texto);

// checar modelo de desbloqueo y bloqueo ademas de movimiento de posiciones

//let etiqueta = 


/*
document.getElementsByClassName('imagen-decodificador').style = 'display:none';
document.getElementsByClassName('mensaje-codificador-estado').style = 'display:none';
document.getElementsByClassName('mensaje-codificador-ayuda').style = 'display:none';
document.getElementsByClassName('caje-texto-mensaje-encriptado').style = 'display:none';
document.getElementsByClassName('caja-interna-codificador').style = 'display:none';
*/

//esto

//document.getElementsByClassName('imagen-decodificador')[0].style.display = "none";  // getElementsByClassName devuelve una lista de objetos
//document.getElementsByClassName('mensaje-codificador-estado')[0].style.display = "none";
//document.getElementsByClassName('mensaje-codificador-ayuda')[0].style.display = "none";
//document.getElementsByClassName('caje-texto-mensaje-encriptado')[0].style.display = "none";
//document.getElementsByClassName('caja-interna-codificador')[0].style.display = "none";



//document.getElementsByClassName('caje-btn-desencriptar')[0].style.removeProperty("display")
//document.getElementsByClassName('texto-desencriptado')[0].style.removeProperty("display");
//document.getElementsByClassName('button-copiar')[0].style.removeProperty("display");


//document.getElementsByClassName('button-copiar')[0].style.display = "block";



//document.getElementsByClassName('caje-btn-desencriptar')[0].style.zindex = "30";

//document.getElementsByClassName('caja-interna-codificador').setAttribute('display', 'none');
// etiqueta.setAttribute('disabled', 'true');

//etiqueta = 
//document.getElementsByClassName('caje-btn-desencriptar').removeAttribute('disabled');
//etiqueta.removeAttribute('disabled');

//document.getElementById('caja-prueba').setAttribute('display', 'none');
//document.getElementById('caja-prueba').removeAttribute('disabled');