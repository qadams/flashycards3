import DS from 'ember-data';

export default DS.Model.extend({
  eventtype: DS.attr("string"),
  timestamp: DS.attr("date"),
  userid: DS.attr("string"),
  requestor: DS.attr("string"),
  
});
