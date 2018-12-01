import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
      addFlashcard() {
        var context = this;
        let flashcard = this.store.createRecord('flashcard').save().then(function(card){
          context.get('deck').pushObject(card);
        }
      },
      submitDeck() {
        this.get('model').save();
      }
    }
});
