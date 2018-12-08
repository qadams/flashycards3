import DS from 'ember-data';

/// This is how the backend and frontend communicate
export default DS.JSONAPIAdapter.extend({
  namespace: 'api'
});
