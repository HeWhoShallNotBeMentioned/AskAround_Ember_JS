import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addAnswer() {
      var params = {
        answer: this.get("answer"),
        author: this.get("authorAnswer"),
        date: Date.now()
      };
      this.sendAction('addAnswer', params);
    }
  }
});
