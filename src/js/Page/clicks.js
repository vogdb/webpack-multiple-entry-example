define(function(require) {
  require('Page/clicks.less');
  $('#page-a').click(function() {
    require('bundle!Page/A')
  });
  $('#page-b-a').click(function() {
    require('bundle!Page/B-A')
  });
  $('#page-b-b').click(function() {
    require('bundle!Page/B-B')
  });
});
