define(['Module/Abstract', 'SomeLibrary', 'Component/C', 'Page/A.less'], function(ModuleAbstract, SomeLibrary, ComponentC) {

  var ModuleA = ModuleAbstract.extend({
    greetings: 'Module A greets you with AAAAAA and ' + SomeLibrary.name
  });

  (new ComponentC()).sing(new ModuleA());

  module.exports = ModuleA;
});
