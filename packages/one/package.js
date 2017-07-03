(function() {
  Package.info = {
    name: 'one',
    version: '0.0.1',
    documentation: 'README.md',
  };
  Package.describe(Package.info);

  Package.onUse(function(api) {
    api.versionsFrom('1.4.2.3');
    api.use('ecmascript');
    api.use('two');

    api.mainModule('./main.js');
  });

  Package.onTest(function(api) {
    api.versionsFrom('1.4.2.3');
    api.use('ecmascript');
    api.use('two');

    api.mainModule('./main.tests.js');
  });
})();
