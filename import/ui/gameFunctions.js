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
    let dicardColor = discard[discard.length].charAT(0); //la carte la + au dessus
    let dicardNumber = discard[discard.length].charAT(1); //changer pour que ca lise les characters 2 et 3
    //verifier qui doit jouer
            let playedCardColor = playedCard.charAT(0); //couleur de la carte jouée
            let playedCardNumber = playedCard.charAT(1); //changer pour que ca lise les characters 2 et 3
            if (discardColor === playedCardColor || discardNumber === playedCardNumber){
                console.log("la carte est placée");
                discard.push(playedCard); //ajoute à la defausse la carte jouée
                players.hand.splice(playedCard) //retire de la main la carte jouée, pas sure que ça marche comme ça
            }
            // else if pour les cartes spéciales
            else {
                console.log("les cartes de corréspondent pas")
    }
    tour++  // faire en sorte de changer le booléen "isTurn" de la BDD pour passer au joueur suivant
            // peut-être en faire une fonction séparée ? pour mieux gérer les changements de sens et passement de tour
}
