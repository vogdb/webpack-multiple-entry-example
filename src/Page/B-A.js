require(['Module/B'], function(ModuleB) {

  var ModuleBA = ModuleB.extend({
    farewell: 'Module BA tells goodbye you with BBBBBBB and AAAAAA'
  });

  (new ModuleBA()).say();
});
