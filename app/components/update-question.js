import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateQuestion(questionParams) {
      var params= {
        title: this.get("title"),
        author: this.get('author'),
        note: this.get('note'),
      };
      this.sendAction('updateQuestion', questionParams, params)      }
    }
  });
