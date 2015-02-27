require(['backbone'], function(backbone) {

  /**
   * @class ModuleAbstract
   * @extends Backbone.View
   */
  return backbone.View.extend({
    say: function() {
      console.log(this.greetings);
    }
  });
});
