var documenter = require("../../index");

module.exports = function () {
    this.Given(/^cucumber is working$/, function (callback) {
        callback();
    });

    this.When(/^I launch this test$/, function (callback) {
        callback();
    });

    this.Then(/^everything should work fine$/, function (callback) {
        callback(!(documenter && documenter.test));
    });
};