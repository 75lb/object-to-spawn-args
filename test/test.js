var test = require('tape')
var toSpawnArgs = require('../')

test('long option', function (t) {
  var object = {
    one: 1,
    two: 2
  }
  t.deepEqual(toSpawnArgs(object), [ '--one', 1, '--two', 2 ])
  t.end()
})

test('short option', function (t) {
  var object = {
    l: true,
    c: 'red'
  }
  t.deepEqual(toSpawnArgs(object), [ '-l', '-c', 'red' ])
  t.end()
})

test('with quotes', function (t) {
  var object = {
    one: 1,
    two: 2,
    three: true
  }
  t.deepEqual(toSpawnArgs(object, { quote: true }), [ '--one', '"1"', '--two', '"2"', '--three' ])
  t.end()
})

test('with array', function (t) {
  var object = {
    one: 1,
    two: [ 'eins', 'zwei' ],
    three: true
  }
  t.deepEqual(toSpawnArgs(object), [ '--one', 1, '--two', 'eins', 'zwei', '--three' ])
  t.end()
})
