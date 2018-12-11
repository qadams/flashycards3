// Flashcard model stuff
import DS from 'ember-data';

export default DS.Model.extend({
    user: DS.belongsTo('user'),
    // decks: DS.hasMany('deck')
});
