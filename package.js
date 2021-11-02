Package.describe({
  name: 'fchandonnet:restivus',
  summary: 'Create authenticated REST APIs in Meteor via HTTP/HTTPS. Setup CRUD endpoints for Collections.',
  version: '1.1.1',
  git: 'https://github.com/chandonnet/meteor-restivus'
});

Package.onUse(function (api) {
  api.versionsFrom('2.3');

  // Meteor dependencies
  api.use('ecmascript');
  api.use('check');
  api.use('underscore');
  api.use('accounts-password');
  api.use('simple:json-routes');
  api.use('alanning:roles', 'server', {weak: true});

  api.addFiles([
    'lib/auth.js',
    'lib/route.js',
    'lib/restivus.js'
  ], 'server');
  api.mainModule('index.js', 'server');
});

Package.onTest(function (api) {
  // Meteor dependencies
  api.use('ecmascript');
  api.use('mongo');
  api.use('http');
  api.use('underscore');
  api.use('accounts-base');
  api.use('accounts-password');
  api.use('practicalmeteor:munit');
  api.use('test-helpers');
  api.use('fchandonnet:restivus');
  api.use('alanning:roles');

  api.addFiles([
      'test/api_tests.js',
      'test/authentication_tests.js',
      'test/route_unit_tests.js',
      'test/user_hook_tests.js'
  ], 'server');
});
