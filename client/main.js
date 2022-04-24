import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import 'ui/gameFunctions.js'; //FONCTIONS: à importer du fichier gameFunctions.js
import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.game.helpers({
  players
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

//1er cractère: couleur
//2ème caractère: valeur
//à changer: en faire une collection (base de données)
// (permettra de décider qu'est ce qui est accessible ou non à qui)
let data = {
  "deck": [
    "R0", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "RS", "RB", "R+2",
    "B0", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "BS", "BB", "B+2",
    "V0", "V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8", "V9", "VS", "VB", "V+2",
    "J0", "J1", "J2", "J3", "J4", "J5", "J6", "J7", "J8", "J9", "JS", "JB", "J+2",
    "NC", "NC", "N+4", "N+4",
    "R0", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "RS", "RB", "R+2",
    "B0", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "BS", "BB", "B+2",
    "V0", "V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8", "V9", "VS", "VB", "V+2",
    "J0", "J1", "J2", "J3", "J4", "J5", "J6", "J7", "J8", "J9", "JS", "JB", "J+2",
    "NC", "NC", "N+4", "N+4"
    ],
  "discard": [],
  "players": [
    {
      "id": "uihdoi87g1b3u2i",
      "hand": [],
    },
    {
      "id": "oh312983h9813h2",
      "hand": [],
    },
    {
      "id": "983h1293h12983h",
      "hand": [],
    },
    {
      "id": "eh129e8h12ehkeq",
      "hand": [],
    },
  ]
}


let BoutonUno = document.getElementById("btnUNO")
BoutonUno.addEventListener("click",function dernierCarte(){
  if (playerHand == 1){
    BoutonUno.addEventListener("click",function dernierCarte(){ //implémenter l'interactivité par template
      alert("UNO !!")
    })
  }})