// Flashcard model stuff
import DS from 'ember-data';

export default DS.Model.extend({
  term: DS.attr("string"),
  definition: DS.attr("string"),
  parentdeck: DS.belongsTo("deck")
});
