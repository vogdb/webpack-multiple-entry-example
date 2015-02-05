require.ensure(['backbone', './module-clicks'], function(require) {

  require('./module-clicks');
  var Backbone = require('backbone');
  var ModuleA = Backbone.View.extend({
    say: function() {
      console.log('Module A');
    }
  });
  (new ModuleA()).say();

});

