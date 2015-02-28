define(['Module/Abstract'], function(ModuleAbstract) {

  module.exports = ModuleAbstract.extend({
    greetings: 'Module B greets you with BBBBBBB',
    say: function() {
      ModuleAbstract.prototype.say.call(this);
      console.log(this.farewell);
    }
  });

});
