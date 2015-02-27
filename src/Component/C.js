require(['Module/Abstract'], function(ModuleAbstract) {

  return ModuleAbstract.extend({
    /**
     * @param {ModuleAbstract} component
     */
    sing: function(component) {
      console.log('Let\'s sing together!');
      component.say();
    }
  });

});
