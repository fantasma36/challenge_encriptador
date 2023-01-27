var btnDesencriptar=document.getElementById("btnDesencriptar");
var btnEncriptar=document.getElementById("btnEncriptar");
var btnCopiar=document.getElementById("btnCopiar");
var muneco=document.querySelector(".muneco");
function encriptar() {
    var frase =document.getElementById("txtEntrada").value.toLowerCase();


    var textoEncriptado=frase.replace(/e/img,"enter");
    var textoEncriptado=textoEncriptado.replace(/o/img,"ober");
    var textoEncriptado=textoEncriptado.replace(/i/img,"imes");
    var textoEncriptado=textoEncriptado.replace(/a/img,"ai");
    var textoEncriptado=textoEncriptado.replace(/u/img,"ufat");

    configBotones(textoEncriptado)
}
function desencriptar(){

   var frase =document.getElementById("txtEntrada").value.toLowerCase();


    var textoEncriptado=frase.replace(/enter/img,"e");
    var textoEncriptado=textoEncriptado.replace(/ober/img,"o");
    var textoEncriptado=textoEncriptado.replace(/imes/img,"i");
    var textoEncriptado=textoEncriptado.replace(/ai/img,"a");
    var textoEncriptado=textoEncriptado.replace(/ufat/img,"u");
    configBotones(textoEncriptado)



}
function configBotones(textoEncriptado){
    muneco.classList.add("disable");
    document.getElementById("lblResultado").innerHTML=textoEncriptado;
    btnDisable=document.querySelector("#btnCopiar");
    btnDisable.classList.add("enable");

    lblMensaje=document.querySelector("#idMostrarMensaje");
    lblMensaje.classList.add("disable");

    txtMensaje=document.querySelector(".ena");
    txtMensaje.classList.add("disable");

    lblDisable=document.querySelector("#lblResultado");
    lblDisable.classList.add("enable");
}
function copyContents(){

    var content = document.getElementById('lblResultado').innerHTML;

    navigator.clipboard.writeText(content)
        .then(() => {
        console.log("Text copied to clipboard...")
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })

}

  btnDesencriptar.onclick=desencriptar;
  btnEncriptar.onclick=encriptar;
  btnCopiar.onclick=copyContents;
