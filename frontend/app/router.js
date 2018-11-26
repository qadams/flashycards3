import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.bURL
});

Router.map(function() {
  this.route('login');
  this.route('createdeck');
  this.route('editdeck');
  this.route('register');
  this.route('viewdeck');
});

export default Router;
