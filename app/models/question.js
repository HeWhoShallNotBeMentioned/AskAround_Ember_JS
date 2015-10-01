import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr("string"),
  author: DS.attr("string"),
  note: DS.attr("string"),
  date_added: DS.attr("date"),
  answers: DS.hasMany("answer", {async: true})
});
