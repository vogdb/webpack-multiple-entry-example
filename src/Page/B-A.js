require(['Module/B'], function(Module_B) {

  var ModuleBA = Module_B.extend({
    farewell: 'Module BA tells goodbye you with BBBBBBB and AAAAAA'
  });

  (new ModuleBA()).say();
});
