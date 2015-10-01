import Ember from 'ember';

export function currentDate() {
  return moment().format('LLLL');
}

export default Ember.Helper.helper(currentDate);
