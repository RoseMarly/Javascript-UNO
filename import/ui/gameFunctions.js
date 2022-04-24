//return n cartes piochées et enlevées du deck
function draw(n){ 
    let drawedCards = []
  
    for(i = 0; i < n; i++){
      if(!deck.length){recycleDiscard()} //si deck.length != 1 ou plus (donc si = 0, --> correspond à false)
      
      let rng = Math.floor((Math.random() * deck.length))
      drawedCards.push(deck[rng]) //stock la valeur de la carte
      deck.splice(rng, 1) //retire la carte du deck
    }
    return drawedCards
}

function recycleDiscard(){
    deck = [...discard] //copier la discard dans le deck
    deck.splice(deck.length, 1) //retirer la dernière carte, qui reste dans la discard

    let lastDiscard = discard[discard.length] //sauvegarder la dernière carte
    discard = [lastDiscard] // vider la discard A REVOIR PLUS TARD pour changer la base de données, vu que discard en fait partie
}

function setup(){
    for (let i = 0; i < game.players.length; i++) {
        game.players[i].hand.push(draw(7))
        }
}

//player: joueur qui essaie de jouer, pour vérifier si il peut jouer
// card: la carte qu'il essaie de jouer
function play(playedCard){
    let dicardColor = Discard[0].charAT(0); //la carte la + au dessus, pas sur que ça soit Dicard[0]
    let dicardNumber = Discard[0].charAT(1);
    //verifier qui doit jouer
    switch(playedCard) {
        case 'R0': case 'R1': case 'R2': case 'R3': case 'R4': case 'R5': case 'R6': case 'R7': case 'R8': case '9R': case 'V0': case 'V1': case 'V2': case 'V3': case 'V4': case 'V5': case 'V6': case 'V7': case 'V8': case 'V9': case 'B0': case 'B1': case 'B2': case 'B3': case 'B4': case 'B5': case 'B6': case 'B7': case 'B8': case 'B9': case 'J0': case 'J1': case 'J2': case 'J3': case 'J4': case 'J5': case 'J6': case 'J7': case 'J8': case 'J9':{
            let playedCardColor = playedCard.charAT(0); //couleur de la carte jouée
            let playedCardNumber = playedCard.charAT(1); //numéro de la carte jouée
            if (discardColor === playedCardColor || discardNumber === playedCardNumber){
                console.log("la carte est placée");
                Discard.push(playedCard); //ajoute à la defausse la carte jouée
                players.hand.splice(playedCard) //retire de la main la carte jouée
            }
            // else if pour les cartes spéciales
            else {
                console.log("les cartes de corréspondent pas")
            }
        }
    }
    tour++  // faire en sorte de changer le booléen "isTurn" de la BDD pour passer au joueur suivant
            // peut-être en faire une fonction séparée ? pour mieux gérer les changements de sens et passement de tour
}
