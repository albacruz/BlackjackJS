function createSuit(suit) {
  let deck = [];
  deck[0] = 'AS' + suit;

  for (let i = 1; i < 12; i++) {
    // las cartas comienzan en uno el array en cero
    deck[i] = (i + 1) + suit;
  }
  return deck;
}

function deckCreate() {
  let suits = ['T', 'C', 'R', 'P'];
  for(let i = 0; i < suits.length; i++) {
    deck.push(createSuit(suits[i]));
  }
}


function getRandomSuitPosition(deck) {
 return Math.floor(Math.random() * 11);
}

function getRandomDeckPosition(deck) {
  return Math.floor(Math.random() * (deck.length - 1));
}

//TODO: Refactoriza esto a darCarta : return posicion aleatoria
function darCarta(deck){

  let ranDeck = getRandomDeckPosition(deck);
  let ranSuit = getRandomSuitPosition(deck);
  while(deck[ranDeck][ranSuit] === 'elegido'){
    ranDeck = getRandomDeckPosition(deck);
    ranSuit = getRandomSuitPosition(deck);
  }
  let finalRandom = deck[ranDeck][ranSuit];
  deck[ranDeck][ranSuit]= 'elegido';

  return finalRandom;
}

function checkCard(finalRandom){
  if((finalRandom == 'ASC') || (finalRandom == 'AST') || (finalRandom == 'ASP') || (finalRandom == 'ASR')){
    finalRandom = prompt('Introduzca valor de AS (1 u 11)');
  }
  return finalRandom;
}

function juego(){

  let finalRandom = darCarta(deck);
  console.log('Carta del jugador = ', finalRandom);
  finalRandom = checkCard(finalRandom);
  result += Number.parseInt(finalRandom);

  finalRandom = darCarta(deck);
  console.log('Carta del crupier =', finalRandom);
  finalRandom = checkCard(finalRandom);
  result += Number.parseInt(finalRandom);

  console.log('El resultado es = ', result);

}


/**Main del programa */

function main(){

  let continua = false;
  deckCreate();
  juego();

  while(result < 21){
      continua = confirm('¿Deseas recibir carta?');
      if(continua){
        juego();
      }
      else{
        console.log('Te plantaste!!');
        break;
      }
  }

  if(result == 21){
    console.log('Ganaste!!');
  }

  else{
    console.log('Perdiste!!');
  }
}

let result = 0;
let deck = [];
main();


}
