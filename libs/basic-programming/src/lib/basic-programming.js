export function shuffleDeck(cards) {
  let shuffledCards = [...cards]
  for (let i = 0; i <= 7; i++) {
    const reorderedCards = reOrderDeck(shuffledCards);
    const splitCards = splitDeck(reorderedCards);
    shuffledCards = mergeDeck(splitCards);
  }
  return shuffledCards;
}

export function reOrderDeck(cards) {
  const startingDivider = Math.floor(Math.random() * 20 + 0);
  const endingDivider = Math.floor(Math.random() * 51 + 30);
  const start = startingDivider;
  const deleteCount = endingDivider - startingDivider;
  const removedCards = cards.splice(start, deleteCount);
  return cards.concat(removedCards);
}

export function splitDeck(cards) {
  const whereToSplit = Math.floor(Math.random() * cards.length);
  const firstHalf = cards.splice(0, whereToSplit);
  const secondHalf = cards;
  return [firstHalf, secondHalf];
}

export function mergeDeck([firstHalf, secondHalf]) {
  let largerHalf;
  let smallerHalf;
  // TODO: crate variable firstIsLarger
  if (firstHalf.length >= secondHalf.length) {
    largerHalf = firstHalf;
    smallerHalf = secondHalf;
  } else {
    largerHalf = secondHalf;
    smallerHalf = firstHalf;
  }

  const mergedDeck = [];
  const smallDeckSize = smallerHalf.length
  for (let s = 0; s < smallDeckSize; s++) {
    const smallerCard = smallerHalf.pop();
    const largerCard = largerHalf.pop();
    mergedDeck.push(largerCard);
    mergedDeck.push(smallerCard);
  }
  const restOfTheLargeHalf = largerHalf
  return mergedDeck.concat(restOfTheLargeHalf);
}

// Deal 2 players all the cards
// Play WAR (automatically) & find the winner

// Do a UI for WAR (single client)

// Do a UI for WAR (multi client and server)

// Deal 4 players poker hands
// AI: Find Poker Hands
// AI: Find the best Poker Hand
// AI: Ask for hits

// Do a UI for Poker (single client)

// Do a UI for Poker (multi-client and server)
