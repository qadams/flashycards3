// This handles what happens when going to viewdeck page
import Ember from 'ember';

var defaultitems = Ember.A([
]);
export default Ember.Route.extend({

beforeModel(transition){
  if(!this.get('auth.isLoggedIn')){
    this.transitionTo('login');
  }
},
  model(params) {
    return this.store.findRecord('deck', params.deck_id);
  },
  // setupController(controller, model){
  //   this._super(controller, model);
  //   controller.set('defaultitems', defaultitems);
  //   var route = this;
  // }
});
