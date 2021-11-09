// Code your solutions in this file

/*
const names = ["Ada", "Brendan", "Ali"];

function  writeCards(names) {
    for (let i =0; i < names.length; i++){
        names.push('Thank you, ${names[i]}, for the wonderful surprise gift!');
        debugger;
    }
    return names;
}
writeCards(names);
*?

/*const number = 10;
function countDown(number) {
    while (number > 0) {
        console.log (number);
        number -= 1;
        }
        console.log( number );
    }*/
    


   
function writeCards( namesArray, event ) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
      thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
  }
  
  function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
      console.log( startingNumber );
      startingNumber -= 1;
    }
    console.log( startingNumber );
  }