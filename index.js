/**
 * Programa Juego blackjack
 * Alba Cruz Torres
 * Dario Algo Algo
 */

function crearMazo(j, contador) {
    j++;
    switch (j) {
      case 1:
        for (let i = 0; i < 1; i++) {
          mazo[i] = 'AST';
        }
  
        for (let i = 1; i < 12; i++) {
          mazo[i] = contador + 'T';
          contador++;
        }
        crearMazo(j);
        break;
  
      case 2:
        contador = 2;
        for (let i = 12; i < 13; i++) {
          mazo[i] = 'ASC';
        }
  
        for (let i = 13; i < 24; i++) {
          mazo[i] = contador + 'C';
          contador++;
        }
        crearMazo(j, contador);
        break;
  
      case 3:
        contador = 2;
        for (let i = 24; i < 25; i++) {
          mazo[i] = 'ASR';
        }
  
        for (let i = 25; i < 36; i++) {
          mazo[i] = contador + 'R';
          contador++;
        }
        crearMazo(j, contador);
        break;
  
      default:
        contador = 2;
        for (let i = 36; i < 37; i++) {
          mazo[i] = 'ASP';
        }
  
        for (let i = 37; i < 48; i++) {
          mazo[i] = contador + 'P';
          contador++;
        }
  
    }
  }
  
  function repartirCarta(mazo){
    var min = 0;
    var max = mazo.length-1;
    var ran = Math.floor(Math.random() * (max - min)) + min;
  
    if(mazo[ran] == 'elegido'){
      ran = Math.floor(Math.random() * (max - min)) + min;
    }
    else{
      ranFinal= mazo[ran];
      mazo[ran]= "elegido";
    }
  }
  
  let ranFinal;
  let mazo = [];
  let j = 0;
  let contador = 2;
  crearMazo(j, contador);
  repartirCarta(mazo);
  console.log(ranFinal);
  
  for(let k=0; k<mazo.length; k++){
    console.log(mazo[k]);
  }
  
  
  
  