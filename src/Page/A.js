require(['Module/Abstract', 'SomeLibrary'], function(Module_Abstract, SomeLibrary) {

  var ModuleA = Module_Abstract.extend({
    greetings: 'Module A greets you with AAAAAA and ' + SomeLibrary.name
  });

  (new ModuleA()).say();
});
