// This controller will create a deck with accompanying flashcards
import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
      addFlashcard() {
        var context = this;
        this.store.createRecord('flashcard').save().then(function(card){
          context.get('model.flashcards').pushObject(card);
        });
      },
      submitDeck() {
        this.get('model').save();
      }
    }
});
