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
    deleteQuestion(question) {
      var _this = this;
      question.get('answers').then(function(answers){
        console.log("before loop: " + answers.get('length') + " answers.");
        var counter = 1;
        answers.forEach(function(answer) {
          console.log("Time through forEach loop: " + counter);
          console.log("Deleting " + answer.get('answer'));
          answer.destroyRecord();
          console.log("end of " + counter + " time through loop: " + question.get('answers.length') + " answers.");
          counter++;
        });
      }).then(function() {
        debugger;
        question.destroyRecord();
        _this.transitionTo('index');
      });
    },
    updateQuestion(questionParams, params) {

      Object.keys(params).forEach(function(key) {

        if(params[key] != undefined) {
          questionParams.set(key,params[key]);
        }
      });
      questionParams.save();
      this.transitionTo('question', questionParams)
    }
  }
});
