import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

//1er cractère: couleur
//2ème caractère: valeur
let deck = [
  "R0", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "RS", "RB", "R+2",
  "B0", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "BS", "BB", "B+2",
  "V0", "V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8", "V9", "VS", "VB", "V+2",
  "JO", "J1", "J2", "J3", "J4", "J5", "J6", "J7", "J8", "J9", "JS", "JB", "J+2",
  "NC", "NC", "N+4", "N+4",
  "R0", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "RS", "RB", "R+2",
  "B0", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "BS", "BB", "B+2",
  "V0", "V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8", "V9", "VS", "VB", "V+2",
  "JO", "J1", "J2", "J3", "J4", "J5", "J6", "J7", "J8", "J9", "JS", "JB", "J+2",
  "NC", "NC", "N+4", "N+4"
]
let discard = [] //défausse, se remplira au fil de la partie

let turn = 0     //pour suivre chaque tour du jeu, turn++ après chaque carte jouée, puis turn%joueurs pour suivre l'ordre de jeu

//return une carte piochée et enlevée du deck
function draw(){ 

// pour plus tard: ajouter ici une condition de vérification que le deck est rempli, et le reformer si il était vide
// en reprenant la table "discard" 
  
let rng = Math.floor((Math.random() * deck.length))
let DrawedCard = deck[rng] //stock la valeur de la carte
deck.splice(rng, 1) //retire la carte du deck
return DrawedCard
}


function setup(players, cards){
  for(i = 0; i < players; i++){
    let playerHand = [] //créer une main par "players" (il faudra renommer la variable selon i)
    for(j = 0; j < cards; j++){
      let pioche = draw() // lui donner une carte par "cards"
      playerHand.push(pioche)
    }
  }
}

//player: joueur qui essaie de jouer, pour vérifier si il peut jouer
// card: la carte qu'il essaie de jouer
function play(player, card){  

discard.push()
}