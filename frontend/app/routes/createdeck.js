// This handles what happens when going to createdeck
import Ember from 'ember';
// Create a deck record
export default Ember.Route.extend({
  model() {
    return this.store.createRecord('deck');

  }
});
