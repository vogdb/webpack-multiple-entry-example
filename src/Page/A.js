require(['Module/Abstract', 'SomeLibrary', 'Component/C'], function(Module_Abstract, SomeLibrary, ComponentC) {

  var ModuleA = Module_Abstract.extend({
    greetings: 'Module A greets you with AAAAAA and ' + SomeLibrary.name
  });

  (new ComponentC()).sing(new ModuleA());
});
