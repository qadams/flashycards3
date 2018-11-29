import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
      addFlashcard() {
        let deck = this.get('model')
        let flashcard = this.store.createRecord('flashcard')
        deck.get('flashcards').pushObject(flashcard)
      }
    }
});
