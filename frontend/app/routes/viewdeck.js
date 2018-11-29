import Ember from 'ember';

var defaultitems = Ember.A([
]);
export default Ember.Route.extend({
  model() {
    return this.store.findAll('flashcard');
    // return this.store.findAll('flashcard');
  },
  setupController(controller, model){
    this._super(controller, model);
    controller.set('defaultitems', defaultitems);
    var route = this;
  }
});
