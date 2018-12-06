// This controller will create a deck with accompanying flashcards
import Ember from 'ember';

export default Ember.Controller.extend({
  flashcards: Ember.A([]),
  actions: {
      addFlashcard() {
        let card = this.store.createRecord('flashcard')
        this.get('flashcards').pushObject(card);
      },
      // submitDeck() {
      //   let flashcards = this.get('flashcards');
      //   this.get('model').save().then(function(deck) {
      //     flashcards.forEach(function(card) {
      //       card.set('parentdeck', deck);
      //       card.save();
      //     });
      //   });
      // }
      submitDeck() {
        let flashcards = this.get('flashcards');
        this.get('model').save().then(function(deck) {
          flashcards.forEach(function(card) {
            card.set('parentdeck', deck);
            console.log(card.get('term'), card.get('definition'));
            let carddata = {

                'attributes': {
                  'term': card.get('term'),
                  'definition': card.get('definition'),
                },
                'relationships': {
                  'parentdeck': deck.id
                },
                'type': 'flashcards',


            };
            Ember.$.ajax({
              contentType: 'application/vnd.api+json;charset=UTF-8',
              url: '../api/flashcards',
              type: "POST",
              data: carddata,
              success: function(response){
                console.log('Response from API for card', card, ':', response);
              }

            });


          });
        });
      }
    }
});
