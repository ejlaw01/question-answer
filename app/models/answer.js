import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  response: DS.attr(),
  upvotes: ('number'),
  question: DS.belongsTo('question', { async: true })
});
