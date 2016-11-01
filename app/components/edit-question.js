import Ember from 'ember';

export default Ember.Component.extend({
  editQuestionForm: false,
  actions: {
    editQuestionForm() {
      this.set('editQuestionForm', true);
    },
    update(question) {
      var params = {
        author: this.get('author'),
        query: this.get('query'),
        details: this.get('details'),
      };
      this.set('editQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
