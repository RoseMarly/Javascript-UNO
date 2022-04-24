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
function play(player, card){
    discard.push()
    tour++  // faire en sorte de changer le booléen "isTurn" de la BDD pour passer au joueur suivant
            // peut-être en faire une fonction séparée ? pour mieux gérer les changements de sens et passement de tour
}
