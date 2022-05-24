import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { draw, recycleDiscard, setup, play } from '../import/ui/game-functions'; //FONCTIONS importées du fichier gameFunctions.js

import './main.html';


Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.game.helpers({
  //players
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
