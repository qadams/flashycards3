// This handles what happens when going to createdeck
import Ember from 'ember';
// Create a deck record
export default Ember.Route.extend({

  beforeModel(transition){
    if(!this.get('auth.isLoggedIn')){
      this.transitionTo('login');
    }
  },
  model() {
    return this.store.createRecord('deck');

  }
});
