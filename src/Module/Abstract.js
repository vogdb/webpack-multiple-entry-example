require(['backbone'], function(backbone) {

  return backbone.View.extend({
    say: function() {
      console.log(this.greetings);
    }
  });
});
