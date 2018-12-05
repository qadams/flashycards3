// This handles what happens when going to viewdeck page
import Ember from 'ember';

var defaultitems = Ember.A([
]);
export default Ember.Route.extend({
  model(params) {
    // return this.store.findAll('deck')
    return this.store.findRecord('deck', params.deck_id);
  },
  setupController(controller, model){
    this._super(controller, model);
    controller.set('defaultitems', defaultitems);
    var route = this;
  }
});
