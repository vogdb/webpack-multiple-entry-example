require.ensure(['./module-b', './module-clicks'], function(require) {

  require('./module-clicks');
  var ModuleB = require('./module-b');

  var ModuleBB = ModuleB.extend({
    name: 'Module B B'
  });

  (new ModuleBB()).say();

});
