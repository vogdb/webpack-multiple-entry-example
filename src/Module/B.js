require(['Module/Abstract'], function(Module_Abstract) {

  return Module_Abstract.extend({
    greetings: 'Module B greets you with BBBBBBB',
    say: function() {
      Module_Abstract.prototype.say.call(this);
      console.log(this.farewell);
    }
  });

});
