$('#module-a').click(function() {
  require.ensure(['./module-a'], function(require) {
    require('./module-a');
  });
});
$('#module-b-a').click(function() {
  require.ensure(['./module-b-a'], function(require) {
    require('./module-b-a');
  });
});
$('#module-b-b').click(function() {
  require.ensure(['./module-b-b'], function(require) {
    require('./module-b-b');
  });
});

