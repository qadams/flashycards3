// This controller will create a deck with accompanying flashcards
import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
      addFlashcard() {
        var context = this;
        let card = this.store.createRecord('flashcard')
        context.get('model.flashcards').pushObject(card);
        // .save().then(function(card){
        //   let flashcards = context.get('models.flashcards')
        //   context.get('model.flashcards').pushObject(card);
        //
        // });
      },
      submitDeck() {
        let flashcards = this.get('model.flashcards');
        this.get('model').save().then(function(deck) {
          flashcards.forEach(function(card) {
            card.set('parentdeck', deck);
            card.save();
          });
        });
      }
    }
});
