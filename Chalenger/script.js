const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar() {
  const textoEncriptado = encriptar(inputTexto.value)
  mensagem.value = textoEncriptado;
  mensagem.style.backgroundImage="none";
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"]];
  stringEncriptada = stringEncriptada.toLowerCase();

  for(let i=0; i < matrizCodigo.length; i++) {
    if(stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1] )
    }
  }

  return stringEncriptada;
}

function btnDesencriptar() {
  const textoDesencriptado = descriptografar(mensagem.value)
  mensagem.value = textoDesencriptado;
  mensagem.style.backgroundImage;
}

function descriptografar(stringDescriptografada) {
  let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober","o"], ["ufat", "u"]];
  stringDescriptografada = stringDescriptografada.toLowerCase();
 
  for(let i=0; i < matrizCodigo.length; i++) {
    if(stringDescriptografada.includes(matrizCodigo[i][0])) {
      stringDescriptografada = stringDescriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1] )
    }
  }
  return stringDescriptografada;
}

function btnCopiar() {
  let copiaTexto = document.querySelector(".mensagem");
  copiaTexto.select();
  copiaTexto.setSelectionRange(0, 99999);
  document.execCommand('copy');
  alert("Texto Copiado!");
}

document.querySelector("input-texto").addEventListener("click", copia);