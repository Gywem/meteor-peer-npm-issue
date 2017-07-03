(function() {
  Package.info = {
    name: 'two',
    version: '0.0.1',
    documentation: 'README.md',
  };
  Package.describe(Package.info);

  Package.onUse(function(api) {
    api.versionsFrom('1.4.2.3');
    api.use('ecmascript');
    api.use('tmeasday:check-npm-versions@0.3.1');

    api.mainModule('./main.js');
  });
})();
