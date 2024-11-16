function defineSuit(card) {
   if(card.split('').lastIndexOf('♣') !== -1) return 'clubs'
   if(card.split('').lastIndexOf('♦') !== -1) return 'diamonds'
   if(card.split('').lastIndexOf('♥') !== -1) return 'hearts'
   if(card.split('').lastIndexOf('♠') !== -1) return 'spades'
}

console.log(defineSuit('3♣'))
