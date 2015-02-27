require(['Module/Abstract'], function(Module_Abstract) {

  return Module_Abstract.extend({
    /**
     * @param {Module_Abstract} component
     */
    sing: function(component) {
      console.log('Let\'s sing together!');
      component.say();
    }
  });

});
