const Tom = require('test-runner').Tom
const toSpawnArgs = require('./')
const a = require('assert')

const tom = module.exports = new Tom('api')

tom.test('long option', function () {
  const object = {
    one: 1,
    two: 2
  }
  a.deepStrictEqual(toSpawnArgs(object), [ '--one', 1, '--two', 2 ])
})

tom.test('short option', function () {
  const object = {
    l: true,
    c: 'red'
  }
  a.deepStrictEqual(toSpawnArgs(object), [ '-l', '-c', 'red' ])
})

tom.test('with quotes', function () {
  const object = {
    one: 1,
    two: 2,
    three: true
  }
  a.deepStrictEqual(toSpawnArgs(object, { quote: true }), [ '--one', '"1"', '--two', '"2"', '--three' ])
})

tom.test('with array', function () {
  const object = {
    one: 1,
    two: [ 'eins', 'zwei' ],
    three: true
  }
  a.deepStrictEqual(toSpawnArgs(object), [ '--one', 1, '--two', 'eins', 'zwei', '--three' ])
})

tom.test('optionEqualsValue', function () {
  const object = {
    one: 1,
    two: 'two',
    three: true,
    four: [ 1, 2 ]
  }
  a.deepStrictEqual(toSpawnArgs(object, { optionEqualsValue: true }), [ '--one=1', '--two=two', '--three', '--four=1,2' ])
})

tom.test('optionEqualsValue: true, quote: true', function () {
  const object = {
    one: 1,
    two: 'two',
    three: true,
    four: [ 1, 2 ]
  }
  a.deepStrictEqual(toSpawnArgs(object, { optionEqualsValue: true, quote: true }), [ '--one="1"', '--two="two"', '--three', '--four="1,2"' ])
})
