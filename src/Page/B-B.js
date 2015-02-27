require(['Module/B', 'Component/C'], function(Module_B, ComponentC) {

  var ModuleBB = Module_B.extend({
    farewell: 'Module BB tells goodbye you with BBBBBBB and BBBBBBB'
  });

  (new ComponentC()).sing(new ModuleBB());
});
