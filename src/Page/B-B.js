define(['Module/B', 'Component/C'], function(ModuleB, ComponentC) {

  var ModuleBB = ModuleB.extend({
    farewell: 'Module BB tells goodbye you with BBBBBBB and BBBBBBB'
  });

  (new ComponentC()).sing(new ModuleBB());
});
