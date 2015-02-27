require(['Module/B'], function(Module_B) {

  var ModuleBB = Module_B.extend({
    farewell: 'Module BB tells goodbye you with BBBBBBB and BBBBBBB'
  });

  (new ModuleBB()).say();
});
