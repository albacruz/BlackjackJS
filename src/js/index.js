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

function getRandomPosition(mazo) {
  return Math.floor(Math.random() * (mazo.length - 1));
}
//TODO: Refactoriza esto a darCarta : return Carta aleatoria
function repartirCarta(mazo){

  var ran = getRandomPosition(mazo);

  while(mazo[ran] === 'elegido'){
    ran = getRandomPosition(mazo);
  }
  ranFinal= mazo[ran];
  mazo[ran]= 'elegido';
}

function juego(){
  repartirCarta(deck);
  console.log('Carta del jugador = ', ranFinal);
  if((ranFinal == 'ASC') || (ranFinal == 'AST') || (ranFinal == 'ASP') || (ranFinal == 'ASR')){
    ranFinal = prompt('Introduzca valor de AS (1 u 11)');
  }
  result += Number.parseInt(ranFinal);

  repartirCarta(deck);
  console.log('Carta del crupier =', ranFinal);
  if((ranFinal == 'ASC') || (ranFinal == 'AST') || (ranFinal == 'ASP') || (ranFinal == 'ASR')){
    ranFinal = prompt('Introduzca valor de AS (1 u 11)');
    console.log('Valor de AS elegido= ', ranFinal);
  }
  result += Number.parseInt(ranFinal);

  console.log('El result es = ', result);
  
  /*for(let k=0; k<deck.length; k++){
    console.log(deck[k]);
  }*/
}
//Main del programa
let result = 0;
let ranFinal;
let deck = [];
let suitId = 0;
let count = 2;
let continua = false;

deckCreate();
juego();

while(result < 21){
    continua = confirm('¿Desea recibir carta?');
    if(continua){
      juego();
    }
    else{
      console.log('Perdiste!!');
      break;
    }
}

if(result == 21){
  console.log('Has ganado!!');
}

else{
  console.log('Perdiste!!');
}
