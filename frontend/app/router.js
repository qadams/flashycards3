// This handles all routes for the app
import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.bURL

//   redirect: function() {
//     this.transitionTo('login');
// }
});

Router.map(function() {
  this.route('login');
  this.route('createdeck');
  this.route('editdeck');
  this.route('register');
  // this.route('viewdeck');
  this.route('deck', {path: '/decks/:deck_id'});
  this.route('userprofile');
});

export default Router;
