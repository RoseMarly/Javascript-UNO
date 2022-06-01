import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

//inclure fichier plateau-game.js
import '../../ui/plateau-game/plateau-game.js';


// Create index route
FlowRouter.route('/plateau-game', {
  name: 'game',
  action() {
    // Do something here
    // After route is followed
    this.render('game');
  }
});