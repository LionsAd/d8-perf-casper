var casper = require('casper').create();
var helpy = require('./dohelpy')

var url_base = helpy.getSiteUrl();

casper.start(url_base, helpy.login('admin', casper.cli.get(0)));

casper.thenOpen(url_base + '/node/add/page', function () {
  this.fill('form[id="node-page-form"]', {
    'title[0][value]' : 'Test',
    'path[0][alias]' : 'test'
  }, true);
});

casper.then(function () {});

casper.thenOpen(url_base + '/node/add/article', function () {
  this.fill('form[id="node-article-form"]', {
    'title[0][value]' : 'Test 2',
    'path[0][alias]' : 'test2'
  });
  this.click('input[type="submit"][value="Save and publish"]');
});

casper.then(function () {});

casper.thenOpen(url_base + '/admin/people/create', function () {
  this.fill('form[id="user-register-form"]', {
    'name' : 'test',
    'pass[pass1]' : 'test',
    'pass[pass2]' : 'test'
  }, true);
});

casper.run();
