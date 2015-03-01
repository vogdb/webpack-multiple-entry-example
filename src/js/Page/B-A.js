define(['Module/B', 'Page/B-A.less'], function(ModuleB) {

  var ModuleBA = ModuleB.extend({
    farewell: 'Module BA tells goodbye you with BBBBBBB and AAAAAA'
  });

  (new ModuleBA()).say();

  module.exports = ModuleBA;
});
