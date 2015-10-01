import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    addAnswer(params) {

      var newAnswer = this.store.createRecord('answer', params);
      var thisQuestion = this.currentModel;
      newAnswer.save();
      thisQuestion.get('answers').addObject(newAnswer);
      thisQuestion.save();
      this.transitionTo('question');
    },
    deleteQuestion(model) {
      var _this = this;
      var answer_deletions = model.get('answers').
      then(function(answers){
        answers.forEach(function(answer) {
          answer.destroyRecord();
        });
      }).
      then(function(){
        model.destroyRecord();
        _this.transitionTo('index');
      });
    }
  }
});
