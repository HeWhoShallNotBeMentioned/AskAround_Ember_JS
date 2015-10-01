import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addAnswer() {
      var params = {
        answer: this.get("answer"),
        author: this.get("author"),
      };
      this.sendAction('addAnswer', params);
    }
  }
});
