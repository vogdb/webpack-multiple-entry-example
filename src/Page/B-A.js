require(['./../module-b', './module-clicks'], function(ModuleB) {

  var ModuleBA = ModuleB.extend({
    name: 'Module B A'
  });

  (new ModuleBA()).say();

});

