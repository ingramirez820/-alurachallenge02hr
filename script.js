String.prototype.replaceAt=function(index, character) { 
  return this.substr(0, index) + character + this.substr(index+character.length); 
} 
/**Creamos nuestro arreglo de palabras */
const palabras = ['melon','coco','kiwi','maiz','noni','papaya'];
/**Obtenemos una palabra al azar */
const palabra = palabras[Math.floor(Math.random()*palabras.length)];
let palabraConGuiones = palabra.replace(/./g, "_ ");
let contadorFallos=0;

document.querySelector('#salida').innerHTML=palabraConGuiones;
document.querySelector('#calcular').addEventListener('click',()=>{
  const letra=document.querySelector('#letra').value;
  let haFallado=true;
  for(const i in palabra){
    if(letra==palabra[i]){
      palabraConGuiones=palabraConGuiones.replaceAt(i*2,letra);
      document.querySelector('#letra').value='';
      haFallado=false;
    }
  }
  if(haFallado){
    contadorFallos++;
    document.querySelector('#ahorcado').style.backgroundPosition = -(200*contadorFallos)+'px 0';
    if(contadorFallos==5){
      alert("Perdiste el juego");
    }else{
      if(palabraConGuiones.indexOf('_')<0){
        alert("Ganaste!!");
      }
    }
  }
  
  document.querySelector('#salida').innerHTML=palabraConGuiones;
  document.querySelector('#letra').value;
  document.querySelector('#letra').focus();
});
