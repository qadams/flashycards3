import Ember from 'ember';
// Create a deck record
export default Ember.Route.extend({
  model() {
    return this.store.createRecord('deck') //This is original line
    // let deck = this.store.createRecord('deck')
    // deck.get('decks').pushObject(deck)
  }
});
