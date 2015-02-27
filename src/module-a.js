require(['backbone', './module-clicks'], function(Backbone) {

  var ModuleA = Backbone.View.extend({
    say: function() {
      console.log('Module A');
    }
  });
  (new ModuleA()).say();

});

