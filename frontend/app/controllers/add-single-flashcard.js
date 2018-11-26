// import Ember from 'ember';

export default Ember.Controller.extend({
  addCard: false,
  actions: {
    addFlashcard() {
      this.set('addCard', true);
    }
  }
});
