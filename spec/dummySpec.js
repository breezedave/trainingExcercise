var dummy = require("../public/javascripts/dummy.js");

describe("Hello World Server", function() {
    describe("getHello1", function() {
        it("returns Hello World", function(done) {
            expect(dummy.dummy(1)[0]).toBe("Hello World");
            done();
        });
    });

    describe("getHello2", function() {
        it("returns Hello World", function(done) {
            expect(dummy.dummy(2)[1]).toBe("Hello World");
            done();
        });
    });
});
