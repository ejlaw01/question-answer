import Ember from 'ember';

export default Ember.Component.extend({

  sortBy: ['upvotes:desc'],
  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),

  actions: {
    upvote(answer) {
      this.sendAction('upvote', answer);
    }
  }
});
