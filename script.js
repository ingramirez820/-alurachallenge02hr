String.prototype.replaceAt = function (index, character) {
  return this.substr(0, index) + character + this.substr(index + character.length);
}
/**Creamos nuestro arreglo de palabras */
const palabras = ['melon', 'coco', 'kiwi', 'maiz', 'noni', 'papaya'];
/**Obtenemos una palabra al azar */
const palabra = palabras[Math.floor(Math.random() * palabras.length)];
/**Reemplazamos las palabras con guiones */
let palabraConGuiones = palabra.replace(/./g, "_ ");
let contadorFallos = 0;
/**Pintamos la palabra con guiones en la aplicación */
document.querySelector('#psalida').innerHTML = palabraConGuiones;

document.querySelector('#btnCalcular').addEventListener('click', () => {
  const letra = document.querySelector('#inputLetra').value;
  let haFallado = true;


  for (const i in palabra) {
    if (letra == palabra[i]) {
      palabraConGuiones = palabraConGuiones.replaceAt(i * 2, letra);
      if (palabraConGuiones.indexOf('_') < 0) {
        alert("Ganaste!!");
        location.reload();
        
      }
      /**Limpiamos el input */
      document.querySelector('#inputLetra').value = '';
      haFallado = false;
    }
  }


  if (haFallado) {
    contadorFallos++;
    document.querySelector('#divAhorcado').style.backgroundPosition = -(200 * contadorFallos) + 'px 0';

    if (contadorFallos == 5) {
      alert("Perdiste el juego");
      location.reload();
    }
  }


  document.querySelector('#psalida').innerHTML = palabraConGuiones;
  document.querySelector('#inputLetra').value;
  document.querySelector('#inputLetra').focus();
});
