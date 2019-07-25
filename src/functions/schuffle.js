function shuffle(symbols) {
    let randomCards = [];
    let cards = symbols.concat(symbols);
    let numOfCards = cards.length;
    //wylosuj karte
    for (let i = 0; i < numOfCards; i++) {
        let randomNum = Math.floor(Math.random()*cards.length);
        let randomCard = cards[randomNum];
    //dodaj do wylosowanych
    randomCards.push(randomCard);
    //usun karte z kart do losowania
    cards.splice(randomNum, 1)
    }
    console.log(randomCards)
    return randomCards
}

export default shuffle;