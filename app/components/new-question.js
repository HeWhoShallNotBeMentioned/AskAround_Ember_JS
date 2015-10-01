import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addQuestion() {
     var params = {
       title: this.get("title"),
       author: this.get("author"),
       note: this.get("note"),
       date_added: Date.now()
     };
     this.sendAction('childQuestion', params);
    }
  }
});
