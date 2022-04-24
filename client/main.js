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


let BoutonUno = document.getElementById("btnUNO")
BoutonUno.addEventListener("click",function dernierCarte(){
  if (playerHand == 1){
    BoutonUno.addEventListener("click",function dernierCarte(){ //implémenter l'interactivité par template
      alert("UNO !!")
    })
  }})