/*
 * TheApp
 * Test functions
 *
 */

// Requirements
var assert = require('assert');
var request = require('request');


// Active verbose mode
var verbose = true;

describe("MeteorCMS", function () {
       // Test basic route
        describe("GET /", function () {
                it('responds with default route', function (done) {
                        var options = {
                                uri: 'http://localhost:3000/'

                        };
                        request(options, function(error, response, body) {
                                // Alert if error
                                assert.equal(error, null);

                                // Test if value is truthy.
                                assert(body);
                                // Log the results
                                if (verbose) {
                                        console.log(body);
                                }

                                // Finish asynchronous test
                                done();
                        });

                });
        });
});
