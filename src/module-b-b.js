require(['./module-b', './module-clicks'], function(ModuleB) {

  var ModuleBB = ModuleB.extend({
    name: 'Module B B'
  });

  (new ModuleBB()).say();

});
