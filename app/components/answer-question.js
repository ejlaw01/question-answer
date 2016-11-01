import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer() {
      var  params = {
        author: this.get('author') ? this.get('author'):"",
        response: this.get('response') ? this.get('response'):"",
        question: this.get('question')
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
      this.set('author', "");
      this.set('response', "");
    }
  }
});
