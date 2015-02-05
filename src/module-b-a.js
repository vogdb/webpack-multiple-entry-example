require.ensure(['./module-clicks', './module-b'], function(require) {

  require('./module-clicks');
  var ModuleB = require('./module-b');

  var ModuleBA = ModuleB.extend({
    name: 'Module B A'
  });

  (new ModuleBA()).say();

});

