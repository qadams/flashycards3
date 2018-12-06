// This controller will create a deck with accompanying flashcards
import Ember from 'ember';

export default Ember.Controller.extend({
  flashcards: Ember.A([]),
  actions: {
      addFlashcard() {
        let card = this.store.createRecord('flashcard')
        this.get('flashcards').pushObject(card);
      },
      submitDeck() {
        let flashcards = this.get('flashcards');
        this.get('model').save().then(function(deck) {
          flashcards.forEach(function(card) {
            card.set('parentdeck', deck);
            card.save();
          });
        });
      }
    }
});
