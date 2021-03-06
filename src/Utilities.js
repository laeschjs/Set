var cards = [
  "1dge", "1dgf", "1dgh", "1dpe", "1dpf", "1dph", "1dre", "1drf", "1drh",
  "1oge", "1ogf", "1ogh", "1ope", "1opf", "1oph", "1ore", "1orf", "1orh",
  "1sge", "1sgf", "1sgh", "1spe", "1spf", "1sph", "1sre", "1srf", "1srh",
  "2dge", "2dgf", "2dgh", "2dpe", "2dpf", "2dph", "2dre", "2drf", "2drh",
  "2oge", "2ogf", "2ogh", "2ope", "2opf", "2oph", "2ore", "2orf", "2orh",
  "2sge", "2sgf", "2sgh", "2spe", "2spf", "2sph", "2sre", "2srf", "2srh",
  "3dge", "3dgf", "3dgh", "3dpe", "3dpf", "3dph", "3dre", "3drf", "3drh",
  "3oge", "3ogf", "3ogh", "3ope", "3opf", "3oph", "3ore", "3orf", "3orh",
  "3sge", "3sgf", "3sgh", "3spe", "3spf", "3sph", "3sre", "3srf", "3srh",
]

function shuffle() {
  var array = cards.slice();
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function checkForSet(card1, card2, card3) {
  // Each card is just a string describing it
  // e.g. 1dge refers to the card: 1 green empty diamond
  var properties = true;
  for (var i = 0; i < 4; i++) {
    properties = properties && checkProperty(card1.charAt(i),
                                             card2.charAt(i),
                                             card3.charAt(i));
  }
  return properties;
}

/*
  Checks if the properties are all the same or all different
*/
function checkProperty(num1, num2, num3) {
  return (((num1 === num2) && (num2 === num3)) || 
    ((num1 !== num2) && (num2 !== num3) && (num1 !== num3)));
}

module.exports = {
  checkForSet: checkForSet,
  makeDeck: shuffle
}