import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    saveQuestion() {
      debugger;
      var  params = {
        author: this.get('author') ? this.get('author'):"",
        query: this.get('query') ? this.get('query'):"",
        details: this.get('details') ? this.get('details'):"",
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
      this.set('author', "");
      this.set('query', "");
      this.set('details', "");
    }
  }
});
