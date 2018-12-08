// This handles any actions on viewdeck page
import Ember from 'ember';

export default Ember.Controller.extend({
  isTerm: true,
  actions: {
      switchView() {
        this.toggleProperty('isTerm');
      }
      // deleteDeck(){
      //   let deck = this.get('model');
      //   deck.destroyRecord();
      //   this.transitionTo('userprofile');
      // }
    }
});
