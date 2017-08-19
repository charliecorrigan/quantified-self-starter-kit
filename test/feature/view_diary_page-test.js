pry = require('pryjs');

const assert = require('chai').assert;
const sinon = require('sinon');
const test = require('selenium-webdriver/testing');
const webdriver = require('selenium-webdriver');

const Food = require('../../lib/javascript/food');
const Meal = require('../../lib/javascript/meal');
const Diary = require('../../lib/javascript/diary/diary');

const baseURL = "http://localhost:8080";

test.describe('View diary page', function() {
  var driver;
  this.timeout(10000);

  test.beforeEach(function() {
    driver = new webdriver.Builder()
      .forBrowser('chrome')
      .build();
  });

  test.afterEach(function() {
    driver.quit();
  });

  test.it('builds diary frame', function(){
    driver.get(`${baseURL}`);
    driver.wait(webdriver.until.elementLocated({css: ".diary-frame"}));

    driver.findElements({css: ".diary-frame"})
    .then(function (entries) {
      assert.lengthOf(entries, 1);
    });
  });

  test.it('builds diary skeleton', function(){
    driver.get(`${baseURL}`);
    driver.wait(webdriver.until.elementLocated({css: ".diary-frame"}));

    driver.findElements({css: ".meal-card"})
    .then(function (entries) {
      assert.lengthOf(entries, 4);
    });
  });
});