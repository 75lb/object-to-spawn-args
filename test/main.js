var test = require("tap").test;
var toSpawnArgs = require("../");

test("simple", function(t){
    var object = {
        one: 1,
        two: 2
    };
    t.deepEqual(toSpawnArgs(object), [ "--one", 1, "--two", 2 ]);
    t.end();
});

test("simple", function(t){
    var object = {
        one: 1,
        two: 2
    };
    t.deepEqual(toSpawnArgs(object, { quote: true }), [ "--one", "\"1\"", "--two", "\"2\"" ]);
    t.end();
});
