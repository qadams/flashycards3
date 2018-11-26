import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
      addFlashcard() {
        this.toggleProperty('anotherFlashcard');
      }
    }
});
