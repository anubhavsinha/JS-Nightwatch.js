module.exports = {

    '@tags': ['guineaPig'],

    'Guinea Pig Assert Title': function(client) {
        client
            .url('https://saucelabs-sample-test-frameworks.github.io/training-test-page')
            .waitForElementVisible('body', 5000)
            .assert.title('I am a page title - Sauce Labs Error');
    },

    afterEach: function(client, done) {
        client.customSauceEnd(done);
    }

};
